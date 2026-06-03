import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "PROCESS", href: "#process" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-heading text-sm tracking-wider text-foreground">RUI HUA</span>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">STAINLESS STEEL INC.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:6467082207"
            className="flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 text-xs tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Phone className="w-3 h-3" />
            CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:6467082207"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 text-xs tracking-widest"
              >
                <Phone className="w-3 h-3" />
                646-708-2207
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}