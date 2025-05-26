"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  // Rainbow colors array
  const rainbowColors = [
    "#ef4444", // red
    "#f97316", // orange
    "#eab308", // yellow
    "#22c55e", // green
    "#3b82f6", // blue
    "#6366f1", // indigo
    "#a855f7", // purple
    "#ec4899", // pink
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (100 / meteorCount); // Spread across 100% of width
        // Randomly select a color from the rainbow colors array
        const colorIndex = Math.floor(Math.random() * rainbowColors.length);
        const meteorColor = rainbowColors[colorIndex];

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] shadow-[0_0_0_1px_#ffffff10]",
              className
            )}
            style={{
              backgroundColor: meteorColor,
              top: "-5%", // Start above the visible area
              left: position + "%",
              animationDelay: Math.random() * 5 + "s", // Random delay between 0-5s
              animationDuration: Math.floor(Math.random() * (10 - 3) + 3) + "s", // Random duration 3-10s
            }}
          >
            {" "}
            <span
              className="absolute top-1/2 h-[1px] w-[50px] -translate-y-[50%] transform"
              style={{
                background: `linear-gradient(to right, ${meteorColor}, transparent)`,
              }}
            />
          </span>
        );
      })}
    </motion.div>
  );
};
