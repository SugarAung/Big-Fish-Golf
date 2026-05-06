"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Lock } from "lucide-react";
import Nav from "@/components/Nav";
import { useCart } from "@/context/CartContext";

type Step = "info" | "payment" | "confirm";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<Step>("info");

  // Info form state
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Singapore",
    postal: "",
  });

  // Payment form state
  const [payment, setPayment] = useState({
    method: "card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  function handleInfoSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePaymentSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("confirm");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePlaceOrder() {
    const orderNum = `BFG-${Date.now().toString().slice(-6)}`;
    const msg = [
      `🏌️ New Order — ${orderNum}`,
      ``,
      `📦 Items:`,
      ...items.map(
        (i) => `  • ${i.product.name} ×${i.quantity} — $${i.product.price * i.quantity}`
      ),
      ``,
      `💰 Total: $${total}`,
      ``,
      `👤 ${info.firstName} ${info.lastName}`,
      `📧 ${info.email}`,
      `📞 ${info.phone}`,
      `📍 ${info.address}, ${info.city}, ${info.country} ${info.postal}`,
    ].join("\n");

    clear();
    window.open(
      `https://wa.me/6598945456?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    router.push(`/checkout/confirmation?order=${Date.now().toString().slice(-6)}`);
  }

  const steps: { key: Step; label: string }[] = [
    { key: "info", label: "Information" },
    { key: "payment", label: "Payment" },
    { key: "confirm", label: "Confirm" },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Nav />
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        {/* Back */}
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-[11px] tracking-widest text-dim hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={14} /> BACK TO CART
        </Link>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-10">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${
                    step === s.key
                      ? "bg-gold text-dark"
                      : steps.indexOf(steps.find((x) => x.key === step)!) >
                          i
                        ? "bg-gold/30 text-gold"
                        : "bg-white/10 text-dim"
                  }`}
                >
                  {steps.indexOf(steps.find((x) => x.key === step)!) > i ? (
                    <Check size={10} />
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={`text-[11px] tracking-widest ${
                    step === s.key ? "text-ink" : "text-dim"
                  }`}
                >
                  {s.label.toUpperCase()}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-12 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-10">
          {/* Left: form */}
          <div>
            {/* ---- STEP 1: INFORMATION ---- */}
            {step === "info" && (
              <form onSubmit={handleInfoSubmit} className="flex flex-col gap-5">
                <h2 className="font-display font-bold text-2xl text-ink mb-2">
                  Shipping <em className="text-gold">information</em>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="FIRST NAME" required>
                    <input
                      required
                      placeholder="Jane"
                      value={info.firstName}
                      onChange={(e) =>
                        setInfo((p) => ({ ...p, firstName: e.target.value }))
                      }
                      className={inputCls}
                    />
                  </Field>
                  <Field label="LAST NAME" required>
                    <input
                      required
                      placeholder="Doe"
                      value={info.lastName}
                      onChange={(e) =>
                        setInfo((p) => ({ ...p, lastName: e.target.value }))
                      }
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="EMAIL" required>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={info.email}
                    onChange={(e) =>
                      setInfo((p) => ({ ...p, email: e.target.value }))
                    }
                    className={inputCls}
                  />
                </Field>

                <Field label="PHONE">
                  <input
                    type="tel"
                    placeholder="+65 9000 0000"
                    value={info.phone}
                    onChange={(e) =>
                      setInfo((p) => ({ ...p, phone: e.target.value }))
                    }
                    className={inputCls}
                  />
                </Field>

                <Field label="ADDRESS" required>
                  <input
                    required
                    placeholder="123 Orchard Road"
                    value={info.address}
                    onChange={(e) =>
                      setInfo((p) => ({ ...p, address: e.target.value }))
                    }
                    className={inputCls}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="CITY" required>
                    <input
                      required
                      placeholder="Singapore"
                      value={info.city}
                      onChange={(e) =>
                        setInfo((p) => ({ ...p, city: e.target.value }))
                      }
                      className={inputCls}
                    />
                  </Field>
                  <Field label="POSTAL CODE">
                    <input
                      placeholder="238888"
                      value={info.postal}
                      onChange={(e) =>
                        setInfo((p) => ({ ...p, postal: e.target.value }))
                      }
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="COUNTRY">
                  <select
                    value={info.country}
                    onChange={(e) =>
                      setInfo((p) => ({ ...p, country: e.target.value }))
                    }
                    className={inputCls + " appearance-none cursor-pointer"}
                  >
                    {[
                      "Singapore",
                      "Malaysia",
                      "Australia",
                      "United Kingdom",
                      "United States",
                      "United Arab Emirates",
                      "Other",
                    ].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>

                <button
                  type="submit"
                  className="w-full bg-gold text-dark text-[11px] font-bold tracking-widest py-4 hover:bg-gold/90 transition-colors mt-2"
                >
                  CONTINUE TO PAYMENT →
                </button>
              </form>
            )}

            {/* ---- STEP 2: PAYMENT ---- */}
            {step === "payment" && (
              <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-5">
                <h2 className="font-display font-bold text-2xl text-ink mb-2">
                  Payment <em className="text-gold">method</em>
                </h2>

                {/* Payment method tabs */}
                <div className="flex gap-3 mb-2">
                  {[
                    { key: "card", label: "Credit Card" },
                    { key: "paynow", label: "PayNow" },
                    { key: "bank", label: "Bank Transfer" },
                  ].map((m) => (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() =>
                        setPayment((p) => ({ ...p, method: m.key }))
                      }
                      className={`px-4 py-2 text-[11px] tracking-widest border transition-colors ${
                        payment.method === m.key
                          ? "border-gold text-ink bg-gold/10"
                          : "border-white/10 text-dim hover:border-white/30"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                {payment.method === "card" && (
                  <>
                    <Field label="NAME ON CARD" required>
                      <input
                        required
                        placeholder="Jane Doe"
                        value={payment.name}
                        onChange={(e) =>
                          setPayment((p) => ({ ...p, name: e.target.value }))
                        }
                        className={inputCls}
                      />
                    </Field>

                    <Field label="CARD NUMBER" required>
                      <input
                        required
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        value={payment.cardNumber}
                        onChange={(e) => {
                          const v = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16)
                            .replace(/(.{4})/g, "$1 ")
                            .trim();
                          setPayment((p) => ({ ...p, cardNumber: v }));
                        }}
                        className={inputCls + " font-mono"}
                      />
                    </Field>

                    <div className="grid grid-cols-2 gap-4">
                      <Field label="EXPIRY" required>
                        <input
                          required
                          placeholder="MM / YY"
                          maxLength={7}
                          value={payment.expiry}
                          onChange={(e) => {
                            let v = e.target.value.replace(/\D/g, "");
                            if (v.length >= 2) v = v.slice(0, 2) + " / " + v.slice(2);
                            setPayment((p) => ({ ...p, expiry: v.slice(0, 7) }));
                          }}
                          className={inputCls + " font-mono"}
                        />
                      </Field>
                      <Field label="CVV" required>
                        <input
                          required
                          placeholder="•••"
                          maxLength={4}
                          type="password"
                          value={payment.cvv}
                          onChange={(e) =>
                            setPayment((p) => ({
                              ...p,
                              cvv: e.target.value.replace(/\D/g, "").slice(0, 4),
                            }))
                          }
                          className={inputCls + " font-mono"}
                        />
                      </Field>
                    </div>
                  </>
                )}

                {payment.method === "paynow" && (
                  <div className="bg-surface border border-white/[0.06] p-6 text-center">
                    <p className="text-[10px] tracking-widest text-dim mb-3">PAYNOW QR CODE</p>
                    {/* Fake QR placeholder */}
                    <div className="w-36 h-36 mx-auto bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                      <span className="text-dim/40 text-xs">QR Code</span>
                    </div>
                    <p className="text-dim text-xs">
                      Scan with your banking app to pay{" "}
                      <span className="text-ink font-semibold">${total}</span>
                    </p>
                    <p className="text-dim/50 text-[10px] mt-2">
                      Reference: BFG-{Date.now().toString().slice(-6)}
                    </p>
                  </div>
                )}

                {payment.method === "bank" && (
                  <div className="bg-surface border border-white/[0.06] p-6">
                    <p className="text-[10px] tracking-widest text-dim mb-4">BANK TRANSFER DETAILS</p>
                    {[
                      { label: "Bank", value: "DBS Bank Singapore" },
                      { label: "Account Name", value: "Big Fish Golf Pte Ltd" },
                      { label: "Account No.", value: "***-***-1234 (demo)" },
                      { label: "Amount", value: `SGD $${total}` },
                    ].map((r) => (
                      <div key={r.label} className="flex justify-between py-2 border-b border-white/[0.04] last:border-0">
                        <span className="text-dim text-xs">{r.label}</span>
                        <span className="text-ink text-xs">{r.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 text-dim/50 text-[10px] mt-2">
                  <Lock size={11} />
                  This is a demo checkout. No real payment is processed.
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-dark text-[11px] font-bold tracking-widest py-4 hover:bg-gold/90 transition-colors"
                >
                  REVIEW ORDER →
                </button>
              </form>
            )}

            {/* ---- STEP 3: CONFIRM ---- */}
            {step === "confirm" && (
              <div className="flex flex-col gap-6">
                <h2 className="font-display font-bold text-2xl text-ink mb-2">
                  Review & <em className="text-gold">confirm</em>
                </h2>

                {/* Shipping summary */}
                <div className="bg-surface border border-white/[0.06] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] tracking-widest text-dim">SHIPPING TO</p>
                    <button
                      onClick={() => setStep("info")}
                      className="text-[10px] tracking-widest text-gold hover:text-gold/70 transition-colors"
                    >
                      EDIT
                    </button>
                  </div>
                  <p className="text-ink text-sm">
                    {info.firstName} {info.lastName}
                  </p>
                  <p className="text-dim text-sm">
                    {info.address}, {info.city}, {info.country} {info.postal}
                  </p>
                  <p className="text-dim text-sm">{info.email}</p>
                </div>

                {/* Payment summary */}
                <div className="bg-surface border border-white/[0.06] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] tracking-widest text-dim">PAYMENT</p>
                    <button
                      onClick={() => setStep("payment")}
                      className="text-[10px] tracking-widest text-gold hover:text-gold/70 transition-colors"
                    >
                      EDIT
                    </button>
                  </div>
                  <p className="text-ink text-sm capitalize">
                    {payment.method === "card"
                      ? `Card ending ••••${payment.cardNumber.slice(-4) || "****"}`
                      : payment.method === "paynow"
                      ? "PayNow"
                      : "Bank Transfer"}
                  </p>
                </div>

                {/* Items */}
                <div className="bg-surface border border-white/[0.06] p-5">
                  <p className="text-[10px] tracking-widest text-dim mb-4">ORDER ITEMS</p>
                  {items.map((item) => (
                    <div
                      key={item.product.slug}
                      className="flex justify-between py-2 border-b border-white/[0.04] last:border-0"
                    >
                      <span className="text-ink text-sm">
                        {item.product.name}{" "}
                        <span className="text-dim">×{item.quantity}</span>
                      </span>
                      <span className="text-ink text-sm">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-4">
                    <span className="font-semibold text-ink">Total</span>
                    <span className="font-display font-bold text-gold">${total}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-gold text-dark text-[11px] font-bold tracking-widest py-4 hover:bg-gold/90 transition-colors"
                >
                  PLACE ORDER — ${total}
                </button>

                <p className="text-[10px] text-dim/40 text-center leading-relaxed">
                  Clicking &ldquo;Place Order&rdquo; opens WhatsApp with your order details.
                  A real payment system will be wired up before launch.
                </p>
              </div>
            )}
          </div>

          {/* Right: order summary (sticky) */}
          <div className="bg-surface border border-white/[0.08] p-5 h-fit sticky top-24">
            <p className="text-[10px] tracking-widest text-dim mb-4">ORDER SUMMARY</p>
            {items.length === 0 ? (
              <p className="text-dim text-sm">No items</p>
            ) : (
              <>
                {items.map((item) => (
                  <div
                    key={item.product.slug}
                    className="flex justify-between py-2 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="text-dim text-xs">
                      {item.product.name} ×{item.quantity}
                    </span>
                    <span className="text-ink text-xs">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between pt-4">
                  <span className="text-ink text-sm font-semibold">Total</span>
                  <span className="font-display font-bold text-xl text-ink">
                    ${total}
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-1.5">
                  <p className="text-[10px] text-gold tracking-wider">✓ FREE SHIPPING</p>
                  <p className="text-[10px] text-gold tracking-wider">✓ FITTING INCLUDED</p>
                  <p className="text-[10px] text-gold tracking-wider">✓ LIFETIME WARRANTY</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[9px] tracking-widest text-dim">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
