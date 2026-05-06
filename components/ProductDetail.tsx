"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { DriverIcon, BagIcon, WedgeIcon, PoloIcon } from "@/components/ui/ProductIcons";

const iconMap: Record<string, React.FC> = {
  "infinity-tour": DriverIcon,
  "tide-carry-bag": BagIcon,
  "coppertone-58": WedgeIcon,
  "heritage-polo": PoloIcon,
};

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const Icon = iconMap[product.slug] ?? DriverIcon;

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <Link
          href="/#shop"
          className="inline-flex items-center gap-2 text-[11px] tracking-widest text-dim hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} /> BACK TO SHOP
        </Link>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 items-start">
        {/* Image panel */}
        <div
          className={`bg-gradient-to-b ${product.bg} border border-white/[0.06] flex items-center justify-center h-[420px] md:h-[560px] sticky top-24`}
        >
          <Icon />
        </div>

        {/* Info panel */}
        <div className="pt-4">
          <p className="text-[10px] tracking-[0.25em] text-dim mb-3">{product.tag}</p>
          <h1 className="font-display font-black text-4xl md:text-5xl text-ink mb-2">
            {product.name}
          </h1>
          <p className="font-display text-3xl text-gold mb-6">${product.price}</p>

          <p className="text-dim text-sm leading-relaxed mb-8">{product.description}</p>

          {/* Specs */}
          <div className="border-t border-white/[0.06] py-6 mb-6">
            <p className="text-[10px] tracking-widest text-dim mb-4">SPECIFICATIONS</p>
            <div className="grid grid-cols-2 gap-3">
              {product.specs.map((s) => (
                <div key={s.label}>
                  <p className="text-[10px] tracking-wider text-dim/60 mb-0.5">{s.label}</p>
                  <p className="text-sm text-ink">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="border-t border-white/[0.06] py-6 mb-8">
            <p className="text-[10px] tracking-widest text-dim mb-4">WHAT YOU GET</p>
            <ul className="flex flex-col gap-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-dim">
                  <Check size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Qty + Add to cart */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center border border-white/10">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 text-dim hover:text-ink transition-colors text-lg leading-none"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="px-4 text-ink text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2.5 text-dim hover:text-ink transition-colors text-lg leading-none"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-bold tracking-widest transition-all ${
                added
                  ? "bg-green-700 text-white"
                  : "bg-gold text-dark hover:bg-gold/90"
              }`}
            >
              {added ? (
                <>
                  <Check size={14} /> ADDED TO CART
                </>
              ) : (
                <>
                  <ShoppingBag size={14} /> ADD TO CART — ${product.price * qty}
                </>
              )}
            </button>
          </div>

          {/* Go to cart */}
          {added && (
            <Link
              href="/cart"
              className="block w-full text-center py-3 border border-white/10 text-[11px] tracking-widest text-dim hover:text-ink hover:border-white/30 transition-all"
            >
              VIEW CART →
            </Link>
          )}

          {/* Fitting note */}
          <p className="text-[11px] text-dim/60 leading-relaxed mt-6">
            Free expert fitting included with every equipment purchase. We&apos;ll contact
            you within 24 hours to schedule.
          </p>
        </div>
      </div>
    </div>
  );
}
