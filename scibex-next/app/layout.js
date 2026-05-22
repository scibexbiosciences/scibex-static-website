import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site-data";

export const metadata = {
  metadataBase: new URL("https://www.scibexbiosciences.com"),
  title: {
    default: "SCIBEX Biosciences Group — Building the Future of Integrated Biosciences",
    template: "%s | SCIBEX Biosciences Group",
  },
  description:
    "SCIBEX Biosciences Group is an integrated global biosciences, healthcare, wellness, AI and trade group connecting pharmaceuticals, Ayurveda, functional wellness beverages, global healthcare trade and preventive intelligence innovation across India and the USA.",
  keywords: [
    "SCIBEX Biosciences", "SCIBEX Biosciences Group", "SCIBEX Pharma",
    "SCIBEX IMEX", "SCIBEX Quantum Intelligence", "TruVedika", "HerVolt",
    "SugarShield", "VigorX", "biosciences company", "pharma company",
    "Ayurveda company", "functional beverages", "healthcare trade",
    "AI health innovation", "India USA healthcare company",
  ],
  authors: [{ name: "SCIBEX Biosciences Group" }],
  openGraph: {
    title: "SCIBEX Biosciences Group",
    description: "Building the Future of Integrated Biosciences.",
    url: "https://www.scibexbiosciences.com",
    siteName: "SCIBEX Biosciences Group",
    type: "website",
  },
  alternates: { canonical: "https://www.scibexbiosciences.com" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: company.name,
  url: company.website,
  email: company.email,
  slogan: company.tagline,
  description: company.positioning,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
