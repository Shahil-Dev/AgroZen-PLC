"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Compass,
  Trees,
  Sun,
  Coffee,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

// ===== Type Definitions =====
interface RouteStep {
  icon: React.ElementType;
  title: string;
  desc: string;
  highlight: string;
}

// ===== Cinematic Text Reveal =====
const CinematicReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => (
  <span className="inline-block overflow-hidden">
    <motion.span
      initial={{ y: "110%", skewY: 4 }}
      whileInView={{ y: 0, skewY: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className="block"
    >
      {children}
    </motion.span>
  </span>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AgroTourismRouteSummary() {
  const routeSteps: RouteStep[] = [
    {
      icon: Trees,
      title: "The Living Sanctuary",
      desc: "Begin in our carbon-negative forest reserves, where ancient trees whisper stories of regeneration and the air carries the scent of wild herbs.",
      highlight: "Forest Bathing",
    },
    {
      icon: Sun,
      title: "Solar Harvest Fields",
      desc: "Walk golden pathways through precision farmlands at dawn. Witness technology and tradition merging under the first light of day.",
      highlight: "Sunrise Harvest",
    },
    {
      icon: Coffee,
      title: "Organic Retreat",
      desc: "Culminate in farm-to-table experiences. Taste ingredients harvested steps from your table, prepared by chefs who know each plant by name.",
      highlight: "Seed-to-Plate",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-12 bg-[#FCFAF7] overflow-hidden font-sans">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_#0a5c3a_1px,_transparent_1px)] [background-size:40px_40px]" />

      {/* Ambient Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/5 blur-[150px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-300/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center"
        >
          {/* LEFT: Narrative Content */}
          <div className="lg:col-span-6 space-y-8 md:space-y-10">
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 md:w-12 bg-emerald-500/50" />
                <span className="text-emerald-700 font-medium uppercase tracking-[0.35em] text-[10px] md:text-xs">
                  The AgroZen Route
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 tracking-tight leading-[0.9]">
                <CinematicReveal>A Journey of</CinematicReveal>
                <br />
                <span className="italic font-serif text-emerald-600">
                  <CinematicReveal delay={0.15}>Reconnection</CinematicReveal>
                </span>
              </h2>

              <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed max-w-lg">
                Not a tour—a pilgrimage through landscapes that heal. Three
                curated chapters guiding you from ancient forests through sunlit
                fields to a table set by nature itself.
              </p>
            </motion.div>

            {/* Route Steps Timeline */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 md:space-y-8"
            >
              {routeSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 md:gap-5 group cursor-pointer"
                >
                  {/* Timeline Connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:border-emerald-400 group-hover:bg-emerald-50 transition-all duration-300">
                      <step.icon
                        size={20}
                        className="text-stone-400 group-hover:text-emerald-600 transition-colors"
                      />
                    </div>
                    {idx !== routeSteps.length - 1 && (
                      <div className="w-px h-10 md:h-14 bg-gradient-to-b from-stone-300 to-transparent mt-1" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="pt-1 md:pt-2 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-stone-800 font-medium text-base md:text-lg leading-snug">
                        {step.title}
                      </h3>
                      <span className="hidden sm:inline-block px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full text-[10px] text-emerald-700 font-medium">
                        {step.highlight}
                      </span>
                    </div>
                    <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/agro-tourism">
                <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-medium text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Compass size={18} />
                    Explore The Route
                  </span>
                  <ArrowRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-white/10 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Cinematic Visual */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[15px]  overflow-hidden shadow-2xl group">
              {/* Hero Image */}
              <img
                src="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="AgroZen Tourism Route Landscape"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent" />
            </div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -top-6 -right-6 w-24 h-24 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-emerald-600" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
