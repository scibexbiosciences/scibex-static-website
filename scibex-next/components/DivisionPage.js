"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal, SectionHead, DivisionIcon } from "@/components/UI";
import { CtaBand } from "@/components/Sections";

const visualBg = {
  medical: "bg-gradient-to-br from-navy to-medical",
  emerald: "bg-gradient-to-br from-emerald to-[#0c5c4d]",
  gold: "bg-gradient-to-br from-[#b9692a] to-gold",
  navy: "bg-gradient-to-br from-[#1a1740] to-navy",
};

export default function DivisionPage({ division, index }) {
  const d = division;
  return (
    <>
      <PageHero eyebrow={d.kicker} title={d.name} intro={d.positioning}>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-gold">
            Partner with this division <ArrowRight className="w-4 h-4" />
          </Link>
          {d.externalSite && (
            <a
              href={d.externalSite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Visit {d.name}
            </a>
          )}
        </div>
      </PageHero>

      {/* Intro + visual */}
      <section className="py-[100px]">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="eyebrow">{`Division ${String(index).padStart(2, "0")}`}</span>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] mt-3 mb-4">
              {d.positioning}
            </h2>
            <p className="text-slate text-base leading-relaxed mb-5">{d.intro}</p>
            <Link href="/contact" className="btn btn-ghost-navy">
              Make an inquiry
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            {d.logo ? (
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="bg-white grid place-items-center p-12 min-h-[300px]">
                  <Image
                    src={d.logo}
                    alt={`${d.name} logo`}
                    width={420}
                    height={320}
                    className="object-contain max-h-[230px] w-auto"
                  />
                </div>
                <div className={`p-6 text-white ${visualBg[d.accent]}`}>
                  <span className="text-[0.72rem] tracking-[0.18em] uppercase opacity-75">
                    {d.kicker}
                  </span>
                  <p className="text-white/90 text-sm mt-1.5">{d.summary}</p>
                </div>
              </div>
            ) : (
              <div
                className={`relative overflow-hidden rounded-xl p-11 min-h-[360px] flex flex-col justify-end text-white shadow-lg ${visualBg[d.accent]}`}
              >
                <div className="absolute top-7 right-7 opacity-[0.16]">
                  <DivisionIcon type={d.icon} className="w-32 h-32" />
                </div>
                <span className="text-[0.74rem] tracking-[0.18em] uppercase opacity-70">
                  {d.kicker}
                </span>
                <div className="font-serif text-[1.7rem] my-2">{d.name}</div>
                <p className="text-white/85 text-sm">{d.summary}</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-[100px] bg-paper">
        <div className="wrap">
          <SectionHead
            eyebrow="Focus Areas"
            title={`What ${d.name} does`}
            intro="The capabilities and priorities that define this division's work."
            center
          />
          <Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.focus.map((f, i) => (
                <div
                  key={f}
                  className="bg-white border border-navy/10 rounded-lg p-5 flex items-start gap-3"
                >
                  <span className="font-serif text-medical text-lg shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products (beverages only) */}
      {d.products && (
        <section className="py-[100px]">
          <div className="wrap">
            <SectionHead
              eyebrow="Flagship Products"
              title="Purpose-built functional drinks"
              intro="Each product targets a defined wellness moment — formulated with intent, communicated honestly."
              center
            />
            <div className="grid sm:grid-cols-3 gap-6">
              {d.products.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08}>
                  <div className="bg-gradient-to-br from-navy to-navy-mid text-white rounded-xl p-8 h-full">
                    <div className="font-serif text-2xl text-gold-soft mb-2">{p.name}</div>
                    <p className="text-slate-300 text-sm">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-xs text-slate text-center mt-8 max-w-2xl mx-auto">
                Product positioning is aspirational and category-focused. SCIBEX Functional
                Beverages does not claim superiority over, or affiliation with, any other brand,
                and makes no health or medical claims.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      <CtaBand
        title={`Work with ${d.name}`}
        text="Speak with our team about partnership, distribution, manufacturing or investment opportunities across this division."
        buttonLabel="Start a conversation"
      />
    </>
  );
}
