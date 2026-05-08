import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center px-6"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="max-w-lg mx-auto w-full">
        <Image
          src="/mk-logo.png"
          alt="MK"
          width={40}
          height={40}
          className="object-contain opacity-80 mb-16"
        />

        <p
          className="text-xs tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
        >
          It&apos;s on its way
        </p>

        <h1
          className="text-4xl sm:text-5xl leading-[1.1] mb-8"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--cream)",
            fontWeight: 700,
          }}
        >
          Check your inbox.
        </h1>

        <p
          className="text-base leading-relaxed mb-12"
          style={{
            color: "var(--cream-soft)",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
          }}
        >
          The Autopilot Audit link is on its way to you. Open the Notion template,
          follow the instructions inside, and be honest. This only works if you are.
        </p>

        <div
          className="p-6 mb-12"
          style={{
            border: "1px solid rgba(93, 63, 211, 0.3)",
            background: "rgba(93, 63, 211, 0.06)",
            borderRadius: "4px",
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "var(--cream-soft)",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
            }}
          >
            You&apos;re also subscribed to{" "}
            <em
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                color: "var(--cream)",
              }}
            >
              Remember
            </em>
            {" "}— a weekly letter that goes one layer deeper every Friday.
            First edition lands this week.
          </p>
        </div>

        <Link
          href="/"
          className="text-sm transition-opacity hover:opacity-70"
          style={{
            color: "var(--muted)",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
          }}
        >
          ← Back
        </Link>
      </div>
    </main>
  );
}
