export const COMPANY = {
  name: "Tirupati Precast",
  group: "TP Group",
  tagline: "The Power of Precast",
  descriptor:
    "Manufacturer of Single Panels 75mm Compound Wall, Precast 'U' Drain, Retaining Wall, and all Types Precast Product.",
  certification: "ISO 9001:2015",
  vision:
    "Concept of 21st Century of RCC Precast & Prestressed techniques guaranteed consumers in India safer, cheaper, re-usable RCC Precast Compound wall.",
  mission:
    "With quality, quantity, time and services our mission is to compound wall the India with RCC Precast wall.",
  headOffice:
    "Sonnenahalli Village, Byatha Post, Yelahanka to Rajankunte Madhure Temple Road, Bangalore North – 560089, Karnataka, India",
  email: "tirupatiprecast27@gmail.com",
  youtube: "https://www.youtube.com/watch?v=9_y5IhUpAzI",
  youtubeChannel: "https://www.youtube.com/@tirupatiprecast3262",
  websites: ["www.tirupatiprecast.in", "www.tirupatiprecast.group"],
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/tirupaticompoundwall/",
    },
    { name: "YouTube", url: "https://www.youtube.com/@tirupatiprecast3262" },
  ],
} as const;

export const PHONES = [
  { label: "Head Office", value: "+91 88840 88873", href: "tel:+918884088873" },
  { label: "Haresh Radadiya", value: "+91 88840 88878", href: "tel:+918884088878" },
  { label: "Hardik Talaviya", value: "+91 98866 12024", href: "tel:+919886612024" },
] as const;

export const STATS = [
  { value: 16, suffix: "", label: "Branches across India" },
  { value: 20, suffix: "+", label: "Years of precast expertise" },
  { value: 100, suffix: "m", label: "Wall erected in 2 days" },
  { value: 9001, prefix: "ISO ", suffix: ":2015", label: "Certified quality system" },
] as const;

export const CLIENTS = [
  "Adani", "Apple", "Airtel", "Adarsh Developers", "Belectric", "BFW",
  "Concorde", "Embassy", "Fortum", "Godrej Properties", "Hero Future Energies",
  "Infosys", "ISKCON", "ITC Limited", "Juwi", "KNK", "L&T",
  "Manipal MAHE", "Nilkamal", "Puravankara", "Reliance Power", "ReNew Power",
  "Sattva", "Shimizu Corporation", "Shriram Properties", "Susten by Mahindra",
  "Suzlon", "Tata Power Solar", "Toyota", "Wipro", "Wistron",
] as const;

export const WHY_US = [
  { n: "01", title: "Quality", body: "Best quality products, tested before dispatch." },
  { n: "02", title: "Made in Bharat", body: "Indian products built with advanced Japanese technology." },
  { n: "03", title: "Better Value", body: "Measurably better value than conventional construction." },
  { n: "04", title: "Faster Work", body: "Ready-to-use products, easy and fast to install." },
  { n: "05", title: "Pure Material", body: "Greatest raw material, purified water, controlled mixes." },
  { n: "06", title: "Skilled Work", body: "Skilled workforce supervised by technical authorities." },
  { n: "07", title: "Long Life", body: "Maintenance-free over a long service life." },
  { n: "08", title: "Durability", body: "Crack-free concrete, impact and fatigue resistant." },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Factory Cast",
    body: "One-piece panels cast at our plant in steel moulds — M30 ready-mix with admixture, TMT bar reinforcement. Quality is inspected at the pour, where it can still be corrected.",
    spec: "M30 · TMT mesh",
  },
  {
    n: "02",
    title: "Controlled Cure",
    body: "A 21-day controlled curing cycle, checked in our in-house concrete cube test lab before any unit is approved for dispatch.",
    spec: "21-day cure · cube tests",
  },
  {
    n: "03",
    title: "Transport & Erect",
    body: "Ready-to-use units move to site and erect fast on minimal foundations — columns on footing or pile per soil and water table.",
    spec: "Minimal footing",
  },
  {
    n: "04",
    title: "100m in 2 Days",
    body: "A trained crew closes 100 meters of wall in two days. Walls follow terrain, and panels stay portable — 100% of panels and 90% of columns are reusable.",
    spec: "100% panels reusable",
  },
] as const;

