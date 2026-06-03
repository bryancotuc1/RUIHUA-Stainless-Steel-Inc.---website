import React from "react";
import { motion } from "framer-motion";
import { Shield, Fence, DoorOpen, Columns3, Grid3x3, Wrench } from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "GATES & DOORS",
    desc: "Custom security gates, entry doors, and decorative steel doorframes built to your exact specifications.",
    spec: "GRADE 304/316"
  },
  {
    icon: Columns3,
    title: "RAILINGS & HANDRAILS",
    desc: "Staircase railings, balcony guards, and ADA-compliant handrails for residential and commercial properties.",
    spec: "POLISHED / BRUSHED"
  },

  {
    icon: Grid3x3,
    title: "WINDOW GUARDS",
    desc: "Decorative and functional window security bars that meet NYC building codes.",
    spec: "CODE COMPLIANT"
  },
  {
    icon: Shield,
    title: "CANOPIES",
    desc: "Weather-resistant stainless steel canopy frames for storefronts and entrances.",
    spec: "LOAD-BEARING"
  },
  {
    icon: Fence,
    title: "FENCING",
    desc: "Perimeter fencing, property dividers, and ornamental steel fence panels custom-built for any property.",
    spec: "WELDED JOINTS"
  },

];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="border-b border-border pb-6 mb-16">
        <p className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono mb-2">01 — CAPABILITIES</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
          WHAT WE BUILD
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-8 group hover:bg-secondary/5 transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <span className="text-[9px] tracking-[0.3em] text-muted-foreground font-mono">{service.spec}</span>
            </div>
            <h3 className="font-heading text-lg text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}