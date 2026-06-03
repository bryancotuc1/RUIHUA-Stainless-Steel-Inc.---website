import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    img: "https://media.base44.com/images/public/6a1f4d110fdd42db67bb759e/7fb086958_generated_image.png",
    title: "CUSTOM STEEL ENTRY DOOR",
    location: "FORDHAM, BRONX",
    material: "GRADE 316 BRUSHED",
    alt: "Custom stainless steel decorative entry door with ornate panel"
  },
  {
    img: "https://media.base44.com/images/public/6a1f4d110fdd42db67bb759e/bf5ecead5_generated_image.png",
    title: "RESIDENTIAL STEEL FENCE",
    location: "BROOKLYN, NY",
    material: "GRADE 304 POLISHED",
    alt: "Custom stainless steel fence surrounding a Brooklyn brownstone"
  },
  {
    img: "https://media.base44.com/images/public/6a1f4d110fdd42db67bb759e/78621e02f_generated_image.png",
    title: "ORNAMENTAL GATE & DOOR",
    location: "BRONX, NY",
    material: "GRADE 304 STAINLESS",
    alt: "Custom decorative stainless steel gate and entry door"
  },
  {
    img: "https://media.base44.com/images/public/6a1f4d110fdd42db67bb759e/d2cf72530_generated_image.png",
    title: "RESIDENTIAL RAILING FENCE",
    location: "BRONX, NY",
    material: "GRADE 316 STAINLESS",
    alt: "Custom ornamental stainless steel railing and fence"
  },
  {
    img: "https://media.base44.com/images/public/6a1f4d110fdd42db67bb759e/1ce07c1b4_generated_image.png",
    title: "EXTERIOR STAIR RAILINGS",
    location: "BRONX, NY",
    material: "GRADE 304 SATIN",
    alt: "Custom stainless steel exterior staircase railings with decorative scrollwork"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="border-b border-border pb-6 mb-16">
        <p className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono mb-2">02 — PROJECT LEDGER</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
          OUR WORK
        </h2>
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative overflow-hidden border border-border ${
              i === 0 || i === 5 ? "lg:col-span-2 aspect-[16/10]" : "aspect-[3/4]"
            }`}
          >
            <img
              src={project.img}
              alt={project.alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale"
              
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] tracking-[0.4em] text-primary font-mono mb-1">{project.location}</p>
                  <h3 className="font-heading text-sm sm:text-base text-white">{project.title}</h3>
                </div>
                <p className="text-[9px] tracking-[0.3em] text-white/40 font-mono hidden sm:block">{project.material}</p>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}