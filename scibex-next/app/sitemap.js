const base = "https://www.scibexbiosciences.com";

const routes = [
  "", "about", "leadership", "group-companies", "scibex-pharma", "truvedika",
  "functional-beverages", "scibex-imex", "quantum-intelligence", "products",
  "research-innovation", "quality-compliance", "sustainability",
  "investor-partners", "news-media", "careers", "contact",
];

export default function sitemap() {
  return routes.map((r) => ({
    url: `${base}/${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
