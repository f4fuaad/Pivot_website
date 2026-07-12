import React, { useEffect, useRef } from "react";
import { BookOpen, Sparkles, Code, CheckCircle, Flame } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

interface ModuleData {
  num: string;
  emoji: string;
  title: string;
  desc: string;
  skills: string[];
  duration: string;
}

const modulesList: ModuleData[] = [
  {
    num: "01",
    emoji: "🧠",
    title: "Mindset Minefield",
    desc: "Time management, productivity, and the crucial cognitive & mindset shifts needed to break out of the 9-to-5 loop and successfully operate as a self-directed freelancer.",
    skills: ["Goal Structuring", "High-ROI Habits", "Freelance Pricing Logic"],
    duration: "Week 1"
  },
  {
    num: "02",
    emoji: "🧙🏼‍♂️",
    title: "AI Website Wizard",
    desc: "Build professional, no-code, AI-powered websites, landing pages, lead-capture funnels, and dynamic online stores for local business clients in minutes using modern tools.",
    skills: ["No-Code Development", "AI Integrations", "E-Commerce Funnels"],
    duration: "Weeks 2-3"
  },
  {
    num: "03",
    emoji: "✍🏾",
    title: "AI Copywriting Campus",
    desc: "Write high-converting, persuasive AI-assisted copy for marketing campaigns, outbound cold outreach emails, social media ads, and optimized blog content that drives direct sales.",
    skills: ["AI Copywriting", "Outreach Funnels", "Conversion Copy"],
    duration: "Week 4"
  },
  {
    num: "04",
    emoji: "👑",
    title: "Client Conqueror",
    desc: "Our signature client acquisition engine. Learn exactly how to leverage modern bidding platforms, construct winning proposals, and secure your first high-paying contracts without an audience.",
    skills: ["Bidding Systems", "Proposal Strategy", "Contract Execution"],
    duration: "Weeks 5-6"
  }
];

export function Modules() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".gsap-modules-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%"
          }
        }
      );

      // Staggered grid items reveal
      gsap.fromTo(
        ".gsap-module-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-modules-grid",
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="modules" 
      className="py-24 border-t border-white/5 bg-[#08080c]/40 relative"
    >
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#6C5CE7]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="gsap-modules-header opacity-0 text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#6C5CE7] mb-2.5 block">
            Step-by-Step Curriculum
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display">
            The 4 Modules
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-4">
            A comprehensive, battle-tested roadmap designed to guide you from initial setup to landing high-paying clients, systematically.
          </p>
        </div>

        {/* Modules Bento Grid */}
        <div className="gsap-modules-grid grid-cols-1 md:grid-cols-2 gap-8">
          {modulesList.map((mod, index) => (
            <div
              key={index}
              className="gsap-module-card opacity-0 relative p-8 md:p-10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-[#6C5CE7]/20 transition-all duration-300 flex flex-col justify-between group shadow-2xl overflow-hidden"
            >
              {/* Highlight background shine */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6C5CE7]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold font-display text-[#6C5CE7]/40 group-hover:text-[#6C5CE7] transition-colors duration-300">
                      Module {mod.num}
                    </span>
                    <span className="text-2xl">{mod.emoji}</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-white/50 border border-white/5">
                    {mod.duration}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed font-sans mb-8">
                  {mod.desc}
                </p>
              </div>

              {/* Skills acquired */}
              <div className="border-t border-white/5 pt-6 mt-auto">
                <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-3 block">
                  Core Skills Mastered:
                </span>
                <div className="flex flex-wrap gap-2">
                  {mod.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-white/80 group-hover:border-white/10 group-hover:bg-white/[0.03] transition-all"
                    >
                      <CheckCircle className="h-3 w-3 text-[#6C5CE7]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
