import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/UI";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site-data";
import { Mail, MapPin, Globe } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact SCIBEX Biosciences Group for investor, partnership, distributor, manufacturing, export, product, media and career inquiries.",
};

export default function ContactPage() {
  const details = [
    { icon: Mail, k: "Business Email", v: company.email },
    { icon: MapPin, k: "India HQ", v: "Nadiad – 387230, Gujarat, India" },
    { icon: MapPin, k: "USA HQ", v: "New Hyde Park, New York 11040, USA" },
    { icon: Globe, k: "Group Website", v: "www.scibexbiosciences.com" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s start a conversation"
        intro="Whether you are an investor, distributor, manufacturer or media partner, our team will route your inquiry to the right division."
      />

      <section className="py-[100px]">
        <div className="wrap grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <Reveal>
            <span className="eyebrow">Reach Us</span>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] mt-3 mb-4">
              Direct lines to the SCIBEX group
            </h2>
            <p className="text-slate mb-8">
              Use the form to send a structured inquiry, or reach us directly through the details
              below. Inquiries are directed to our business team.
            </p>
            <div className="flex flex-col gap-5">
              {details.map((d) => (
                <div key={d.k} className="flex gap-3.5 items-start">
                  <div className="w-11 h-11 rounded-lg bg-navy grid place-items-center shrink-0">
                    <d.icon className="w-5 h-5 text-gold-soft" />
                  </div>
                  <div>
                    <div className="text-[0.76rem] tracking-[0.1em] uppercase text-slate">
                      {d.k}
                    </div>
                    <div className="text-[0.96rem] text-navy font-medium">{d.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 grid sm:grid-cols-2 gap-4">
              {[company.hq.india, company.hq.usa].map((hq) => (
                <div key={hq.label} className="bg-paper border border-navy/10 rounded-lg p-5">
                  <div className="text-[0.72rem] tracking-[0.14em] uppercase font-semibold text-medical mb-2">
                    {hq.label}
                  </div>
                  <div className="text-sm font-semibold text-navy mb-1">{hq.entity}</div>
                  <address className="not-italic text-slate text-[0.85rem] leading-relaxed">
                    {hq.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
