import Link from "next/link";
import { company } from "@/lib/site-data";
import { BrandMark } from "@/components/UI";

const footerCols = [
  {
    title: "Divisions",
    links: [
      { label: "SCIBEX Pharma", href: "/scibex-pharma" },
      { label: "TruVedika", href: "/truvedika" },
      { label: "Functional Beverages", href: "/functional-beverages" },
      { label: "SCIBEX IMEX", href: "/scibex-imex" },
      { label: "Quantum Intelligence", href: "/quantum-intelligence" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About SCIBEX", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Quality & Compliance", href: "/quality-compliance" },
      { label: "Investor & Partners", href: "/investor-partners" },
      { label: "Careers", href: "/careers" },
      { label: "News & Media", href: "/news-media" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-[#aab5c8] pt-[74px]">
      <div className="wrap">
        <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] pb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark size={50} variant="light" />
              <span className="flex flex-col leading-none border-l border-white/15 pl-2.5">
                <span className="font-serif font-bold text-[1.05rem] text-white tracking-tight">
                  Biosciences Group
                </span>
                <span className="text-[0.58rem] tracking-[0.22em] text-[#7e8ba3] uppercase mt-1">
                  Integrated Biosciences
                </span>
              </span>
            </div>
            <p className="text-sm my-5 max-w-[300px]">
              An integrated global biosciences, healthcare, wellness, AI and trade group —
              operating across India and the United States.
            </p>
            <p className="font-serif italic text-gold-soft text-[0.98rem]">
              “{company.tagline}”
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-white text-[0.8rem] tracking-[0.14em] uppercase font-semibold mb-4">
                {col.title}
              </h4>
              {col.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-[0.87rem] py-1.5 hover:text-white hover:pl-1.5 transition-all"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div>
            <h4 className="font-sans text-white text-[0.8rem] tracking-[0.14em] uppercase font-semibold mb-4">
              Connect
            </h4>
            <a
              href={`mailto:${company.email}`}
              className="block text-[0.87rem] py-1.5 hover:text-white transition-colors"
            >
              {company.email}
            </a>
            <a
              href={company.website}
              className="block text-[0.87rem] py-1.5 hover:text-white transition-colors"
            >
              www.scibexbiosciences.com
            </a>
            <a
              href={company.truvedikaSite}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[0.87rem] py-1.5 hover:text-white transition-colors"
            >
              Visit TruVedika ›
            </a>
            <Link
              href="/contact"
              className="block text-[0.87rem] py-1.5 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-wrap justify-between gap-4 text-[0.8rem]">
          <span>© {new Date().getFullYear()} SCIBEX Biosciences Group. All rights reserved.</span>
          <div className="flex gap-6 flex-wrap">
            <Link href="/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/" className="hover:text-white">Terms of Use</Link>
            <Link href="/quality-compliance" className="hover:text-white">Compliance</Link>
          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="bg-navy text-[0.76rem] text-[#7e8ba3] py-4.5 leading-relaxed">
        <div className="wrap py-1">
          SCIBEX Biosciences Group operates through two registered entities: SCIBEX Biosciences
          Pvt. Ltd. (India) and SCIBEX Biosciences Inc. (USA). Information on this website is
          provided for general corporate communication. It does not constitute medical advice, an
          offer of securities, or a claim of regulatory approval by any national authority. Product
          availability and permitted claims vary by market and are subject to applicable local laws.
        </div>
      </div>
    </footer>
  );
}
