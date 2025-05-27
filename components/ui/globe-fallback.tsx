"use client";

import React from "react";
import Image from "next/image";

export function Globe({ className = "", ...props }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      {...props}
    >
      <Image
        src="/images/globe-image.png"
        alt="Global community"
        width={200}
        height={200}
        className="object-contain animate-spin-slow"
        style={{ animationDuration: "30s" }}
      />
    </div>
  );
}
