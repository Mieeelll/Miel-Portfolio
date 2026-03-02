"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-muted">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          className="bg-black/20 border border-border text-ink py-3 px-4 font-sans text-[0.9rem] outline-none transition-colors focus:border-accent resize-none cursor-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-muted">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="bg-black/20 border border-border text-ink py-3 px-4 font-sans text-[0.9rem] outline-none transition-colors focus:border-accent resize-none cursor-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-muted">
          Message
        </label>
        <textarea
          placeholder="Tell me about your project or say hi..."
          rows={4}
          className="min-h-[100px] bg-black/20 border border-border text-ink py-3 px-4 font-sans text-[0.9rem] outline-none transition-colors focus:border-accent resize-none cursor-none"
        />
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        className={`inline-flex items-center gap-2 py-3 px-8 text-[0.8rem] font-medium tracking-[0.1em] uppercase border-none transition-colors cursor-none btn-shine ${
          status === "sent"
            ? "bg-[#2d7a4f] text-white"
            : "bg-ink text-paper hover:bg-accent hover:text-white"
        }`}
      >
        {status === "idle" && "Send Message →"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Message Sent ✓"}
      </button>
    </form>
  );
}
