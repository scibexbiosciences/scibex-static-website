import PageHero from "@/components/PageHero";
import { Reveal, SectionHead } from "@/components/UI";
import { CtaBand } from "@/components/Sections";

export const metadata = {
  title: "Sustainability",
  description:
    "SCIBEX Biosciences Group's commitments to responsible, sustainable growth across healthcare, wellness and trade.",
};

const commitments = [
  { t: "Responsible sourcing", d: "Working toward responsible, traceable sourcing across Ayurvedic and nutraceutical supply chains." },
  { t: "Considered packaging", d: "Designing product packaging with material efficiency and recyclability in mind." },
  { t: "Ethical operations", d: "Honest communication, fair partnerships and responsible conduct across every division." },
  { t: "Community wellness", d: "A long-term ambition to widen access to preventive health and wellness." },
  { t: "Efficient supply chains", d: "Building trade and logistics operations that reduce waste and duplication." },
  { t: "Long-horizon thinking", d: "Decisions measured against decades of impact, not short-term gain." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Responsible growth, by design"
        intro="SCIBEX approaches sustainability as part of how the group is built — woven into sourcing, operations and long-term strategy."
      />

      <section className="py-[100px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Our Commitments"
            title="Where responsibility shapes the group"
            intro="These commitments describe the direction SCIBEX is working toward as it grows."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 0.07}>
                <div className="bg-white border border-navy/10 rounded-[10px] p-7 h-full">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-bright to-emerald grid place-items-center mb-4">
                    <span className="font-serif text-white text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-[1.1rem] text-navy mb-2">{c.t}</h3>
                  <p className="text-sm text-slate">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-xs text-slate text-center mt-10 max-w-2xl mx-auto">
              These statements describe SCIBEX's intended commitments and direction of travel. They
              are aspirational and do not represent certified environmental or social claims.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Partner on responsible growth"
        text="We welcome partners who share our commitment to building healthcare and wellness responsibly."
        buttonLabel="Start a conversation"
      />
    </>
  );
}
