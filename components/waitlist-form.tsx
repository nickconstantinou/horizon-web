"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6 text-center">
        <p className="text-lg font-semibold text-white">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-zinc-400">
          We&apos;ll email you when early access opens. In the meantime, if you
          have questions about the 2028 NMPA change, ask us anything.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:gap-2"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={state === "loading"}
        className="flex-1 rounded-full border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={state === "loading" || !email}
        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === "loading" ? "Joining…" : "Join waitlist"}
      </button>
      {state === "error" && errorMsg && (
        <p className="text-xs text-red-400 sm:col-span-2">{errorMsg}</p>
      )}
    </form>
  );
}
