"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { esg } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";

function PillarIcon({ type }: { type: "leaf" | "people" | "shield" }) {
  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="size-8" aria-hidden>
        <path
          d="M12 22C12 22 4 16 4 10C4 6 7 3 12 3C17 3 20 6 20 10C20 16 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M12 22V10" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="size-8" aria-hidden>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M3 20C3 16.5 5.5 14 9 14C12.5 14 15 16.5 15 20M15 18C15 15.5 16.5 14 17 14C19 14 21 15.5 21 18"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-8" aria-hidden>
      <path
        d="M12 3L4 7V12C4 17 7.5 20.5 12 21C16.5 20.5 20 17 20 12V7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function EsgSection() {
  return (
    <section id="esg" className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-16 max-w-3xl"
        >
          <SectionLabel>— ESG</SectionLabel>
          <SectionTitle className="mb-6">{esg.title}</SectionTitle>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {esg.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {esg.pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="border-hairline p-10"
            >
              <div className="mb-6 text-foreground">
                <PillarIcon type={pillar.icon} />
              </div>
              <h3 className="font-display mb-4 text-2xl">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
