import React from "react";
import { motion } from "framer-motion";
import { Ruler, Scissors, Flame, Truck } from "lucide-react";

const WORKSHOP_IMG = "https://media.base44.com/images/public/6a1f4d110fdd42db67bb759e/5850c3dc4_generated_b58f0db3.png";

const steps = [
  {
    icon: Ruler,
    num: "01",
    title: "MEASURE",
    desc: "We visit your property, take precise measurements, and discuss your design vision. Every project starts with exact specifications.",
  },
  {
    icon: Scissors,
    num: "02",
    title: "CUT & FORM",
    desc: "Raw stainless steel is cut, bent, and shaped in our Bronx workshop using industrial-grade equipment for precision tolerances.",
  },
  {
    icon: Flame,
    num: "03",
    title: "WELD & FINISH",
    desc: "Expert TIG welding joins every component. Surfaces are ground, polished, or brushed to your chosen finish specification.",
  },
  {
    icon: Truck,
    num: "04",
    title: "DELIVER & INSTALL",
    desc: "We transport the finished piece to your location and handle complete installation with proper anchoring and hardware.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background image (subtle) */}
      <div className="absolute inset-0 opacity-5">
        <img src={WORKSHOP_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="border-b border-border pb-6 mb-16">
          <p className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono mb-2">03 — FABRICATION SPEC</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
            HOW WE WORK
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background p-8 relative"
            >
              <span className="font-heading text-6xl text-muted/60 absolute top-4 right-4">{step.num}</span>
              <step.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-lg text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] font-mono hover:bg-primary/90 transition-colors border-2 border-primary"
          >
            START YOUR PROJECT
          </a>
        </div>
      </div>
    </section>
  );
}