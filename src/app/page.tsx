'use client';

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#D8C6A1] px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold text-black">Ava by Abodie</h1>
        <p className="text-base text-black font-light max-w-md mx-auto">
          Your team’s smart assistant — always on, always learning. Coming soon.
        </p>

        <button
          onClick={() => signIn("google")}
          className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
