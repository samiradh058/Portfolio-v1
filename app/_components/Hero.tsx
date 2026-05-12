"use client";

import { motion } from "framer-motion";
import { stats } from "../_const/data";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0, 0.2, 1] as const },
  },
};

const stag = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Available pill */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="inline-flex items-center gap-2 mb-4 sm:mb-4 px-4 py-1.5 border border-foreground/14 rounded-full bg-foreground/5 mt-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent [animation:pulse_2.2s_ease-in-out_infinite]" />
        <span className="font-sans text-[11px] tracking-[0.12em] uppercase flex items-center gap-2">
          Full-Stack Developer{" "}
          <span className="w-[2px] h-[2px] rounded-full bg-accent inline-block shrink-0" />{" "}
          Exploring LLMs
        </span>
      </motion.div>

      {/* Heading + stat cards */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stag}
        className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-10 items-end mb-10 sm:mb-12"
      >
        <motion.h1
          variants={fade}
          className="font-serif font-light leading-[1.02] tracking-[-0.04em] text-[clamp(2.5rem,7vw,6.4rem)] text-foreground"
        >
          Shaping elegant,
          <br />
          <span className="italic text-accent">reliable</span> digital products
          <br />
          with grounded AI depth.
        </motion.h1>

        <motion.div
          variants={fade}
          className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-1 lg:pb-0 px-2"
        >
          {stats.map((s) => (
            <div
              key={s.v}
              className="flex-shrink-0 px-[1.4rem] py-[1.1rem] rounded-[14px] border border-foreground/14 min-w-[120px] lg:min-w-0 transition-transform duration-300 hover:-translate-x-2 bg-surface"
            >
              <p className="font-serif font-light text-[1.9rem] leading-none tracking-[-0.03em] text-foreground">
                {s.v}
              </p>
              <p className="font-sans text-[11px] tracking-[0.07em] text-foreground/60 mt-1">
                {s.l}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stag}
        className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-6 pt-8 sm:pt-9 border-t border-foreground/14"
      >
        <motion.p
          variants={fade}
          className="font-sans text-[15px] leading-[1.82] text-foreground/60 max-w-[540px]"
        >
          Full-stack developer with 3+ years in frontend and 1 year of
          professional experience. Currently focused on backend systems, Python,
          LLMs, and web automation.
        </motion.p>

        <motion.div variants={fade} className="flex gap-[0.65rem]">
          <a
            href="#work"
            className="font-sans text-[13px] tracking-[0.08em] px-6 sm:px-7 py-[13px] rounded-full bg-foreground text-background hover:-translate-y-0.5 hover:opacity-90 transition-all duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-sans text-[13px] tracking-[0.08em] px-6 sm:px-7 py-[13px] rounded-full border border-foreground/20 text-foreground hover:-translate-y-0.5 transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
