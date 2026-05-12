"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-surface ${scrolled ? "bg-background/90 backdrop-blur-sm shadow-lg" : "bg-transparent"} transition-colors duration-300`}
    >
      {/* Main bar */}
      <div
        className={`max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between transition-all duration-500`}
      >
        {/* Wordmark */}
        <a
          href="#"
          className="font-serif text-[1.75rem] font-light tracking-tight text-[var(--foreground)] leading-none"
        >
          Samir Adhikari
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] font-sans tracking-[0.12em] uppercase text-[var(--foreground)] opacity-50 hover:opacity-100 transition-opacity duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="relative flex items-center justify-center font-sans text-[11px] tracking-[0.09em] px-5 py-2 rounded-full border border-foreground text-foreground hover:translate-y-[-2px] transition-transform duration-200 text-center group pr-6"
          >
            <span className="mx-auto">Download Resume</span>
            <Icon
              icon="mdi:download"
              className="w-4 h-4 pl-1 absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </a>
          <a
            href="mailto:adhikarisamir68@gmail.com"
            className="font-sans text-[11px] tracking-[0.09em] px-5 py-2 rounded-full bg-foreground text-background hover:translate-y-[-2px] transition-transform duration-200 text-center"
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6 bg-[var(--foreground)] origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-[var(--foreground)]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6 bg-[var(--foreground)] origin-center"
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
            transition={{ duration: 0.3, ease: [0.25, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-[var(--background)] border-b border-[var(--surface)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[12px] tracking-[0.1em] uppercase text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity duration-200"
                >
                  {l.label}
                </a>
              ))}

              <div className="flex flex-col gap-3 pt-2 border-t border-[var(--surface)]">
                <a
                  href="/resume.pdf"
                  download
                  className="font-sans text-[12px] tracking-[0.06em] px-5 py-2.5 rounded-full border border-[var(--foreground)] text-[var(--foreground)] text-center hover:bg-[var(--surface)] transition-colors duration-200"
                >
                  Download Resume ↓
                </a>
                <a
                  href="mailto:adhikarisamir68@gmail.com"
                  onClick={() => setOpen(false)}
                  className="font-sans text-[12px] tracking-[0.06em] px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-center hover:opacity-80 transition-opacity duration-200"
                >
                  Hire me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
