"use client";

import Link from "next/link";
import { Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Nav from "@/components/Nav";
import { DriverIcon, BagIcon, WedgeIcon, PoloIcon } from "@/components/ui/ProductIcons";

const iconMap: Record<string, React.FC> = {
  "infinity-tour": DriverIcon,
  "tide-carry-bag": BagIcon,
  "coppertone-58": WedgeIcon,
  "heritage-polo": PoloIcon,
};

export default function CartPage() {
  const { items, total, removeItem, updateQty } = useCart();

  return (
    <div className="min-h-screen bg-dark">
      <Nav />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/#shop"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest text-dim hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} /> CONTINUE SHOPPING
          </Link>
          <h1 className="font-display font-black text-3xl text-ink">
            Your <em className="text-gold">Cart</em>
          </h1>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-32 gap-6 text-center">
            <p className="font-display text-2xl text-dim">Your bag is empty.</p>
            <p className="text-dim/60 text-sm">Add some tour-grade equipment to get started.</p>
            <Link
              href="/#shop"
              className="bg-gold text-dark text-[11px] font-bold tracking-widest px-8 py-3 hover:bg-gold/90 transition-colors"
            >
              SHOP THE DROP
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            {/* Item list */}
            <div className="flex flex-col gap-0">
              {items.map((item, i) => {
                const Icon = iconMap[item.product.slug] ?? DriverIcon;
                return (
                  <div
                    key={item.product.slug}
                    className={`flex gap-5 py-6 ${i !== 0 ? "border-t border-white/[0.06]" : ""}`}
                  >
                    {/* Product image */}
                    <Link
                      href={`/shop/${item.product.slug}`}
                      className={`w-24 h-24 flex-shrink-0 bg-gradient-to-b ${item.product.bg} border border-white/[0.06] flex items-center justify-center hover:border-white/20 transition-colors`}
                    >
                      <div className="scale-50">
                        <Icon />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] tracking-widest text-dim mb-1">
                        {item.product.tag}
                      </p>
                      <Link
                        href={`/shop/${item.product.slug}`}
                        className="font-display font-bold text-lg text-ink hover:text-gold transition-colors leading-tight block mb-3"
                      >
                        {item.product.name}
                      </Link>

                      <div className="flex items-center gap-4">
                        {/* Qty controls */}
                        <div className="flex items-center border border-white/10">
                          <button
                            onClick={() =>
                              updateQty(item.product.slug, item.quantity - 1)
                            }
                            className="px-2.5 py-1.5 text-dim hover:text-ink transition-colors"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="px-3 text-ink text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQty(item.product.slug, item.quantity + 1)
                            }
                            className="px-2.5 py-1.5 text-dim hover:text-ink transition-colors"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.product.slug)}
                          className="text-dim/50 hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right flex-shrink-0">
                      <p className="text-ink font-semibold">
                        ${item.product.price * item.quantity}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-dim/50 text-xs mt-0.5">
                          ${item.product.price} each
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order summary */}
            <div className="bg-surface border border-white/[0.08] p-6 h-fit sticky top-24">
              <p className="text-[10px] tracking-widest text-dim mb-5">ORDER SUMMARY</p>

              <div className="flex flex-col gap-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-dim">Subtotal</span>
                  <span className="text-ink">${total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dim">Shipping</span>
                  <span className="text-gold text-xs tracking-wider">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dim">Expert fitting</span>
                  <span className="text-gold text-xs tracking-wider">INCLUDED</span>
                </div>
              </div>

              <div className="border-t border-white/[0.06] pt-4 mb-6 flex justify-between">
                <span className="text-sm text-ink font-semibold">Total</span>
                <span className="font-display font-bold text-xl text-ink">${total}</span>
              </div>

              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full bg-gold text-dark text-[11px] font-bold tracking-widest py-3.5 hover:bg-gold/90 transition-colors mb-3"
              >
                CHECKOUT <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/6598945456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-white/10 text-dim text-[11px] tracking-widest py-3 hover:border-white/30 hover:text-ink transition-colors"
              >
                ORDER VIA WHATSAPP
              </a>

              <p className="text-[10px] text-dim/40 text-center mt-4 leading-relaxed">
                Secure checkout. Free shipping. Fitting included.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
