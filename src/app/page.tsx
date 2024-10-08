"use client";
import React, { useState } from "react";
export default function Home() {


  const [text, setText] = useState("");
  let original: string[] = [];
  // not sure the issue is here
  let current = [];

  const createSpan = (text: string) => {
    const span = <span className="bg-red-300">{text}</span>;

    return span;
  }

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    //paragraph = data[0].quote;
    setText(data.quote);
    original = data.quote.split("");

    // call createSpan function
    current = original.map(e => {
      return createSpan(e);
    });

  }





  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    // creates span objects
    setText(createSpan(event.target.value));
  }

  window.onload = () => {
    fetchData();
  }

  return (
    <div className="w-screen h-screen">
      <main className=" flex justify-center items-center flex-col w-screen h-screen">
        <div>
          <p>
            {text}
          </p>
        </div>
        <div>
          <textarea onChange={handleChange}  placeholder="Type here"
            autoComplete="off" autoFocus={true} className="border-solid border-2 nowrap opacity-0  " wrap="off" spellCheck={false} style={{ resize: "none" }} rows={1} cols={15}

          ></textarea>
        </div>
      </main>
    </div>
  );
}
