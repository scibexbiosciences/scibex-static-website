import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/UI";
import { LeadershipBlock, CtaBand } from "@/components/Sections";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the founders and leadership of SCIBEX Biosciences Group — operating under one ownership, governance and strategic vision.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Group Leadership & Governance"
        title="The people building SCIBEX"
        intro="All companies and divisions operate under the ownership, governance and strategic vision of SCIBEX Biosciences Group."
      />

      <section className="py-[100px]">
        <div className="wrap">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow">Ownership Statement</span>
              <p className="text-slate mt-4 text-lg">
                “All companies and divisions listed below operate under the ownership, governance,
                and strategic vision of SCIBEX Biosciences Group.”
              </p>
            </div>
          </Reveal>
          <LeadershipBlock />
        </div>
      </section>

      <section className="py-[90px] bg-paper">
        <div className="wrap max-w-3xl">
          <Reveal>
            <span className="eyebrow">Governance Approach</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] mt-3 mb-4">
              One framework across every division
            </h2>
            <p className="text-slate mb-4">
              SCIBEX Biosciences Group provides unified strategic direction across SCIBEX Pharma,
              TruVedika, SCIBEX Functional Beverages, SCIBEX IMEX and SCIBEX Quantum Intelligence.
              SCIBEX IMEX is managed directly by the group, while SCIBEX Quantum Intelligence is
              managed by SCIBEX Biosciences Inc.
            </p>
            <p className="text-slate">
              This shared governance ensures that quality standards, compliance principles and
              brand integrity remain consistent regardless of which division a partner engages.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Connect with the SCIBEX team"
        text="For investor, partnership or media inquiries, our leadership team welcomes a conversation."
        buttonLabel="Get in touch"
      />
    </>
  );
}
