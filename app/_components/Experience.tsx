"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

export default function Experience() {
  // separate refs for each part
  const headingRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.15 });

  return (
    <section id="experience" className="bg-glass">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        {/* Label */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "show" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fade}>
            <Label num="04" text="Experience" />
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={fade}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-12"
          >
            <h2 className="font-serif font-light text-[clamp(1.9rem,3.5vw,2.8rem)] tracking-[-0.025em]">
              Work Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* Main layout */}
        <div className="flex flex-col gap-10">
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? "show" : "hidden"}
            variants={stagger}
            className="space-y-8 bg-background p-8 rounded-lg border border-glassBorder"
          >
            {[
              {
                title: "Frontend Developer",
                company: "Wow FinStack Nepal",
                text: "Contributed to the development and maintenance of commercial banking projects. Collaborated closely with backend teams and designers to implement secure, high-performance user interfaces for financial applications. Played a key role in modernizing legacy frontend architectures.",
                url: "https://wowfinstacknepal.com/",
                date: "July 2025 - June 2026",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fade}
                className="relative border-l border-glassBorderLight pl-8 group"
              >
                <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-accent" />
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-medium text-foreground mb-1">
                    {item.title}
                  </h4>
                  <span className="text-sm text-foreground/80 bg-glass border border-glassBorder px-2 py-1 rounded-lg">
                    {item.date}
                  </span>
                </div>
                <p
                  className="text-accent/80 leading-8 cursor-pointer group-hover:text-accent"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  {item.company}
                </p>
                <p className="mt-4 text-foreground/60 leading-7 w-[calc(100%-2rem)]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