export type Product = {
  slug: string;
  index: string;
  name: string;
  short: string;
  summary: string;
  chips: string[];
  image?: string;
  imageCaption?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "compound-wall",
    index: "01",
    name: "75mm Single Panels Compound Wall",
    short: "Compound Wall",
    summary:
      "Flagship system. One-piece panels with TMT bar weld-mesh reinforcement, M30 ready-mix concrete, every unit tested before dispatch. Replaces conventional RCC compound walls at a third of the weight.",
    chips: ["75mm panel", "M30", "TMT mesh", "6–12 ft"],
    image: "/images/6.jpg",
    imageCaption: "Perimeter wall with Y-posts and concertina wire",
  },
  {
    slug: "u-drain",
    index: "02",
    name: "Precast 'U' Shape Drain",
    short: "U-Drain",
    summary:
      "T-6 light duty and T-25 heavy duty drainage units, 2000mm long, from 300×300 to 900×900mm internal sections with matching lids and axle load ratings up to 10 tonnes.",
    chips: ["T-6 · T-25", "300–900mm", "Up to 10T axle", "L=2000mm"],
  },
  {
    slug: "retaining-wall",
    index: "03",
    name: "Earth Retaining Wall",
    short: "Retaining Wall",
    summary:
      "L-shaped high-strength precast RCC units manufactured to Japanese Industrial Standards with self-compacting concrete, flange coupling and integral drainage. Heights from 1000 to 3000mm.",
    chips: ["JIS", "L-wall", "H 1000–3000mm", "Self-compacting"],
  },
];

export const HERITAGE_PRODUCTS = [
  "Pre-Stressed Compound Wall",
  "One Piece Casting RCC Compound Wall — 100mm",
  "RCC Precast Bench",
  "Precast Drain Cover",
  "Labour Quarter",
  "Precast Design Compound Wall",
  "Paver Block",
  "Kerb Stone",
  "Fencing Pole",
] as const;

/* ---------- compound wall specs (brand.md §5.1) ---------- */

export const WALL_COLUMN = [
  ["Section", "200 × 200 mm (8 × 8 in)"],
  ["Length", "Custom per requirement"],
  ["Reinforcement", "10 nos × 4 mm pre-stressed steel wire"],
  ["Concrete", "M30"],
] as const;

export const WALL_PANEL = [
  ["Length", "3048 mm (10 ft)"],
  ["Heights", "1828 / 1219 / 609 mm (6 / 4 / 2 ft)"],
  ["Thickness", "75 mm (3 in)"],
  ["Reinforcement", "8 mm TMT bar weld mesh"],
  ["Concrete", "M30"],
] as const;

export const WALL_VARIANTS = {
  head: ["Wall height", "D (mm)", "E (mm)", "F (mm)", "G (mm)"],
  rows: [
    ["6 ft", "1828", "2700", "—", "—"],
    ["8 ft", "2400", "3300", "609", "1828"],
    ["10 ft", "3000", "3900", "1219", "1828"],
    ["12 ft", "3600", "4500", "1828", "1828"],
  ],
  constants: "A = 3175 mm · B = 900 mm · Footing C = 450 mm — constant for all variants",
} as const;

export const WALL_FINISHES = [
  "Plain",
  "Barbed wire",
  "Y-posts + barbed wire",
  "Picket railing",
  "Curved railing",
] as const;

export const WALL_PERFORMANCE = [
  { value: "150", unit: "KMPH", label: "Basic wind speed resistance" },
  { value: "1/3", unit: "WT", label: "Weight of a traditional wall" },
  { value: "100", unit: "%", label: "Panels reusable · 90% columns" },
  { value: "100", unit: "m / 2d", label: "Erection speed, trained crew" },
] as const;

/* ---------- u-drain specs (brand.md §5.2–5.3) ---------- */

export const DRAIN_T6 = {
  name: "T-6 — Light Duty",
  axle: "1.5 T / 2.5 T / 5 T",
  rows: [
    ["Unit length L", "2000 mm"],
    ["Internal sizes", "300×300 up to 900×900 mm"],
    ["A range", "430 – 1070 mm"],
    ["H", "375 – 1010 mm"],
    ["c / d / e", "65–85 / 75–110 / 75–110 mm"],
    ["f", "280 – 820 mm"],
    ["Lids", "A′ = 500 · B′ 430–1070 · H′ 75–100 mm"],
    ["Bedding", "100 mm PCC + 20 mm dry mortar"],
  ],
} as const;

export const DRAIN_T25 = {
  name: "T-25 — Heavy Duty",
  axle: "5 T / 10 T",
  rows: [
    ["Unit length L", "2000 mm"],
    ["Internal sizes", "300×300 up to 900×900 mm"],
    ["A", "550 – 1200 mm"],
    ["B", "430 – 1070 mm"],
    ["H", "485 – 1170 mm"],
    ["Wall thickness", "110 – 150 mm"],
    ["Lids", "H′ 110 – 150 mm"],
    ["Bedding", "PCC 100 mm base + 20 mm dry mortar, slope 1:1000"],
  ],
} as const;

/* ---------- retaining wall specs (brand.md §5.4) ---------- */

