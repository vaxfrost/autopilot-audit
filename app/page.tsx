"use client";

import Image from "next/image";
import { useState } from "react";

const areas = [
  {
    number: "01",
    title: "Purpose & Career",
    description: "What you're working toward versus what you actually want.",
  },
  {
    number: "02",
    title: "Daily Habits",
    description: "What fills your days by default versus by choice.",
  },
  {
    number: "03",
    title: "Identity",
    description: "Who you're performing versus who you actually are.",
  },
];

function EmailForm({ status, email, setEmail, error, onSubmit }: {
  status: "idle" | "loading" | "error";
  email: string;
  setEmail: (v: string) => void;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-5 py-4 text-base outline-none transition-all"
          style={{
            background: "rgba(245, 240, 230, 0.07)",
            border: "1px solid rgba(245, 240, 230, 0.15)",
            color: "var(--cream)",
            fontFamily: "var(--font-dm-sans)",
            borderRadius: "4px",
          }}
          onFocus={(e) => {
            e.currentTarget.style.border = "1px solid rgba(93, 63, 211, 0.6)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.border = "1px solid rgba(245, 240, 230, 0.15)";
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-4 text-sm font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap"
          style={{
            background: status === "loading" ? "var(--purple-deep)" : "var(--purple)",
            color: "var(--cream)",
            fontFamily: "var(--font-dm-sans)",
            borderRadius: "4px",
            border: "none",
          }}
        >
          {status === "loading" ? "Sending..." : "Get the audit →"}
        </button>
      </form>
      {error && (
        <p className="mt-3 text-sm" style={{ color: "#e57373", fontFamily: "var(--font-dm-sans)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }

      window.location.href = "/thank-you";
    } catch {
      setError("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-page)" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <Image
          src="/mk-logo.png"
          alt="MK"
          width={40}
          height={40}
          className="object-contain opacity-90"
        />
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-24 max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
        >
          Free diagnostic
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-8"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--cream)",
            fontWeight: 700,
          }}
        >
          The Autopilot
          <br />
          <em style={{ color: "var(--cream-soft)", fontStyle: "italic" }}>
            Audit.
          </em>
        </h1>

        <p
          className="text-lg sm:text-xl leading-relaxed mb-12 max-w-xl"
          style={{ color: "var(--cream-soft)", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
        >
          Find out exactly where you&apos;re living on autopilot.
          Not in theory. In your actual life.
        </p>

        <EmailForm
          status={status}
          email={email}
          setEmail={setEmail}
          error={error}
          onSubmit={handleSubmit}
        />

        <p
          className="mt-5 text-sm"
          style={{ color: "var(--muted)", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
        >
          Free. No spam. Comes with{" "}
          <em style={{ fontStyle: "italic" }}>Remember</em> — a weekly letter on intentional living.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div style={{ height: "1px", background: "rgba(245, 240, 230, 0.08)" }} />
      </div>

      {/* Three areas */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-16"
          style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
        >
          Three areas. One honest look.
        </p>

        <div className="flex flex-col gap-14">
          {areas.map((area) => (
            <div key={area.number} className="flex gap-8 items-start">
              <span
                className="text-xs mt-1 shrink-0"
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  letterSpacing: "0.1em",
                }}
              >
                {area.number}
              </span>
              <div>
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--cream)",
                    fontWeight: 600,
                  }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "var(--cream-soft)",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                  }}
                >
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div style={{ height: "1px", background: "rgba(245, 240, 230, 0.08)" }} />
      </div>

      {/* Gut-punch quote */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <blockquote
          className="text-2xl sm:text-3xl leading-snug mb-10"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--cream)",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          &ldquo;You&apos;re optimizing for approval, not meaning.&rdquo;
        </blockquote>
        <p
          className="text-base"
          style={{
            color: "var(--cream-soft)",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
          }}
        >
          After 12 questions, you get one named pattern that cuts across all three areas.
          The thing you&apos;ll read twice.
        </p>
      </section>

      {/* Bottom CTA */}
      <section
        className="px-6 py-24"
        style={{ background: "rgba(93, 63, 211, 0.06)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--cream)",
              fontWeight: 700,
            }}
          >
            Name the pattern.
          </h2>
          <p
            className="text-base leading-relaxed mb-10 max-w-md"
            style={{
              color: "var(--cream-soft)",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
            }}
          >
            12 questions. One written report. You&apos;ll keep this document.
            Most people come back to it.
          </p>

          <EmailForm
            status={status}
            email={email}
            setEmail={setEmail}
            error={error}
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 py-12">
        <div style={{ height: "1px", background: "rgba(245, 240, 230, 0.08)", marginBottom: "48px" }} />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Image
            src="/mk-logo.png"
            alt="MK"
            width={32}
            height={32}
            className="object-contain opacity-60"
          />
          <p
            className="text-xs"
            style={{ color: "var(--muted)", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            From the{" "}
            <em style={{ fontStyle: "italic" }}>Remember</em>{" "}
            newsletter by Micha Konig.
          </p>
        </div>
      </footer>
    </main>
  );
}
