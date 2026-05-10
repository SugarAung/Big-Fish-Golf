const bookings = [
  {
    id: "FIT-0091",
    name: "David Chen",
    phone: "+65 9112 3344",
    email: "david.chen@email.com",
    type: "Full Bag Fitting",
    date: "Sat 11 May 2026",
    time: "10:00am",
    status: "Confirmed",
    notes: "First-time customer. Currently playing Titleist irons.",
  },
  {
    id: "FIT-0090",
    name: "Sarah Park",
    phone: "+65 8223 4455",
    email: "sparky88@email.com",
    type: "Driver Fitting",
    date: "Sat 11 May 2026",
    time: "2:00pm",
    status: "Pending",
    notes: "",
  },
  {
    id: "FIT-0089",
    name: "Ryan Ho",
    phone: "+65 9334 5566",
    email: "ryan.ho@email.com",
    type: "Iron Fitting",
    date: "Sun 12 May 2026",
    time: "11:00am",
    status: "Confirmed",
    notes: "Handicap 8. Wants stiffer flex.",
  },
  {
    id: "FIT-0088",
    name: "Nurul Aisyah",
    phone: "+65 8445 6677",
    email: "nurul.aisyah@email.com",
    type: "Putter Fitting",
    date: "Sun 12 May 2026",
    time: "3:00pm",
    status: "Confirmed",
    notes: "",
  },
  {
    id: "FIT-0087",
    name: "Kai Watanabe",
    phone: "+65 9556 7788",
    email: "kai.w@email.com",
    type: "Full Bag Fitting",
    date: "Mon 13 May 2026",
    time: "9:00am",
    status: "Completed",
    notes: "Fitted for INFINITY Tour driver. Ordered on-site.",
  },
  {
    id: "FIT-0086",
    name: "Michelle Goh",
    phone: "+65 8667 8899",
    email: "mgoh@email.com",
    type: "Driver Fitting",
    date: "Mon 13 May 2026",
    time: "1:00pm",
    status: "Completed",
    notes: "",
  },
];

const statusStyles: Record<string, string> = {
  Confirmed: "bg-emerald-500/10 text-emerald-400",
  Pending: "bg-gold/10 text-gold",
  Completed: "bg-blue-500/10 text-blue-400",
};

const fittingTypes = ["Full Bag Fitting", "Driver Fitting", "Iron Fitting", "Putter Fitting"];

export default function BookingsPage() {
  const upcoming = bookings.filter((b) => b.status !== "Completed");
  const completed = bookings.filter((b) => b.status === "Completed");

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.2em] text-dim mb-1">FITTINGS</p>
        <h1 className="font-display font-bold text-3xl text-ink">Bookings</h1>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {fittingTypes.map((t) => (
          <div key={t} className="bg-[#0c0c0c] border border-white/[0.06] px-4 py-4">
            <p className="text-[9px] tracking-widest text-dim mb-2">{t.toUpperCase()}</p>
            <p className="font-display font-bold text-xl text-ink">
              {bookings.filter((b) => b.type === t).length}
            </p>
          </div>
        ))}
      </div>

      {/* Upcoming */}
      <div className="bg-[#0c0c0c] border border-white/[0.06] mb-6">
        <div className="px-5 py-3.5 border-b border-white/[0.06]">
          <p className="text-[9px] tracking-widest text-dim">{upcoming.length} UPCOMING</p>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {["ID", "Customer", "Type", "Date & Time", "Status", ""].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-[9px] tracking-widest text-dim/60">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {upcoming.map((b) => (
              <tr key={b.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                <td className="px-5 py-4 text-[11px] font-mono text-dim">{b.id}</td>
                <td className="px-5 py-4">
                  <p className="text-[13px] text-ink">{b.name}</p>
                  <p className="text-[10px] text-dim">{b.phone}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="text-[10px] text-dim border border-white/10 px-2 py-1">{b.type}</span>
                </td>
                <td className="px-5 py-4">
                  <p className="text-[12px] text-ink">{b.date}</p>
                  <p className="text-[10px] text-dim">{b.time}</p>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-[9px] tracking-widest px-2 py-1 ${statusStyles[b.status]}`}>
                    {b.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="text-[10px] tracking-wider text-dim hover:text-gold transition-colors border border-white/10 hover:border-gold/40 px-3 py-1.5">
                    CONFIRM
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Completed */}
      <div className="bg-[#0c0c0c] border border-white/[0.06]">
        <div className="px-5 py-3.5 border-b border-white/[0.06]">
          <p className="text-[9px] tracking-widest text-dim">{completed.length} COMPLETED</p>
        </div>
        <table className="w-full">
          <tbody>
            {completed.map((b) => (
              <tr key={b.id} className="border-b border-white/[0.03]">
                <td className="px-5 py-4 text-[11px] font-mono text-dim/50">{b.id}</td>
                <td className="px-5 py-4 text-[13px] text-dim">{b.name}</td>
                <td className="px-5 py-4 text-[11px] text-dim/60">{b.type}</td>
                <td className="px-5 py-4 text-[11px] text-dim/60">{b.date} · {b.time}</td>
                <td className="px-5 py-4">
                  <span className={`text-[9px] tracking-widest px-2 py-1 ${statusStyles[b.status]}`}>
                    {b.status.toUpperCase()}
                  </span>
                </td>
                {b.notes ? (
                  <td className="px-5 py-4 text-[10px] text-dim/50 italic max-w-[200px] truncate">{b.notes}</td>
                ) : (
                  <td className="px-5 py-4" />
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
