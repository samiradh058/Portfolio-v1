"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skills } from "../_const/data";
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

const leftCol = skills.filter((_, i) => i % 2 === 0);
const rightCol = skills.filter((_, i) => i % 2 === 1);

function SkillRow({
  cat,
  items,
  idx,
  open,
  setOpen,
}: {
  cat: string;
  items: readonly string[];
  idx: number;
  open: string | null;
  setOpen: (v: string | null) => void;
}) {
  const isOpen = open === cat;

  return (
    <div
      className="border-t border-border"
      onMouseEnter={() => setOpen(cat)}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="flex items-center justify-between py-5 sm:py-6 cursor-default">
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-[0.14em] text-foreground/30 w-6">
            0{idx + 1}
          </span>
          <span
            className={`font-serif text-[1.5rem] sm:text-[1.85rem] font-light tracking-[-0.02em] transition-colors duration-300 ${
              isOpen ? "text-accent" : "text-foreground"
            }`}
          >
            {cat}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.12em] text-foreground/50 hidden sm:block">
            {items.length} tools
          </span>
          <span
            className={`w-6 h-6 flex items-center justify-center rounded-full border text-sm font-light leading-none transition-all duration-300 ${
              isOpen
                ? "border-accent text-accent rotate-45"
                : "border-border text-dim"
            }`}
          >
            +
          </span>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-12 flex flex-wrap gap-2">
              {items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.04, ease: "easeOut" }}
                  className="font-sans text-[13px] px-4 py-2 rounded-full bg-surface border border-border text-dim hover:border-accent/20 hover:text-accent transition-colors duration-200 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── reusable animated row wrapper ──
function AnimatedSkillRow({
  cat,
  items,
  idx,
  open,
  setOpen,
}: {
  cat: string;
  items: readonly string[];
  idx: number;
  open: string | null;
  setOpen: (v: string | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fade}
    >
      <SkillRow cat={cat} items={items} idx={idx} open={open} setOpen={setOpen} />
    </motion.div>
  );
}

export default function Skills() {
  const [open, setOpen] = useState<string | null>(null);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "show" : "hidden"}
          variants={stag}
        >
          <motion.div variants={fade}>
            <Label num="03" text="Skills & Stack" />
          </motion.div>

          <motion.div
            variants={fade}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-12"
          >
            <h2 className="font-serif font-light text-[clamp(1.9rem,3.5vw,2.8rem)] tracking-[-0.025em] text-foreground">
              Core stack and <em className="italic">learning focus.</em>
            </h2>
            <p className="font-mono text-[10px] tracking-[0.16em] text-foreground/50 uppercase">
              {skills.reduce((a, s) => a + s.items.length, 0)} technologies
            </p>
          </motion.div>
        </motion.div>

        {/* Columns — each row has its own inView trigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
          {/* Left column */}
          <div>
            {leftCol.map(({ cat, items }, i) => (
              <AnimatedSkillRow
                key={cat}
                cat={cat}
                items={items}
                idx={i * 2}
                open={open}
                setOpen={setOpen}
              />
            ))}
            <div className="border-t border-foreground/14" />
          </div>

          {/* Right column */}
          <div>
            {rightCol.map(({ cat, items }, i) => (
              <AnimatedSkillRow
                key={cat}
                cat={cat}
                items={items}
                idx={i * 2 + 1}
                open={open}
                setOpen={setOpen}
              />
            ))}
            <div className="border-t border-foreground/14" />
          </div>
        </div>

      </div>
    </section>
  );
}