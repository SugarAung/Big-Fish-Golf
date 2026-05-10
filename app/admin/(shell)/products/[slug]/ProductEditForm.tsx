"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react";
import type { Product } from "@/data/products";

const inputCls =
  "w-full bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[9px] tracking-widest text-dim">{label}</label>
      {children}
    </div>
  );
}

export default function ProductEditForm({ product }: { product: Product }) {
  const [name, setName] = useState(product.name);
  const [tag, setTag] = useState(product.tag);
  const [price, setPrice] = useState(String(product.price));
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);
  const [specs, setSpecs] = useState(product.specs);
  const [features, setFeatures] = useState(product.features);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="p-8 max-w-4xl">
      <Link
        href="/admin/products"
        className="inline-flex items-center gap-2 text-[10px] tracking-widest text-dim hover:text-ink transition-colors mb-6"
      >
        <ArrowLeft size={13} /> BACK TO PRODUCTS
      </Link>

      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-dim mb-1">EDITING</p>
          <h1 className="font-display font-bold text-3xl text-ink">{product.name}</h1>
        </div>
        <button
          onClick={handleSave}
          className="bg-gold text-dark text-[11px] font-bold tracking-widest px-5 py-2.5 hover:bg-gold/90 transition-colors"
        >
          {saved ? "SAVED ✓" : "SAVE CHANGES"}
        </button>
      </div>

      <div className="grid grid-cols-[1fr_260px] gap-6">
        {/* Left */}
        <div className="flex flex-col gap-5">
          {/* Basic info */}
          <div className="bg-[#0c0c0c] border border-white/[0.06] p-6">
            <p className="text-[9px] tracking-widest text-dim mb-5">BASIC INFO</p>
            <div className="flex flex-col gap-4">
              <Field label="PRODUCT NAME">
                <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="CATEGORY TAG">
                  <input value={tag} onChange={(e) => setTag(e.target.value)} className={inputCls} />
                </Field>
                <Field label="PRICE (SGD)">
                  <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className={inputCls} />
                </Field>
              </div>
              <Field label="DESCRIPTION">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className={inputCls + " resize-none"}
                />
              </Field>
            </div>
          </div>

          {/* Specs */}
          <div className="bg-[#0c0c0c] border border-white/[0.06] p-6">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[9px] tracking-widest text-dim">SPECIFICATIONS</p>
              <button
                onClick={() => setSpecs((s) => [...s, { label: "", value: "" }])}
                className="flex items-center gap-1 text-[10px] text-dim hover:text-gold transition-colors"
              >
                <Plus size={11} /> ADD
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {specs.map((spec, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_28px] gap-2 items-center">
                  <input
                    value={spec.label}
                    onChange={(e) => setSpecs((s) => s.map((x, j) => j === i ? { ...x, label: e.target.value } : x))}
                    placeholder="Label"
                    className={inputCls + " text-[12px]"}
                  />
                  <input
                    value={spec.value}
                    onChange={(e) => setSpecs((s) => s.map((x, j) => j === i ? { ...x, value: e.target.value } : x))}
                    placeholder="Value"
                    className={inputCls + " text-[12px]"}
                  />
                  <button
                    onClick={() => setSpecs((s) => s.filter((_, j) => j !== i))}
                    className="text-dim/40 hover:text-red-400 transition-colors flex items-center justify-center"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-[#0c0c0c] border border-white/[0.06] p-6">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[9px] tracking-widest text-dim">FEATURES</p>
              <button
                onClick={() => setFeatures((f) => [...f, ""])}
                className="flex items-center gap-1 text-[10px] text-dim hover:text-gold transition-colors"
              >
                <Plus size={11} /> ADD
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-gold text-xs flex-shrink-0">·</span>
                  <input
                    value={feat}
                    onChange={(e) => setFeatures((f) => f.map((x, j) => j === i ? e.target.value : x))}
                    className={inputCls + " text-[12px]"}
                  />
                  <button
                    onClick={() => setFeatures((f) => f.filter((_, j) => j !== i))}
                    className="text-dim/40 hover:text-red-400 transition-colors flex-shrink-0"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          {/* Stock toggle */}
          <div className="bg-[#0c0c0c] border border-white/[0.06] p-5">
            <p className="text-[9px] tracking-widest text-dim mb-4">AVAILABILITY</p>
            <div className="flex flex-col gap-2">
              {([true, false] as const).map((val) => (
                <button
                  key={String(val)}
                  onClick={() => setStock(val)}
                  className={`flex items-center gap-2 px-3 py-2.5 border text-[11px] tracking-wider transition-colors ${
                    stock === val
                      ? val
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                        : "border-red-500/40 bg-red-500/10 text-red-400"
                      : "border-white/10 text-dim"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${stock === val ? (val ? "bg-emerald-400" : "bg-red-400") : "bg-dim/30"}`} />
                  {val ? "In Stock" : "Out of Stock"}
                </button>
              ))}
            </div>
          </div>

          {/* Product image */}
          <div className="bg-[#0c0c0c] border border-white/[0.06] p-5">
            <p className="text-[9px] tracking-widest text-dim mb-4">PRODUCT IMAGE</p>
            <div className={`aspect-square bg-gradient-to-br ${product.bg} mb-3 flex items-center justify-center`}>
              <span className="text-[10px] tracking-widest text-white/20">CURRENT IMAGE</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 border border-white/10 hover:border-gold/40 text-[10px] tracking-wider text-dim hover:text-gold transition-colors py-2.5">
              <Upload size={12} />
              REPLACE IMAGE
            </button>
          </div>

          {/* Danger zone */}
          <div className="bg-[#0c0c0c] border border-red-500/20 p-5">
            <p className="text-[9px] tracking-widest text-dim mb-3">DANGER ZONE</p>
            <button className="w-full text-[10px] tracking-wider text-red-400/70 hover:text-red-400 border border-red-500/20 hover:border-red-500/40 py-2.5 transition-colors">
              DELETE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
