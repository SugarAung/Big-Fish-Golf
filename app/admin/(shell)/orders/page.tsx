const orders = [
  {
    id: "BFG-841932",
    date: "10 May 2026 · 11:42am",
    customer: "James Tan",
    phone: "+65 9123 4567",
    items: [{ name: "INFINITY Tour", qty: 1, price: 649 }],
    total: 649,
    payment: "PayNow",
    status: "Confirmed",
  },
  {
    id: "BFG-840871",
    date: "10 May 2026 · 09:15am",
    customer: "Priya Mehta",
    phone: "+65 8234 5678",
    items: [
      { name: "Tide Carry Bag", qty: 1, price: 329 },
      { name: "Heritage Polo", qty: 2, price: 95 },
    ],
    total: 519,
    payment: "Credit Card",
    status: "Processing",
  },
  {
    id: "BFG-839204",
    date: "9 May 2026 · 4:30pm",
    customer: "Wei Liang Ong",
    phone: "+65 9345 6789",
    items: [{ name: "Coppertone 58°", qty: 1, price: 180 }],
    total: 180,
    payment: "Bank Transfer",
    status: "Shipped",
  },
  {
    id: "BFG-837441",
    date: "9 May 2026 · 10:08am",
    customer: "Marcus Lim",
    phone: "+65 8456 7890",
    items: [
      { name: "INFINITY Tour", qty: 1, price: 649 },
      { name: "Tide Carry Bag", qty: 1, price: 329 },
    ],
    total: 978,
    payment: "Credit Card",
    status: "Confirmed",
  },
  {
    id: "BFG-835102",
    date: "8 May 2026 · 2:15pm",
    customer: "Amanda Yeo",
    phone: "+65 9567 8901",
    items: [{ name: "Heritage Polo", qty: 3, price: 95 }],
    total: 285,
    payment: "PayNow",
    status: "Shipped",
  },
];

const statusStyles: Record<string, string> = {
  Confirmed: "bg-emerald-500/10 text-emerald-400",
  Processing: "bg-gold/10 text-gold",
  Shipped: "bg-blue-500/10 text-blue-400",
};

export default function OrdersPage() {
  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.2em] text-dim mb-1">ORDERS</p>
        <h1 className="font-display font-bold text-3xl text-ink">Order Log</h1>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Orders", value: orders.length },
          { label: "Confirmed / Shipped", value: orders.filter((o) => o.status !== "Processing").length },
          { label: "Total Revenue", value: `$${orders.reduce((a, o) => a + o.total, 0).toLocaleString()}` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[#0c0c0c] border border-white/[0.06] px-5 py-4">
            <p className="text-[9px] tracking-widest text-dim mb-1">{label.toUpperCase()}</p>
            <p className="font-display font-bold text-xl text-ink">{value}</p>
          </div>
        ))}
      </div>

      {/* Orders table */}
      <div className="bg-[#0c0c0c] border border-white/[0.06]">
        <div className="px-5 py-3.5 border-b border-white/[0.06]">
          <p className="text-[9px] tracking-widest text-dim">{orders.length} ORDERS</p>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {orders.map((o) => (
            <div key={o.id} className="px-5 py-5 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-[12px] font-mono text-ink">{o.id}</p>
                    <span className={`text-[9px] tracking-widest px-2 py-0.5 ${statusStyles[o.status]}`}>
                      {o.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-[10px] text-dim">{o.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-lg text-gold">${o.total}</p>
                  <p className="text-[10px] text-dim">{o.payment}</p>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_1fr] gap-4">
                {/* Customer */}
                <div>
                  <p className="text-[9px] tracking-widest text-dim/50 mb-1">CUSTOMER</p>
                  <p className="text-[13px] text-ink">{o.customer}</p>
                  <p className="text-[11px] text-dim">{o.phone}</p>
                </div>
                {/* Items */}
                <div>
                  <p className="text-[9px] tracking-widest text-dim/50 mb-1">ITEMS</p>
                  {o.items.map((item) => (
                    <div key={item.name} className="flex justify-between">
                      <p className="text-[12px] text-ink">{item.name} <span className="text-dim">×{item.qty}</span></p>
                      <p className="text-[12px] text-dim">${item.price * item.qty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
