import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center bg-paper py-24">
      <div className="wrap text-center max-w-xl">
        <div className="font-serif text-7xl text-navy mb-3">404</div>
        <h1 className="text-2xl text-navy mb-3">Page not found</h1>
        <p className="text-slate mb-7">
          The page you are looking for may have moved. Explore the SCIBEX Biosciences Group from
          the homepage instead.
        </p>
        <Link href="/" className="btn btn-navy">Return home</Link>
      </div>
    </section>
  );
}
