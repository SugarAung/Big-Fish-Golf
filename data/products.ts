export type Product = {
  slug: string;
  tag: string;
  name: string;
  price: number;
  stock: boolean;
  bg: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "infinity-tour",
    tag: "DRIVERS · TOUR",
    name: "INFINITY Tour",
    price: 649,
    stock: true,
    bg: "from-[#2a1a08] to-[#1a0e04]",
    description:
      "Forged from aerospace-grade titanium, the INFINITY Tour driver is engineered for ball-speed without compromise. Used by 38 tour players across 4 continents. Complimentary fitting included with every purchase.",
    specs: [
      { label: "Loft", value: "9.5° / 10.5°" },
      { label: "Head", value: "460cc" },
      { label: "Shaft", value: "Project X HZRDUS 6.0" },
      { label: "Flex", value: "Stiff / X-Stiff / Regular" },
      { label: "Swing Weight", value: "D2 – D4" },
      { label: "Warranty", value: "Lifetime" },
    ],
    features: [
      "Tour-proven at TPC Sawgrass and St Andrews",
      "TrackMan-optimised face geometry",
      "Free expert fitting with every purchase",
      "Custom shaft options available",
    ],
  },
  {
    slug: "tide-carry-bag",
    tag: "BAGS · STANDARD",
    name: "Tide Carry Bag",
    price: 329,
    stock: true,
    bg: "from-[#0a1a10] to-[#061008]",
    description:
      "Lightweight ripstop shell. 14-way divider. Double-shoulder strap system built for 36 holes. The Tide has been carried on over 200 tour events as a caddie bag and holds up in any condition.",
    specs: [
      { label: "Weight", value: "2.1 kg" },
      { label: "Dividers", value: "14-way full-length" },
      { label: "Pockets", value: "7 (1 insulated)" },
      { label: "Strap", value: "Dual auto-return" },
      { label: "Waterproof", value: "IPX4" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Tested across 200+ tour events as caddie bag",
      "Built-in rain hood (magnetic closure)",
      "Insulated pocket keeps drinks cold for 4 hours",
      "Stand system works on all terrain",
    ],
  },
  {
    slug: "coppertone-58",
    tag: "WEDGES · TOUR",
    name: "Coppertone 58°",
    price: 180,
    stock: true,
    bg: "from-[#1a1208] to-[#100c04]",
    description:
      "Raw carbon steel. 30 micro-grooves per face. The Coppertone bites hard on Tour conditions and holds spin through the rough. A player's wedge, full stop.",
    specs: [
      { label: "Loft", value: "58°" },
      { label: "Bounce", value: "10°" },
      { label: "Grind", value: "S-grind" },
      { label: "Material", value: "Raw carbon steel" },
      { label: "Grooves", value: "30 micro-groove" },
      { label: "Warranty", value: "Lifetime" },
    ],
    features: [
      "Raw finish for natural wear and maximum feedback",
      "Tour-proven spin rate across all conditions",
      "Available in right and left hand",
      "Custom grip available at checkout",
    ],
  },
  {
    slug: "heritage-polo",
    tag: "APPAREL · POLO",
    name: "Heritage Polo",
    price: 95,
    stock: true,
    bg: "from-[#0e1a14] to-[#08100c]",
    description:
      "Pima cotton blend. Anti-moisture lining. Cut for range and course alike. The Heritage Polo is what our tour players wear when they're not in a sponsor kit — take that however you want.",
    specs: [
      { label: "Material", value: "90% Pima cotton / 10% elastane" },
      { label: "Fit", value: "Athletic slim" },
      { label: "Sizes", value: "XS – 3XL" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Made in", value: "Portugal" },
      { label: "Warranty", value: "1 year stitching" },
    ],
    features: [
      "Moisture-wicking inner mesh keeps you cool",
      "UV 50+ rated fabric",
      "Anti-roll collar stays sharp all day",
      "Available in 6 colourways",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
