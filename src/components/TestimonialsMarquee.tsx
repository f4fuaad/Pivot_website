import React, { useEffect, useRef } from "react";
import { CheckCircle, ArrowUpRight, Star, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StudentTestimonial {
  id: number;
  name: string;
  avatar: string;
  pivot: string;
  content: string;
  metric: string;
  rating: number;
}

const track1: StudentTestimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Retail Manager",
    content: "Just closed a $2,200/mo retainer for an AI website + automation setup! Client was blown away by the live preview. Module 2 & 4 literally paid for the whole program in 2 weeks! 🙌",
    metric: "+$2,200/mo retainer",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Admin Assistant",
    content: "OMG Sarah here! They just signed the contract! First payment of £1,500 ($1,900 USD) is in my account. The bidding outreach template from Module 4 is actual magic. Thank you guys so much!",
    metric: "Signed £1,500 client",
    rating: 5
  },
  {
    id: 3,
    name: "Dmitri Kozlov",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Content Writer",
    content: "My client was paying $500/mo for standard copy. I bundled AI website optimization + newsletter copywriting and stepped them up to a $2,000/mo retainer. Frame the value, just like Module 3 says!",
    metric: "Upped to $2,000/mo",
    rating: 5
  },
  {
    id: 4,
    name: "Marcus K.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Real Estate Agent",
    content: "Build & launch process for a local medical clinic is complete. Charged $2,000 flat rate using the Pivot2Tech website template. Took me about 8 hours total. Unbelievable return on investment.",
    metric: "$2,000 flat rate earned",
    rating: 5
  },
  {
    id: 5,
    name: "Kevin Vance",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Logistics Coordinator",
    content: "Used the bidding system outline from Module 4 on 3 job openings. Got 2 responses, just got off the call with one and we finalized a $1,800/mo copywriting & email workflow contract! Let's go!",
    metric: "+$1,800/mo contract",
    rating: 5
  }
];

const track2: StudentTestimonial[] = [
  {
    id: 6,
    name: "Jessica Alcott",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Tech Recruiter",
    content: "5 weeks ago I had exactly 0 clients. Today, I'm managing two clients at $2,000/mo each. I did it alongside my corporate day job. Mindset shift in Module 1 was absolutely key.",
    metric: "$4,000/mo side income",
    rating: 5
  },
  {
    id: 7,
    name: "Liam Carter",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Hospitality Manager",
    content: "Contract finalized! Client wanted custom AI copywriting for their e-com store. Closed at $2,100 on a 3-month contract. Pivot2Tech is literally a cheat code for non-technical builders.",
    metric: "$2,100 closed deal",
    rating: 5
  },
  {
    id: 8,
    name: "Amanda Ross",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Teacher",
    content: "I was extremely skeptical but the step-by-step videos left nothing out. Landed an offline boutique store owner for $1,500/mo to handle their AI web copy and local funnels. Beyond thrilled!",
    metric: "Secured $1,500/mo",
    rating: 5
  },
  {
    id: 9,
    name: "Daniel Chen",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Student",
    content: "Landing my first $2K retainer felt unreal. I had zero portfolio, but the live bidding support and vetted templates gave me the ultimate confidence during the client pitch meeting.",
    metric: "First $2,000/mo signed",
    rating: 5
  },
  {
    id: 10,
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    pivot: "Former Marketing Intern",
    content: "The live Q&A sessions are pure gold. The team reviewed my proposal live and showed me exactly how to tweak my bidding approach. Signed the client the very next morning!",
    metric: "Closed client after Q&A",
    rating: 5
  }
];

function ProfileCard({ item }: { item: StudentTestimonial }) {
  return (
    <div className="w-[360px] flex-shrink-0 p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between h-[210px] backdrop-blur-md select-none group hover:border-[#6C5CE7]/30 transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover border border-white/10 group-hover:border-[#6C5CE7]/40 transition-colors"
            />
            <div>
              <span className="text-sm font-bold text-white block truncate max-w-[140px] font-display">
                {item.name}
              </span>
              <span className="text-[10px] text-white/40 block">
                {item.pivot}
              </span>
            </div>
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-0.5">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-[#6C5CE7] text-[#6C5CE7]" />
            ))}
          </div>
        </div>

        {/* Content testimony */}
        <p className="text-xs text-white/70 leading-relaxed font-sans line-clamp-4">
          "{item.content}"
        </p>
      </div>

      {/* Verified Stamp and Metric */}
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-wider text-white/30 font-bold flex items-center gap-1">
          <CheckCircle className="h-2.5 w-2.5 text-emerald-500" />
          Verified Alumnus
        </span>
        
        {/* Metric badge */}
        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#6C5CE7]/15 border border-[#6C5CE7]/20 text-[#a29bfe] flex items-center gap-0.5">
          <TrendingUp className="h-2.5 w-2.5 text-[#a29bfe]" />
          {item.metric}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track1 = track1Ref.current;
    const track2 = track2Ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Coupled scroll-parallax shifts for the horizontal marquee
      if (track1) {
        gsap.to(track1, {
          x: -160,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
      if (track2) {
        gsap.to(track2, {
          x: 160,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate arrays to achieve seamless infinite scrolling
  const list1 = [...track1, ...track1, ...track1];
  const list2 = [...track2, ...track2, ...track2];

  return (
    <section 
      ref={sectionRef}
      className="py-24 border-y border-white/5 bg-[#07070a]/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <span className="text-xs uppercase font-semibold tracking-wider text-[#6C5CE7] mb-2.5 block">
          Alumni Success Stories
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight">
          Everyday People. Real Outcomes.
        </h2>
        <p className="text-white/50 text-sm md:text-base mt-3 max-w-xl mx-auto">
          See how our students successfully transformed their careers, landed high-value clients, and secured recurring monthly retainers.
        </p>
      </div>

      {/* Dual Marquee Track Wrapper */}
      <div className="flex flex-col gap-6 relative max-w-full overflow-hidden py-4">
        {/* Track 1: Left scrolling */}
        <div className="flex w-full overflow-hidden select-none relative z-10">
          <div 
            ref={track1Ref}
            className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          >
            {list1.map((item, index) => (
              <div key={`t1-${item.id}-${index}`}>
                <ProfileCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Right scrolling */}
        <div className="flex w-full overflow-hidden select-none relative z-10">
          <div 
            ref={track2Ref}
            className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]"
          >
            {list2.map((item, index) => (
              <div key={`t2-${item.id}-${index}`}>
                <ProfileCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Vignette side fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-56 bg-gradient-to-r from-[#0a0a0f] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-56 bg-gradient-to-l from-[#0a0a0f] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
