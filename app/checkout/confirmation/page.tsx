"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Nav from "@/components/Nav";
import { Suspense } from "react";

function ConfirmationContent() {
  const params = useSearchParams();
  const orderNum = `BFG-${params.get("order") ?? "000000"}`;

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Nav />
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full text-center py-20">
          <CheckCircle size={56} className="text-gold mx-auto mb-6" />

          <h1 className="font-display font-black text-4xl text-ink mb-3">
            Order <em className="text-gold">confirmed.</em>
          </h1>

          <p className="text-[11px] tracking-widest text-dim mb-6">
            ORDER {orderNum}
          </p>

          <p className="text-dim text-sm leading-relaxed mb-8 max-w-xs mx-auto">
            Your order details have been sent to our team via WhatsApp. We&apos;ll
            confirm within 24 hours and schedule your complimentary fitting.
          </p>

          <div className="bg-surface border border-white/[0.06] p-5 mb-8 text-left">
            <p className="text-[10px] tracking-widest text-dim mb-3">WHAT HAPPENS NEXT</p>
            {[
              "Team confirms your order via WhatsApp within 24 hours",
              "We schedule your complimentary TrackMan fitting",
              "Custom build begins — 10–14 business days",
              "Free shipping to your door",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-dim text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 border border-white/10 text-dim text-[11px] tracking-widest py-3 hover:border-white/30 hover:text-ink transition-colors text-center"
            >
              BACK HOME
            </Link>
            <a
              href="https://wa.me/6598945456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gold text-dark text-[11px] font-bold tracking-widest py-3 hover:bg-gold/90 transition-colors text-center"
            >
              OPEN WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense>
      <ConfirmationContent />
    </Suspense>
  );
}
