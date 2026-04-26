"use client";

import { useState } from "react";

const SUPABASE_URL = "https://araqigsimkjsmwhnjesv.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyYXFpZ3NpbWtqc213aG5qZXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNjQ1NjIsImV4cCI6MjA4Njk0MDU2Mn0.UPwIMO3U6qr6DcPvaLqs5sOGnS9WeftbkJa_JYEA4fw";

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
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/marketing_leads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: "return=minimal,resolution=ignore-duplicates",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            source: "horizon-ai",
            status: "new",
          }),
        },
      );

      if (res.ok || res.status === 204) {
        setState("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = (data as { message?: string }).message;
        setErrorMsg(msg ?? "Something went wrong. Please try again.");
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
        <p className="text-lg font-semibold text-white">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          We&apos;ll email you when early access opens.
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
        <p className="mt-1 text-xs text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
