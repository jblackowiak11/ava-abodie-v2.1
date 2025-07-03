'use client';

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/chat" })}
      className="mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition"
    >
      Sign in with Google
    </button>
  );
}
