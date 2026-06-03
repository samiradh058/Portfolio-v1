"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { marqueeItems } from "../_const/data";
import { useRef, useEffect, useState } from "react";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const count = marqueeItems.length;

  useEffect(() => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      setItemWidth(totalWidth / 3);
    }
  }, []);

  return (
    <div className="border-t border-b border-marqueeStripBorder py-4 bg-marqueeStrip overflow-hidden">
      <motion.div
        ref={trackRef}
        animate={itemWidth ? { x: [0, -itemWidth] } : false}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex w-max"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-sans text-[12px] font-medium tracking-[0.12em] text-foreground/60 flex items-center gap-3 px-6 whitespace-nowrap uppercase"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={16}
              height={16}
              className="shrink-0"
            />
            {item.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
