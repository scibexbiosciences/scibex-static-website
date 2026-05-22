import PageHero from "@/components/PageHero";
import { Reveal, SectionHead } from "@/components/UI";
import { CtaBand } from "@/components/Sections";
import { news } from "@/lib/site-data";

export const metadata = {
  title: "News & Media",
  description:
    "Latest news and media updates from SCIBEX Biosciences Group and its five divisions.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Media"
        title="Latest from the group"
        intro="Updates and announcements from across SCIBEX Biosciences Group and its divisions."
      />

      <section className="py-[100px]">
        <div className="wrap max-w-3xl">
          <div className="flex flex-col gap-5">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.06}>
                <article className="bg-white border border-navy/10 rounded-[10px] p-7 hover:shadow-md transition-all">
                  <span className="inline-block text-[0.7rem] tracking-[0.14em] uppercase font-semibold text-medical bg-paper px-3 py-1 rounded-full mb-3">
                    {n.tag}
                  </span>
                  <h2 className="text-[1.25rem] text-navy mb-2">{n.title}</h2>
                  <p className="text-slate text-sm">{n.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 bg-paper border border-navy/10 rounded-[10px] p-7 text-center">
              <h3 className="text-[1.15rem] text-navy mb-2">Media inquiries</h3>
              <p className="text-sm text-slate mb-4">
                Journalists and media partners are welcome to contact our team for information,
                interviews or further detail on SCIBEX Biosciences Group.
              </p>
              <a href="/contact" className="btn btn-ghost-navy">Submit a media inquiry</a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Stay connected with SCIBEX"
        text="For the latest updates, partnership news and announcements, reach out to our communications team."
        buttonLabel="Contact SCIBEX"
      />
    </>
  );
}
