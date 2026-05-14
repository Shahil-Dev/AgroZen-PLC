"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    title: "Lush Orchards"
  },
  {
    url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    title: "Vegetable Fields"
  },
  {
    url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    title: "Dairy Farm"
  },
  {
    url: "https://images.unsplash.com/photo-1594495894542-a46cc73e081a?auto=format&fit=crop&w=800&q=80",
    title: "Shaded Parks"
  }
];

export default function AgroTourismSummary() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="agro-summary" className="bg-white py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- Left Content: The Summary --- */}
          <div className="lg:col-span-7">
           
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-light tracking-tighter leading-tight text-stone-900 mb-10"
            >
              Agro-Tourism <br />
              <span className="italic font-serif text-emerald-900">Redefined</span>
            </motion.h2>

            <div className="space-y-8 max-w-2xl">
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 uppercase tracking-wide">Nature’s Convergence</h3>
                <p className="text-stone-500 font-light leading-relaxed text-lg">
                  AgroZen Care PLC brings a harmonious blend of sustainable farming and luxury leisure. 
                  Our agro-tourism route is designed to immerse visitors in the rhythmic cycles of 
                  tropical agriculture, from heritage mango groves to precision vegetable plots.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 uppercase tracking-wide">Ethical Immersion</h3>
                <p className="text-stone-500 font-light leading-relaxed text-lg">
                  Beyond just sight-seeing, we offer a hands-on journey. Explore our dairy systems, 
                  engage with local farming wisdom in our training hubs, and find serenity in 
                  our curated shaded parks. This is where the soil meets the soul.
                </p>
              </div>

              <div className="pt-6 flex gap-12 border-t border-stone-100">
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-emerald-900">50+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Plant Species</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-emerald-900">100%</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Organic Path</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-emerald-900">12+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Farm Zones</span>
                </div>
              </div>
             <Link href="/agro-tourism" > <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 group">
              Explore Now
             <ArrowRight className="text-white" />
            </button></Link>
            </div>
          </div>

          {/* --- Right Content: Compact Carousel --- */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square md:aspect-[4/5] rounded-[15px] overflow-hidden shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={carouselImages[currentIndex].url}
                  alt={carouselImages[currentIndex].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 text-white">
                <motion.span 
                  key={`span-${currentIndex}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] uppercase tracking-[0.4em] font-bold text-emerald-400"
                >
                  Highlight 0{currentIndex + 1}
                </motion.span>
                <motion.h4 
                  key={`h4-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-light italic serif mt-2"
                >
                  {carouselImages[currentIndex].title}
                </motion.h4>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-10 right-10 flex gap-2">
                {carouselImages.map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-50 rounded-full -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}