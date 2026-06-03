"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const headerRef = useRef<HTMLElement | null>(null);

  const goToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    setActiveSection(href.replace("#", ""));
    window.history.pushState(null, "", href);
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const rafId = window.requestAnimationFrame(() => {
      setActiveSection(hash);
    });

    return () => window.cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const getActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      // start empty so sections below the hero aren't preselected
      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (marker >= top && marker < bottom) {
          current = id;
          break;
        }

        if (marker >= top) {
          current = id;
        }
      }

      return current;
    };

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        const nextActiveSection = getActiveSection();
        setActiveSection((current) =>
          current === nextActiveSection ? current : nextActiveSection,
        );
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: globalThis.MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const navLinkClass = (isActive: boolean, mobile = false) =>
    `${mobile ? "self-start w-fit text-left" : ""} relative font-sans text-[12px] tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-foreground opacity-100" : mobile ? "text-foreground opacity-60 hover:opacity-100" : "text-foreground opacity-50 hover:opacity-100"}`;

  return (
    <>
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-foreground/10 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 border-b ${scrolled ? "bg-background/80 backdrop-blur-md border-glassBorder" : "bg-transparent border-transparent"} transition-all duration-300`}
      >
        {/* Main bar */}
        <div
          className={`max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between transition-all duration-500`}
        >
          {/* Wordmark */}
          <a href="#" aria-label="Samir Adhikari" className="flex items-center">
            <Image
              src="/favicon.ico"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />

            <span
              className={`ml-3 font-sans ${open ? "text-[11px]" : "text-[12px]"} tracking-[0.2em] uppercase text-foreground whitespace-nowrap overflow-hidden transition-all duration-200 ${
                open || scrolled
                  ? "max-w-[220px] opacity-100"
                  : "max-w-[220px] opacity-0"
              }`}
            >
              Samir Adhikari
            </span>
            <span className="sr-only">Samir Adhikari</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.label}
                type="button"
                onClick={() => goToSection(l.href)}
                aria-current={
                  activeSection === l.href.replace("#", "") ? "page" : undefined
                }
                className={navLinkClass(
                  activeSection === l.href.replace("#", ""),
                )}
              >
                {l.label}
                {activeSection === l.href.replace("#", "") && (
                  <motion.span
                    layoutId="nav-active-underline-desktop"
                    className="absolute left-0 right-0 -bottom-2 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 500, damping: 34 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Secondary CTA (CV) */}
            <a
              href="/Samir_Adhikari_CV.pdf"
              download
              className="rounded-full px-5 py-2
               font-sans text-[12px] tracking-[0.07em]
               border border-glassBorder
               bg-glass
               text-foreground
               hover:-translate-y-0.5
               transition-all duration-200"
            >
              Download CV
            </a>

            {/* Primary CTA */}
            <a
              href="mailto:adhikarisamir68@gmail.com"
              className="rounded-full px-5 py-2
               font-sans text-[12px] tracking-[0.07em]
               bg-accent
               hover:-translate-y-0.5 hover:shadow-md
               transition-all duration-200"
            >
              Hire me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-1.25 w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-px w-6 bg-foreground origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px w-6 bg-foreground"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-px w-6 bg-foreground origin-center"
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-background border-b border-glassBorder rounded-b-2xl shadow-[0_14px_34px_-26px_rgba(9,9,11,0.5)]"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((l) => (
                  <button
                    key={l.label}
                    type="button"
                    onClick={() => goToSection(l.href)}
                    aria-current={
                      activeSection === l.href.replace("#", "")
                        ? "page"
                        : undefined
                    }
                    className={navLinkClass(
                      activeSection === l.href.replace("#", ""),
                      true,
                    )}
                  >
                    {l.label}
                    {activeSection === l.href.replace("#", "") && (
                      <motion.span
                        layoutId="nav-active-underline-mobile"
                        className="absolute left-0 right-0 -bottom-2 h-px bg-foreground"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 34,
                        }}
                      />
                    )}
                  </button>
                ))}

                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href="/Samir_Adhikari_CV.pdf"
                    download
                    className="fill-sides font-sans text-[12px] tracking-[0.06em] px-5 py-2.5 rounded-full border border-foreground/25 text-foreground text-center transition-colors duration-200"
                    style={
                      {
                        "--fill": "var(--foreground)",
                        "--fill-text": "var(--background)",
                      } as CSSProperties
                    }
                  >
                    <span className="flex items-center justify-center gap-2">
                      Download CV <Icon icon="mdi:download" />
                    </span>
                  </a>
                  <a
                    href="mailto:adhikarisamir68@gmail.com"
                    onClick={() => setOpen(false)}
                    className="font-sans text-[12px] tracking-[0.06em] px-5 py-2.5 rounded-full bg-accent text-center hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Hire me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
