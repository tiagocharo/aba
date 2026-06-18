"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { DesignTestimonial } from "@/components/ui/design-testimonial";
import { partners } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";

function LogoMarquee({ logos, reverse }: { logos: string[]; reverse?: boolean }) {
  const track = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex w-max ${reverse ? "[animation-direction:reverse]" : ""} animate-marquee`}
      >
        {track.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex items-center justify-center px-10 md:px-16"
          >
            <span className="whitespace-nowrap font-display text-lg tracking-[0.15em] text-muted-foreground/60 uppercase transition-colors hover:text-foreground md:text-xl">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      id="clientes"
      className="overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto mb-16 max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <SectionLabel>— Clientes</SectionLabel>
          <SectionTitle>{partners.title}</SectionTitle>
        </motion.div>
      </div>

      <div className="space-y-8 border-y border-border py-6">
        {partners.groups.map((group, gi) => (
          <div key={group.label}>
            <p className="mb-2 px-6 text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground md:px-10">
              {group.label}
            </p>
            <LogoMarquee logos={[...group.logos]} reverse={gi % 2 === 1} />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6 md:px-10 lg:px-16">
        <DesignTestimonial
          className="min-h-[520px] py-8"
          label="Depoimentos"
          testimonials={partners.testimonials.map((item) => ({
            quote: item.quote,
            author: item.name,
            role: item.designation,
            company: item.designation,
          }))}
        />
      </div>
    </section>
  );
}
