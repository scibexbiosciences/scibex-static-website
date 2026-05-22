// lib/site-data.js
// Single source of truth for SCIBEX Biosciences Group content.

export const company = {
  name: "SCIBEX Biosciences Group",
  tagline: "Where Modern Science Meets Timeless Wellness",
  taglineAlt: "Building the Future of Integrated Biosciences",
  positioning:
    "Integrated Global Biosciences, Healthcare, Wellness, AI and Trade Group",
  email: "business@scibexbiosciences.com",
  website: "https://www.scibexbiosciences.com",
  truvedikaSite: "https://www.truvedika.com",
  hq: {
    india: {
      label: "India Headquarters",
      entity: "SCIBEX Biosciences Pvt. Ltd.",
      registered: "Registered Entity — India",
      lines: [
        "2468 Shop No. 12",
        "Shree Hari Residency",
        "Tundel Pij Road",
        "Nadiad – 387230",
        "Gujarat, India",
      ],
    },
    usa: {
      label: "USA Headquarters",
      entity: "SCIBEX Biosciences Inc.",
      registered: "Registered Entity — United States",
      lines: [
        "957 N 7th Street",
        "New Hyde Park",
        "New York 11040",
        "United States",
      ],
    },
  },
};

// Primary navigation with mega-menu groupings.
export const nav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About SCIBEX", href: "/about", desc: "Who we are & what we stand for" },
      { label: "Leadership", href: "/leadership", desc: "Founders, board & division heads" },
      { label: "Sustainability", href: "/sustainability", desc: "Responsible growth commitments" },
    ],
  },
  {
    label: "Group Companies",
    children: [
      { label: "SCIBEX Pharma", href: "/scibex-pharma", desc: "Modern pharmaceutical sciences" },
      { label: "TruVedika", href: "/truvedika", desc: "Ayurveda powered by modern science" },
      { label: "Functional Beverages", href: "/functional-beverages", desc: "HerVolt, SugarShield, VigorX" },
      { label: "SCIBEX IMEX", href: "/scibex-imex", desc: "Global trade & distribution" },
      { label: "SCIBEX Quantum Intelligence", href: "/quantum-intelligence", desc: "Preventive health innovation" },
      { label: "All Group Companies", href: "/group-companies", desc: "Overview of every division" },
    ],
  },
  { label: "Products", href: "/products" },
  {
    label: "Company",
    children: [
      { label: "Research & Innovation", href: "/research-innovation", desc: "R&D vision & roadmap" },
      { label: "Quality & Compliance", href: "/quality-compliance", desc: "Standards & readiness" },
      { label: "Investor & Partner Relations", href: "/investor-partners", desc: "Strategic alliance opportunities" },
      { label: "Careers", href: "/careers", desc: "Build the future with us" },
      { label: "News & Media", href: "/news-media", desc: "Latest from the group" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// Five core divisions.
export const divisions = [
  {
    slug: "scibex-pharma",
    name: "SCIBEX Pharma",
    kicker: "Pharmaceuticals",
    icon: "pharma",
    accent: "medical",
    positioning: "Modern Pharmaceutical Sciences Division",
    summary:
      "Ethical, doctor-focused healthcare products built on GMP-aligned manufacturing partnerships.",
    intro:
      "SCIBEX Pharma is the group's pharmaceutical sciences division — focused on ethical, doctor-focused healthcare products and quality healthcare access. We work through GMP-aligned manufacturing partnerships and disciplined documentation systems, prioritising clinical relevance, responsible distribution and a clear path toward export-ready operations.",
    focus: [
      "Prescription healthcare",
      "Generic medicines",
      "Healthcare products",
      "Ethical pharma practice",
      "Clinical healthcare products",
      "GMP-aligned manufacturing partnerships",
      "Doctor-focused product distribution",
      "Quality healthcare access",
      "Future export-ready operations",
    ],
    tags: ["Prescription", "Generics", "Clinical"],
  },
  {
    slug: "truvedika",
    name: "TruVedika",
    kicker: "Ayurveda & Wellness",
    icon: "leaf",
    accent: "emerald",
    positioning: "Ancient Ayurveda Powered by Modern Wellness Science",
    summary:
      "Herbal healthcare and preventive daily wellness, rooted in traditional Indian science.",
    intro:
      "TruVedika is the group's wellness division, bringing traditional Indian science into a contemporary, evidence-minded format. Founded by Mrs. Asha Shah, it is built for a global audience seeking natural health innovation rooted in heritage.",
    focus: [
      "Ayurvedic formulations",
      "Herbal healthcare",
      "Preventive wellness",
      "Daily health solutions",
      "Traditional Indian science",
      "Global wellness expansion",
      "Natural health innovation",
    ],
    tags: ["Ayurveda", "Herbal", "Preventive"],
    logo: "/logo-truvedika.png",
    logoBg: "light",
    externalSite: "https://www.truvedika.com",
  },
  {
    slug: "functional-beverages",
    name: "SCIBEX Functional Beverages",
    kicker: "Functional Nutrition",
    icon: "bottle",
    accent: "gold",
    positioning: "Science-Driven Functional Beverage Innovation",
    summary:
      "Purpose-built drinks for hormonal energy, glucose support and everyday vitality.",
    intro:
      "SCIBEX Functional Beverages develops beverages with intent — each product targets a defined wellness moment rather than generic stimulation. The division is positioned as a global challenger brand in the modern functional drink category, competing through formulation quality and brand integrity.",
    focus: [
      "Women's wellness beverages",
      "Men's performance beverages",
      "Metabolic wellness drinks",
      "Energy drinks",
      "Digestive health drinks",
      "Stress relief drinks",
      "Sleep & recovery beverages",
      "Immunity drinks",
      "Ayurveda-inspired sparkling beverages",
      "Sports hydration products",
      "Functional soft drinks",
    ],
    tags: ["HerVolt™", "SugarShield™", "VigorX™"],
    products: [
      { name: "HerVolt™", desc: "Women's Hormonal Energy & Wellness Drink" },
      { name: "SugarShield™", desc: "Smart Glucose Support Functional Drink" },
      { name: "VigorX™", desc: "Men's Vitality & Performance Energy Drink" },
    ],
  },
  {
    slug: "scibex-imex",
    name: "SCIBEX IMEX",
    kicker: "Global Trade",
    icon: "globe",
    accent: "medical",
    positioning: "Global Trade • Import • Export • Distribution",
    summary:
      "A cross-border bridge connecting healthcare and wellness markets between India and the USA.",
    intro:
      "SCIBEX IMEX is the group's international trade division — a cross-border bridge built to move healthcare, Ayurvedic and wellness products between markets, with India and the USA at its core. The division supports private-label manufacturing, nutraceutical sourcing, distributor networks and cross-border regulatory coordination.",
    focus: [
      "International healthcare trade",
      "Pharma export",
      "Ayurvedic export",
      "Beverage export",
      "Nutraceutical sourcing",
      "Global distributor network",
      "Private label manufacturing",
      "Supply chain solutions",
      "India-USA business bridge",
      "International sourcing",
      "Cross-border regulatory coordination",
      "B2B healthcare trade",
    ],
    tags: ["Import", "Export", "Distribution"],
    logo: "/logo-imex.png",
    logoBg: "light",
  },
  {
    slug: "quantum-intelligence",
    name: "SCIBEX Quantum Intelligence",
    kicker: "Health Intelligence",
    icon: "atom",
    accent: "navy",
    positioning: "Future Preventive Healthcare Intelligence Platform",
    summary:
      "A long-horizon roadmap toward personalised, predictive, intelligence-led care.",
    intro:
      "SCIBEX Quantum Intelligence is the group's corporate innovation division — a long-horizon initiative envisioning a connected, preventive and personalised approach to health. This is a forward-looking roadmap, not a finished product: it articulates where SCIBEX believes care is heading.",
    focus: [
      "AI health ecosystem",
      "Personal health intelligence",
      "Future wearable integration",
      "Future biosensor ecosystem",
      "Predictive healthcare vision",
      "Personalised care intelligence",
      "Health risk monitoring vision",
      "Biomarker intelligence roadmap",
      "Preventive care technology",
    ],
    tags: ["AI Vision", "Biosensors", "Preventive"],
    logo: "/logo-quantum.png",
    logoBg: "light",
  },
];

// Leadership.
export const chairman = {
  name: "Mr. Hemant R. Shah",
  role: "Founder & Chairman",
  bio: "Founder and Chairman of SCIBEX Biosciences Group, providing unified strategic direction across every division — and serving as Managing Director of SCIBEX Pharma and Co-Founder & Managing Director of TruVedika.",
};

export const leaders = [
  { name: "Mrs. Asha Shah", role: "Founder", entity: "TruVedika", theme: "tru" },
  { name: "Mr. Hemant R. Shah", role: "Co-Founder & Managing Director", entity: "TruVedika", theme: "navy" },
  { name: "Mr. Hemant R. Shah", role: "Managing Director", entity: "SCIBEX Pharma", theme: "navy" },
  { name: "Harvinder Singh", role: "CEO & Operational Partner", entity: "SCIBEX Biosciences Inc.", theme: "gold" },
  { name: "Mrs. Amandeep Kaur", role: "Co-Founder", entity: "SCIBEX Biosciences Inc.", theme: "gold" },
  { name: "Group Stewardship", role: "Managed by SCIBEX Biosciences Group", entity: "SCIBEX IMEX & SCIBEX Quantum Intelligence", theme: "navy" },
];

// Animated metrics.
export const metrics = [
  { value: 2, label: "Registered Global Entities" },
  { value: 5, label: "Core Business Divisions" },
  { value: 2, label: "India & USA Headquarters" },
  { value: 3, label: "Product Brands In Pipeline" },
  { value: 1, label: "Integrated Biosciences Platform" },
];

// Contact form inquiry types.
export const inquiryTypes = [
  "Investor Inquiry",
  "Partnership Inquiry",
  "Distributor Inquiry",
  "Manufacturing Inquiry",
  "Export Inquiry",
  "Import Inquiry",
  "SCIBEX IMEX Inquiry",
  "TruVedika Inquiry",
  "Product Inquiry",
  "SCIBEX Quantum Intelligence Inquiry",
  "Career Inquiry",
  "Media Inquiry",
  "General Inquiry",
];

// Careers departments.
export const departments = [
  "Pharma", "Trade", "Operations", "Ayurveda", "Product Development",
  "R&D", "Innovation", "Digital Health", "Marketing", "Global Business",
];

// Quality & compliance principles.
export const qualityPrinciples = [
  { t: "GMP-aligned partners", d: "Manufacturing carried out with partners aligned to Good Manufacturing Practice principles." },
  { t: "Responsible development", d: "Products developed responsibly, with clear scope and honest communication." },
  { t: "Documentation systems", d: "Structured documentation supporting traceability across the product lifecycle." },
  { t: "Batch quality principles", d: "Consistency principles applied to batch-level quality and review." },
  { t: "Regulatory readiness", d: "Processes designed to mature toward formal regulatory readiness." },
  { t: "Export compliance readiness", d: "Trade operations built with export compliance readiness in mind." },
  { t: "Transparency", d: "A commitment to transparent claims and clear product information." },
  { t: "Country-specific review", d: "Each market entered with country-specific compliance review." },
];

// Partner / investor categories.
export const partnerTypes = [
  { t: "Investor Relations", d: "Structured dialogue with aligned, long-horizon investors." },
  { t: "Strategic Alliances", d: "Cross-sector alliances that strengthen the group platform." },
  { t: "Manufacturing Partnerships", d: "GMP-aligned manufacturing collaboration opportunities." },
  { t: "Distribution Partnerships", d: "Distributor networks across healthcare and wellness." },
  { t: "Export Collaboration", d: "Cross-border trade collaboration through SCIBEX IMEX." },
  { t: "Research Partnerships", d: "Joint research aligned to our innovation roadmap." },
  { t: "Technology Partnerships", d: "Technology collaboration for digital and preventive health." },
  { t: "Healthcare Ecosystem", d: "Partnerships across the wider healthcare ecosystem." },
];

// News items.
export const news = [
  { tag: "Group", title: "SCIBEX Biosciences Group formalises its five-division structure", excerpt: "Pharma, TruVedika, Functional Beverages, IMEX and Quantum Intelligence united under one governance framework." },
  { tag: "USA", title: "SCIBEX Biosciences Inc. anchors the group's US expansion", excerpt: "The New York entity establishes the platform for international growth and trade coordination." },
  { tag: "Beverages", title: "Functional beverage portfolio takes shape with HerVolt™, SugarShield™ & VigorX™", excerpt: "Three purpose-built brands lead the division's challenger strategy." },
  { tag: "Innovation", title: "SCIBEX Quantum Intelligence outlines its preventive-health roadmap", excerpt: "A long-horizon vision for personalised, intelligence-led care is published." },
];
