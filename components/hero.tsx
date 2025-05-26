"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ColourfulText } from "@/components/ui/colorful-text";
import { ContainerScroll } from "@/components/ui/containerscroll";
import { Meteors } from "@/components/ui/meteors";
import ClientOnly from "@/app/provider";

// Link to the Discord server
const discordlink = "";

export function Hero() {
  return (
    <div
      id="discord"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden"
    >
      {/* Rainbow Meteors */}
      <ClientOnly>
        <Meteors number={30} />
      </ClientOnly>

      <ContainerScroll
        titleComponent={
          <div className="pt-20 md:pt-32">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="relative z-10 mx-auto mt-6 max-w-6xl text-center text-2xl font-semibold md:text-4xl lg:text-8xl"
            >
              <span className="text-black dark:text-white">Join Kingdom </span>
              <span className="inline-flex items-baseline font-semibold">
                <ClientOnly>
                  <ColourfulText text="####" />
                </ClientOnly>
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
              className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-base text-foreground md:text-xl dark:text-foreground"
            >
              Team up with awesome people, conquer epic challenges, and make
              memories that last. Adventure, friendship, and fun await—come be
              part of the story!
            </motion.p>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
              className="relative z-10 mt-12 md:mt-16 flex items-center justify-center gap-4"
            >
              {" "}
              <ClientOnly>
                <a href={discordlink} target="_blank" rel="noopener noreferrer">
                  <RainbowButton size="lg" className="dark:text-black">
                    Visit our Discord
                  </RainbowButton>
                </a>
              </ClientOnly>
            </motion.div>
          </div>
        }
      >
        {" "}
        <div className="h-full w-full flex items-center justify-center">
          <ClientOnly>
            <Image
              priority
              src="/heroimage.png"
              alt="Hero image"
              width={1920}
              height={1080}
              className="rounded-lg object-cover h-full w-full"
            />
          </ClientOnly>
        </div>
      </ContainerScroll>
    </div>
  );
}

// Both Badge and Button components removed as they're no longer used

export default Hero;
