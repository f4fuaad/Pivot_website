/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TestimonialsMarquee } from "./components/TestimonialsMarquee";
import { WhatYouGet } from "./components/WhatYouGet";
import { Modules } from "./components/Modules";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-[#6C5CE7]/30 selection:text-white flex flex-col items-center relative overflow-x-hidden font-sans">
      {/* Ambient Space & Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_top,white_50%,transparent_95%)] opacity-70" />
        {/* Top radial spotlight */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(108,92,231,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Sticky Glass Navbar */}
      <Navbar />
      
      {/* Main Structural Content Sections */}
      <main className="w-full flex flex-col items-center relative z-10">
        
        {/* Hero Section */}
        <div className="w-full">
          <Hero />
        </div>

        {/* Scrolling Testimonials Marquee */}
        <div className="w-full">
          <TestimonialsMarquee />
        </div>

        {/* What You Get Section (Values & Stats) */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <WhatYouGet />
        </div>

        {/* Modules Section */}
        <div className="w-full">
          <Modules />
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>

        {/* Final CTA Section */}
        <div className="w-full">
          <FinalCTA />
        </div>

      </main>

      {/* Footer Section with Privacy Modal */}
      <Footer />
    </div>
  );
}
