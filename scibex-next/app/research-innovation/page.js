import PageHero from "@/components/PageHero";
import { Reveal, SectionHead, DivisionIcon } from "@/components/UI";
import { CtaBand } from "@/components/Sections";

export const metadata = {
  title: "Research & Innovation",
  description:
    "How SCIBEX Biosciences Group approaches research, development and innovation — including the SCIBEX Quantum Intelligence preventive-health roadmap.",
};

const focusAreas = [
  { t: "AI health ecosystem", d: "A vision for connected personal health intelligence across the SCIBEX platform." },
  { t: "Biomarker & biosensor roadmap", d: "Future integration of wearables and biosensors to support health-risk monitoring." },
  { t: "Predictive, personalised care", d: "A roadmap toward personalised care intelligence and preventive care technology." },
  { t: "Responsible formulation", d: "Product development grounded in evidence-minded, transparent practice." },
  { t: "Cross-division R&D", d: "Research that connects pharma, Ayurveda and functional nutrition." },
  { t: "Collaborative research", d: "Joint research partnerships aligned to the group's innovation roadmap." },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Innovation as a group-wide discipline"
        intro="SCIBEX treats research and innovation as a shared capability — connecting every division and pointing toward a preventive, intelligence-led future."
      />

      <section className="py-[100px]">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="eyebrow">Our Approach</span>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] mt-3 mb-4">
              From reactive treatment to predictive wellbeing
            </h2>
            <p className="text-slate mb-4">
              Research at SCIBEX is organised around a clear belief: that healthcare is moving
              from reactive treatment toward predictive, personalised and preventive care. Our
              innovation work spans formulation science, functional nutrition and a long-horizon
              digital health roadmap.
            </p>
            <p className="text-slate">
              SCIBEX Quantum Intelligence — the group's corporate innovation division — articulates
              this roadmap. It is a forward-looking vision rather than a finished product, and is
              described honestly as such.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1740] to-navy text-white rounded-xl p-11 min-h-[340px] flex flex-col justify-end shadow-lg">
              <div className="absolute top-7 right-7 opacity-[0.16]">
                <DivisionIcon type="atom" className="w-32 h-32" />
              </div>
              <span className="text-[0.74rem] tracking-[0.18em] uppercase opacity-70">
                Innovation Division
              </span>
              <div className="font-serif text-[1.7rem] my-2">SCIBEX Quantum Intelligence</div>
              <p className="text-white/85 text-sm">
                A long-horizon roadmap toward personalised, predictive, intelligence-led care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[100px] bg-paper">
        <div className="wrap">
          <SectionHead
            eyebrow="Focus Areas"
            title="Where our innovation effort is directed"
            intro="The research priorities and roadmap themes guiding the group."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06}>
                <div className="bg-white border border-navy/10 rounded-[10px] p-7 h-full">
                  <div className="font-serif text-2xl text-medical mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[1.1rem] text-navy mb-2">{f.t}</h3>
                  <p className="text-sm text-slate">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-xs text-slate text-center mt-10 max-w-2xl mx-auto">
              Roadmap items describe SCIBEX's intended direction of development. They are not
              claims of current capability, certification or regulatory approval.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Explore a research partnership"
        text="We welcome research and technology partners aligned with our innovation roadmap."
        buttonLabel="Discuss collaboration"
      />
    </>
  );
}
