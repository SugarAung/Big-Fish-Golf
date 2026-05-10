"use client";

import { useState } from "react";
import { Home, ShoppingBag, CalendarDays } from "lucide-react";

// ── Shared primitives ─────────────────────────────────────────────────────

const inputCls =
  "w-full bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[9px] tracking-widest text-dim">{label}</label>
      {children}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0c0c0c] border border-white/[0.06] p-6">
      <p className="text-[9px] tracking-widest text-dim mb-5">{title}</p>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

// ── Homepage content ──────────────────────────────────────────────────────

const defaultStats = [
  { value: "12yr", label: "of tour expertise" },
  { value: "38", label: "Tour Pros" },
  { value: "6k+", label: "verified reviews" },
  { value: "100%", label: "warranty" },
];

const defaultFAQs = [
  { q: "What does 'free fitting' actually mean?", a: "Every purchase includes a 45-minute session at our Singapore fitting studio with a certified fitter. We dial in your loft, lie angle, shaft flex, and grip size — not a generic recommendation." },
  { q: "Do you ship internationally?", a: "Yes — we ship to Singapore, Malaysia, Australia, UK, US, and UAE. Shipping is free on all orders. Duties and taxes may apply depending on your location." },
  { q: "Can I return or exchange a club?", a: "Yes, within 30 days of delivery if the club is unused. Custom shaft or grip orders are non-returnable. Contact us on WhatsApp to start a return." },
  { q: "How long does delivery take?", a: "Standard: 3–5 business days in Singapore. International: 7–14 business days. Expedited options available at checkout." },
];

function HomepageContent() {
  const [headline, setHeadline] = useState("Tour-grade equipment.\nEngineered for golfers\nwho don't settle.");
  const [sub, setSub] = useState("Forged in Asia. Trusted on tour. Free expert fitting with every purchase.");
  const [cta, setCta] = useState("SHOP THE RANGE");

  const [stats, setStats] = useState(defaultStats);

  const [heritageTitle, setHeritageTitle] = useState("Built for players.\nObsessed with craft.");
  const [heritageBody, setHeritageBody] = useState(
    "Big Fish Golf started in 2013 with a single obsession — build equipment that performs at the highest level, without the tour-player price tag. Our founders spent three years inside Asian tour operations, watching how clubs actually get fitted, used, and worn.\n\nEvery club we make goes through 40+ prototype iterations. Every material choice is argued over. Nothing ships until our in-house players would genuinely use it themselves."
  );

  const [faqs, setFaqs] = useState(defaultFAQs);

  return (
    <div className="flex flex-col gap-5">
      {/* Hero */}
      <Section title="HERO SECTION">
        <Field label="HEADLINE">
          <textarea value={headline} onChange={(e) => setHeadline(e.target.value)} rows={3} className={inputCls + " resize-none"} />
        </Field>
        <Field label="SUBTITLE">
          <input value={sub} onChange={(e) => setSub(e.target.value)} className={inputCls} />
        </Field>
        <Field label="CTA BUTTON LABEL">
          <input value={cta} onChange={(e) => setCta(e.target.value)} className={inputCls} />
        </Field>
      </Section>

      {/* Stats */}
      <Section title="STATS BAR">
        {stats.map((s, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <Field label={`STAT ${i + 1} — VALUE`}>
              <input
                value={s.value}
                onChange={(e) => setStats((arr) => arr.map((x, j) => j === i ? { ...x, value: e.target.value } : x))}
                className={inputCls}
              />
            </Field>
            <Field label={`STAT ${i + 1} — LABEL`}>
              <input
                value={s.label}
                onChange={(e) => setStats((arr) => arr.map((x, j) => j === i ? { ...x, label: e.target.value } : x))}
                className={inputCls}
              />
            </Field>
          </div>
        ))}
      </Section>

      {/* Heritage */}
      <Section title="HERITAGE SECTION">
        <Field label="HEADING">
          <textarea value={heritageTitle} onChange={(e) => setHeritageTitle(e.target.value)} rows={2} className={inputCls + " resize-none"} />
        </Field>
        <Field label="BODY COPY">
          <textarea value={heritageBody} onChange={(e) => setHeritageBody(e.target.value)} rows={7} className={inputCls + " resize-none"} />
        </Field>
      </Section>

      {/* FAQ */}
      <Section title="FAQ SECTION">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-dark border border-white/[0.05] p-4 flex flex-col gap-3">
            <Field label={`Q${i + 1} — QUESTION`}>
              <input
                value={faq.q}
                onChange={(e) => setFaqs((arr) => arr.map((x, j) => j === i ? { ...x, q: e.target.value } : x))}
                className={inputCls}
              />
            </Field>
            <Field label="ANSWER">
              <textarea
                value={faq.a}
                onChange={(e) => setFaqs((arr) => arr.map((x, j) => j === i ? { ...x, a: e.target.value } : x))}
                rows={3}
                className={inputCls + " resize-none"}
              />
            </Field>
          </div>
        ))}
      </Section>
    </div>
  );
}

// ── Shop content ──────────────────────────────────────────────────────────

