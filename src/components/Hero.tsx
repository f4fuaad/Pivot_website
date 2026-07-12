import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Award, Zap } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ctaLink = "https://v37rb5zaj0q.typeform.com/to/YDtO5QXZ";
  
  // Refs for GSAP parallax and scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const robotContainerRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContainer = textContainerRef.current;
    const robotContainer = robotContainerRef.current;
    const bgGlow = bgGlowRef.current;

    if (!section) return;

    // Create GSAP context for proper cleanup of animations
    const ctx = gsap.context(() => {
      // 1. Parallax scrolling for Robot Container (moves down on scroll to create deep 3D depth)
      if (robotContainer) {
        gsap.to(robotContainer, {
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      // 2. Parallax scrolling for Text Copy (moves up on scroll, creating a counter-movement)
      if (textContainer) {
        gsap.to(textContainer, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      // 3. Parallax scrolling for the Background spotlight/glow
      if (bgGlow) {
        gsap.to(bgGlow, {
          y: 120,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      // 4. Smooth GSAP entrance transitions for text lines
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".gsap-fade-badge",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
      .fromTo(
        ".gsap-fade-h1",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.7"
      )
      .fromTo(
        ".gsap-fade-p",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        ".gsap-fade-cta",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        ".gsap-fade-badges > div",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      );

    }, sectionRef);

    return () => ctx.revert(); // Reverts/kills all ScrollTriggers & timelines cleanly on unmount
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 overflow-hidden flex items-center justify-center"
    >
      {/* Background radial spotlight */}
      <div 
        ref={bgGlowRef}
        className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(108,92,231,0.06)_0%,transparent_60%)] pointer-events-none" 
      />
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#6C5CE7"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Pivot2Tech Copy & CTA */}
          <div 
            ref={textContainerRef}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20"
          >
            
            {/* Pulsing Badge */}
            <div
              className="gsap-fade-badge opacity-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 text-xs font-semibold text-[#a29bfe] mb-8 shadow-[0_0_15px_rgba(108,92,231,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              9 Spots Left for July Intake
            </div>

            {/* Headline */}
            <h1
              className="gsap-fade-h1 opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white mb-6 leading-[1.15] font-display"
            >
              Discover How <span className="text-[#6C5CE7] bg-gradient-to-r from-[#a29bfe] to-[#6C5CE7] bg-clip-text text-transparent">435+ People</span> Landed Their First $2K/Month Client In 6 Weeks With AI Freelancing
            </h1>

            {/* Subtext */}
            <p
              className="gsap-fade-p opacity-0 text-base sm:text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed font-sans"
            >
              Join the program helping everyday people become AI freelancers — no prior experience, no personal brand required.
            </p>

            {/* CTA Button */}
            <div
              className="gsap-fade-cta opacity-0 w-full sm:w-auto mb-12"
            >
              <a
                href={ctaLink}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-[#6C5CE7] hover:bg-[#5b4cd1] transition-all duration-300 shadow-[0_0_30px_rgba(108,92,231,0.4)] hover:shadow-[0_0_40px_rgba(108,92,231,0.6)] transform hover:-translate-y-1"
              >
                Apply Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform" />
              </a>
            </div>

            {/* Highlight Trust Badges */}
            <div
              className="gsap-fade-badges grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-white/5"
            >
              <div className="opacity-0 flex flex-col items-center lg:items-start p-3 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                <Users className="h-5 w-5 text-[#6C5CE7] mb-2" />
                <span className="text-white font-semibold text-sm">435+ Alumni</span>
                <span className="text-white/40 text-[10px]">Pivoted successfully</span>
              </div>
              <div className="opacity-0 flex flex-col items-center lg:items-start p-3 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                <Award className="h-5 w-5 text-[#6C5CE7] mb-2" />
                <span className="text-white font-semibold text-sm">6 Weeks</span>
                <span className="text-white/40 text-[10px]">Fast-track blueprint</span>
              </div>
              <div className="opacity-0 flex flex-col items-center lg:items-start p-3 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                <Zap className="h-5 w-5 text-[#6C5CE7] mb-2" />
                <span className="text-white font-semibold text-sm">No Coding</span>
                <span className="text-white/40 text-[10px]">Beginner-friendly</span>
              </div>
              <div className="opacity-0 flex flex-col items-center lg:items-start p-3 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                <Sparkles className="h-5 w-5 text-[#6C5CE7] mb-2" />
                <span className="text-white font-semibold text-sm">$2k/mo</span>
                <span className="text-white/40 text-[10px]">Average first client</span>
              </div>
            </div>

          </div>

          {/* Right: The Interactive 3D Robot Spline Scene */}
          <div 
            ref={robotContainerRef}
            className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[700px] flex items-center justify-center z-10 -translate-y-8 sm:-translate-y-12 lg:-translate-y-24 lg:-mt-12"
          >
            {/* Ambient behind-robot glow */}
            <div className="absolute w-[300px] h-[300px] bg-[#6C5CE7]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="w-full h-full relative group">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/5 text-[10px] text-white/50">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C5CE7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#6C5CE7]"></span>
                </span>
                Hover or Drag to Control Robot
              </div>
              
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
