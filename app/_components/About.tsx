"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutCards } from "../_const/data";
import Label from "./Label";

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
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const exploringTags = [
  "Python",
  "Docker",
  "LLMs",
  "Web Automation",
  "PostgreSQL",
  "Backend Systems",
];

export default function About() {
  // separate refs for each part
  const headingRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const leftInView = useInView(leftRef, { once: true, amount: 0.2 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.15 });
  const tagsInView = useInView(tagsRef, { once: true, amount: 0.5 });

  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32">

        {/* Label */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "show" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fade}>
            <Label num="01" text="About" />
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={fade}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
          >
            <h2 className="font-serif font-light text-[clamp(2.3rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.04em] text-foreground max-w-3xl">
              Growing from
              <span className="italic text-accent"> frontend craft</span>
              <br />
              into scalable
              <br />
              full-stack systems.
            </h2>

            <p className="text-dim leading-7 max-w-md">
              Building thoughtful interfaces while gradually moving deeper into
              backend architecture, AI, and intelligent systems.
            </p>
          </motion.div>
        </motion.div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">

          {/* LEFT CARD */}
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftInView ? "show" : "hidden"}
            variants={fade}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-[32px] border border-border bg-surface/50 backdrop-blur-xl p-7 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.16em] uppercase text-dim">
                      Based in Nepal 🇳🇵
                    </p>
                    <h3 className="mt-3 text-3xl font-serif text-foreground">
                      Full-Stack Developer
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-dim leading-7">
                  3+ years focused on frontend development using React and
                  Next.js, with growing expertise in backend engineering,
                  FastAPI, PostgreSQL, and modern system design.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  {aboutCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-2xl border border-border bg-background/40 p-4"
                    >
                      <p className="text-[10px] uppercase tracking-[0.15em] text-dim">
                        {card.label}
                      </p>
                      <p className="mt-2 text-sm text-foreground leading-6">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? "show" : "hidden"}
            variants={stagger}
            className="space-y-8"
          >
            {[
              {
                title: "Frontend Foundation",
                text: "Over the last few years, I have specialized in frontend development with React and Next.js, creating scalable interfaces with a strong focus on performance, UX, and maintainability.",
              },
              {
                title: "Backend Expansion",
                text: "Alongside frontend, I explored Node.js, Express, and NestJS, eventually diving deeper into FastAPI and PostgreSQL to strengthen backend architecture skills.",
              },
              {
                title: "Current Focus",
                text: "Recently, I've been exploring Python, LLMs, web automation, and AI systems while continuing to improve my full-stack engineering depth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fade}
                className="relative border-l border-border pl-8"
              >
                <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-accent" />
                <h4 className="text-xl font-medium text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-dim leading-8">{item.text}</p>
              </motion.div>
            ))}

            {/* Currently Exploring — own ref so it triggers when YOU scroll to it */}
            <motion.div
              ref={tagsRef}
              initial="hidden"
              animate={tagsInView ? "show" : "hidden"}
              variants={stagger}
              className="pt-6"
            >
              <motion.p
                variants={fade}
                className="text-xs uppercase tracking-[0.18em] text-dim mb-4"
              >
                Currently Exploring
              </motion.p>

              <div className="flex flex-wrap gap-3">
                {exploringTags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.92 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    className="px-4 py-2 rounded-full border border-border hover:border-accent/20 hover:text-accent bg-surface/50 text-sm text-dim transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}