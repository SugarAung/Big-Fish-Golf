import { Upload, Film, ImageIcon } from "lucide-react";

const assets = [
  {
    name: "hero.mp4",
    type: "VIDEO",
    size: "18.4 MB",
    used: "Hero section background",
    icon: Film,
  },
  {
    name: "infinity-tour-product.jpg",
    type: "IMAGE",
    size: "142 KB",
    used: "INFINITY Tour product card",
    icon: ImageIcon,
  },
  {
    name: "tide-carry-bag-product.jpg",
    type: "IMAGE",
    size: "118 KB",
    used: "Tide Carry Bag product card",
    icon: ImageIcon,
  },
  {
    name: "coppertone-58-product.jpg",
    type: "IMAGE",
    size: "97 KB",
    used: "Coppertone 58° product card",
    icon: ImageIcon,
  },
  {
    name: "heritage-polo-product.jpg",
    type: "IMAGE",
    size: "88 KB",
    used: "Heritage Polo product card",
    icon: ImageIcon,
  },
  {
    name: "heritage-brand-photo.jpg",
    type: "IMAGE",
    size: "211 KB",
    used: "Heritage section background",
    icon: ImageIcon,
  },
];

const typeStyles: Record<string, string> = {
  VIDEO: "bg-purple-500/10 text-purple-400",
  IMAGE: "bg-blue-500/10 text-blue-400",
};

export default function MediaPage() {
  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-dim mb-1">ASSETS</p>
          <h1 className="font-display font-bold text-3xl text-ink">Media Library</h1>
        </div>
        <button className="flex items-center gap-2 bg-gold text-dark text-[11px] font-bold tracking-widest px-4 py-2.5 hover:bg-gold/90 transition-colors">
          <Upload size={13} />
          UPLOAD ASSET
        </button>
      </div>

      <p className="text-[11px] text-dim mb-6">
        Replace images and video used on the site. Layout and placement are fixed — only the media content changes.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {assets.map((asset) => {
          const Icon = asset.icon;
          return (
            <div
              key={asset.name}
              className="bg-[#0c0c0c] border border-white/[0.06] overflow-hidden"
            >
              {/* Preview area */}
              <div className="aspect-video bg-[#141414] border-b border-white/[0.06] flex items-center justify-center relative">
                <Icon size={28} className="text-dim/20" />
                <span className={`absolute top-2 left-2 text-[9px] tracking-widest px-2 py-0.5 ${typeStyles[asset.type]}`}>
                  {asset.type}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[12px] text-ink font-mono truncate mb-1">{asset.name}</p>
                <p className="text-[10px] text-dim/60 mb-0.5">{asset.size}</p>
                <p className="text-[10px] text-dim/40 mb-4 truncate">Used in: {asset.used}</p>
                <button className="w-full flex items-center justify-center gap-1.5 border border-white/10 hover:border-gold/40 text-[10px] tracking-wider text-dim hover:text-gold transition-colors py-2">
                  <Upload size={11} />
                  REPLACE
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-dim/30 mt-6 text-center">
        Accepted formats: JPG, PNG, WebP (images) · MP4, WebM (video) · Max 50 MB per file
      </p>
    </div>
  );
}
