"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { processSteps } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";

const processImages: Record<string, string> = {
  algodao: "/process/algodao.jpg",
  fiacao: "/process/fiacao.jpg",
  tecelagem: "/process/tecelagem.jpg",
  tinturaria: "/process/tinturaria.jpg",
  laboratorio: "/process/laboratorio.jpg",
  corte: "/process/corte.jpg",
  costura: "/process/costura.jpg",
  acabamento: "/process/acabamento.jpg",
  qualidade: "/process/qualidade.jpg",
  entrega: "/process/entrega.jpg",
};

export function ProcessTimelineSection() {
  return (
    <section id="processo" className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <SectionLabel>— Processo produtivo</SectionLabel>
          <SectionTitle>Da fibra ao produto final.</SectionTitle>
        </motion.div>

        <div className="relative -mx-6 overflow-x-auto px-6 pb-4 md:-mx-10 md:px-10">
          <div className="flex min-w-max snap-x snap-mandatory gap-4 md:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="w-44 shrink-0 snap-start md:w-52"
              >
                <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={processImages[step.id]}
                    alt={step.label}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 font-display text-xs text-white/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {step.label}
                </p>
                {i < processSteps.length - 1 && (
                  <span
                    className="absolute right-0 top-1/2 hidden text-muted-foreground md:inline"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
