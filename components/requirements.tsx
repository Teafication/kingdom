"use client";

import React from "react";
import { AuroraText } from "./ui/aurora-text";
import { HoverEffect } from "./ui/card-hover-effect";

// Convert requirements to card objects
const requirementsCards = [
  {
    title: "30M+ Kills",
    description:
      "Prove your value with over 30 million confirmed kills. No tourists.",
  },
  {
    title: "Cute Feet",
    description: "Yes, it’s weird. Yes, it’s serious. Apply accordingly.",
  },
  {
    title: "T5 + Top Gear",
    description:
      "Rally and garrison leads must have T5 unlocked and top-tier equipment.",
  },
  {
    title: "KvK Experience",
    description:
      "Victory leaves a trail. Show us your KvK wins and war stories.",
  },
  {
    title: "No Big Foreheads",
    description: "We’ve got enough brainpower. Bring charisma instead.",
  },
  {
    title: "Voice Comms Ready",
    description:
      "Wartime demands presence. Be active on mic, or be left behind.",
  },
];

export function Requirements() {
  return (
    <div
      id="requirements"
      className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8 sm:py-20"
    >
      <h2 className="text-center font-sans text-xl font-semibold tracking-tight">
        <AuroraText className="text-3xl md:text-6xl">Requirements</AuroraText>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-white">
        Think you’ve got what it takes to join 3517? Read the fine print. We
        want power and personality.
      </p>

      <div className="max-w-5xl mx-auto px-8 mt-10">
        <HoverEffect
          items={requirementsCards.map((item, idx) => ({
            ...item,
            link: `#requirement-${idx}`,
          }))}
        />
      </div>
    </div>
  );
}
