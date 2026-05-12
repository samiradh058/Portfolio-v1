"use client";

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
      ease: [0.25, 0, 0.2, 1] as const,
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
          <div className="relative bg-foreground overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-12 lg:px-20 sm:py-20">
              <div className="relative z-10">
                <Label num="04" text="Let's Collaborate" light />

                <motion.h2
                  variants={fade}
                  className="mb-6 font-serif font-light text-background leading-[1.06] tracking-[-0.03em] text-[clamp(2.1rem,5.5vw,4.8rem)]"
                >
                  Ready to build
                  <br />
                  something{" "}
                  <em className="italic text-background/45">purposeful?</em>
                </motion.h2>

                <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-14">
                  <motion.p
                    variants={fade}
                    className="max-w-[500px] font-sans text-[15px] leading-[1.85] text-background/50"
                  >
                    Available for select freelance projects and product
                    collaborations. Let&apos;s talk about your next launch or
                    redesign.
                  </motion.p>

                  <motion.div variants={fade} className="flex flex-wrap gap-3">
                    <a
                      href="mailto:adhikarisamir68@gmail.com"
                      className="w-fit flex items-center justify-center rounded-full bg-background px-6 py-3 text-center font-sans text-[13px] tracking-[0.04em] text-foreground transition-opacity duration-200 hover:opacity-80 sm:px-8 sm:py-[14px]"
                    >
                      adhikarisamir68@gmail.com
                    </a>
                  </motion.div>
                </div>

                <motion.div
                  variants={fade}
                  className="mt-10 flex flex-wrap gap-6 border-t border-background/[0.08] pt-8 sm:gap-8"
                >
                  {socials.map((l) => (
                    <a
                      key={l.name}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-sans text-xs tracking-[0.06em] text-background/60 transition-colors duration-200 hover:text-background"
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
