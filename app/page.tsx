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

const goldText: React.CSSProperties = {
  background: "linear-gradient(135deg, #8c6b1f 0%, #d4af37 30%, #ffd700 52%, #d4af37 72%, #8c6b1f 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

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
    <main style={{ background: "var(--bg-page)", minHeight: "100vh" }}>

      {/* Nav */}
      <nav className="px-8 pt-10 pb-0">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Image
            src="/mk-logo.png"
            alt="MK"
            width={36}
            height={36}
            className="object-contain"
            style={{ filter: "brightness(0)" }}
          />
          <span
            style={{
              ...goldText,
              fontFamily: "var(--font-cormorant)",
              fontSize: "18px",
              fontWeight: 500,
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            Remember by Micha
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-8 pt-20 pb-20">

        {/* "Free diagnostic" label */}
        <p
          className="mb-8 text-xs tracking-[0.18em] uppercase"
          style={{
            fontFamily: "var(--font-jost)",
            fontWeight: 300,
            color: "var(--gold)",
          }}
        >
          Free diagnostic
        </p>

        {/* Main headline */}
        <h1
          className="mb-8 leading-[1.0]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(54px, 8vw, 84px)",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          The Autopilot<br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-secondary)" }}>
            Audit.
          </em>
        </h1>

        {/* Subtext */}
        <p
          className="mb-12 leading-relaxed max-w-lg"
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "17px",
            fontWeight: 300,
            color: "var(--text-secondary)",
          }}
        >
          Find out exactly where you&apos;re living on autopilot.
          Not in theory. In your actual life.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mb-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-5 py-4 outline-none transition-all"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "15px",
              fontWeight: 300,
              background: "#ffffff",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              color: "var(--text-primary)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.border = "1px solid rgba(93, 63, 211, 0.5)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.border = "1px solid var(--border)";
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-7 py-4 whitespace-nowrap transition-opacity hover:opacity-80 cursor-pointer"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.04em",
              background: "var(--purple)",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            {status === "loading" ? "Sending..." : "Get the audit →"}
          </button>
        </form>

        {error && (
          <p style={{ color: "#c0392b", fontFamily: "var(--font-jost)", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "13px",
            fontWeight: 300,
            color: "var(--text-muted)",
          }}
        >
          Free. No spam. Comes with{" "}
          <em style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "15px" }}>
            Remember
          </em>{" "}
          — a weekly letter on intentional living.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-8">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* Three areas */}
      <section className="max-w-2xl mx-auto px-8 py-20">
        <p
          className="mb-14 text-xs tracking-[0.18em] uppercase"
          style={{
            fontFamily: "var(--font-jost)",
            fontWeight: 300,
            color: "var(--gold)",
          }}
        >
          Three areas. One honest look.
        </p>

        <div className="flex flex-col gap-12">
          {areas.map((area) => (
            <div key={area.number} className="flex gap-8 items-start">
              <span
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.12em",
                  color: "var(--gold)",
                  marginTop: "4px",
                  flexShrink: 0,
                }}
              >
                {area.number}
              </span>
              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "26px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {area.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
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
      <div className="max-w-2xl mx-auto px-8">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span
            style={{
              ...goldText,
              fontFamily: "var(--font-cormorant)",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Remember by Micha
          </span>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "12px",
              fontWeight: 300,
              color: "var(--text-muted)",
            }}
          >
            A free diagnostic from the Remember newsletter.
          </p>
        </div>
      </footer>

    </main>
  );
}