function ShopContent() {
  const [heading, setHeading] = useState("Shop the Range");
  const [sub, setSub] = useState("Tour-proven equipment, engineered for the serious golfer. Every product ships with free fitting.");
  const [productsSub, setProductsSub] = useState("Free shipping · Free expert fitting · Lifetime warranty on all hardware");

  return (
    <div className="flex flex-col gap-5">
      <Section title="SHOP PAGE HEADER">
        <Field label="SECTION HEADING">
          <input value={heading} onChange={(e) => setHeading(e.target.value)} className={inputCls} />
        </Field>
        <Field label="SUBTITLE">
          <textarea value={sub} onChange={(e) => setSub(e.target.value)} rows={2} className={inputCls + " resize-none"} />
        </Field>
      </Section>

      <Section title="PRODUCT GRID">
        <Field label="TRUST LINE (below product grid)">
          <input value={productsSub} onChange={(e) => setProductsSub(e.target.value)} className={inputCls} />
        </Field>
        <div className="border border-white/[0.05] bg-dark p-4">
          <p className="text-[10px] text-dim mb-1">Individual product copy</p>
          <p className="text-[11px] text-dim/60">
            Edit each product&apos;s name, price, description, specs and features under{" "}
            <span className="text-gold">Products → [product name]</span>
          </p>
        </div>
      </Section>
    </div>
  );
}

// ── Fittings content ──────────────────────────────────────────────────────

const defaultFittingTypes = [
  "Driver Fitting",
  "Iron Fitting",
  "Full Bag Fitting",
  "Putter Fitting",
];

const defaultTimeSlots = [
  "9:00am",
  "10:30am",
  "12:00pm",
  "2:00pm",
  "3:30pm",
  "5:00pm",
];

function FittingsContent() {
  const [heading, setHeading] = useState("Book a Fitting");
  const [sub, setSub] = useState("Every purchase includes a complimentary fitting. Or book a standalone session — no purchase required.");
  const [fittingTypes, setFittingTypes] = useState(defaultFittingTypes);
  const [timeSlots, setTimeSlots] = useState(defaultTimeSlots);

  return (
    <div className="flex flex-col gap-5">
      <Section title="FITTINGS PAGE HEADER">
        <Field label="SECTION HEADING">
          <input value={heading} onChange={(e) => setHeading(e.target.value)} className={inputCls} />
        </Field>
        <Field label="SUBTITLE">
          <textarea value={sub} onChange={(e) => setSub(e.target.value)} rows={2} className={inputCls + " resize-none"} />
        </Field>
      </Section>

      <Section title="FITTING TYPES">
        {fittingTypes.map((type, i) => (
          <Field key={i} label={`OPTION ${i + 1}`}>
            <input
              value={type}
              onChange={(e) => setFittingTypes((arr) => arr.map((x, j) => j === i ? e.target.value : x))}
              className={inputCls}
            />
          </Field>
        ))}
      </Section>

      <Section title="AVAILABLE TIME SLOTS">
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((slot, i) => (
            <Field key={i} label={`SLOT ${i + 1}`}>
              <input
                value={slot}
                onChange={(e) => setTimeSlots((arr) => arr.map((x, j) => j === i ? e.target.value : x))}
                className={inputCls}
              />
            </Field>
          ))}
        </div>
      </Section>
    </div>
  );
}

// ── Page navigator ────────────────────────────────────────────────────────

type PageKey = "homepage" | "shop" | "fittings";

const pages: { key: PageKey; label: string; icon: React.ElementType }[] = [
  { key: "homepage", label: "Homepage", icon: Home },
  { key: "shop", label: "Shop", icon: ShoppingBag },
  { key: "fittings", label: "Fittings", icon: CalendarDays },
];

export default function ContentPage() {
  const [activePage, setActivePage] = useState<PageKey>("homepage");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 max-w-5xl">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-dim mb-1">SITE COPY</p>
          <h1 className="font-display font-bold text-3xl text-ink">Content Editor</h1>
        </div>
        <button
          onClick={handleSave}
          className="bg-gold text-dark text-[11px] font-bold tracking-widest px-5 py-2.5 hover:bg-gold/90 transition-colors"
        >
          {saved ? "SAVED ✓" : "SAVE CHANGES"}
        </button>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-6 max-w-5xl">
        {/* Left: page nav */}
        <aside className="w-44 flex-shrink-0">
          <p className="text-[9px] tracking-widest text-dim/50 mb-3 px-1">PAGES</p>
          <nav className="flex flex-col gap-0.5">
            {pages.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActivePage(key)}
                className={`flex items-center gap-2.5 px-3 py-2.5 text-[12px] tracking-wider text-left transition-colors rounded-sm w-full ${
                  activePage === key
                    ? "bg-gold/10 text-gold"
                    : "text-dim hover:text-ink hover:bg-white/[0.03]"
                }`}
              >
                <Icon size={13} strokeWidth={activePage === key ? 2 : 1.5} />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-6 px-1">
            <p className="text-[9px] tracking-widest text-dim/30 leading-relaxed">
              Layout and design are locked. Only copy and media can be changed.
            </p>
          </div>
        </aside>

        {/* Right: section fields */}
        <div className="flex-1 min-w-0">
          {activePage === "homepage" && <HomepageContent />}
          {activePage === "shop" && <ShopContent />}
          {activePage === "fittings" && <FittingsContent />}
        </div>
      </div>
    </div>
  );
}
