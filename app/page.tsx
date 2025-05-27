"use client";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import { Features } from "@/components/feature";
import { Performance } from "@/components/performance";
import { Requirements } from "@/components/requirements";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <NavBar />

      <div className="container mx-auto">
        <Hero />
        <Features />
        <Performance />
        <Requirements />
      </div>
    </div>
  );
}
