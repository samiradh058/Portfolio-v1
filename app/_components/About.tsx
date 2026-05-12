"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutCards } from "../_const/data";
import Label from "./Label";

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-[1280px] mx-auto px-6 sm:px-10 py-16 sm:py-[6.5rem]"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={stag}
      >
        <motion.div variants={fade}>
          <Label num="01" text="About" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-24 items-start">
          {/* Left */}
          <motion.div variants={fade}>
            <h2 className="font-serif font-light text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.18] tracking-[-0.025em] text-foreground mb-8 sm:mb-10">
              Evolving from frontend craft into{" "}
              <em className="italic text-accent">full-stack systems.</em>
            </h2>

            <div className="grid grid-cols-2 gap-[0.65rem]">
              {aboutCards.map((card) => (
                <div key={card.label} className="p-4 bg-surface rounded-xl">
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-foreground/50 mb-1.5">
                    {card.label}
                  </p>
                  <p className="font-sans text-[13px] leading-[1.55] text-foreground">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={stag} className="flex flex-col">
            <motion.p
              variants={fade}
              className="font-sans text-base leading-[1.88] text-foreground/60 mb-[1.4rem]"
            >
              I am a full-stack developer based in Pokhara, Nepal. Over the last
              3 years, I have focused on frontend development with React and
              Next.js, building clean and practical interfaces.
            </motion.p>
            <motion.p
              variants={fade}
              className="font-sans text-base leading-[1.88] text-foreground/60 mb-10"
            >
              In the last 6 months, I have been diving deeper into backend
              systems with Node.js, NestJS, FastAPI, and PostgreSQL while
              exploring Python, LLMs, and web automation.
            </motion.p>

            <motion.div variants={fade}>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/50 mb-3">
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {exploringTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs px-[14px] py-[5px] border border-foreground/20 rounded-full text-foreground/60"
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
