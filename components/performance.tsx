"use client";

import React from "react";
import Image from "next/image";
import { AuroraText } from "./ui/aurora-text";

export function Performance() {
  return (
    <div
      id="performance"
      className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8 sm:py-20"
    >
      <h2 className="text-center font-sans text-xl font-semibold tracking-tight">
        <AuroraText className="text-3xl md:text-6xl">Performance</AuroraText>
      </h2>
      <div className="mt-6" />
      <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-white">
        Witness the carnage. 3517 doesn’t just talk—we obliterate. Scroll down
        and feast on the stats.
      </p>
      {/* Spacer before the tablet */}
      <div className="mt-12 w-full">
        <div className="w-full rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4">
          <div className="w-full rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
            <Image
              src="/stats.png"
              alt="Performance Stats"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-[20px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
