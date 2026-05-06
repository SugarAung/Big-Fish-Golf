"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What happens during a club fitting?",
    a: "Your 90-minute session starts with a baseline assessment on our TrackMan radar. We measure ball speed, launch angle, spin rate, and shot dispersion across your current clubs. From there, our Master Fitter works through shaft profiles, head designs, and loft configurations until your numbers peak. You leave with a full report and a spec sheet — we build to order.",
  },
  {
    q: "Do I need to bring my own clubs?",
    a: "Bring your gamer if you'd like a baseline comparison — it helps us understand what's working and what to improve. If you're new to the game or between sets, we have demos of every loft, lie, and shaft flex on hand. Either way works.",
  },
  {
    q: "How long does a custom build take?",
    a: "Standard custom builds ship within 10–14 business days. Tour-spec builds with non-stock shafts or special finishes can take up to 21 days. We'll confirm your lead time when we finalise specs — no surprises.",
  },
  {
    q: "What's covered by the lifetime warranty?",
    a: "Every Big Fish club carries a lifetime warranty against manufacturing defects on the head and hosel. Grips and shafts are covered for 2 years under normal play. We don't cover range mats, cart path strikes, or tree-related incidents — but we've seen everything, so just reach out.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we ship to over 40 countries. Duties and taxes are calculated at checkout based on your destination. Most international orders arrive within 7–14 business days. Singapore, Australia, UK, and UAE typically arrive faster.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_3fr] gap-16">
          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.25em] text-dim mb-4">
              NO. 04 — THE ANSWERS
            </p>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] text-ink leading-[0.9] mb-6">
              Frequently{" "}
              <em className="text-gold">asked.</em>
            </h2>
            <p className="text-dim text-sm leading-relaxed mb-10 max-w-xs">
              Everything you need to know about fittings, custom orders,
              shipping, and our lifetime warranty.
            </p>

            {/* Still have questions card */}
            <div className="bg-surface border border-white/[0.08] p-6">
              <p className="font-display font-bold text-ink text-lg mb-1">
                Still have questions?
              </p>
              <p className="text-dim text-sm mb-5">
                Our master fitters are happy to talk it through.
              </p>
              <a
                href="https://wa.me/6598945456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-widest text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
              >
                CONTACT OUR TEAM →
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col">
            {FAQS.map((item, i) => (
              <div key={i} className="border-b border-white/[0.08]">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`text-sm md:text-base font-medium transition-colors ${
                      openIndex === i ? "text-ink" : "text-dim group-hover:text-ink"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 transition-colors ${
                      openIndex === i ? "text-gold" : "text-dim"
                    }`}
                  >
                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {openIndex === i && (
                  <div className="pb-6 pr-8">
                    <p className="text-dim text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
