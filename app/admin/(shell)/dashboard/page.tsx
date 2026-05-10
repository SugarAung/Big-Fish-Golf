import Link from "next/link";
import { ShoppingBag, CalendarDays, DollarSign, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  { label: "Orders Today", value: "3", sub: "+1 from yesterday", icon: ShoppingBag, accent: true },
  { label: "Orders This Week", value: "12", sub: "↑ 8% vs last week", icon: TrendingUp, accent: false },
  { label: "Bookings This Week", value: "5", sub: "2 pending confirmation", icon: CalendarDays, accent: false },
  { label: "Revenue MTD", value: "$4,820", sub: "SGD · May 2026", icon: DollarSign, accent: false },
];

const recentOrders = [
  { id: "BFG-841932", customer: "James Tan", items: "INFINITY Tour ×1", total: "$649", status: "Confirmed", date: "Today, 11:42am" },
  { id: "BFG-840871", customer: "Priya Mehta", items: "Tide Carry Bag ×1, Heritage Polo ×2", total: "$519", status: "Processing", date: "Today, 09:15am" },
  { id: "BFG-839204", customer: "Wei Liang Ong", items: "Coppertone 58° ×1", total: "$180", status: "Shipped", date: "Yesterday, 4:30pm" },
  { id: "BFG-837441", customer: "Marcus Lim", items: "INFINITY Tour ×1, Tide Carry Bag ×1", total: "$978", status: "Confirmed", date: "Yesterday, 10:08am" },
];

const upcomingBookings = [
  { name: "David Chen", type: "Full Bag Fitting", date: "Sat 11 May · 10:00am", status: "Confirmed" },
  { name: "Sarah Park", type: "Driver Fitting", date: "Sat 11 May · 2:00pm", status: "Pending" },
  { name: "Ryan Ho", type: "Iron Fitting", date: "Sun 12 May · 11:00am", status: "Confirmed" },
];

const statusStyles: Record<string, string> = {
  Confirmed: "bg-emerald-500/10 text-emerald-400",
  Processing: "bg-gold/10 text-gold",
  Shipped: "bg-blue-500/10 text-blue-400",
  Pending: "bg-gold/10 text-gold",
  Completed: "bg-emerald-500/10 text-emerald-400",
};

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.2em] text-dim mb-1">OVERVIEW</p>
        <h1 className="font-display font-bold text-3xl text-ink">
          Good morning, <em className="text-gold">Admin</em>
        </h1>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {stats.map(({ label, value, sub, icon: Icon, accent }) => (
          <div
            key={label}
            className={`p-5 border ${accent ? "border-gold/30 bg-gold/5" : "border-white/[0.06] bg-[#0c0c0c]"}`}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-[9px] tracking-widest text-dim">{label.toUpperCase()}</p>
              <Icon size={14} className={accent ? "text-gold" : "text-dim/50"} />
            </div>
            <p className={`font-display font-bold text-2xl mb-1 ${accent ? "text-gold" : "text-ink"}`}>{value}</p>
            <p className="text-[10px] text-dim/60">{sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-6">
        {/* Recent orders */}
        <div className="bg-[#0c0c0c] border border-white/[0.06]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
            <p className="text-[10px] tracking-widest text-dim">RECENT ORDERS</p>
            <Link href="/admin/orders" className="flex items-center gap-1 text-[10px] tracking-wider text-gold hover:text-gold/70 transition-colors">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.04]">
                {["Order", "Customer", "Items", "Total", "Status"].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-[9px] tracking-widest text-dim/60">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="text-[11px] font-mono text-ink">{o.id}</p>
                    <p className="text-[10px] text-dim/50">{o.date}</p>
                  </td>
                  <td className="px-5 py-3.5 text-[12px] text-ink">{o.customer}</td>
                  <td className="px-5 py-3.5 text-[11px] text-dim max-w-[160px] truncate">{o.items}</td>
                  <td className="px-5 py-3.5 text-[12px] text-ink font-semibold">{o.total}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[9px] tracking-widest px-2 py-1 ${statusStyles[o.status]}`}>
                      {o.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming bookings */}
        <div className="bg-[#0c0c0c] border border-white/[0.06]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
            <p className="text-[10px] tracking-widest text-dim">UPCOMING BOOKINGS</p>
            <Link href="/admin/bookings" className="flex items-center gap-1 text-[10px] tracking-wider text-gold hover:text-gold/70 transition-colors">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.04]">
            {upcomingBookings.map((b) => (
              <div key={b.name} className="px-5 py-4">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-[13px] text-ink">{b.name}</p>
                  <span className={`text-[9px] tracking-widest px-2 py-0.5 ${statusStyles[b.status]}`}>
                    {b.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-[11px] text-dim">{b.type}</p>
                <p className="text-[10px] text-dim/50 mt-1">{b.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
