# Big Fish Golf — Session Memory

## Project
- **Client:** Big Fish Golf (golf equipment, Carlsbad CA)
- **Contact:** WhatsApp +65 9894 5456 | @bigfishgolf
- **Repo:** https://github.com/SugarAung/Big-Fish-Golf
- **Preview URL:** TBD (Cloudflare Pages — pending deploy)
- **Phase:** Build complete → Deploy → Client review

## Locked Decisions
| Decision | Value |
|----------|-------|
| Pages in scope | `/` · `/shop/[slug]` · `/cart` · `/checkout` · `/checkout/confirmation` |
| CMS | Not this phase — v2 |
| Brand direction | Dark luxury · Editorial · Tour-grade |
| Primary color | Gold `#c9a432` on dark `#080a0f` |
| Fonts | Playfair Display (display) + Inter (body) |
| Primary CTA | BOOK A FITTING → WhatsApp `wa.me/6598945456` |
| Ecom | Demo-only checkout, fires to WhatsApp — no real payment |
| Video hosting | Cloudflare R2 (see deploy guide) — NOT in git |
| Deadline | TBD — waiting on client feedback |

## Where We Are Right Now
Demo build is complete and builds cleanly (`npm run build` — 11 routes, 0 errors). All ecom pages work: product detail → add to cart → cart → 3-step checkout → WhatsApp order → confirmation. Booking calendar fires WhatsApp with pre-filled message. Repo ready to push to `https://github.com/SugarAung/Big-Fish-Golf`. Next step is Cloudflare Pages deploy, then share URL with client.

## Open Tasks
- [ ] Push to GitHub (`https://github.com/SugarAung/Big-Fish-Golf`)
- [ ] Upload `hero.mp4` to Cloudflare R2, set `NEXT_PUBLIC_VIDEO_URL` in Pages env vars
- [ ] Deploy to Cloudflare Pages (connect repo → build command: `npm run build` → output: `out`)
- [ ] Share preview URL with client
- [ ] Run `/anti-vibe-ui-polish` before or after client sees it
- [ ] Run `/responsive-audit` (5 breakpoints)
- [ ] Run `/motion-polish` for scroll reveals

## Open Issues / Blockers
- Hero video (43 MB) exceeds Cloudflare Pages 25 MB per-file limit → must use R2

## Decisions Log
| Date | Decision | Why |
|------|----------|-----|
| 2026-05-07 | Next.js 15 + Tailwind v4 (not WordPress yet) | Demo first, CMS comes in v2 |
| 2026-05-07 | Checkout fires to WhatsApp, not real payment | Demo phase, no payment processor scoped |
| 2026-05-07 | Video excluded from git, use R2 | 43 MB exceeds Cloudflare Pages 25 MB limit |

## Client Copy (locked)
- **Hero:** "Reel in the long game." / "Tour-grade equipment engineered for golfers who don't settle."
- **Stats:** 12yr in the bag · 38 Tour Pros · 6k+ 5-star reviews · 100% lifetime warranty
- **Products:** INFINITY Tour $649 · Tide Carry Bag $329 · Coppertone 58° $180 · Heritage Polo $95
- **Booking note:** "90 minutes with a Master Fitter using TrackMan radar."
- **WhatsApp:** +65 9894 5456

## Post-Launch Notes (future)
- CMS: Supabase or WordPress (TBD with client)
- Real payment: Stripe or local PayNow gateway
- Email notifications: TBD
