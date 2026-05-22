import PageHero from "@/components/PageHero";
import { SectionHead } from "@/components/UI";
import { DivisionGrid, CtaBand } from "@/components/Sections";

export const metadata = {
  title: "Group Companies",
  description:
    "Explore the five divisions of SCIBEX Biosciences Group: SCIBEX Pharma, TruVedika, Functional Beverages, SCIBEX IMEX and SCIBEX Quantum Intelligence.",
};

export default function GroupCompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="Group Companies & Divisions"
        title="Five divisions, one architecture of trust"
        intro="Each division carries the SCIBEX brand promise into a distinct field of human health — from prescription medicine to preventive intelligence."
      />

      <section className="py-[100px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Brand Architecture"
            title="A master brand, consistently expressed"
            intro="Every SCIBEX division shares one design family and one set of values — a master-brand architecture that signals trust across pharmaceuticals, wellness, beverages, trade and innovation."
            center
          />
          <DivisionGrid showCta={false} />
        </div>
      </section>

      <CtaBand
        title="Engage with one or every division"
        text="A single point of contact connects you to the full SCIBEX group — pharma, Ayurveda, beverages, trade and innovation."
        buttonLabel="Start a conversation"
      />
    </>
  );
}
