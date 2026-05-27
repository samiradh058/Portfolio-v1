"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutCards } from "../_const/data";
import Label from "./Label";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stag = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const exploringTags = [
  "Python",
  "Docker",
  "LLMs",
  "Web Automation",
  "Backend Systems",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20 sm:py-28"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={stag}
      >
        <motion.div variants={fade}>
          <Label num="01" text="About" />
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          variants={fade}
          className="font-serif font-light text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] tracking-[-0.03em] text-foreground mb-8 max-w-2xl"
        >
          Evolving from frontend craft
          <br />
          into{" "}
          <em className="italic text-accent not-italic">
            full-stack systems.
          </em>
        </motion.h2>

        {/* ── Three-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1.6fr] gap-10 lg:gap-0">

          {/* Left column — stat cards */}
          <motion.div variants={fade} className="lg:pr-12">
            <div className="grid grid-cols-2 gap-3">
              {aboutCards.map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col justify-between p-4 border border-foreground/8 rounded-2xl bg-foreground/[0.03] min-h-[88px]"
                >
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-foreground/40 mb-2">
                    {card.label}
                  </p>
                  <p className="font-sans text-[13px] leading-[1.5] text-foreground/80">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vertical divider (desktop only) */}
          <div className="hidden lg:block w-px bg-foreground/10 self-stretch" />

          {/* Right column — bio + tags */}
          <motion.div
            variants={stag}
            className="lg:pl-12 flex flex-col gap-6"
          >
            <motion.p
              variants={fade}
              className="font-sans text-[15px] leading-[1.9] text-foreground/55"
            >
              I am a full-stack developer based in Pokhara, Nepal. Over the
              last 3 years, I have focused on frontend development with React
              and Next.js, building clean and practical interfaces.
            </motion.p>

            <motion.p
              variants={fade}
              className="font-sans text-[15px] leading-[1.9] text-foreground/55"
            >
              With a foundation in Node.js, Express, and NestJS, I have spent
              the last 6 months deep-diving into FastAPI and PostgreSQL while
              exploring Python, LLMs, and web automation.
            </motion.p>

            <motion.div variants={fade} className="pt-2">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-foreground/35 mb-3">
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {exploringTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[12px] px-3.5 py-1.5 border border-foreground/15 rounded-full text-foreground/55 hover:border-foreground/35 hover:text-foreground/75 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}