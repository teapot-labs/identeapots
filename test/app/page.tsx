"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { generateIdenteapot } from "../../index";

type State = {
  image: string | null;
  input: string;
};

const initialState = {
  image: null,
  input: ""
};

export default function Home() {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    let image: string | null = null;
    if (state.input !== "") {
      image = generateIdenteapot(state.input, process.env.NEXT_PUBLIC_IDENTEAPOTS_SALT);
    }
    setState(prev => ({ ...prev, image }));
  }, [state.input]);

  return (
    <main className="flex flex-col gap-5 justify-center items-center w-full min-h-screen bg-slate-50">
      {state.image !== null && <Image src={state.image} alt="Teapot Labs' Identeapots" width={400} height={400} className="rounded-xl" />}
      {state.image === null && (
        <div className="w-[400px] h-[400px] flex justify-center items-center bg-slate-400 rounded-xl">
          <p>No image yet!</p>
        </div>
      )}

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="input" className="text-center">
          Insert a username to generate an image
        </label>
        <input
          type="text"
          value={state.input}
          placeholder="Username"
          onChange={e => setState(prev => ({ ...prev, input: e.target.value }))}
          className="border-2 border-slate-500 rounded-xl p-2 w-[400px] placeholder:italic"
          autoFocus
        />
      </fieldset>
    </main>
  );
}
