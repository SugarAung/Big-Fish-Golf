# Big Fish Golf — Session Memory

## Project
- **Client:** Big Fish Golf (golf equipment, Carlsbad CA)
- **Contact:** WhatsApp +65 9894 5456 | @bigfishgolf
- **Repo:** https://github.com/SugarAung/Big-Fish-Golf
- **Preview URL:** TBD — blocked on video (see below)
- **Phase:** Build complete, code pushed → blocked on video hosting → then Cloudflare deploy

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
| Video hosting | NOT in git. Google Drive does NOT work as video src. Options below. |
| Deadline | TBD — waiting on client feedback after deploy |

## Where We Are Right Now
Code is fully built and pushed to GitHub (`main` branch). 11 routes, 0 build errors, `output: export` set for Cloudflare Pages. **One blocker before deploy: the hero video.** Google Drive URLs do not work as `<video src>` — the browser can't stream from Drive cross-domain. Video must be hosted on a real CDN before Cloudflare Pages deploy is useful. Two free options below — pick one, then deploy takes 5 minutes.

## ⚠️ NEXT SESSION — DO THIS FIRST

### The only blocker: hero video hosting

The video file is at `d:\Web dev project\Big fish\Hero video\1 Full overall product video.mp4` (43 MB, NOT in the repo).

**Why Google Drive doesn't work:** Drive redirects through Google auth, blocks cross-domain video streaming. The `<video>` tag gets a load error on the live site.

---

**Option A — Compress + push to repo (recommended, 10 min, zero accounts)**

1. Download Handbrake free at handbrake.fr
2. Open `1 Full overall product video.mp4`
3. Preset: Web → Vimeo YouTube HQ 1080p60
4. Set RF quality slider to 28 (was 22) → reduces file size ~50%
5. Export as `hero.mp4` — target under 20 MB
6. Drop into `d:\Web dev project\Big fish\site\public\video\hero.mp4`
7. In the terminal:
   ```
   cd "d:/Web dev project/Big fish/site"
   git add public/video/hero.mp4
   git commit -m "chore: add compressed hero video"
   git push
   ```
8. Remove the `NEXT_PUBLIC_VIDEO_URL` env var from Cloudflare (not needed — it falls back to `/video/hero.mp4`)
9. Cloudflare auto-redeploys — done

**Also remove this line from .gitignore before step 7:**
```
/public/video/
```

---

**Option B — Cloudinary (free tier, email-only, no card)**

1. Sign up at cloudinary.com (email only, no payment)
2. Dashboard → Media Library → Upload → choose `hero.mp4`
3. Copy the URL — looks like: `https://res.cloudinary.com/YOUR_NAME/video/upload/hero.mp4`
4. In Cloudflare Pages → Settings → Environment variables → add:
   ```
   NEXT_PUBLIC_VIDEO_URL = https://res.cloudinary.com/YOUR_NAME/video/upload/hero.mp4
   ```
5. Redeploy (or it auto-deploys on next push)

---

### After video is sorted — Cloudflare Pages deploy (5 min)

1. Go to dash.cloudflare.com → **Pages** → **Create a project** → **Connect to Git**
2. Authorise GitHub → select `SugarAung/Big-Fish-Golf`
3. Build settings:

| Setting | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `site` |

4. If using Cloudinary (Option B), add env var: `NEXT_PUBLIC_VIDEO_URL` = your Cloudinary URL
5. Click **Save and Deploy** — takes ~2 min
6. Live URL: `https://big-fish-golf.pages.dev` (or similar)

---

### After deploy — send to client

Use [HANDOFF_CLIENT.md](../HANDOFF_CLIENT.md) — already written, ready to copy-paste.

---

## Open Tasks
- [ ] **BLOCKER: Sort the hero video** — Option A (compress) or Option B (Cloudinary)
- [ ] Remove `/public/video/` from .gitignore if using Option A
- [ ] Deploy to Cloudflare Pages (steps above)
- [ ] Share live URL with client
- [ ] Run `/anti-vibe-ui-polish` — before client sees it
- [ ] Run `/responsive-audit` — 5 breakpoints (360/768/1024/1280/1440)
- [ ] Run `/motion-polish` — scroll reveals + hover states (optional this phase)
- [ ] After client feedback → run `/client-feedback` to triage

## Decisions Log
| Date | Decision | Why |
|------|----------|-----|
| 2026-05-07 | Next.js 15 + Tailwind v4 | Demo first, CMS comes in v2 |
| 2026-05-07 | Checkout → WhatsApp, no real payment | Demo phase only |
| 2026-05-07 | Video excluded from git | 43 MB > Cloudflare Pages 25 MB limit |
| 2026-05-07 | Google Drive ruled out | Cannot stream as `<video src>` cross-domain |
| 2026-05-07 | R2 ruled out for now | Requires payment method even on free tier |

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
- Custom domain: TBD — set in Cloudflare Pages → Custom domains
