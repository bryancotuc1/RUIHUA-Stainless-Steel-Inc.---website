import React from "react";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <h3 className="font-heading text-lg text-foreground">RUI HUA STAINLESS STEEL INC.</h3>
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono mt-1">BUILD & INSTALLATION — BRONX, NY

            </p>
          </div>

          {/* Quick Contact */}
          <div className="flex items-center gap-6">
            <a
              href="tel:6467082207"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              
              <Phone className="w-3 h-3" />
              646-708-2207
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-2 text-xs tracking-[0.3em] font-mono hover:bg-primary hover:text-primary-foreground transition-all">
              
              GET QUOTE
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
            © {new Date().getFullYear()} RUI HUA STAINLESS STEEL INC. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
            4605C BULLARD AVE, BRONX, NY 10470
          </p>
        </div>
      </div>
    </footer>);

}