import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal, SectionHead } from "@/components/UI";
import { CtaBand } from "@/components/Sections";
import { divisions } from "@/lib/site-data";

export const metadata = {
  title: "Products",
  description:
    "SCIBEX functional beverage brands HerVolt, SugarShield and VigorX, alongside healthcare and Ayurvedic product directions across the group.",
};

const beverages = divisions.find((d) => d.slug === "functional-beverages");

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Purpose-built products across the SCIBEX group"
        intro="From functional beverages to healthcare and Ayurvedic product directions — every SCIBEX product is built with intent and communicated honestly."
      />

      <section className="py-[100px]">
        <div className="wrap">
          <SectionHead
            eyebrow="SCIBEX Functional Beverages"
            title="Flagship beverage brands"
            intro="Three science-driven functional drinks, each designed around a defined wellness moment."
            center
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {beverages.products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-gradient-to-br from-navy to-navy-mid text-white rounded-xl p-8 h-full">
                  <div className="font-serif text-2xl text-gold-soft mb-2">{p.name}</div>
                  <p className="text-slate-300 text-sm">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-paper">
        <div className="wrap">
          <SectionHead
            eyebrow="Product Directions"
            title="Categories in development"
            intro="The functional beverage division is building toward a broad portfolio of purpose-led drinks."
            center
          />
          <Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {beverages.focus.map((f) => (
                <div
                  key={f}
                  className="bg-white border border-navy/10 rounded-lg p-5 text-sm text-ink flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-emerald rotate-45 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Across the Group"
            title="Healthcare & wellness product directions"
            intro="Beyond beverages, SCIBEX divisions develop healthcare and Ayurvedic product directions."
            center
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-paper border border-navy/10 rounded-[10px] p-9 h-full">
                <h3 className="text-[1.3rem] text-navy mb-2">SCIBEX Pharma</h3>
                <p className="text-slate text-sm mb-4">
                  Prescription healthcare, generic medicines and clinical healthcare products,
                  developed through GMP-aligned manufacturing partnerships.
                </p>
                <Link href="/scibex-pharma" className="btn btn-ghost-navy">View Pharma</Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-paper border border-navy/10 rounded-[10px] p-9 h-full">
                <h3 className="text-[1.3rem] text-navy mb-2">TruVedika</h3>
                <p className="text-slate text-sm mb-4">
                  Ayurvedic formulations and herbal healthcare for preventive, daily wellness —
                  available directly via the TruVedika website.
                </p>
                <Link href="/truvedika" className="btn btn-ghost-navy">View TruVedika</Link>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-xs text-slate text-center mt-10 max-w-2xl mx-auto">
              Product availability and any permitted claims vary by market and are subject to
              applicable local laws. Information here is for general corporate communication and
              does not constitute medical advice.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Interested in a SCIBEX product?"
        text="Distributors, retailers and partners can request product and availability information from our team."
        buttonLabel="Make a product inquiry"
      />
    </>
  );
}
