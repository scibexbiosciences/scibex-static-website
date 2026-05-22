import PageHero from "@/components/PageHero";
import { Reveal, SectionHead } from "@/components/UI";
import { CtaBand } from "@/components/Sections";
import { qualityPrinciples } from "@/lib/site-data";

export const metadata = {
  title: "Quality & Compliance",
  description:
    "SCIBEX Biosciences Group's approach to quality and compliance — GMP-aligned partnerships, documentation systems, regulatory readiness and transparency.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Standards that travel with every product"
        intro="Quality is treated as a group-wide discipline — applied consistently from formulation through to cross-border distribution."
      />

      <section className="py-[100px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Our Principles"
            title="Eight commitments behind every SCIBEX product"
            intro="The working principles that shape how the group develops, documents and distributes its products."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualityPrinciples.map((q, i) => (
              <Reveal key={q.t} delay={(i % 4) * 0.06}>
                <div className="bg-white border border-navy/10 rounded-[9px] p-7 h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="font-serif text-xl text-medical">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[1.02rem] text-navy mt-2.5 mb-1.5">{q.t}</h3>
                  <p className="text-sm text-slate">{q.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-9 bg-paper border-l-[3px] border-gold rounded-r-lg p-6 sm:p-7 max-w-3xl">
              <p className="text-sm text-slate">
                <strong className="text-navy">A note on claims.</strong> SCIBEX Biosciences Group
                describes its standards, intentions and roadmap honestly. References to GMP-aligned
                partnerships, regulatory readiness and compliance describe our working principles
                and direction of travel. They are not claims of certification or approval by any
                specific national regulator, including the FDA or any equivalent authority. Product
                availability and permitted claims are always subject to applicable laws in each
                market.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[90px] bg-paper">
        <div className="wrap grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="eyebrow">Cross-Border Compliance</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] mt-3 mb-4">
              Country-specific review at every step
            </h2>
            <p className="text-slate mb-4">
              Because SCIBEX operates across India, the United States and international trade
              markets, compliance is treated as market-specific. Each market is entered with
              country-specific compliance review, and trade operations through SCIBEX IMEX are
              built with export compliance readiness in mind.
            </p>
            <p className="text-slate">
              Structured documentation systems support traceability across the product lifecycle,
              and batch quality principles are applied to maintain consistency.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-navy to-navy-mid text-white rounded-xl p-9 shadow-lg">
              <h3 className="text-xl mb-4">Readiness, stated honestly</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                <li>• Processes designed to mature toward formal regulatory readiness</li>
                <li>• Export compliance readiness across trade operations</li>
                <li>• Transparent claims and clear product information</li>
                <li>• Documentation supporting traceability and review</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Questions about our standards?"
        text="Partners and regulators are welcome to contact us for further detail on our quality and compliance approach."
        buttonLabel="Contact our team"
      />
    </>
  );
}
