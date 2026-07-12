import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for floating pill navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const ctaLink = "https://v37rb5zaj0q.typeform.com/to/YDtO5QXZ";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
        isScrolled ? "top-2 md:top-4" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50">
        {/* Left: Logo */}
        <div 
          className="flex items-center gap-2 pl-2 md:pl-0 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C5CE7] to-violet-900 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="text-white font-bold tracking-tight text-lg font-display">
            Pivot<span className="text-[#6C5CE7]">2</span>Tech
          </span>
        </div>

        {/* Desktop Links & CTA */}
        <div className="flex items-center gap-2 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <button
              onClick={() => handleScrollTo("what-you-get")}
              className="relative hover:text-white transition-colors group cursor-pointer"
            >
              What You Get
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6C5CE7] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
            <button
              onClick={() => handleScrollTo("modules")}
              className="relative hover:text-white transition-colors group cursor-pointer"
            >
              Modules
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6C5CE7] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
            <button
              onClick={() => handleScrollTo("faq")}
              className="relative hover:text-white transition-colors group cursor-pointer"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6C5CE7] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          </div>

          <a
            href={ctaLink}
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(108,92,231,0.3)]"
          >
            Apply Today
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neutral-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full mt-2 p-4 rounded-3xl bg-black/90 border border-white/10 backdrop-blur-2xl flex flex-col gap-2 shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => handleScrollTo("what-you-get")}
              className="text-left text-neutral-300 hover:text-white text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-white/10 w-full"
            >
              What You Get
            </button>
            <button
              onClick={() => handleScrollTo("modules")}
              className="text-left text-neutral-300 hover:text-white text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-white/10 w-full"
            >
              Modules
            </button>
            <button
              onClick={() => handleScrollTo("faq")}
              className="text-left text-neutral-300 hover:text-white text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-white/10 w-full"
            >
              FAQ
            </button>
            <a
              href={ctaLink}
              target="_blank"
              referrerPolicy="no-referrer"
              className="mt-2 mx-2 px-6 py-4 rounded-xl bg-white text-black text-center text-base font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1"
            >
              Apply Today
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
