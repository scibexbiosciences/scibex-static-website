"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { divisions, leaders, chairman } from "@/lib/site-data";
import { Reveal, Stagger, StaggerItem, SectionHead, DivisionIcon } from "@/components/UI";

const accentBg = {
  medical: "bg-gradient-to-br from-medical to-navy",
  emerald: "bg-gradient-to-br from-emerald-bright to-emerald",
  gold: "bg-gradient-to-br from-[#d98032] to-gold",
  navy: "bg-gradient-to-br from-navy to-[#3a2f6e]",
};

// --- Division cards grid ---
export function DivisionGrid({ showCta = true }) {
  return (
    <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {divisions.map((d) => (
        <StaggerItem key={d.slug}>
          <div className="group bg-white border border-navy/10 rounded-[10px] p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-medical to-emerald scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className={`w-14 h-14 rounded-[9px] grid place-items-center mb-5 text-white ${accentBg[d.accent]}`}>
              <DivisionIcon type={d.icon} />
            </div>
            <span className="text-[0.72rem] tracking-[0.16em] uppercase text-medical font-semibold">
              {d.kicker}
            </span>
            <h3 className="text-[1.4rem] mt-2 mb-3 text-navy">{d.name}</h3>
            <p className="text-slate text-sm mb-5 grow">{d.summary}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {d.tags.map((t) => (
                <span key={t} className="text-xs bg-paper text-slate px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={`/${d.slug}`}
              className="text-sm font-semibold text-navy inline-flex items-center gap-2 group-hover:gap-3 group-hover:text-medical transition-all"
            >
              Explore division <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </StaggerItem>
      ))}
      {showCta && (
        <StaggerItem>
          <div className="bg-gradient-to-br from-navy to-navy-mid text-white rounded-[10px] p-8 h-full flex flex-col justify-center">
            <h3 className="text-white text-[1.4rem]">Partner across the entire group</h3>
            <p className="text-slate-300 text-sm my-3">
              Distributors, manufacturers and investors can engage with one or every division
              through a single point of contact.
            </p>
            <Link href="/contact" className="btn btn-gold self-start">
              Start a conversation
            </Link>
          </div>
        </StaggerItem>
      )}
    </Stagger>
  );
}

// --- Leadership block ---
const leadPhoto = {
  navy: "bg-gradient-to-br from-navy to-medical",
  tru: "bg-gradient-to-br from-emerald to-[#0b5446]",
  gold: "bg-gradient-to-br from-[#9a7a30] to-gold",
};

function initials(name) {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.)\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function LeadershipBlock() {
  return (
    <>
      {/* Chairman banner */}
      <Reveal>
        <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-mid rounded-xl p-8 sm:p-11 grid sm:grid-cols-[auto_1fr] gap-9 items-center text-white shadow-lg mb-11">
          <div className="absolute w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(201,162,75,0.25),transparent_70%)] -bottom-28 -right-16" />
          <div className="w-28 h-28 rounded-full grid place-items-center font-serif text-4xl font-bold text-navy-deep bg-gradient-to-br from-gold to-gold-soft mx-auto sm:mx-0">
            {initials(chairman.name)}
          </div>
          <div className="relative text-center sm:text-left">
            <span className="text-[0.74rem] tracking-[0.18em] uppercase text-gold-soft">
              {chairman.role}
            </span>
            <h3 className="text-[1.7rem] my-1.5">{chairman.name}</h3>
            <p className="text-slate-300 text-[0.98rem]">{chairman.bio}</p>
          </div>
        </div>
      </Reveal>

      {/* Leader cards */}
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((l, i) => (
          <StaggerItem key={`${l.name}-${i}`}>
            <div className="bg-white border border-navy/10 rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md h-full">
              <div className={`h-[150px] grid place-items-center ${leadPhoto[l.theme]}`}>
                <div className="w-[74px] h-[74px] rounded-full bg-white/15 border-2 border-white/30 grid place-items-center font-serif text-2xl font-semibold text-white">
                  {initials(l.name)}
                </div>
              </div>
              <div className="p-6">
                <div className="font-serif text-[1.22rem] text-navy">{l.name}</div>
                <div className="text-sm text-medical font-semibold mt-1 mb-0.5">{l.role}</div>
                <div className="text-[0.78rem] text-slate tracking-wide">{l.entity}</div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}

// --- Generic CTA band ---
export function CtaBand({ title, text, buttonLabel = "Contact Us", href = "/contact" }) {
  return (
    <section className="bg-navy-deep relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_75%_30%,rgba(16,128,106,0.2),transparent_70%)]" />
      <div className="wrap relative z-10 text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-white text-[clamp(1.8rem,3.4vw,2.6rem)] mb-4">{title}</h2>
          <p className="text-slate-300 mb-7">{text}</p>
          <Link href={href} className="btn btn-gold">
            {buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
