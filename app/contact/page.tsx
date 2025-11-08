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
        body: JSON.stringify(payload),
      });
      console.log("Contact API response:", { status: res.status, ok: res.ok });
      if (!res.ok) {
        const error = await res.json();
        console.error("Contact API error:", error);
        throw new Error(error?.error || "Request failed");
      }
      setStatus("sent");
      // Reset form safely
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
      // Auto-clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
      // Auto-clear error message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-xl bg-[var(--card-bg)] border border-[var(--card-border)]
                          rounded-xl p-5 sm:p-6 md:p-8 shadow-sm animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-4 animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}>
          Contact
        </h2>

        <form onSubmit={submit} className="space-y-4 animate-children">
          <div style={{ animationDelay: "0.2s" }}>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-[var(--card-border)]
                         bg-white/60 dark:bg-white/5 p-3
                         focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                         transition-all duration-300 hover:border-[var(--accent)]/50"
              placeholder="Your name"
            />
          </div>

          <div style={{ animationDelay: "0.3s" }}>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-[var(--card-border)]
                         bg-white/60 dark:bg-white/5 p-3
                         focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                         transition-all duration-300 hover:border-[var(--accent)]/50"
              placeholder="you@example.com"
            />
          </div>

          <div style={{ animationDelay: "0.4s" }}>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-[var(--card-border)]
                         bg-white/60 dark:bg-white/5 p-3
                         focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                         transition-all duration-300 hover:border-[var(--accent)]/50"
              placeholder="How can I help?"
            />
          </div>

          <button
            disabled={status === "sending"}
            className="w-full sm:w-auto px-5 py-2 rounded-md bg-[var(--accent)] text-white font-medium
                       hover:bg-[var(--button-hover)] disabled:opacity-60 transition-all duration-300
                       hover:scale-105 hover:shadow-lg cursor-pointer"
            style={{ animationDelay: "0.5s" }}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm mt-2 text-green-600 dark:text-green-400 animate-pulse-subtle">
              Thanks! I'll get back to you.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm mt-2 text-red-600 dark:text-red-400 animate-pulse-subtle">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}