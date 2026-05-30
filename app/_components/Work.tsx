"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

import Label from "./Label";
import {
  personalProjects,
  professionalProjects,
  workExperience,
} from "../_const/data";

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
  image: string;
  tags: string[];
  url?: string;
  year?: string;
};

type Experience = {
  company: string;
  website?: string;
  location: string;
  from: string;
  to: string;
  summary: string;
};

// ───────────────────────── Tags ─────────────────────────
function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] px-3 py-1 rounded-full border border-foreground/10 bg-white/40 backdrop-blur-md text-foreground/60"
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
      className="group relative grid lg:grid-cols-2 rounded-[28px] overflow-hidden border border-foreground/10 bg-white/50 backdrop-blur-xl hover:-translate-y-1 hover:shadow-sm hover:border-accent/20 transition duration-300"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-[1.04] transition duration-700"
        />
        {project.url && (
          <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-black/10 text-black shadow-sm">
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
      className="group relative flex flex-col rounded-[22px] overflow-hidden border border-foreground/10 bg-white/40 backdrop-blur-xl hover:-translate-y-1 transition duration-300 hover:border-accent/20 hover:shadow-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        {project.url && (
          <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-black/10 text-black shadow-sm">
              View Project
              <Icon icon="mdi:arrow-top-right" className="text-[14px]" />
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-serif text-[1.2rem] text-foreground leading-snug">
            {project.name}
          </h4>
          <span className="text-[11px] tracking-[0.12em] text-foreground/40 whitespace-nowrap">
            {project.year ? project.year : (
              <span className="border border-dashed border-accent/20 bg-accent/5 px-2 rounded-full">
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

// ───────────────────────── Experience ─────────────────────────
function ExperienceItem({ item }: { item: Experience }) {
  return (
    <motion.div
      variants={fade}
      className="relative pl-6 border-l border-foreground/10"
    >
      <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div
          onClick={() => item.website && window.open(item.website, "_blank")}
          className={`cursor-pointer ${item.website ? "hover:text-accent transition-colors duration-200" : ""}`}
        >
          <h4 className="font-serif text-[1.3rem] text-foreground">{item.company}</h4>
          <p className="text-[13px] text-foreground/60">{item.location}</p>
        </div>
        <span className="text-[11px] tracking-[0.12em] text-foreground/40">
          {item.from} — {item.to}
        </span>
      </div>
      <p className="mt-3 text-[14px] leading-[1.7] text-foreground/60">{item.summary}</p>
    </motion.div>
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
            <Label num="02" text="Work" />
          </motion.div>
          <motion.div variants={fade} className="mb-14">
            <h2 className="font-serif font-light text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.1] text-foreground">
              Selected work
            </h2>
            <p className="mt-4 text-foreground/60 max-w-xl">
              A collection of projects focused on performance, scalability,
              and clean user experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Featured project — own trigger */}
        <AnimatedSection variants={fade} amount={0.2}>
          <FeaturedProject project={featured} />
        </AnimatedSection>

        {/* Personal projects grid — staggered cards */}
        <AnimatedSection variants={stag} amount={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restPersonal.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection variants={stag} amount={0.15} className="mt-24">
          <motion.h3 variants={fade} className="font-serif text-[2rem] text-foreground mb-10">
            Experience
          </motion.h3>
          <div className="space-y-10">
            {workExperience.map((item) => (
              <ExperienceItem key={`${item.company}-${item.from}`} item={item} />
            ))}
          </div>
        </AnimatedSection>

        {/* Professional projects */}
        <AnimatedSection variants={stag} amount={0.1} className="mt-24">
          <motion.h3 variants={fade} className="font-serif text-[2rem] text-foreground mb-10">
            Professional Work
          </motion.h3>
          <motion.div
            variants={stag}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {professionalProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}