import PageHero from "@/components/PageHero";
import { Reveal, SectionHead } from "@/components/UI";
import { CtaBand } from "@/components/Sections";
import { partnerTypes } from "@/lib/site-data";

export const metadata = {
  title: "Investor & Partner Relations",
  description:
    "Partnership and investor relations at SCIBEX Biosciences Group — strategic alliances, manufacturing, distribution, export, research and technology collaboration.",
};

export default function InvestorPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor & Partner Relations"
        title="Build alongside an integrated biosciences group"
        intro="SCIBEX engages strategic partners across manufacturing, distribution, research and technology — through a single, coordinated point of contact."
      />

      <section className="py-[100px]">
        <div className="wrap">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow">Important Note</span>
              <p className="text-slate mt-4">
                SCIBEX Biosciences Group does not offer any public stock, shares or securities
                through this website. Investor relations here refers to structured dialogue with
                aligned, long-horizon partners. Nothing on this page constitutes an offer or
                solicitation of investment.
              </p>
            </div>
          </Reveal>

          <SectionHead
            eyebrow="Ways to Partner"
            title="Eight routes to working with SCIBEX"
            intro="Whatever your field, there is likely a way to collaborate across the group's five divisions."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnerTypes.map((p, i) => (
              <Reveal key={p.t} delay={(i % 4) * 0.06}>
                <div className="bg-white border border-navy/10 rounded-[9px] p-7 h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="font-serif text-gold text-base">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[1.02rem] text-navy mt-2 mb-1.5">{p.t}</h3>
                  <p className="text-sm text-slate">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px] bg-paper">
        <div className="wrap grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="eyebrow">Why SCIBEX</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] mt-3 mb-4">
              One relationship, five divisions
            </h2>
            <p className="text-slate mb-4">
              Partnering with SCIBEX means access to an integrated platform spanning
              pharmaceuticals, Ayurveda, functional beverages, global trade and health innovation.
              A single conversation can open collaboration across the whole group.
            </p>
            <p className="text-slate">
              The group's India–USA structure also positions partners for cross-border opportunity,
              coordinated through SCIBEX IMEX.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-navy to-navy-mid text-white rounded-xl p-9 shadow-lg">
              <h3 className="text-xl mb-4">What partners can expect</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                <li>• A single coordinated point of contact</li>
                <li>• Access across all five SCIBEX divisions</li>
                <li>• An India–USA cross-border bridge</li>
                <li>• Honest, transparent commercial dialogue</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Discuss a partnership with SCIBEX"
        text="Tell us about your organisation and goals — our team will route your inquiry to the right division."
        buttonLabel="Contact our team"
      />
    </>
  );
}
