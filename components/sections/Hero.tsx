export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Video background — URL set via NEXT_PUBLIC_VIDEO_URL env var, falls back to local */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={process.env.NEXT_PUBLIC_VIDEO_URL ?? "/video/hero.mp4"}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay — heavy on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
        {/* Drop label */}
        <p className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-dim mb-10">
          <span className="w-10 h-px bg-dim/60" />
          SPRING · 2026 · DROP NO. 01
        </p>

        {/* Headline */}
        <h1 className="font-display font-black text-[clamp(3.5rem,9vw,8rem)] text-ink leading-[0.9] mb-6">
          Reel in the
          <br />
          <span className="italic text-gold">long</span>
          game.
        </h1>

        {/* Body copy */}
        <p className="text-dim text-sm md:text-base max-w-[340px] leading-relaxed mb-10">
          Tour-grade equipment engineered for golfers who don&apos;t settle.
          Forged irons, precision-tuned drivers, and a free expert fitting with
          every set.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-gold text-dark text-[11px] font-bold tracking-widest px-7 py-3.5 hover:bg-gold/90 transition-colors"
          >
            BOOK A FITTING <span aria-hidden>→</span>
          </a>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 border border-ink/25 text-ink text-[11px] font-bold tracking-widest px-7 py-3.5 hover:bg-ink/10 transition-colors"
          >
            SHOP THE DROP
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-dim">
        <span className="text-[9px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-10 bg-dim/40" />
      </div>

      {/* Featured product card */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block bg-surface/90 backdrop-blur-sm border border-white/10 p-5 w-56">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-[9px] tracking-[0.2em] text-dim uppercase">
            Now Featured
          </span>
        </div>
        <p className="font-display font-bold text-xl text-ink leading-tight">
          INFINITY{" "}
          <em className="text-gold">IFh-300</em>
        </p>
        <p className="text-dim text-sm mb-4">Tour Driver</p>
        <p className="text-[10px] tracking-wider text-dim">
          9.5° LOFT · 460CC HEAD ·{" "}
          <span className="text-ink font-semibold">$649</span>
        </p>
      </div>
    </section>
  );
}
