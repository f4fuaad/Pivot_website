import React, { useState } from "react";
import { Linkedin, Twitter, ArrowUp, X, ShieldAlert } from "lucide-react";

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#050508]/80 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand/Logo */}
          <div className="flex items-center gap-1.5 cursor-pointer" onClick={handleScrollToTop}>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Pivot<span className="text-[#6C5CE7]">2</span>Tech
            </span>
          </div>

          {/* Social Icons & Privacy Policy link */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-xs font-medium text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all border border-white/5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all border border-white/5"
                aria-label="X (Twitter) Profile"
              >
                {/* Custom modern X logo representation using vector/CSS or simple Twitter icon */}
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/40 font-sans">
            © 2026 Pivot2Tech. All rights reserved.
          </span>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-white/30 hover:text-white transition-all cursor-pointer"
          >
            Back to Top
            <ArrowUp className="h-3.5 w-3.5 p-0.5 rounded-full bg-white/5 text-white/30 group-hover:text-white group-hover:bg-[#6C5CE7] transition-all" />
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal overlay */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg p-6 md:p-8 rounded-3xl bg-[#0a0a0f] border border-white/10 shadow-2xl overflow-y-auto max-h-[80vh] no-scrollbar">
            {/* Close Button */}
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Title */}
            <div className="flex items-center gap-2 mb-6">
              <ShieldAlert className="h-5 w-5 text-[#6C5CE7]" />
              <h3 className="text-xl font-bold text-white font-display">Privacy Policy</h3>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs md:text-sm text-white/60 leading-relaxed font-sans">
              <p className="font-semibold text-white">Last updated: July 2026</p>
              <p>
                At Pivot2Tech, we are committed to safeguarding your personal data and privacy. This Privacy Policy details how we handle the information collected from our students, leads, and web visitors.
              </p>
              <h4 className="font-bold text-white mt-4">1. Information We Collect</h4>
              <p>
                When you apply via Typeform or join our community, we collect registration details, billing details, and response details. This is purely used to evaluate applications, provide support services, and fulfill purchases.
              </p>
              <h4 className="font-bold text-white mt-4">2. Cookies & Analytics</h4>
              <p>
                We use localized anonymous browser session attributes and tracking mechanisms to help optimize landing page load speeds, remember navigation preferences, and measure visitor flow. No private identifiers are ever shared.
              </p>
              <h4 className="font-bold text-white mt-4">3. Data Sharing & Security</h4>
              <p>
                Your personal details, email responses, and progress results are strictly confidential. We do not sell, distribute, or expose your data to outside marketing systems. All transaction information is securely stored via payment gateways.
              </p>
              <p className="pt-4 text-white/40 border-t border-white/5 text-[11px]">
                By using our platform or submitting an application, you agree to these security attributes. For extra clarifications, reach out directly to support@pivot2tech.com.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
