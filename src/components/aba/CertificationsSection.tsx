"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { certifications } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";

export function CertificationsSection() {
  return (
    <section
      id="certificacoes"
      className="border-t border-border bg-muted px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <SectionLabel>— Certificações</SectionLabel>
          <SectionTitle>{certifications.title}</SectionTitle>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-2xl border-hairline bg-background p-10 text-center md:p-14"
        >
          <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full border-2 border-foreground">
            <span className="font-display text-xs uppercase tracking-[0.2em]">
              Ouro
            </span>
          </div>
          <h3 className="font-display mb-4 text-2xl md:text-3xl">
            {certifications.highlight.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {certifications.highlight.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {certifications.categories.map((cat) => (
            <motion.div
              key={cat}
              variants={fadeUp}
              className="flex aspect-square flex-col items-center justify-center border-hairline bg-background p-6 text-center"
            >
              <div className="mb-4 size-12 rounded-full bg-muted" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {cat}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
