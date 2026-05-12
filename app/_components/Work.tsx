"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

import Label from "./Label";
import { personalProjects, professionalProjects } from "../_const/data";

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

// ─── Shared Tags ──────────────────────────────────────────────────────────────
function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-[0.4rem]">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-sans text-[11px] px-[10px] py-[3px] rounded-full border border-foreground/14 text-foreground/60 bg-background"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// ─── Shared image + content shell ─────────────────────────────────────────────
function CardShell({
  image,
  name,
  desc,
  tags,
  badge,
  href,
}: {
  image: string;
  name: string;
  desc: string;
  tags: string[];
  badge: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          width={800}
          height={500}
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${href ? "group-hover:scale-105" : ""}`}
        />
        {href && (
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center font-sans text-[13px] tracking-[0.08em] px-5 py-2 rounded-full bg-background text-foreground">
              View <Icon icon="mdi:arrow-right" />
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-serif text-[1.25rem] sm:text-[1.35rem] font-normal tracking-[-0.02em] text-foreground">
            {name}
          </h3>
          {badge}
        </div>
        <p className="font-sans text-[13px] leading-[1.65] text-foreground/60">
          {desc}
        </p>
        <Tags tags={tags} />
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variants={fade}
        className="group flex flex-col border border-foreground/14 rounded-[18px] bg-background overflow-hidden cursor-pointer"
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={fade}
      className="flex flex-col border border-foreground/14 rounded-[18px] bg-background overflow-hidden"
    >
      {inner}
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section id="work" ref={ref} className="bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-16 sm:py-[6.5rem]">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stag}
        >
          <motion.div variants={fade}>
            <Label num="02" text="Work" />
          </motion.div>

          {/* ── Personal ── */}
          <motion.div
            variants={fade}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-8"
          >
            <h2 className="font-serif font-light text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] tracking-[-0.025em] text-foreground">
              Personal projects
            </h2>
            <span className="font-mono text-[11px] tracking-[0.1em] text-foreground/50 sm:self-end">
              {personalProjects.length} projects
            </span>
          </motion.div>

          <motion.div
            variants={stag}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16"
          >
            {personalProjects.map((p) => (
              <CardShell
                key={p.id}
                image={p.image}
                name={p.name}
                desc={p.desc}
                tags={p.tags}
                href={p.url}
                badge={
                  <span className="font-mono text-[11px] tracking-[0.1em] text-foreground/50 shrink-0">
                    {p.year}
                  </span>
                }
              />
            ))}
          </motion.div>

          {/* ── Commercial ── */}
          <motion.div
            variants={fade}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-8"
          >
            <h2 className="font-serif font-light text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] tracking-[-0.025em] text-foreground">
              Commercial projects
            </h2>
            <span className="font-mono text-[11px] tracking-[0.1em] text-foreground/50 sm:self-end">
              {professionalProjects.length} projects
            </span>
          </motion.div>

          <motion.div
            variants={stag}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {professionalProjects.map((p) => (
              <CardShell
                key={p.id}
                image={p.image}
                name={p.name}
                desc={p.desc}
                tags={p.tags}
                badge={
                  <span className="font-mono text-[10px] tracking-[0.12em] px-3 py-1 rounded-full border border-accent/40 text-accent bg-accent/5 shrink-0 whitespace-nowrap">
                    Confidential
                  </span>
                }
              />
            ))}
          </motion.div>

          <div className="border-t border-foreground/14 mt-10 sm:mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
