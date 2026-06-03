import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

const projectTypes = [
  { value: "residential", label: "RESIDENTIAL" },
  { value: "commercial", label: "COMMERCIAL" },

];

const serviceOptions = [
  { value: "gates_doors", label: "Gates & Doors" },
  { value: "railings_handrails", label: "Railings & Handrails" },
  { value: "canopies_awnings", label: "Canopies" },
  { value: "window_guards", label: "Window Guards" },
  { value: "fencing", label: "Fencing" },
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", project_type: "", service: "", description: "", address: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.QuoteRequest.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-foreground mb-2">QUOTE REQUEST RECEIVED</h3>
        <p className="text-sm text-muted-foreground font-mono">
          We'll call you within 24 hours to discuss your project.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Project Type Selector */}
      <div>
        <label className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono block mb-3">
          PROJECT TYPE *
        </label>
        <div className="grid grid-cols-3 gap-2">
          {projectTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => handleChange("project_type", type.value)}
              className={`py-3 border-2 text-xs tracking-widest font-mono transition-all ${
                form.project_type === type.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Service Selector */}
      <div>
        <label className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono block mb-3">
          SERVICE NEEDED *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {serviceOptions.map((svc) => (
            <button
              key={svc.value}
              type="button"
              onClick={() => handleChange("service", svc.value)}
              className={`py-3 px-2 border-2 text-xs tracking-wider font-mono transition-all ${
                form.service === svc.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {svc.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono block mb-2">NAME *</label>
          <Input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className="bg-background border-2 border-border font-mono text-sm h-12 focus:border-primary"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono block mb-2">PHONE *</label>
          <Input
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            type="tel"
            className="bg-background border-2 border-border font-mono text-sm h-12 focus:border-primary"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono block mb-2">EMAIL</label>
          <Input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            type="email"
            className="bg-background border-2 border-border font-mono text-sm h-12 focus:border-primary"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono block mb-2">INSTALLATION ADDRESS</label>
          <Input
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="bg-background border-2 border-border font-mono text-sm h-12 focus:border-primary"
            placeholder="Property address"
          />
        </div>
      </div>

      <div>
        <label className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono block mb-2">PROJECT DETAILS</label>
        <Textarea
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="bg-background border-2 border-border font-mono text-sm min-h-[100px] focus:border-primary"
          placeholder="Describe your project: dimensions, style preferences, timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting || !form.name || !form.phone || !form.project_type || !form.service}
        className="w-full bg-primary text-primary-foreground py-4 text-xs tracking-[0.3em] font-mono hover:bg-primary/90 transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
        {submitting ? "SUBMITTING..." : "REQUEST FABRICATION QUOTE"}
      </button>
    </form>
  );
}