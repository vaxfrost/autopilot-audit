import Link from "next/link";

const goldText: React.CSSProperties = {
  background: "linear-gradient(135deg, #8c6b1f 0%, #d4af37 30%, #ffd700 52%, #d4af37 72%, #8c6b1f 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function ThankYou() {
  return (
    <main
      style={{ background: "var(--bg-page)", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
      className="px-8"
    >
      <div style={{ maxWidth: "480px", margin: "0 auto", width: "100%" }}>

        <span
          style={{
            ...goldText,
            fontFamily: "var(--font-cormorant)",
            fontSize: "18px",
            fontWeight: 500,
            display: "block",
            marginBottom: "64px",
          }}
        >
          Remember by Micha
        </span>

        <p
          className="mb-8 text-xs tracking-[0.18em] uppercase"
          style={{ fontFamily: "var(--font-jost)", fontWeight: 300, color: "var(--gold)" }}
        >
          It&apos;s on its way
        </p>

        <h1
          className="mb-8"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(42px, 6vw, 60px)",
            fontWeight: 600,
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
        >
          Check your inbox.
        </h1>

        <p
          className="mb-10"
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "16px",
            fontWeight: 300,
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          The Autopilot Audit link is on its way. Open the Notion template,
          follow the instructions inside, and be honest. This only works if you are.
        </p>

        <div
          className="mb-12 p-5"
          style={{
            border: "1px solid rgba(93, 63, 211, 0.2)",
            background: "rgba(93, 63, 211, 0.04)",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "14px",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            You&apos;re also subscribed to{" "}
            <em style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "16px", color: "var(--text-primary)" }}>
              Remember
            </em>
            {" "}— a weekly letter that goes one layer deeper every Friday.
          </p>
        </div>

        <Link
          href="/"
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "13px",
            fontWeight: 300,
            color: "var(--text-muted)",
            textDecoration: "none",
          }}
        >
          ← Back
        </Link>
      </div>
    </main>
  );
}
