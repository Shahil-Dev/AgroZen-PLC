"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Globe2,
  Medal,
  BarChart4,
  Scale,
  Building2,
  ArrowUpRight,
  TrendingUp,
  Fingerprint,
  Eye,
  Info,
  X,
  Zap,
} from "lucide-react";

// --- Sophisticated Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AgroZenEvolution() {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1A16] text-stone-200 selection:bg-emerald-500/30 font-sans">
      {/* Ambient Background Blur */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[50%] bg-emerald-800/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 space-y-64">
        {/* SECTION 1: THE HUMAN-TECH SYNERGY */}
        <section>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-12 gap-16 items-start"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
              <motion.h2
                variants={itemVariants}
                className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] text-white"
              >
                The Spirit of <br />
                <span className="italic font-serif text-emerald-400">
                  Pure Growth
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-stone-400 text-xl font-light leading-relaxed max-w-2xl"
              >
                At AgroZen Care PLC, we believe the future of food is personal.
                We bridge the gap between biological heritage and digital
                precision, creating a human-centric ecosystem where nature and
                technology breathe as one.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid sm:grid-cols-2 gap-12"
              >
                <div className="group space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-[13px] bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-all">
                    <Fingerprint
                      className="text-emerald-400"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-white font-medium text-xl tracking-tight">
                    Ethical DNA
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Our processes are coded with integrity, ensuring every grain
                    produced is a testament to quality.
                  </p>
                </div>
                <div className="group space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-[13px] bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-all">
                    <Eye
                      className="text-emerald-400"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-white font-medium text-xl tracking-tight">
                    Living Insight
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    We don't just farm; we observe. Real-time data ensures our
                    crops receive exactly what they need.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Bento Grid - Now with glass effect */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 pt-12">
              {[
                { icon: Globe2, label: "Global Reach", sub: "Eco standards" },
                {
                  icon: ShieldCheck,
                  label: "Bio-Safety",
                  sub: "Certified purity",
                },
                { icon: TrendingUp, label: "Efficiency", sub: "Yield+ Logic" },
                {
                  icon: BarChart4,
                  label: "Intelligence",
                  sub: "AI Monitoring",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-[15px] border border-white/5 bg-white/[0.03] backdrop-blur-3xl transition-all duration-500 hover:border-emerald-500/30"
                >
                  <div className="p-3 bg-emerald-500/10 w-fit rounded-[15px] mb-6">
                    <item.icon className="text-emerald-400" size={22} />
                  </div>
                  <p className="text-white font-medium tracking-tight text-lg leading-none">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-3">
                    {item.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: INSTITUTIONAL STRENGTH - LIGHTER CONTRAST */}
        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative rounded-[15px] bg-stone-50 p-8 md:p-20 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] text-stone-900"
          >
            {/* Soft decorative background */}
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-8">
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none text-stone-800 text-left">
                  Built on <br />
                  <span className="font-serif italic text-emerald-600">
                    Institutional
                  </span>{" "}
                  Trust
                </h2>
                <p className="text-stone-500 text-lg max-w-md font-light leading-relaxed text-left">
                  As a Public Company Limited, our foundation is transparency.
                  We operate under rigid standards to ensure long-term stability
                  and value for our stakeholders.
                </p>

                {/* TOGGLE TRIGGER */}
                <button
                  onClick={() => setShowInsights(!showInsights)}
                  className="flex items-center gap-4 group transition-all"
                >
                  <div
                    className={`p-4 rounded-full transition-all duration-500 ${showInsights ? "bg-stone-800 text-white" : "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"}`}
                  >
                    {showInsights ? <X size={20} /> : <Info size={20} />}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-stone-800">
                    {showInsights ? "Less Details" : "Learn More"}
                  </span>
                </button>

                <AnimatePresence>
                  {showInsights && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid gap-3 pt-4"
                    >
                      {[
                        { icon: Scale, text: "Strict Legal Compliance" },
                        { icon: Building2, text: "Registered Public Entity" },
                        { icon: Medal, text: "Elite Governance Model" },
                      ].map((info, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-stone-100"
                        >
                          <info.icon size={18} className="text-emerald-600" />
                          <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold">
                            {info.text}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* STATS CARD - Mobile এ square + rounded-15px */}
              <div className="lg:col-span-6 flex justify-center items-center  hidden  md:block  md:py-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full max-w-[420px] aspect-square md:w-[500px] md:h-[500px] flex items-center justify-center 
                     rounded-[15px] md:rounded-full bg-[#0D1A16] shadow-[0_0_50px_rgba(16,185,129,0.1)] 
                     border border-white/5 overflow-hidden group"
                >
                  {/* Animated Background Rings */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-[90%] h-[90%] border border-dashed border-emerald-500/20 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-[70%] h-[70%] border border-emerald-500/10 rounded-full"
                    />
                  </div>

                  {/* Decorative grain/pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

                  {/* Main Content - Mobile এ left align */}
                  <div className="relative z-10 w-full px-8 md:px-12 flex flex-col md:items-center md:text-center text-left space-y-8 md:space-y-10">
                    {/* Top Label */}
                    <div className="space-y-1">
                      <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                        Authorized Capital
                      </span>
                      <div className="h-[1px] w-12 bg-emerald-500/30 md:mx-auto" />
                    </div>

                    {/* Hero Stats */}
                    <div className="flex flex-col md:items-center">
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl md:text-8xl font-light tracking-tighter text-white">
                          80.0
                          <span className="text-emerald-500 font-serif font-bold ml-1">
                            M
                          </span>
                        </span>
                      </div>
                      <span className="text-stone-500 font-serif italic text-2xl -mt-2">
                        BDT
                      </span>
                    </div>

                    {/* Bottom Grid */}
                    <div className="w-full pt-6 md:pt-8 border-t border-white/5 flex flex-col md:items-center space-y-6">
                      <div className="space-y-1">
                        <p className="text-stone-500 text-[9px] font-bold uppercase tracking-widest">
                          Total Shares
                        </p>
                        <p className="text-2xl text-white font-light tracking-tight">
                          8,000,000
                        </p>
                      </div>

                      <div className="space-y-2 hidden md:block">
                        <p className="text-stone-500 text-[9px] font-bold uppercase tracking-widest leading-none">
                          Share Type
                        </p>
                        <div className="px-5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[11px] font-bold tracking-wide inline-block">
                          Ordinary Class A
                        </div>
                      </div>
                    </div>

                    {/* Floating Sparkle/Icon */}
                    <div className="absolute top-6 right-6 md:top-1/4 md:right-1/4 animate-pulse opacity-50">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
