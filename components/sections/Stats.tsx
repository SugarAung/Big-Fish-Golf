const stats = [
  { value: "12", suffix: "yr", label: "IN THE BAG" },
  { value: "38", suffix: "", label: "TOUR PROS" },
  { value: "6k", suffix: "+", label: "5-STAR REVIEWS" },
  { value: "100", suffix: "%", label: "LIFETIME WARRANTY" },
];

export default function Stats() {
  return (
    <section id="about" className="bg-surface border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-10 px-4 gap-2"
            >
              <p className="font-display font-black text-[clamp(2.5rem,6vw,4rem)] text-ink leading-none">
                {s.value}
                <em className="text-gold not-italic">{s.suffix}</em>
              </p>
              <p className="text-[9px] tracking-[0.25em] text-dim uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
