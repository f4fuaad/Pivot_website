import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "Do I need previous technical or coding experience?",
    answer: "No, absolutely none! Our entire curriculum is built for complete beginners. We teach you how to build professional websites and copy using zero-code AI builders and assistants. If you can use standard web apps, you can easily master this program."
  },
  {
    question: "Can I do this program alongside my full-time job?",
    answer: "Yes! In fact, over 80% of our 435+ successful alumni started Pivot2Tech while working a full-time 9-to-5 job. The program is self-paced, and we recommend dedicating about 5 to 10 hours a week to go through the modules and start bidding."
  },
  {
    question: "How long does it take to land my first client?",
    answer: "The average student lands their first client in 5 weeks. Some dedicated students land a client in their first 2-3 weeks, while others take 6-8 weeks. By following our proven Bidding System in Module 4, you'll be actively sending proposals that convert."
  },
  {
    question: "What is the typical value of a first freelance client?",
    answer: "Our students focus on high-ticket freelance retainers. The average first-client contract size is $2,000/month. We show you how to bundle AI copywriting and AI website management together so clients are excited to sign monthly retainers."
  },
  {
    question: "What AI tools will we be using, and are they expensive?",
    answer: "We focus on industry-standard, accessible AI web builders, copywriting suites, and productivity engines. Most tools have generous free trials or very affordable starter plans ($10-20/mo) which you easily build directly into your client's onboarding fees."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 border-t border-white/5 bg-transparent relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#6C5CE7]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#6C5CE7] mb-2.5 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-3">
            Everything you need to know about Pivot2Tech, the workload, support system, and expectations.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white/[0.02] border-[#6C5CE7]/30 shadow-[0_0_20px_rgba(108,92,231,0.05)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold text-white flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 ${isOpen ? "text-[#6C5CE7]" : "text-white/40"} transition-colors`} />
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full ${isOpen ? "bg-[#6C5CE7] text-white" : "bg-white/5 text-white/50"} transition-colors`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-white/60 leading-relaxed font-sans pl-[44px]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
