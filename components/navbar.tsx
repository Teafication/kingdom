"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Logo } from "./ui/logo";

// Define new nav bar items
const sections = [
  { name: "Discord", link: "https://discord.com/" },
  { name: "About", link: "#about" },
  { name: "Performance", link: "#performance" },
  { name: "Migration Requirements", link: "#requirements" },
  { name: "FAQ", link: "#faq" },
];

// Desktop navigation bar component
const DesktopNav = ({
  navItems,
  visible,
}: {
  navItems: typeof sections;
  visible: boolean;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      // Style and animation for visibility changes
      onMouseLeave={() => setHovered(null)}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "70%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "hidden lg:flex items-center justify-between py-1 max-w-7xl mx-auto px-2 relative z-60 w-full",
        visible && "bg-white/80 dark:bg-neutral-950/80"
      )}
      style={{
        minWidth: "800px",
        borderRadius: "15px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
    >
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <motion.div className="flex items-center justify-center space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800">
        {navItems.map(({ name, link }, idx) => (
          <Link
            key={idx}
            href={link.startsWith("#") ? link : "/"}
            onMouseEnter={() => setHovered(idx)}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
              />
            )}
            <span className="relative z-20">{name}</span>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Mobile navigation bar component
const MobileNav = ({
  navItems,
  visible,
}: {
  navItems: typeof sections;
  visible: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      // Style and animation for mobile menu
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "95%" : "100%",
        y: visible ? 20 : 0,
        borderRadius: "15px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "lg:hidden flex flex-col w-full justify-between items-center bg-transparent max-w-[calc(100vw-2rem)] mx-auto px-0 py-1 z-50",
        visible && "bg-white/80 dark:bg-neutral-950/80"
      )}
    >
      {" "}
      <div className="flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="flex items-center gap-4 mr-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {open ? (
              <motion.div
                key="icon-x"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <IconX
                  className="text-black dark:text-white"
                  onClick={() => setOpen(!open)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="icon-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <IconMenu2
                  className="text-black dark:text-white"
                  onClick={() => setOpen(!open)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-16 inset-x-0 flex flex-col items-start gap-4 bg-white dark:bg-neutral-950 px-4 py-8 rounded-lg shadow-lg"
          >
            {navItems.map(({ name, link }, idx) => (
              <Link
                key={idx}
                href={link.startsWith("#") ? link : "/"}
                onClick={() => setOpen(false)}
                className="text-neutral-600 dark:text-neutral-300"
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main TopBar component that assembles DesktopNav and MobileNav
export function NavBar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div ref={ref} className="w-full fixed top-0 inset-x-0 z-50">
      <DesktopNav navItems={sections} visible={visible} />
      <MobileNav navItems={sections} visible={visible} />
    </motion.div>
  );
}

export default NavBar;
