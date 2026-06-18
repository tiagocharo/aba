"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { hero } from "@/lib/content";
import { EASE } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/17424577-hd_1920_1080_24fps.mp4"
        bgImageSrc="/pexels-tombrand-1646178.jpg"
        title={hero.headline}
        date="Indústria Têxtil Premium"
        scrollToExpand="Role para expandir"
        textBlend
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase text-background transition-opacity hover:opacity-90 md:px-8 md:py-4"
            >
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-3 border border-foreground/30 px-6 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase text-foreground transition-colors hover:bg-foreground/5 md:px-8 md:py-4"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </ScrollExpandMedia>
    </div>
  );
}
