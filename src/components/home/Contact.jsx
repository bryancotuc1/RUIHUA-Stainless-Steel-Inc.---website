import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "./QuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="border-b border-border pb-6 mb-16">
        <p className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono mb-2">04 — LOGISTICS HUB</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
          GET A QUOTE
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <QuoteForm />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="border-2 border-border p-8 space-y-8">
            <div>
              <h3 className="font-heading text-lg text-foreground mb-6">CONTACT INFO</h3>
              <div className="space-y-5">
                <a href="tel:6467082207" className="flex items-start gap-4 group">
                  <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">646-708-2207</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">347-281-1781</p>
                  </div>
                </a>
                <a href="mailto:Jzwu29@yahoo.com" className="flex items-start gap-4 group">
                  <Mail className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">Jzwu29@yahoo.com</p>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground">4605C Bullard Ave</p>
                    <p className="text-sm text-foreground">Bronx, NY 10470</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground">Mon – Sat: 8:00 AM – 4:00 PM</p>

                  </div>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=4605C+Bullard+Ave+Bronx+NY+10470"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-border p-4 hover:border-primary transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono">LOCATION</span>
                <span className="text-[10px] tracking-[0.4em] text-primary font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  OPEN MAP →
                </span>
              </div>
              <div className="w-full h-40 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2 animate-pulse" />
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">THE BRONX</p>
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">40.8957°N 73.8545°W</p>
                  </div>
                </div>
              </div>
            </a>


          </div>
        </motion.div>
      </div>
    </section>
  );
}