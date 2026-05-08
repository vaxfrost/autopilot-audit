# Claude Design Brief — The Autopilot Audit Landing Page

Paste the prompt below into claude.ai to generate the design as an HTML artifact.
When you're happy with how it looks, share a screenshot with Claude Code and it will convert to Next.js.

---

## PROMPT TO PASTE INTO CLAUDE.AI:

```
Design a landing page as a complete HTML file with embedded CSS and no external dependencies except Google Fonts.

PRODUCT: The Autopilot Audit — a free Notion-based diagnostic tool for the Remember newsletter by Micha Konig.

WHAT IT DOES: User enters email → receives a Notion template link → 12 questions across 3 areas → AI writes them a personal report naming their autopilot pattern.

---

BRAND IDENTITY:

Newsletter name: Remember by Micha
Logo: "MK" monogram (cream colored, top-left corner of nav)
Brand wordmark: "Remember by Micha" in Cormorant Garamond with gold foil gradient

Fonts (Google Fonts):
- Headings: Cormorant Garamond (serif, editorial, elegant)
- Body/labels: Jost (geometric sans, clean, pairs with Cormorant)

Colors:
- Background: #F5F5F7 (off-white, not pure white)
- Primary text: #0B0B0F (near-black)
- Secondary text: #3A3A3F
- Muted text: rgba(11, 11, 15, 0.45)
- Gold (accents, labels): #D4AF37
- Gold foil gradient: linear-gradient(135deg, #8c6b1f 0%, #d4af37 30%, #ffd700 52%, #d4af37 72%, #8c6b1f 100%)
- Purple (CTA button, focus state): #5D3FD3
- Border: rgba(11, 11, 15, 0.10)

---

LAYOUT (top to bottom, single scroll, minimal):

1. NAV (top of page)
   - Left: "MK" monogram — Cormorant Garamond, small, near-black
   - Right: "Remember by Micha" — Cormorant Garamond italic, gold foil gradient text effect (background-clip: text)
   - No links, no hamburger. Clean.

2. HERO SECTION
   Label above headline (tiny, uppercase, letter-spaced, gold color, Jost Light):
   "FREE DIAGNOSTIC"

   Headline (Cormorant Garamond, very large — 72-84px, tight line height):
   "The Autopilot
   Audit."
   — First line normal weight, second line italic and slightly lighter color (#3A3A3F)

   Subtext (Jost Light, 17px, secondary text color):
   "Find out exactly where you're living on autopilot.
   Not in theory. In your actual life."

   Email form below subtext:
   - Input: white bg, subtle border, placeholder "your@email.com", Jost Light
   - Button: purple (#5D3FD3) fill, white text, "Get the audit →", Jost Regular
   - Both same height, side by side on desktop, stacked on mobile

   Below form (Jost Light, 13px, muted color):
   "Free. No spam. Comes with Remember — a weekly letter on intentional living."
   (The word "Remember" in that line should be Cormorant Garamond italic, slightly larger)

3. THIN DIVIDER LINE (rgba(11,11,15,0.10))

4. THREE AREAS SECTION
   Small label (same gold uppercase Jost style as hero):
   "THREE AREAS. ONE HONEST LOOK."

   Three rows, each with:
   - Number on left (01, 02, 03) — tiny, gold, Jost Light
   - Title — Cormorant Garamond 600, ~26px, near-black
   - Description — Jost Light, 15px, secondary text

   Content:
   01 — Purpose & Career — "What you're working toward versus what you actually want."
   02 — Daily Habits — "What fills your days by default versus by choice."
   03 — Identity — "Who you're performing versus who you actually are."

5. THIN DIVIDER LINE

6. FOOTER (minimal)
   Left: "Remember by Micha" — Cormorant Garamond, gold foil gradient, small
   Right: "A free diagnostic from the Remember newsletter." — Jost Light, muted, tiny

---

DESIGN PRINCIPLES:
- White/off-white background — clean, premium, editorial
- No dark sections, no gradients as backgrounds
- Max page width: ~680px centered, generous padding
- No drop shadows, no rounded corners beyond 4px on form elements
- Gold is used ONLY for: the wordmark, the small section labels, and the area numbers
- Purple is used ONLY for: the CTA button
- The page should feel like a high-end editorial magazine layout, not a SaaS landing page
- No stock photos, no illustrations, no hero images — pure typography

Build this as a single HTML file with all CSS inline in a <style> block. Make the form non-functional (just the UI). Use placeholder="#" for the form action.
```
