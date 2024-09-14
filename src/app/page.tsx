"use client";
import React, { useState } from "react";
export default function Home() {
  const [text, setText] = useState<string>("");


  let ArrayText = text.split("");

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    setText(data.quote);
    ArrayText = text.split("");
  }


  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {

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
            autoComplete="off" autoFocus={true} className="border-solid border-2 " wrap="off" spellCheck={false} style={{ resize: "none" }} rows={1} cols={15}
          ></textarea>
        </div>
        <div>
          <button onClick={fetchData}>Fetch Data</button>
        </div>
      </main>
    </div>
  );
}
