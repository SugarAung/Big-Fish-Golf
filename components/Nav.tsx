"use client";

import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "SHOP", href: "#shop" },
  { label: "HERITAGE", href: "#heritage" },
  { label: "FITTINGS", href: "#booking" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        {/* Left: desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] tracking-widest text-dim hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Center: logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-ink font-display text-base md:text-lg absolute left-1/2 -translate-x-1/2"
        >
          <FishIcon />
          Big Fish <span className="italic text-gold ml-1">Golf</span>
        </a>

        {/* Right: icons + CTA */}
        <div className="flex items-center gap-4 ml-auto">
          <Search size={17} className="hidden md:block text-dim hover:text-ink cursor-pointer transition-colors" />
          <User size={17} className="hidden md:block text-dim hover:text-ink cursor-pointer transition-colors" />

          {/* Cart icon with count badge */}
          <Link
            href="/cart"
            className="relative text-dim hover:text-ink cursor-pointer transition-colors"
            aria-label={`Cart — ${count} items`}
          >
            <CartIcon />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-dark text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </Link>

          <Link
            href="#booking"
            className="hidden md:flex items-center bg-gold text-dark text-[11px] font-bold tracking-widest px-4 py-2 hover:bg-gold/90 transition-colors"
          >
            BOOK A FITTING
          </Link>

          <button
            className="md:hidden text-dim hover:text-ink transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm tracking-widest text-dim hover:text-ink transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/cart"
            className="text-sm tracking-widest text-dim hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            CART {count > 0 && `(${count})`}
          </Link>
          <Link
            href="#booking"
            className="bg-gold text-dark text-[11px] font-bold tracking-widest px-4 py-3 text-center mt-2"
            onClick={() => setOpen(false)}
          >
            BOOK A FITTING
          </Link>
        </div>
      )}
    </header>
  );
}

function FishIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 18" fill="none" className="text-ink">
      <path d="M3 9 C3 9 0 5 0 9 C0 13 3 9 3 9Z" fill="currentColor" opacity="0.7" />
      <ellipse cx="13" cy="9" rx="11" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
