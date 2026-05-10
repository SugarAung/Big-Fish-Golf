import Link from "next/link";
import { products } from "@/data/products";
import { Pencil, Plus } from "lucide-react";

export default function AdminProductsPage() {
  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-dim mb-1">CATALOGUE</p>
          <h1 className="font-display font-bold text-3xl text-ink">Products</h1>
        </div>
        <button className="flex items-center gap-2 bg-gold text-dark text-[11px] font-bold tracking-widest px-4 py-2.5 hover:bg-gold/90 transition-colors">
          <Plus size={13} />
          ADD PRODUCT
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#0c0c0c] border border-white/[0.06]">
        <div className="px-5 py-3.5 border-b border-white/[0.06]">
          <p className="text-[9px] tracking-widest text-dim">{products.length} PRODUCTS</p>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {["Product", "Category", "Price", "Stock", ""].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-[9px] tracking-widest text-dim/60">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.slug} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                {/* Name */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-sm bg-gradient-to-br ${p.bg} flex-shrink-0`} />
                    <div>
                      <p className="text-[13px] text-ink font-medium">{p.name}</p>
                      <p className="text-[10px] text-dim font-mono">{p.slug}</p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-5 py-4">
                  <span className="text-[9px] tracking-widest text-dim border border-white/10 px-2 py-1">
                    {p.tag}
                  </span>
                </td>

                {/* Price */}
                <td className="px-5 py-4 text-[13px] text-ink font-semibold">
                  ${p.price}
                </td>

                {/* Stock */}
                <td className="px-5 py-4">
                  {p.stock ? (
                    <span className="text-[9px] tracking-widest bg-emerald-500/10 text-emerald-400 px-2 py-1">IN STOCK</span>
                  ) : (
                    <span className="text-[9px] tracking-widest bg-red-500/10 text-red-400 px-2 py-1">OUT OF STOCK</span>
                  )}
                </td>

                {/* Edit */}
                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/admin/products/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-[10px] tracking-wider text-dim hover:text-gold transition-colors border border-white/10 hover:border-gold/40 px-3 py-1.5"
                  >
                    <Pencil size={11} />
                    EDIT
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
