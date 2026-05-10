"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  HeartHandshake,
  Sprout,
  Leaf,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    id: 1,
    type: "brand",

    image: "/image/high png agro.png", 
    tagline: "AgroZen Care PLC",
    accent: "Nature • Innovation • Care",
  },
  {
    id: 2,
    type: "vision",
    title: "Cultivating Health,",
    highlight: "Harvesting Happiness",
    desc: "Integrating advanced farming technologies with compassionate elderly care, creating ecosystems where communities flourish.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2000&auto=format&fit=crop",
    icon: Sprout,
    stats: [{ value: "100%", label: "Organic" }, { value: "24/7", label: "Care" }],
  },
  {
    id: 3,
    type: "tourism",
    title: "Global Standards,",
    highlight: "Local Heritage",
    desc: "Bringing Italy's farmhouse charm to Chittagong's landscapes — immersive eco-retreats where traditional wisdom meets luxury.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop",
    icon: Leaf,
    stats: [{ value: "50+", label: "Acres" }, { value: "Eco", label: "Lodges" }],
  },
  {
    id: 4,
    type: "care",
    title: "A Sanctuary",
    highlight: "For Generations",
    desc: "Dignified living for elders, rigorous training for caregivers — building a compassionate future through specialized institutes.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop",
    icon: HeartHandshake,
    stats: [{ value: "Expert", label: "Care" }, { value: "Training", label: "Institute" }],
  },
];

const MouseTrackingGradient = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="absolute inset-0 overflow-hidden bg-[#F8FAFC]">
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 500px at calc(50% + ${useTransform(springX, (x) => x)}px) calc(50% + ${useTransform(springY, (y) => y)}px), rgba(16,185,129,0.15) 0%, transparent 70%)`
        }}
      />
    </div>
  );
};

export default function AgroZenHero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const currentSlide = slides[current];

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden ">
      <div className="relative h-full w-full lg:h-[94vh] lg:w-[98%] lg:mx-auto lg:mt-[3vh] lg:rounded-[10px] overflow-hidden">
        
        {/* Background Layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {currentSlide.type === "brand" ? (
              <MouseTrackingGradient />
            ) : (
              <div className="relative h-full w-full">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6 }}
                  src={currentSlide.image}
                  className="h-full w-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full px-6 md:px-12 lg:px-24"
            >
              {currentSlide.type === "brand" ? (
                /* --- FIRST SLIDER: CENTERED LOGO IMAGE --- */
                <div className="flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
                    className="relative w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px]"
                  >
                    <img 
                      src={currentSlide.image} 
                      alt="AgroZen Logo" 
                      className="w-full h-auto  lg:mt-14 drop-shadow-[0_20px_50px_rgba(16,185,129,0.2)]"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12"
                  >
                  
                  </motion.div>
                </div>
              ) : (
                /* --- OTHER SLIDERS: CONTENT --- */
                <div className="max-w-5xl">
                  <motion.div className="flex items-center gap-3 text-emerald-400 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold">
                  
                   
                  </motion.div>
                  <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8">
                    {currentSlide.title} <br />
                    <span className="italic font-light text-emerald-400">{currentSlide.highlight}</span>
                  </h1>
                  <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light mb-10 leading-relaxed">
                    {currentSlide.desc}
                  </p>
                  <div className="flex gap-12">
                    {currentSlide.stats?.map((stat, i) => (
                      <div key={i}>
                        <p className="text-3xl md:text-5xl font-bold text-white">{stat.value}</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative py-4"
            >
              <div className={`h-[2px] transition-all duration-500 rounded-full ${
                current === i ? "w-12 bg-emerald-500" : "w-4 bg-white/20"
              }`} />
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          key={`bar-${current}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
          className="absolute top-0 left-0 right-0 h-[3px] bg-emerald-500 origin-left z-30"
        />
      </div>
    </section>
  );
}