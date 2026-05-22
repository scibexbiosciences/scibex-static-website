"use client";

import { useEffect, useRef, useState } from "react";
import { metrics as defaultMetrics } from "@/lib/site-data";

function Counter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const duration = 1200;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setCount(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="text-center px-4 py-5 border-r border-white/10 last:border-r-0 max-lg:border-b"
    >
      <div className="font-serif font-semibold text-[clamp(2.4rem,4vw,3.4rem)] bg-gradient-to-r from-white to-gold-soft bg-clip-text text-transparent">
        {count}
      </div>
      <div className="text-sm text-[#aab5c8] mt-1.5">{label}</div>
    </div>
  );
}

export default function Metrics({ items = defaultMetrics }) {
  return (
    <section className="bg-navy-deep relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,rgba(43,143,224,0.18),transparent_70%)]" />
      <div className="wrap relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {items.map((m) => (
            <Counter key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
