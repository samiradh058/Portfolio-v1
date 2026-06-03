"use client";

import { useEffect, useState } from "react";
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

const PHRASES = [
  "Full-Stack Developer based in Pokhara, Nepal",
  "React, Next.js, FastAPI, Node.js, NestJs, PostgreSQL",
  "AI & LLM Enthusiast",
];

const TYPE_SPEED = 45; // ms per character
const DELETE_SPEED = 22; // ms per character
const HOLD_MS = 1800; // pause after fully typed
const PAUSE_MS = 400; // pause before typing next

function useTypewriter(phrases: string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), DELETE_SPEED);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, PAUSE_MS);
      return () => clearTimeout(t);
    }
  }, [charIndex, deleting, phraseIndex, phrases]);

  // Derive directly — no second effect needed
  return phrases[phraseIndex].slice(0, charIndex);
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section className="relative overflow-hidden bg-background min-h-[94vh] flex flex-col">
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
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="font-mono text-[11px] text-foreground/30">
                [
              </span>
              <span className="font-mono text-[11px] text-foreground/50 uppercase tracking-[0.15em]">
                available for work
              </span>
              <span className="font-mono text-[11px] text-foreground/30">
                ]
              </span>
            </motion.div>

            {/* identity block */}
            <motion.div variants={fade}>
              <h1 className="font-serif font-normal text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
                Samir Adhikari
              </h1>

              {/* Typewriter line */}
              <p className="mt-5 text-[18px] sm:text-[20px] leading-[1.6] font-mono min-h-[1.6em] text-green-300">
                {typed}
                <span className="inline-block w-[2px] h-[1.1em] bg-accent align-middle ml-[2px] animate-pulse" />
              </p>

              <p className="mt-6 max-w-[600px] text-[15px] leading-[1.9] text-foreground/60">
                I build scalable web systems with modern frontend and backend
                technologies, focusing on performance, clean architecture, and
                practical AI-driven solutions.
              </p>
            </motion.div>

            {/* buttons */}
            <motion.div variants={fade} className="flex flex-wrap gap-4 mt-10">
              <a
                href="#work"
                className="rounded-full bg-glass border border-glassBorder px-7 py-[14px]
                           text-sm tracking-[0.06em]
                           hover:-translate-y-1 hover:shadow-md transition-all"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-full px-7 py-[14px]
                           text-sm tracking-[0.06em]
                           bg-accent backdrop-blur-md
                           text-foreground
                           hover:-translate-y-1 hover:border-foreground/30
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
            {stats.map((s) => (
              <div
                key={s.v}
                className="group px-5 py-4 rounded-2xl
                           bg-glass backdrop-blur-xl
                           border border-glassBorder
                           shadow-sm hover:shadow-md
                           hover:-translate-y-1 transition"
              >
                <h4 className="font-serif text-[2rem] leading-none">{s.v}</h4>
                <p className="mt-2 text-[10px] uppercase tracking-[0.12em]">
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