export const RETAINING = {
  rows: [
    ["Standard", "Japanese Industrial Standards (JIS), conforming Indian Standards"],
    ["Concrete", "High-strength self-compacting RCC"],
    ["Unit type", "L-shaped with flange coupling"],
    ["Drainage", "Hole Ø70/75 · soil-particle stop filter · draft prevention"],
    ["Heights H", "1000 – 3000 mm"],
    ["Base B", "850 – 2050 mm"],
    ["Unit length", "2000 mm"],
    ["Ground strength", "H 600–2500 mm → GS 30–110 kN/m²"],
    ["Foundation", "Bedding mortar → foundation concrete → crushed stone"],
  ],
  params: [
    ["Yc", "24.5 kN/m³"],
    ["Ys", "19 kN/m³"],
    ["Ø", "30°"],
    ["q", "10 kN/m²"],
    ["Fs", "≥ 1.5"],
    ["|e|", "≤ B/6"],
  ],
} as const;

/* ---------- projects (real themes + clients, brand.md §8–10) ---------- */

export const SECTORS = [
  "All",
  "Solar",
  "Campuses",
  "Real Estate",
  "Infrastructure",
  "Institutions",
] as const;

export type Project = {
  title: string;
  sector: (typeof SECTORS)[number];
  client?: string;
  image: string;
  caption: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Adani Solar Park Boundary",
    sector: "Solar",
    client: "Adani",
    image: "/images/7.jpg",
    caption: "Cast-branded compound wall along solar site boundary, Karnataka.",
  },
  {
    title: "Power Plant Perimeter",
    sector: "Infrastructure",
    image: "/images/4.jpg",
    caption: "Long-run perimeter wall at a thermal power station.",
  },
  {
    title: "High-Security Fencing",
    sector: "Infrastructure",
    image: "/images/6.jpg",
    caption: "12 ft wall with Y-posts and concertina wire on minimal foundations.",
  },
  {
    title: "Residential Compound",
    sector: "Real Estate",
    image: "/images/5.jpg",
    caption: "Painted panel wall with columns, residential campus, Bengaluru.",
  },
  {
    title: "Stone-Finish Design Wall",
    sector: "Real Estate",
    image: "/images/3.jpg",
    caption: "Checkered stone-look panels inspected before handover.",
  },
  {
    title: "Panel Erection",
    sector: "All",
    image: "/images/2.jpg",
    caption: "Crane erection of a textured design panel — one-piece casting.",
  },
  {
    title: "Skyline Boundary",
    sector: "Real Estate",
    image: "/images/1.jpg",
    caption: "Grey panel wall closing a city-fringe development site.",
  },
  {
    title: "Scalloped Garden Wall",
    sector: "Real Estate",
    image: "/images/8.jpg",
    caption: "Decorative scalloped wall with cut-out pattern, painted finish.",
  },
  {
    title: "School Boundary Wall",
    sector: "Institutions",
    image: "/images/9.jpg",
    caption: "Scalloped-top wall, institutional campus.",
  },
  {
    title: "Labour Colony",
    sector: "Campuses",
    image: "/images/10.jpg",
    caption: "Precast labour quarters colony, rows of modular units.",
  },
  {
    title: "Precast Site Building",
    sector: "Campuses",
    image: "/images/11.jpg",
    caption: "Complete precast building with roofing, erected in days.",
  },
  {
    title: "Perimeter with Lighting",
    sector: "Infrastructure",
    image: "/images/12.jpg",
    caption: "Wall with Y-posts, concertina wire and lighting columns.",
  },
] as const;

export const AWARD = {
  title: "TATA Power Solar Contractors Safety Award — Silver",
  project: "52 MWp Shakti Sthala Solar Power Project, Bidar, Karnataka",
  image: "/images/7.jpg",
} as const;

export const BRANCH_STATES = [
  "Karnataka",
  "Telangana",
  "Andhra Pradesh",
  "Maharashtra",
  "Odisha",
  "Tamil Nadu",
  "Gujarat",
] as const;

/* ---------- image alt map (single source) ---------- */

export const IMG_ALT: Record<string, string> = {
  "/images/1.jpg": "Grey precast panel compound wall against a city skyline",
  "/images/2.jpg": "Crane lifting a stone-textured precast panel during erection",
  "/images/3.jpg": "Two engineers inspecting a stone-finish precast wall",
  "/images/4.jpg": "Long precast compound wall at a power plant",
  "/images/5.jpg": "Painted precast wall with grey columns at a residential campus",
  "/images/6.jpg": "Tall precast wall topped with concertina wire",
  "/images/7.jpg": "Adani-branded precast wall at a solar park boundary",
  "/images/8.jpg": "Decorative scalloped precast wall with cut-out pattern",
  "/images/9.jpg": "White precast wall with blue scalloped posts",
  "/images/10.jpg": "Rows of precast labour quarters",
  "/images/11.jpg": "Complete precast building with red roof",
  "/images/12.jpg": "Precast wall with Y-posts, concertina wire and street lighting",
};
