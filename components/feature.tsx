"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "./ui/globe";
import { ChatStackFeed } from "@/components/ui/animated-list";

export function Features() {
  return (
    <div id="about" className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8">
      <h2 className="text-bold text-neutral-8000 text-center font-sans text-xl font-semibold tracking-tight md:text-4xl text-neutral-600 dark:text-neutral-100">
        About Us
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-neutral-600 dark:text-neutral-400">
        Welcome to 3517. We’re not here for dragons or stock fantasy art—we’re
        here to ruin kingdoms and maybe send a toe or two. Stats? Stupid high.
        Behavior? Questionable. You in?
      </p>
      <div className="cols-1 mt-20 grid gap-4 md:auto-rows-[25rem] md:grid-cols-3">
        {/* Card 1 */}
        <Card className={cn("flex flex-col justify-between md:col-span-1")}>
          <CardContent className="h-40">
            <CardTitle>Elite Kill Point Power</CardTitle>
            <CardDescription>
              540B+ KP and climbing fast. We hit hard, and our KvK stats prove
              it.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <Image
              src="/kvk-stats.png"
              alt="KvK stats"
              width={400}
              height={400}
              className="ml-6 w-full rounded-lg object-cover"
            />
          </CardSkeletonBody>
        </Card>
        {/* Card 2 */}
        <Card className={cn("flex flex-col justify-between md:col-span-1")}>
          <CardContent className="h-40">
            <CardTitle>Fun Included</CardTitle>
            <CardDescription>
              Memes, chaos, and toe jokes. 3517 is not for the faint-hearted—we
              embrace the unhinged.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="p-2">
              <ChatStackFeed />
            </div>
          </CardSkeletonBody>
        </Card>
        {/* Card 3 */}
        <Card className={cn("flex flex-col justify-between md:col-span-1")}>
          <CardContent className="h-40">
            <CardTitle>Experienced Leadership</CardTitle>{" "}
            <CardDescription>
              Led by veterans who know how to win and keep the vibes strong. No
              drama, just results.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody className="flex items-center justify-center w-full h-full -mt-4">
            <Image
              src="/crown.png"
              alt="crown"
              width={300}
              height={300}
              className="ml-6 w-full rounded-lg object-cover"
            />
          </CardSkeletonBody>
        </Card>
        {/* Card 4 */}
        <Card
          className={cn(
            "flex flex-col justify-between md:col-span-2 relative overflow-visible"
          )}
        >
          <CardContent className="h-40 relative z-0">
            <CardTitle>Global Community</CardTitle>
            <CardDescription>
              We welcome players from all over the world. Diverse, inclusive,
              and always active.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody className="relative">
            <div className="relative flex h-60 flex-col items-center bg-transparent md:h-60">
              <Globe className="absolute -bottom-24 -right-10 md:-bottom-16 md:-right-10" />
            </div>
          </CardSkeletonBody>
        </Card>
        {/* Card 5 */}
        <Card className={cn("flex flex-col justify-between md:col-span-1")}>
          <CardContent className="h-40">
            <CardTitle>Stability & Coordination</CardTitle>
            <CardDescription>
              A solid, low-A seed kingdom with a stable core and proven
              rally/garrison coordination.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody className="flex items-center justify-center w-full h-full -mt-4">
            <Image
              src="/stability.png"
              alt="stability"
              width={300}
              height={300}
              className="ml-6 w-full rounded-lg object-cover"
            />
          </CardSkeletonBody>
        </Card>
      </div>
    </div>
  );
}

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("overflow-hidden", className)}>{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // Remove framer-motion variants for hover movement
  return (
    <motion.h3
      className={cn(
        "font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100",
        className
      )}
    >
      {children}
    </motion.h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // Remove framer-motion variants for hover movement
  return (
    <motion.p
      className={cn(
        "mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </motion.p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
