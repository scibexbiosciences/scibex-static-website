"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { company, news } from "@/lib/site-data";
import { Reveal, SectionHead } from "@/components/UI";
import { DivisionGrid, LeadershipBlock } from "@/components/Sections";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy-deep text-white overflow-hidden pt-28 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_78%_18%,rgba(43,143,224,0.32),transparent_70%),radial-gradient(ellipse_50%_60%_at_12%_90%,rgba(16,128,106,0.28),transparent_70%),linear-gradient(160deg,#06132b,#0a1f44_55%,#102a55)]" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>
        <div className="wrap relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 text-[0.76rem] tracking-[0.14em] uppercase text-[#cdd6e4] mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-bright shadow-[0_0_10px_#16a085]" />
            Integrated Global Biosciences · India & USA
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.6rem,5.6vw,4.6rem)] font-semibold tracking-[-0.025em] mb-6"
          >
            Building the Future of{" "}
            <span className="italic bg-gradient-to-r from-gold-soft via-gold to-gold-soft bg-clip-text text-transparent">
              Integrated Biosciences
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-300 font-light max-w-2xl mb-9"
          >
            {company.name} connects pharmaceuticals, Ayurveda, functional wellness beverages,
            global healthcare trade, and preventive intelligence innovation — under one unified
            vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3.5"
          >
            <Link href="/group-companies" className="btn btn-gold">
              Explore SCIBEX <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
            <a href={company.truvedikaSite} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Visit TruVedika
            </a>
            <Link href="/investor-partners" className="btn btn-ghost">Partner With Us</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-9 mt-14 pt-8 border-t border-white/10"
          >
            {[
              ["2", "Registered Global Entities"],
              ["5", "Core Business Divisions"],
              ["2", "India & USA Headquarters"],
              ["1", "Integrated Biosciences Platform"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl text-white font-semibold">{n}</div>
                <div className="text-[0.78rem] text-slate-400 tracking-wide uppercase">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-navy py-8">
        <div className="wrap flex flex-wrap items-center justify-between gap-7">
          <span className="text-[0.76rem] tracking-[0.18em] uppercase text-[#7e8ba3]">
            An integrated biosciences ecosystem
          </span>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["SCIBEX Pharma", "TruVedika", "Functional Beverages", "SCIBEX IMEX", "Quantum Intelligence"].map(
              (s) => (
                <span key={s} className="text-[#aab5c8] text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {s}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* CORPORATE OVERVIEW */}
      <section className="py-[110px] bg-paper">
        <div className="wrap grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <Reveal>
            <span className="eyebrow">About SCIBEX</span>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] mt-4 mb-5">
              One group. Five divisions. A single mission for human wellness.
            </h2>
            <p className="text-slate mb-4">
              {company.name} is an integrated biosciences, healthcare, wellness, AI and trade
              group built on a simple conviction — that modern science and timeless wellness
              belong together.
            </p>
            <p className="text-slate mb-6">
              Operating through two registered entities in India and the United States, the group
              is designed as a long-horizon platform: each division strengthens the others, held
              to the same standard of integrity, quality and transparency.
            </p>
            <ul className="flex flex-col gap-3.5">
              {[
                "Unified governance under SCIBEX Biosciences Group",
                "An India\u2013USA business bridge for healthcare & wellness",
                "Responsible, GMP-aligned product development partnerships",
                "A clear roadmap toward preventive, intelligence-led care",
              ].map((p) => (
                <li key={p} className="flex gap-3 items-start text-[0.96rem]">
                  <Check className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative bg-gradient-to-br from-navy to-navy-mid rounded-xl p-10 text-white shadow-lg overflow-hidden">
              <div className="absolute w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(43,143,224,0.35),transparent_70%)] -top-20 -right-14" />
              <span className="eyebrow eyebrow-light">Group Vision</span>
              <h3 className="text-[1.4rem] mt-3.5 mb-2">{company.tagline}</h3>
              <p className="font-serif italic text-slate-300">
                &ldquo;All companies and divisions of SCIBEX operate under one ownership, one governance
                framework, and one strategic vision.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-px bg-white/10 mt-7 rounded-lg overflow-hidden">
                {[
                  ["India", "Primary Operations Base"],
                  ["USA", "International Expansion Hub"],
                  ["B2B + B2C", "Dual Market Model"],
                  ["Long-Horizon", "Build & Scale Strategy"],
                ].map(([v, k]) => (
                  <div key={k} className="bg-navy p-5">
                    <div className="font-serif text-xl text-gold-soft">{v}</div>
                    <div className="text-[0.78rem] text-slate-400">{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Metrics />

      {/* DIVISIONS */}
      <section className="py-[110px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Group Companies & Divisions"
            title="Five divisions, one architecture of trust"
            intro="Each division carries the SCIBEX brand promise into a distinct field of human health \u2014 from prescription medicine to preventive intelligence."
            center
          />
          <DivisionGrid />
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-[110px] bg-paper">
        <div className="wrap">
          <SectionHead
            eyebrow="Group Leadership & Governance"
            title="The people building SCIBEX"
            intro="All companies and divisions operate under the ownership, governance and strategic vision of SCIBEX Biosciences Group."
            center
          />
          <LeadershipBlock />
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-[110px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Global Presence"
            title="Two headquarters, one connected group"
            intro="SCIBEX operates through registered entities in India and the United States, forming a deliberate India\u2013USA business bridge."
            center
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[company.hq.india, company.hq.usa].map((hq) => (
              <Reveal key={hq.label}>
                <div className="bg-white border border-navy/10 rounded-[10px] p-9 hover:-translate-y-1.5 hover:shadow-md transition-all">
                  <div className="text-[0.74rem] tracking-[0.16em] uppercase font-semibold text-medical flex items-center gap-2.5 mb-3.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-bright" />
                    {hq.label}
                  </div>
                  <h3 className="text-[1.3rem] text-navy mb-2">{hq.entity}</h3>
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
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="py-[110px] bg-paper">
        <div className="wrap">
          <SectionHead
            eyebrow="News & Media"
            title="Latest from the group"
            intro="Updates from across SCIBEX Biosciences Group and its divisions."
            center
          />
          <div className="max-w-3xl mx-auto">
            {news.map((n) => (
              <Reveal key={n.title}>
                <Link
                  href="/news-media"
                  className="flex gap-5 py-6 border-b border-navy/10 hover:pl-3.5 hover:bg-white transition-all"
                >
                  <span className="text-[0.76rem] text-medical font-semibold w-20 shrink-0 pt-0.5 uppercase">
                    {n.tag}
                  </span>
                  <span>
                    <span className="block font-serif text-[1.02rem] text-navy mb-1">
                      {n.title}
                    </span>
                    <span className="block text-sm text-slate">{n.excerpt}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/news-media" className="btn btn-ghost-navy">
              View all news
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-navy-deep relative overflow-hidden py-[100px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_75%_30%,rgba(16,128,106,0.2),transparent_70%)]" />
        <div className="wrap relative z-10 text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow eyebrow-light before:hidden justify-center">Get in touch</span>
            <h2 className="text-white text-[clamp(1.9rem,3.6vw,2.8rem)] mt-4 mb-4">
              Let&rsquo;s build the future of biosciences together
            </h2>
            <p className="text-slate-300 mb-7">
              Investors, distributors, manufacturers and partners are invited to start a
              conversation with our team.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center">
              <Link href="/contact" className="btn btn-gold">Contact SCIBEX</Link>
              <Link href="/investor-partners" className="btn btn-ghost">Partner With Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
