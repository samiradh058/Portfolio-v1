"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

import Label from "./Label";
import { personalProjects, professionalProjects } from "../_const/data";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stag = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ───────────────────────── Types ─────────────────────────
type Project = {
  id: string;
  name: string;
  desc: string;
  image?: string;
  tags: string[];
  icon?: string;
  url?: string;
  year?: string;
};

// ───────────────────────── Tags ─────────────────────────
function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] px-3 py-1 rounded-full border border-glassBorderLight bg-background backdrop-blur-md text-foreground/60"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// ───────────────────────── Featured ─────────────────────────
function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.a
      variants={fade}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid lg:grid-cols-2 rounded-[28px] overflow-hidden border border-foreground/10 bg-glass backdrop-blur-xl hover:-translate-y-1 hover:shadow-sm hover:border-accent/20 transition duration-300"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-[1.04] transition duration-700 group-hover:blur-[0.8px]"
          />
        )}
        {project.url && (
          <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="bg-background flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-full backdrop-blur-md text-white shadow-sm">
              View Project
              <Icon icon="mdi:arrow-top-right" className="text-[14px]" />
            </span>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-10 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/50">
            Featured Project
          </p>
          <h3 className="mt-3 font-serif text-[2rem] sm:text-[2.6rem] leading-[1.1] text-foreground">
            {project.name}
          </h3>
          <p className="mt-4 text-foreground/60 leading-[1.7] text-[14px] sm:text-[15px]">
            {project.desc}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <Tags tags={project.tags} />
          {project.year && (
            <span className="text-[11px] tracking-[0.12em] text-foreground/40">
              {project.year}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

// ───────────────────────── Card ─────────────────────────
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      variants={fade}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-[22px] overflow-hidden border border-glassBorder bg-glass backdrop-blur-xl hover:-translate-y-1 transition duration-300 hover:border-accent/20 hover:shadow-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[0.8px]"
          />
        )}
        {project.url && (
          <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-full bg-background border border-black/10 text-white shadow-sm">
              View Project
              <Icon icon="mdi:arrow-top-right" className="text-[14px]" />
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3">
          <h4 className="font-serif text-[1.2rem] text-foreground leading-snug">
            {project.name}
          </h4>
          <span className="text-[11px] tracking-[0.12em] text-foreground/40 whitespace-nowrap">
            {project.year ? (
              project.year
            ) : (
              <span className="border border-dashed border-accent bg-accent/5 px-2 rounded-full">
                NDA Restricted
              </span>
            )}
          </span>
        </div>
        <p className="mt-2 text-[13px] text-foreground/60 leading-[1.6]">
          {project.desc}
        </p>
        <div className="flex-1" />
        <div className="mt-4">
          <Tags tags={project.tags} />
        </div>
      </div>
    </motion.a>
  );
}

function ExperienceCard({ project }: { project: Project }) {
  return (
    <motion.a
      variants={fade}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-5 px-4 lg:px-5 py-4 rounded-xl border border-glassBorder bg-glass backdrop-blur-xl hover:border-accent/20 hover:bg-glass/80 transition duration-300"
    >
      {/* Top row: icon + title + desc */}
      <div className="flex items-start gap-3 flex-1 min-w-0">
        {/* Icon box */}
        <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-foreground/5 border border-glassBorder text-foreground/60 group-hover:text-accent transition duration-300">
          <Icon
            icon={project.icon ?? "mdi:code-braces"}
            className="text-[20px]"
          />
        </div>

        {/* Title + description */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground text-[0.95rem] leading-snug">
            {project.name}
          </h4>
          <p className="mt-0.5 text-[13px] text-foreground/50">
            {project.desc}
          </p>
        </div>
      </div>

      {/* Tags — bottom-right below lg, inline on desktop */}
      {project.tags && project.tags.length > 0 && (
        <div className="shrink-0 flex items-center justify-end gap-1.5 lg:justify-start lg:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-glassBorder bg-background text-foreground/60 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.a>
  );
}

// ───────────────────────── AnimatedSection helper ─────────────────────────
function AnimatedSection({
  children,
  className,
  variants = stag,
  amount = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: typeof stag | typeof fade;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ───────────────────────── Section ─────────────────────────
export default function Work() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  const featured = personalProjects[0];
  const restPersonal = personalProjects.slice(1);

  return (
    <section id="work" className="">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32 space-y-10">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "show" : "hidden"}
          variants={stag}
        >
          <motion.div variants={fade}>
            <Label num="03" text="Work" />
          </motion.div>
          <motion.div
            variants={fade}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-12"
          >
            <h2 className="font-serif font-light text-[clamp(1.9rem,3.5vw,2.8rem)] tracking-[-0.025em]">
              Personal Projects
            </h2>
          </motion.div>
        </motion.div>

        {/* Featured project — own trigger */}
        <AnimatedSection variants={fade} amount={0.2}>
          <FeaturedProject project={featured} />
        </AnimatedSection>

        {/* Personal projects grid — staggered cards */}
        <AnimatedSection
          variants={stag}
          amount={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {restPersonal.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatedSection>

        {/* Professional projects */}
        <AnimatedSection variants={stag} amount={0.1} className="mt-24">
          <motion.div
            variants={fade}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-12"
          >
            <h2 className="font-serif font-light text-[clamp(1.9rem,3.5vw,2.8rem)] tracking-[-0.025em]">
              Commercial Experience
            </h2>
          </motion.div>
          <motion.div variants={stag} className="space-y-4">
            {professionalProjects.map((p) => (
              <div className="" key={p.id}>
                <ExperienceCard key={p.id} project={p} />
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
