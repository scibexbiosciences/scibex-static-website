import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal, SectionHead } from "@/components/UI";
import { CtaBand } from "@/components/Sections";
import { departments } from "@/lib/site-data";

export const metadata = {
  title: "Careers",
  description:
    "Careers at SCIBEX Biosciences Group — build the future of integrated biosciences across pharma, trade, Ayurveda, R&D, innovation and more.",
};

const reasons = [
  { t: "Build something lasting", d: "Join a group designed for the long term, where your work shapes divisions as they grow." },
  { t: "Cross-division exposure", d: "Move between pharmaceuticals, wellness, beverages, trade and innovation." },
  { t: "India–USA scope", d: "Be part of a genuinely cross-border organisation spanning two markets." },
  { t: "Purpose-led work", d: "Contribute to healthcare and wellness that aims to make a real difference." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers at SCIBEX"
        title="Build the future of integrated biosciences"
        intro="We are building a group for the long term — and we are looking for people who want to build it with us."
      />

      <section className="py-[100px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Why SCIBEX"
            title="A place to grow with the group"
            intro="Talent across science, trade, technology and operations can grow alongside the divisions they help shape."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.07}>
                <div className="bg-white border border-navy/10 rounded-[10px] p-7 h-full">
                  <div className="font-serif text-2xl text-medical mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[1.1rem] text-navy mb-2">{r.t}</h3>
                  <p className="text-sm text-slate">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-paper">
        <div className="wrap">
          <SectionHead
            eyebrow="Departments"
            title="Where we hire across the group"
            intro="Express interest even where a role is not yet posted — we review proactive applications."
            center
          />
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {departments.map((d) => (
                <span
                  key={d}
                  className="text-sm bg-white border border-navy/10 px-4 py-2 rounded-full text-navy font-medium"
                >
                  {d}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-12 bg-gradient-to-br from-navy to-navy-mid text-white rounded-xl p-9 sm:p-11 text-center max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl mb-3">Ready to build with us?</h3>
              <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
                Submit a career inquiry through our contact form — select “Career Inquiry” as the
                inquiry type and tell us where you would like to contribute.
              </p>
              <Link href="/contact" className="btn btn-gold">Submit a career inquiry</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Questions about working at SCIBEX?"
        text="Our team is happy to talk about current and future opportunities across the group."
        buttonLabel="Get in touch"
      />
    </>
  );
}
