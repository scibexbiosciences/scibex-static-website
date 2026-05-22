"use client";

import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_20%,rgba(43,143,224,0.28),transparent_70%),radial-gradient(ellipse_45%_55%_at_10%_90%,rgba(16,128,106,0.22),transparent_70%),linear-gradient(160deg,#06132b,#0a1f44_55%,#102a55)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>
      <div className="wrap relative z-10 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow eyebrow-light"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold mt-4 mb-5"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-300 font-light max-w-2xl"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
