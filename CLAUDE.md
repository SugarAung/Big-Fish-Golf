# Big Fish Golf — Project Context

## WHO
**Client:** Big Fish Golf  
**WhatsApp:** +65 9894 5456  
**Instagram:** @bigfishgolf  
**Phase:** Demo deployed → awaiting client feedback → then real build

## WHAT
Single-page marketing + ecom demo site. Built in Next.js 15 + Tailwind v4.  
Sections: Hero · Stats · Products · Heritage · Booking · FAQ · Footer  
Pages: `/` · `/shop/[slug]` · `/cart` · `/checkout` · `/checkout/confirmation`

**Primary CTA:** BOOK A FITTING → WhatsApp `wa.me/6598945456`  
**Secondary CTA:** ADD TO CART → checkout flow → WhatsApp order  

## HOW — RULES (read every session)

**Workflow order — no skipping:**  
`Plan → Structure → Design System → Build → Test → Polish → Launch`

**Current phase:** Build complete. Next: Polish (anti-vibe + motion + responsive audit) → Deploy → Client feedback.

**Design tokens (never hardcode):**
- `bg-dark` / `bg-surface` / `bg-card`
- `text-ink` / `text-gold` / `text-dim`
- `font-display` = Playfair Display, `font-sans` = Inter
- Gold: `#c9a432` | Dark bg: `#080a0f`

**Code rules:**
- TypeScript strict — no `any`
- Server components by default, `'use client'` only when state/browser APIs needed
- Tailwind only — no inline `style={{}}` except dynamic values
- Responsive: test 360 / 768 / 1024 / 1440

**Commands:**
```
npm run dev        # local dev — localhost:3000
npm run build      # static export → out/ folder
npm run lint
npm run typecheck
```

**Before any client preview — run these skills:**
1. `/anti-vibe-ui-polish` — scan for AI-generic patterns
2. `/responsive-audit` — verify 360/768/1024/1280/1440
3. `/motion-polish` — add scroll reveals + hover states

**After client feedback:**
- `/client-feedback` — triage + prioritize before touching code

**Before launch:**
- `/launch-checklist` — full 12-point check

## KEY DECISIONS
- **Video:** Excluded from git (`/public/video/`). Set `NEXT_PUBLIC_VIDEO_URL` env var in Cloudflare Pages to R2 URL.
- **Booking:** No backend — fires to WhatsApp with pre-filled message
- **Checkout:** Demo only — "Place Order" fires WhatsApp + redirects to confirmation
- **CMS:** Not in scope for this demo. Planned for v2.
- **No:** Real payments, auth, backend, CMS, multi-language, SEO campaigns

## FILES TO KNOW
| File | Purpose |
|------|---------|
| `data/products.ts` | Product data — edit here to change products/prices |
| `context/CartContext.tsx` | Cart state (localStorage) |
| `components/sections/Booking.tsx` | Calendar + WhatsApp booking |
| `components/sections/Hero.tsx` | Video URL via `NEXT_PUBLIC_VIDEO_URL` |
| `app/checkout/page.tsx` | 3-step checkout → WhatsApp |
