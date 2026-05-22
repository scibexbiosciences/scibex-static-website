import Link from "next/link";
import PageHero from "@/components/PageHero";
import Metrics from "@/components/Metrics";
import { Reveal, SectionHead } from "@/components/UI";
import { CtaBand } from "@/components/Sections";
import { company } from "@/lib/site-data";

export const metadata = {
  title: "About SCIBEX",
  description:
    "SCIBEX Biosciences Group is an integrated global biosciences, healthcare, wellness, AI and trade group operating across India and the USA.",
};

const pillars = [
  { t: "Integrity", d: "Honest communication and responsible claims across every division and market." },
  { t: "Integration", d: "Five divisions designed to reinforce one another within a single platform." },
  { t: "Long-Horizon", d: "A build-and-scale strategy measured in decades, not quarters." },
  { t: "Science & Heritage", d: "Modern scientific rigour held in balance with timeless wellness traditions." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SCIBEX"
        title="An integrated biosciences group, built for the long term"
        intro={company.positioning + "."}
      />

      <section className="py-[100px]">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] mt-3 mb-4">
              One conviction at the centre of everything
            </h2>
            <p className="text-slate mb-4">
              SCIBEX Biosciences Group was formed around a single conviction — that modern science
              and timeless wellness belong together. Rather than operating as isolated businesses,
              our divisions are designed as one connected platform spanning pharmaceuticals,
              Ayurveda, functional nutrition, global trade and preventive health intelligence.
            </p>
            <p className="text-slate">
              The group operates through two registered entities — SCIBEX Biosciences Pvt. Ltd. in
              India and SCIBEX Biosciences Inc. in the United States — forming a deliberate
              India–USA business bridge for healthcare and wellness.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-navy to-navy-mid text-white rounded-xl p-10 shadow-lg">
              <span className="eyebrow eyebrow-light">Our Tagline</span>
              <h3 className="text-2xl mt-3 mb-4">{company.tagline}</h3>
              <p className="font-serif italic text-slate-300 mb-2">
                {company.taglineAlt}
              </p>
              <p className="text-sm text-slate-400 mt-4">
                A supporting promise that guides how every SCIBEX division communicates and
                operates.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Metrics />

      <section className="py-[100px] bg-paper">
        <div className="wrap">
          <SectionHead
            eyebrow="What We Stand For"
            title="The principles behind the group"
            intro="Four pillars that shape decisions across every division of SCIBEX Biosciences Group."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="bg-white border border-navy/10 rounded-[10px] p-7 h-full">
                  <div className="font-serif text-2xl text-medical mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[1.15rem] text-navy mb-2">{p.t}</h3>
                  <p className="text-sm text-slate">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="wrap grid md:grid-cols-2 gap-6">
          {[company.hq.india, company.hq.usa].map((hq) => (
            <Reveal key={hq.label}>
              <div className="bg-paper border border-navy/10 rounded-[10px] p-9">
                <div className="text-[0.74rem] tracking-[0.16em] uppercase font-semibold text-medical mb-3">
                  {hq.label}
                </div>
                <h3 className="text-[1.3rem] text-navy mb-1.5">{hq.entity}</h3>
                <div className="text-sm font-semibold text-medical mb-2.5">{hq.registered}</div>
                <address className="not-italic text-slate text-[0.92rem] leading-relaxed">
                  {hq.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Learn more about the group"
        text="Explore our leadership, divisions and partnership opportunities — or get in touch directly."
        buttonLabel="Contact SCIBEX"
      />
    </>
  );
}
