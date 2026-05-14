"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineSun,
  HiOutlineHeart,
  HiOutlineBuildingLibrary,
  HiOutlineAcademicCap,
  HiOutlineCube,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

/* ------------------------------------------------------------------ */
/* Data & Visual Assets                                              */
/* ------------------------------------------------------------------ */
const PILLARS = [
  {
    title: "Precision Agriculture",
    subtitle: "Modern Farming",
    desc: "Export-grade vegetables and medicinal herbs managed with soil science and precision hydroponics.",
    icon: HiOutlineGlobeAlt,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Agritourism",
    subtitle: "Eco Heritage",
    desc: "Luxury eco-lodges and cultural tours celebrating rural traditions and biodiversity.",
    icon: HiOutlineSun,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Senior Living",
    subtitle: "Human Dignity",
    desc: "Premium suites with 24/7 clinical support and specialized age-related treatment.",
    icon: HiOutlineHeart,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Global Trade",
    subtitle: "World Gateway",
    desc: "A globally recognized platform trading essential commodities with full regulatory compliance.",
    icon: HiOutlineCube,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Healthcare",
    subtitle: "Clinical Excellence",
    desc: "Integrated hospital systems providing preventive care and emergency coordination.",
    icon: HiOutlineBuildingLibrary,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Education",
    subtitle: "Future Ready",
    desc: "Certified caregiver training and holistic boarding education of international standards.",
    icon: HiOutlineAcademicCap,
    className: "md:col-span-1 md:row-span-1",
  },
];

/* ------------------------------------------------------------------ */
/* Refined Components                                                */
/* ------------------------------------------------------------------ */

function BentoCard({ pillar, index }: { pillar: any; index: number }) {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 1, 0.36, 1] }}
      className={`${pillar.className} group relative overflow-hidden rounded-[15px] bg-white border border-stone-200 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-700`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="p-4 rounded-[15px] bg-stone-50 text-emerald-950 group-hover:bg-emerald-950 group-hover:text-[#D4FF5E] transition-colors duration-500">
            <Icon size={28} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
            {pillar.subtitle}
          </span>
        </div>
        <h3 className="mt-8 text-3xl font-serif tracking-tight text-emerald-950">{pillar.title}</h3>
        <p className="mt-4 text-stone-500 font-light leading-relaxed">{pillar.desc}</p>
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        Discover Strategy <HiOutlineArrowUpRight />
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={container} className="bg-[#FDFCFB] z-10 pt-24 pb-16 text-emerald-950 selection:bg-lime-200">
      
      {/* 1. ULTRA HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-lime-100/40 rounded-full blur-[100px]" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div style={{ y: textY }} className="space-y-8">
            
            <h1 className="text-[clamp(4rem,14vw,11rem)] font-bold leading-[0.85] tracking-tighter">
              Dignity <br />
              <span className="text-stone-300">Through</span> <br />
              <span className="text-emerald-900 italic font-serif">Nature.</span>
            </h1>
            <p className="max-w-xl text-xl md:text-2xl font-light text-stone-500 leading-tight">
              Merging precision technology with the serenity of the soil to create a sanctuary of life.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
      
      </section>

      {/* 2. INSTITUTIONAL STRENGTH (Black Card) */}
      <section className="py-20 px-4 md:px-20">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto rounded-[15px] bg-emerald-950 p-12 md:p-24 text-white relative overflow-hidden shadow-3xl"
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-[#D4FF5E]">Institutional <br /> Strength.</h2>
              <p className="text-emerald-100/60 text-lg font-light leading-relaxed max-w-md">
                Registered under the Companies Act 1994, our governance ensures total transparency and global-ready scalability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-l border-emerald-800/50 pl-0 md:pl-12">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D4FF5E] mb-2">Authorized Capital</p>
                <h4 className="text-6xl font-light tracking-tighter">80M <span className="text-sm font-bold opacity-30">BDT</span></h4>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D4FF5E] mb-2">Total Shares</p>
                <h4 className="text-6xl font-light tracking-tighter">8.0M <span className="text-sm font-bold opacity-30">UNIT</span></h4>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. THE BENTO GRID (The Pillars) */}
      <section className="py-32 px-4 md:px-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">The <br /> Ecosystem.</h2>
            <p className="text-stone-400 font-medium max-w-xs text-right">Six strategic domains functioning as one harmonious entity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[350px]">
            {PILLARS.map((p, i) => (
              <BentoCard key={p.title} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY QUOTE */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-serif italic text-stone-300 leading-tight"
           >
            "We don't just farm the land, <br />
            <span className="text-emerald-950 font-bold not-italic">we cultivate human dignity</span> <br /> 
            at every stage of life."
           </motion.h3>
        </div>
      </section>

      {/* 5. FUTURE ROADMAP (Apple Style Horizontal) */}
      <section className="py-32 bg-stone-900 text-white overflow-hidden rounded-t-[20px]">
        <div className="px-6 md:px-20 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Future <br /> <span className="text-emerald-500">Roadmap.</span></h2>
        </div>
        
        <div className="flex gap-8 overflow-x-auto px-6 md:px-20 pb-10 hide-scrollbar snap-x">
          {[
            { year: "2026", task: "Incorporation & Capitalization" },
            { year: "2027", task: "Hydroponic Export Launch" },
            { year: "2028", task: "Health-City Groundbreaking" },
            { year: "2030", task: "Global Trade Dominance" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="snap-center flex-shrink-0 w-[300px] md:w-[450px] aspect-video bg-white/5 border border-white/10 rounded-[15px] p-12 flex flex-col justify-between group transition-colors hover:bg-emerald-500 hover:text-emerald-950"
            >
              <span className="text-7xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity">{item.year}</span>
              <p className="text-2xl font-bold leading-tight">{item.task}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}