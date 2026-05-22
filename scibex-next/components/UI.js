"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- Scroll reveal wrapper ---
export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Staggered group ---
export function Stagger({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Section heading block ---
export function SectionHead({ eyebrow, title, intro, center = false, light = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      <span className={`eyebrow ${light ? "eyebrow-light" : ""} ${center ? "before:hidden" : ""}`}>
        {eyebrow}
      </span>
      <h2
        className={`text-[clamp(2rem,4vw,3rem)] mt-4 mb-3 ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-base sm:text-lg ${light ? "text-slate-300" : "text-slate"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

// --- Brand mark (DNA + ladder) ---
export function BrandMark({ size = 42, className = "", variant = "dark" }) {
  // variant: "dark"  -> for light backgrounds (uses navy logo)
  //          "light" -> for dark backgrounds (uses white logo)
  const src = variant === "light" ? "/logo-scibex-white.png" : "/logo-scibex.png";
  return (
    <Image
      src={src}
      alt="SCIBEX Biosciences Group"
      width={size}
      height={size}
      priority
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

// --- Division icon set ---
export function DivisionIcon({ type, className = "w-7 h-7" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", className };
  switch (type) {
    case "pharma":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M10 3h4M12 3v4M7 11a5 5 0 0110 0v7a3 3 0 01-3 3h-4a3 3 0 01-3-3z" />
          <path d="M7 14h10" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3c5 3 7 8 5 13M12 3c-5 3-7 8-5 13M7 16h10M12 21v-5" />
        </svg>
      );
    case "bottle":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 3h10l-1 16a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
          <path d="M7.5 9h9M12 13v5" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "atom":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    default:
      return null;
  }
}
