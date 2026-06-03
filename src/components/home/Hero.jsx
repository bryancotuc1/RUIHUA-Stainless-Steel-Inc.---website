import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a1f4d110fdd42db67bb759e/7b9ad9e4c_generated_8de6a42d.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Stainless steel welding sparks in dark workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 max-w-7xl mx-auto">
        {/* Technical overlay */}
        <div className="absolute top-24 right-6 text-right hidden md:block">
          <p className="text-[10px] tracking-[0.4em] text-white/30 font-mono">40.8957° N, 73.8545° W</p>
          <p className="text-[10px] tracking-[0.4em] text-white/30 font-mono">GRADE 304 / 316 STEEL</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary text-xs tracking-[0.5em] mb-4 font-mono">EST. BRONX, NEW YORK</p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight">
            STAINLESS
            <br />
            STRENGTH.
          </h1>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-primary leading-[0.9] tracking-tight mt-2">
            BRONX BORN.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] font-mono hover:bg-primary/90 transition-colors border-2 border-primary"
          >
            REQUEST A QUOTE
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 text-xs tracking-[0.3em] font-mono hover:border-white/60 transition-colors"
          >
            VIEW OUR WORK
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
