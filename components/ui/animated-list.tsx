"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  icon: string;
  user: string;
  message: string;
  time: string;
  color: string;
}

const messages: Omit<Message, "id">[] = [
  {
    icon: "📰",
    user: "System",
    message: "New event just launched in RoK!",
    time: "2m ago",
    color: "#1075d7",
  },
  {
    icon: "💬",
    user: "RokQueen",
    message: "They kicked the R4 mid-rally 😂",
    time: "4m ago",
    color: "#7c3ad3",
  },
  {
    icon: "🛡️",
    user: "SunTzuMain",
    message: "Zone 6 fights are wild rn",
    time: "7m ago",
    color: "#00bfa6",
  },
  {
    icon: "📦",
    user: "KvKConqueror",
    message: "Resources drained. RIP my farms.",
    time: "9m ago",
    color: "#e55638",
  },
  {
    icon: "🎯",
    user: "LegendRok",
    message: "New commanders are 🔥🔥🔥",
    time: "12m ago",
    color: "#f59e22",
  },
];

export function ChatStackFeed({ className }: { className?: string }) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        const next = {
          ...messages[index % messages.length],
          id: Date.now(),
        };
        return [next, ...prev].slice(0, 6);
      });
      index++;
    }, 3000); // Changed from 3000 to 5000

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative mx-auto flex h-[400px] w-full max-w-md flex-col overflow-hidden rounded-lg bg-invisible",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <AnimatePresence initial={false}>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className={cn(
                "flex items-start gap-3 rounded-lg px-4 py-3 shadow-sm backdrop-blur-sm",
                "bg-[#2b2d31] text-white", // dark default
                "dark:bg-[#2b2d31] dark:text-white", // explicit dark
                "bg-white text-[#222]", // light mode
                "border border-black/5 dark:border-none"
              )}
            >
              <div
                className={cn(
                  "flex size-10 flex-shrink-0 items-center justify-center rounded-full text-xl",
                  "text-xl",
                  "border border-black/10 dark:border-none"
                )}
                style={{ backgroundColor: msg.color }}
              >
                {msg.icon}
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold leading-tight">
                  {msg.user}{" "}
                  <span className="ml-1 text-xs text-black/40 dark:text-white/40">
                    {msg.time}
                  </span>
                </div>
                <div className="text-sm leading-snug text-black/80 dark:text-white/80">
                  {msg.message}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom blur gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-[#1e1f22]" />
    </div>
  );
}
