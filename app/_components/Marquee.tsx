"use client";

import { motion } from "framer-motion";
import { marqueeItems } from "../_const/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="border-t border-b border-foreground/14 py-3 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="flex w-max"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-sans text-[11px] tracking-[0.12em] text-foreground/60 flex items-center gap-6 px-6 whitespace-nowrap"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-accent inline-block shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
