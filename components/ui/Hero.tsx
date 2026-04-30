"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Leaf, HeartHandshake } from "lucide-react";
import { useRef } from "react";

export default function AgroZenHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#e2e8e1]">
      <motion.div 
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="relative mx-auto h-[96vh] w-[98%] overflow-hidden mt-[2vh] rounded-[30px] shadow-2xl border border-white/10"
      >
        
        {/* Background Image - High Quality Agriculture & Tech Theme */}
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2000&auto=format&fit=crop" 
            alt="AgroZen Modern Farming"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        </motion.div>

        {/* Content Area - Optimized for Visibility and Navbar clearance */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-24 pb-16 text-center text-white">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Optimized Heading based on Option 3 */}
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]">
              Cultivating Health, <br /> 
              <span className="font-light italic text-green-300">Harvesting Happiness</span>
            </h1>

            {/* Paragraph Text */}
            <p className="mt-6 max-w-2xl text-base text-slate-100/90 md:text-lg lg:text-xl font-light leading-relaxed">
              We believe in a holistic approach to life. By integrating modern agricultural practices 
              with dedicated elderly care and eco-friendly tourism, AgroZen creates a sanctuary of 
              growth, health, and peace for every generation.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 lg:mt-12 flex flex-wrap gap-4 justify-center">
              <button className="group flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:bg-green-700 shadow-lg">
                <Leaf size={18} />
                Explore Solutions
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-full font-semibold text-white hover:bg-white/20 transition-all">
                <HeartHandshake size={18} />
                Elderly Care
              </button>
            </div>
          </motion.div>
        </div>

        {/* Minimal Bottom Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50">
          <div className="h-10 w-[1px] bg-gradient-to-b from-white to-transparent mx-auto" />
        </div>

      </motion.div>
    </section>
  );
}