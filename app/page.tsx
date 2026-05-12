"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Portfolio from "./_components/Portfolio";

const SERIF = "var(--font-display), serif";
const MONO = "var(--font-mono-alt), monospace";

const APPEAR_MS = 600;
const HOLD_MS = 1200;
const TOTAL_MS = APPEAR_MS + HOLD_MS;
const ANIMATION_MS = 1050; // matches duration * 1000

export default function Home() {
  const [split, setSplit] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (unlocked) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      return;
    }
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const onScroll = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [unlocked]);

  useEffect(() => {
    const t = setTimeout(() => setSplit(true), TOTAL_MS);
    return () => clearTimeout(t);
  }, []);

  // Unlock scroll only after curtain animation fully completes
  useEffect(() => {
    if (!split) return;
    const t = setTimeout(() => setUnlocked(true), ANIMATION_MS);
    return () => clearTimeout(t);
  }, [split]);

  const ease = [0.76, 0, 0.24, 1] as const;
  const duration = 1.05;

  const curtainStyle = {
    background: "var(--foreground)",
  } satisfies React.CSSProperties;

  const text = "Full-Stack Developer | AI and LLM Enthusiast";

  const charDuration = 0.08;
  const staggerDelay = Math.max(
    0.01,
    (APPEAR_MS / 1000 - charDuration) / text.length,
  );

  return (
    <div className="relative">
      <div className="relative z-0">
        <Portfolio />
      </div>

      {/*  Top curtain  */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-20 pointer-events-none flex flex-col items-center justify-end overflow-hidden"
        style={{ height: "50vh", ...curtainStyle }}
        animate={split ? { y: "-104%" } : { y: 0 }}
        transition={{ duration, ease }}
      >
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            height: 1,
          }}
          animate={
            split ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }
          }
          transition={{ duration: 0.55, ease }}
        />
        <motion.h1
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 300,
            letterSpacing: "-0.025em",
            color: "var(--background)",
            lineHeight: 1,
            marginBottom: "0.25rem",
          }}
          animate={
            split ? { scale: 2.2, opacity: 0 } : { scale: 1, opacity: 1 }
          }
          transition={{ duration, ease }}
        >
          Samir Adhikari
        </motion.h1>
      </motion.div>

      {/*  Bottom curtain  */}
      <motion.div
        className="fixed left-0 right-0 bottom-0 z-20 pointer-events-none flex flex-col items-center justify-start overflow-hidden"
        style={{ height: "50vh", ...curtainStyle }}
        animate={split ? { y: "100%" } : { y: 0 }}
        transition={{ duration, ease }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: 1,
            background: "var(--accent)",
          }}
          animate={
            split ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }
          }
          transition={{ duration: 0.55, ease }}
        />
        <motion.p
          className="overflow-hidden flex text-background"
          style={{
            fontFamily: MONO,
            fontSize: "clamp(0.65rem, 1.4vw, 0.8rem)",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            marginTop: "0.2rem",
          }}
          initial="hidden"
          animate={split ? "split" : "visible"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
            },
            split: { transition: { duration: 0 } },
          }}
        >
          <span className="break-words sm:break-normal text-center px-4">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                style={{ whiteSpace: "pre" }}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: charDuration, ease: "easeOut" },
                  },
                  split: { opacity: 1, y: 0 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
