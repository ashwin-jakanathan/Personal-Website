"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch { setStatus("error"); }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form onSubmit={submit} className="space-y-4">
        <input name="name" required placeholder="Name" className="w-full rounded-md border border-zinc-800 bg-black p-3" />
        <input name="email" required type="email" placeholder="Email" className="w-full rounded-md border border-zinc-800 bg-black p-3" />
        <textarea name="message" required placeholder="Message" rows={5} className="w-full rounded-md border border-zinc-800 bg-black p-3" />
        <button disabled={status==="sending"} className="rounded-md bg-white px-4 py-2 text-black">
          {status==="sending" ? "Sending..." : "Send message"}
        </button>
        {status==="sent" && <p className="text-sm text-green-400">Thanks! I’ll get back to you.</p>}
        {status==="error" && <p className="text-sm text-red-400">Something went wrong. Try again.</p>}
      </form>
    </main>
  );
}