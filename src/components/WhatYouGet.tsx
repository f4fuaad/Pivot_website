import React, { useEffect, useRef } from "react";
import { BookOpen, Users, Video, CalendarDays, KeyRound, CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is active
gsap.registerPlugin(ScrollTrigger);

interface ValueProp {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const valuePropsList: ValueProp[] = [
  {
    title: "Full Curriculum",
    desc: "Step-by-step video modules covering mindset, AI websites, copywriting, and client acquisition.",
    icon: <BookOpen className="h-5 w-5 text-white" />
  },
  {
    title: "Community",
    desc: "Access to a private community of fellow active, high-performing AI freelancers for collaboration and sharing.",
    icon: <Users className="h-5 w-5 text-white" />
  },
  {
    title: "Weekly Q&A Calls",
    desc: "Live interactive group calls to clear doubts, get direct project feedback, and review live proposals.",
    icon: <Video className="h-5 w-5 text-white" />
  },
  {
    title: "Weekly 1-on-1 Calls",
    desc: "Personalized coaching sessions to keep you accountable and help you troubleshoot client hurdles.",
    icon: <CalendarDays className="h-5 w-5 text-white" />
  },
  {
    title: "Bidding System",
    desc: "A proven, highly optimized system for pitching and landing your first paying clients from scratch.",
    icon: <KeyRound className="h-5 w-5 text-white" />
  }
];

export function WhatYouGet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const statsCard = statsCardRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Stats card parallax scroll (drags along on scroll, making it feel dynamic)
      if (statsCard) {
        gsap.to(statsCard, {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // 2. Value cards scroll trigger stagger-reveal
      gsap.fromTo(
        ".gsap-value-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-value-cards-container",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 3. Header reveal
      gsap.fromTo(
        ".gsap-wyg-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 90%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="what-you-get" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background flare */}
      <div className="absolute bottom-0 right-[20%] w-[350px] h-[350px] bg-[#6C5CE7]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="gsap-wyg-header opacity-0 mb-16 max-w-2xl">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#6C5CE7] mb-2.5 block">
            The Complete Toolkit
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display">
            What You Get
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-4">
            Everything you need to successfully pivot into a high-paying freelancing career in just 6 weeks. No fluff, just practical systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Stats Block */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              ref={statsCardRef}
              className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6C5CE7] to-violet-500" />
              
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                Proven Track Record
              </h3>

              <div className="space-y-8">
                {/* Stat 1 */}
                <div className="group">
                  <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-1.5 bg-gradient-to-r from-white to-white/70 bg-clip-text">
                    435+
                  </div>
                  <div className="text-sm font-semibold text-[#8c7df0] mb-0.5">
                    People Pivoted
                  </div>
                  <div className="text-xs text-white/50">
                    Successful career shifts into AI Freelancing
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="border-t border-white/5 pt-6">
                  <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-1.5 bg-gradient-to-r from-white to-white/70 bg-clip-text">
                    5 Weeks
                  </div>
                  <div className="text-sm font-semibold text-[#8c7df0] mb-0.5">
                    Average Time to First Client
                  </div>
                  <div className="text-xs text-white/50">
                    From absolute beginner to active contractor
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="border-t border-white/5 pt-6">
                  <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-1.5 bg-gradient-to-r from-white to-white/70 bg-clip-text">
                    $2,000/Mo
                  </div>
                  <div className="text-sm font-semibold text-[#8c7df0] mb-0.5">
                    Average First-Client Value
                  </div>
                  <div className="text-xs text-white/50">
                    Initial contract size secured using our client acquisition templates
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Value Props list */}
          <div className="gsap-value-cards-container lg:col-span-7 space-y-4">
            {valuePropsList.map((item, index) => (
              <div
                key={index}
                className="gsap-value-card opacity-0 group flex gap-5 p-5 md:p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 shadow-xl"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#6C5CE7]/15 border border-[#6C5CE7]/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="p-2 rounded-lg bg-[#6C5CE7] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                    {item.title}
                    <CheckCircle className="h-4 w-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
