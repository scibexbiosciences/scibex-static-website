"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { nav, company } from "@/lib/site-data";
import { BrandMark } from "@/components/UI";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-navy-deep text-[#cdd6e4] text-[0.79rem] tracking-wide py-2 text-center">
        <span>
          <strong className="text-gold-soft font-semibold">{company.name}</strong>
          {" — now operating across two registered global entities in India & the USA. "}
          <Link href="/contact" className="text-white border-b border-white/30 ml-1">
            Partner with us ›
          </Link>
        </span>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-navy/10 transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="wrap flex items-center justify-between h-[74px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="SCIBEX Biosciences Group home">
            <BrandMark size={48} variant="dark" />
            <span className="flex flex-col leading-none border-l border-navy/15 pl-2.5">
              <span className="font-serif font-bold text-[1.05rem] text-navy tracking-tight">
                Biosciences Group
              </span>
              <span className="text-[0.58rem] tracking-[0.22em] text-slate uppercase mt-1">
                Integrated Biosciences
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-ink rounded hover:text-medical hover:bg-paper transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-ink rounded hover:text-medical hover:bg-paper transition-colors">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform" />
                  </button>
                )}
                {item.children && (
                  <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-navy/10 rounded-lg shadow-lg min-w-[280px] p-2.5">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-3.5 py-2.5 rounded-md hover:bg-paper hover:text-medical transition-colors"
                      >
                        <span className="block text-sm font-medium">{c.label}</span>
                        {c.desc && (
                          <span className="block text-xs text-slate font-normal mt-0.5">
                            {c.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2.5">
            <a
              href={company.truvedikaSite}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block text-[0.82rem] font-semibold text-emerald px-4 py-2.5 border-[1.5px] border-emerald/30 rounded-[3px] hover:bg-emerald hover:text-white hover:border-emerald transition-all"
            >
              Visit TruVedika
            </a>
            <Link href="/contact" className="btn btn-navy hidden sm:inline-flex !px-5 !py-2.5">
              Partner With Us
            </Link>
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[74px] bottom-0 bg-white z-[99] overflow-y-auto px-6 py-6">
          {nav.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-lg font-medium border-b border-navy/10"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <div className="pt-4 pb-1 text-xs font-semibold tracking-[0.16em] uppercase text-medical">
                    {item.label}
                  </div>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-base border-b border-navy/10"
                    >
                      {c.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
          <a
            href={company.truvedikaSite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-4 text-emerald font-semibold"
          >
            Visit TruVedika <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn btn-navy w-full justify-center mt-2"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </>
  );
}
