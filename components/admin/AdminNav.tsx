"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  CalendarDays,
  FileText,
  Image,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/admin/content", label: "Content", icon: FileText },
  { href: "/admin/media", label: "Media", icon: Image },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-[#0c0c0c] border-r border-white/[0.06] flex flex-col z-40">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/[0.06]">
        <p className="font-display font-bold text-lg text-ink tracking-wide leading-tight">
          Big Fish<br />
          <em className="text-gold not-italic text-sm font-normal tracking-widest">ADMIN</em>
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="flex flex-col gap-0.5 px-3">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-[12px] tracking-wider transition-colors rounded-sm ${
                    active
                      ? "bg-gold/10 text-gold"
                      : "text-dim hover:text-ink hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon size={15} strokeWidth={active ? 2 : 1.5} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t border-white/[0.06]">
        <Link
          href="/admin/login"
          className="flex items-center gap-3 px-3 py-2.5 text-[12px] tracking-wider text-dim hover:text-ink transition-colors rounded-sm"
        >
          <LogOut size={15} strokeWidth={1.5} />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
