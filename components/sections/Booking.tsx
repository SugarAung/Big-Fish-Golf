"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TIME_SLOTS = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "1:30 PM",
  "3:00 PM",
  "4:30 PM",
];

const FITTING_TYPES = [
  "Driver Fitting (60 min)",
  "Iron Fitting (60 min)",
  "Full Bag Fitting (90 min)",
  "Putter Fitting (30 min)",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Booking() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fittingType, setFittingType] = useState(FITTING_TYPES[0]);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
    setSelectedDay(null);
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
    setSelectedDay(null);
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    const todayMidnight = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    return d < todayMidnight;
  }

  function handleConfirm() {
    if (!selectedDay || !selectedTime) return;
    const dateStr = `${MONTH_NAMES[viewMonth]} ${selectedDay}, ${viewYear}`;
    const msg = [
      `Hi! I'd like to book a fitting at Big Fish Golf.`,
      ``,
      `📅 Date: ${dateStr}`,
      `🕐 Time: ${selectedTime}`,
      `🏌️ Fitting: ${fittingType}`,
      `👤 Name: ${name || "—"}`,
      `📞 Phone: ${phone || "—"}`,
      `📧 Email: ${email || "—"}`,
    ].join("\n");
    window.open(
      `https://wa.me/6598945456?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  const formReady = selectedDay && selectedTime;

  return (
    <section id="booking" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.25em] text-dim mb-3">
            NO. 03 — THE STUDIO
          </p>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] text-ink leading-[0.95] mb-4">
            Book your private{" "}
            <em className="text-gold">fitting.</em>
          </h2>
          <p className="text-dim text-sm max-w-md mx-auto leading-relaxed">
            90 minutes with a Master Fitter using TrackMan radar. Every set we
            sell ships with a complimentary fitting — your swing, your specs.
          </p>
        </div>

        {/* Layout: Calendar | Form */}
        <div className="grid md:grid-cols-2 gap-0 border border-white/[0.08] max-w-4xl mx-auto">
          {/* Calendar */}
          <div className="border-r border-white/[0.08] p-6 md:p-8">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="text-dim hover:text-ink transition-colors p-1"
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>
              <p className="font-display font-bold text-ink text-lg">
                {MONTH_NAMES[viewMonth]}{" "}
                <span className="text-gold">{viewYear}</span>
              </p>
              <button
                onClick={nextMonth}
                className="text-dim hover:text-ink transition-colors p-1"
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-2">
              {DAY_LABELS.map((d) => (
                <div
                  key={d}
                  className="text-center text-[9px] tracking-wider text-dim py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-y-1">
              {/* Empty cells before first day */}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`e${i}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const past = isPast(day);
                const selected = selectedDay === day;
                const isToday =
                  today.getFullYear() === viewYear &&
                  today.getMonth() === viewMonth &&
                  today.getDate() === day;

                return (
                  <button
                    key={day}
                    disabled={past}
                    onClick={() => setSelectedDay(day)}
                    className={[
                      "h-9 w-full flex items-center justify-center text-sm transition-colors",
                      past
                        ? "text-dim/30 cursor-not-allowed"
                        : "cursor-pointer hover:text-ink",
                      selected
                        ? "bg-gold text-dark font-bold rounded-full"
                        : isToday && !past
                        ? "text-gold font-semibold"
                        : !past
                        ? "text-dim"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Time slots */}
            {selectedDay && (
              <div className="mt-6 pt-6 border-t border-white/[0.08]">
                <p className="text-[10px] tracking-[0.2em] text-dim mb-3">
                  CHOOSE YOUR TIME
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={[
                        "py-2 text-xs tracking-wide border transition-colors",
                        selectedTime === t
                          ? "bg-gold text-dark border-gold font-bold"
                          : "border-white/10 text-dim hover:border-white/30 hover:text-ink",
                      ].join(" ")}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="p-6 md:p-8 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] tracking-widest text-dim">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] tracking-widest text-dim">
                  PHONE
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-widest text-dim">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-widest text-dim">
                FITTING TYPE
              </label>
              <select
                value={fittingType}
                onChange={(e) => setFittingType(e.target.value)}
                className="bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 focus:outline-none focus:border-gold/60 transition-colors appearance-none cursor-pointer"
              >
                {FITTING_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Selection summary */}
            {formReady && (
              <div className="bg-dark/60 border border-white/[0.08] p-4 text-sm">
                <p className="text-[10px] tracking-widest text-dim mb-2">
                  YOUR BOOKING
                </p>
                <p className="text-ink">
                  {MONTH_NAMES[viewMonth]} {selectedDay}, {viewYear}
                </p>
                <p className="text-gold">{selectedTime}</p>
                <p className="text-dim text-xs mt-1">{fittingType}</p>
              </div>
            )}

            <div className="mt-auto">
              <button
                onClick={handleConfirm}
                disabled={!formReady}
                className={[
                  "w-full py-4 text-[11px] font-bold tracking-widest transition-all",
                  formReady
                    ? "bg-gold text-dark hover:bg-gold/90 cursor-pointer"
                    : "bg-white/5 text-dim/50 cursor-not-allowed",
                ].join(" ")}
              >
                CONFIRM BOOKING
              </button>
              {!formReady && (
                <p className="text-[10px] text-dim/50 text-center mt-2">
                  Select a date and time to continue
                </p>
              )}
            </div>

            <p className="text-[10px] text-dim/50 leading-relaxed">
              By confirming, you&apos;ll be redirected to WhatsApp to finalise
              your booking. Our team typically responds within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
