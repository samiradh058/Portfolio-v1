"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { stats } from "../_const/data";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
<section className="relative overflow-hidden bg-white min-h-[92vh] flex flex-col">
      {/* glow */}
      <div className="absolute left-[60%] top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />

<div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-24 sm:pt-32 pb-20 flex-1 flex flex-col justify-center w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center"
        >
          {/* LEFT */}
          <div>
            {/* pill */}
            <motion.div
              variants={fade}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full
                         bg-white/60 backdrop-blur-xl border border-black/10 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-black/70">
                Open to collaborations
              </span>
            </motion.div>

            {/* identity block */}
            <motion.div variants={fade}>
              <h1 className="font-serif font-normal text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
                Samir Adhikari
              </h1>

              <p className="mt-5 text-[18px] sm:text-[20px] text-black/70 leading-[1.6]">
                Full-Stack Developer based in Pokhara, Nepal
              </p>

              <p className="mt-6 max-w-[600px] text-[15px] leading-[1.9] text-black/60">
                I build scalable web systems with modern frontend and backend
                technologies, focusing on performance, clean architecture,
                and practical AI-driven solutions.
              </p>
            </motion.div>

            {/* buttons */}
            <motion.div variants={fade} className="flex flex-wrap gap-4 mt-10">
              <a
                href="#work"
                className="rounded-full bg-foreground text-background px-7 py-[14px]
                           text-sm tracking-[0.06em]
                           hover:-translate-y-1 hover:shadow-md transition-all"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="rounded-full px-7 py-[14px]
                           text-sm tracking-[0.06em]
                           border border-foreground/15
                           bg-white/40 backdrop-blur-md
                           text-foreground
                           hover:-translate-y-1 hover:border-foreground/30 hover:bg-white/60
                           transition-all"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={fade}
            className="lg:justify-self-end w-full max-w-[420px] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-black/50 mb-2">
              Developer Stats
            </p>

            {stats.map((s) => (
              <div
                key={s.v}
                className="group px-5 py-4 rounded-2xl
                           bg-white/60 backdrop-blur-xl
                           border border-black/10
                           shadow-sm hover:shadow-md
                           hover:-translate-y-1 transition"
              >
                <h4 className="font-serif text-[2rem] leading-none text-black">
                  {s.v}
                </h4>

                <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-black/50">
                  {s.l}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}