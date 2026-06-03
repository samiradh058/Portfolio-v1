"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

import { socials } from "../_const/data";
import Label from "./Label";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stag = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.18,
  });

  return (
    <section id="contact" ref={ref} className="w-full overflow-x-hidden">
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={stag}
      >
        <motion.div variants={fade}>
          <div className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:pt-32">
              <div className="relative z-10">
                <Label num="05" text="Let's Collaborate" />

                <motion.h2
                  variants={fade}
                  className="mb-6 font-serif font-light leading-[1.06] tracking-[-0.03em] text-[clamp(2.1rem,5.5vw,4.8rem)]"
                >
                  Ready to build
                  <br />
                  something <em className="italic text-accent">purposeful?</em>
                </motion.h2>

                <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-14">
                  <motion.p
                    variants={fade}
                    className="max-w-[500px] font-sans text-[15px] leading-[1.85] text-foreground/80"
                  >
                    Available for select freelance projects and product
                    collaborations. Let&apos;s talk about your next launch or
                    redesign.
                  </motion.p>

                  <motion.div variants={fade} className="flex flex-wrap gap-3">
                    <a
                      href="mailto:adhikarisamir68@gmail.com"
                      className="fill-sides w-fit flex items-center justify-center rounded-full border border-glassBorder bg-glass px-6 py-3 text-center font-sans text-[13px] tracking-[0.06em] transition-all duration-200 sm:px-8 sm:py-[14px] h-fit"
                      style={
                        {
                          "--fill": "var(--background)",
                          "--fill-text": "var(--foreground)",
                        } as CSSProperties
                      }
                    >
                      <span>adhikarisamir68@gmail.com</span>
                    </a>
                  </motion.div>
                </div>

                <motion.div
                  variants={fade}
                  className="mt-10 flex flex-wrap gap-6 border-t border-accent/60 pt-8 sm:gap-8"
                >
                  {socials.map((l) => (
                    <a
                      key={l.name}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-sans text-xs tracking-[0.06em] transition-colors duration-200 text-foreground/80 hover:text-foreground"
                    >
                      <Icon icon={l.icon} />
                      {l.name.toUpperCase()}
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
