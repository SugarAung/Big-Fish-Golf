import Link from "next/link";
import { products } from "@/data/products";
import { DriverIcon, BagIcon, WedgeIcon, PoloIcon } from "@/components/ui/ProductIcons";

const icons = [DriverIcon, BagIcon, WedgeIcon, PoloIcon];

export default function Products() {
  return (
    <section id="shop" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-dim mb-3">
              NO. 01 — THE CATCH
            </p>
            <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] text-ink leading-[0.9]">
              New <em className="text-gold">arrivals.</em>
            </h2>
          </div>
          <Link
            href="/cart"
            className="hidden md:flex items-center gap-2 text-[11px] tracking-widest text-dim hover:text-ink transition-colors border-b border-dim/40 pb-0.5"
          >
            VIEW ALL 224 PRODUCTS →
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p, i) => {
            const Icon = icons[i];
            return (
              <Link
                key={p.slug}
                href={`/shop/${p.slug}`}
                className={`group bg-gradient-to-b ${p.bg} border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer`}
              >
                {/* Image placeholder */}
                <div className="h-52 flex items-center justify-center relative overflow-hidden">
                  <Icon />
                </div>

                {/* Info */}
                <div className="p-4 border-t border-white/[0.06]">
                  <p className="text-[9px] tracking-widest text-dim mb-1.5">{p.tag}</p>
                  <p className="font-display font-bold text-ink text-lg leading-tight mb-1">
                    {p.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-ink font-semibold">${p.price}</span>
                    {p.stock && (
                      <span className="text-[9px] tracking-wider text-gold">IN STOCK</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile view-all */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="/cart"
            className="text-[11px] tracking-widest text-dim hover:text-ink transition-colors border-b border-dim/40 pb-0.5"
          >
            VIEW ALL 224 PRODUCTS →
          </Link>
        </div>
      </div>
    </section>
  );
}
