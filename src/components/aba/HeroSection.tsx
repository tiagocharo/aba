"use client";

import { hero } from "@/lib/content";
import { EASE } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate z-0 h-screen min-h-[640px] w-full overflow-hidden"
    >
      {/* Background — isolated layer, never stacks above fixed header */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 will-change-transform"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-textile.jpg"
            alt="Cadeia produtiva têxtil premium ABA"
            className="size-full scale-105 object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-[1] flex h-full max-w-2xl flex-col items-start justify-center px-6 pt-24 md:max-w-3xl md:px-10 md:pt-28 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] text-white"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="mt-5 max-w-md text-sm leading-relaxed text-white/80 md:text-base"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
          className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-3 bg-white px-6 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase text-foreground transition-opacity hover:opacity-90 md:px-8 md:py-4"
          >
            {hero.primaryCta.label}
            <span aria-hidden>→</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-3 border border-white/60 px-6 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase text-white transition-colors hover:bg-white/10 md:px-8 md:py-4"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
