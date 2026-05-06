export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative py-32 bg-dark overflow-hidden"
    >
      {/* Background gradient suggesting outdoor/course tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#0c140a] to-dark opacity-80" />

      {/* Decorative large text */}
      <div
        className="absolute bottom-0 right-0 font-display font-black text-[20vw] text-white/[0.03] leading-none select-none pointer-events-none"
        aria-hidden
      >
        BFG
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[10px] tracking-[0.25em] text-dim mb-4">
              NO. 02 — THE HERITAGE
            </p>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] text-ink leading-[0.95] mb-8">
              Where craft meets
              <br />
              the <em className="text-gold">course.</em>
            </h2>
            <p className="text-dim leading-relaxed text-sm md:text-base mb-8 max-w-md">
              Big Fish gear is shaped by the people who play it. Our prototypes
              go straight from Carlsbad benches into the bags of caddies and
              tour pros — at TPC Sawgrass, Pinehurst, and St Andrews — long
              before they reach our shelves.
            </p>
            <p className="text-dim leading-relaxed text-sm md:text-base">
              Every clubhead is field-tested across 30,000+ swings. Every bag is
              carried for 18 holes in conditions you&apos;d rather not. If it
              survives the loop, it makes it to the rack.
            </p>
          </div>

          {/* Right: quote + visual */}
          <div className="flex flex-col gap-8">
            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-display italic text-xl md:text-2xl text-ink leading-snug mb-4">
                &ldquo;The IFh series feels like a tour iron with the ball-speed
                of a game-improvement club. That&apos;s a rare combination.&rdquo;
              </p>
              <footer className="text-[10px] tracking-widest text-dim">
                — TOUR PLAYER, ST ANDREWS 2026
              </footer>
            </blockquote>

            {/* Stats mini-grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30k+", label: "Swing tests per model" },
                { value: "18", label: "Holes per field test" },
                { value: "3", label: "Tour events before launch" },
                { value: "∞", label: "Lifetime warranty" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface/60 border border-white/[0.06] p-4"
                >
                  <p className="font-display font-black text-3xl text-gold mb-1">
                    {item.value}
                  </p>
                  <p className="text-[10px] tracking-wider text-dim">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
