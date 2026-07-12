import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  const ctaLink = "https://v37rb5zaj0q.typeform.com/to/YDtO5QXZ";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Absolute glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6C5CE7]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glowing Box */}
        <div className="relative p-8 md:p-16 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5 shadow-2xl overflow-hidden flex flex-col items-center text-center">
          
          {/* Subtle neon corner glows */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#6C5CE7]/10 rounded-full blur-[30px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-[30px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-6 shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            9 Spots Left for July Intake
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display mb-6 tracking-tight max-w-2xl leading-[1.1]">
            Ready to Start Your AI Freelancing Journey?
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-white/60 max-w-md mx-auto mb-10 leading-relaxed font-sans">
            Join 435+ everyday people who broke free from their 9-to-5, built high-value skills, and secured financial independence. No branding or tech skills required.
          </p>

          {/* Large CTA Button */}
          <a
            href={ctaLink}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-[#6C5CE7] hover:bg-[#5b4cd1] transition-all duration-300 shadow-[0_0_30px_rgba(108,92,231,0.4)] hover:shadow-[0_0_40px_rgba(108,92,231,0.6)] transform hover:-translate-y-1 group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Supporting Trust Bullet Points */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-xs font-medium text-white/40">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#6C5CE7]" />
              Instant Dashboard Access
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#6C5CE7]" />
              Coaching & Live Calls Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#6C5CE7]" />
              6-Week Full Blueprint
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
