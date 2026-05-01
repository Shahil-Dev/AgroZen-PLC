"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sprout,
  Droplets,
  ShieldCheck,
  Microscope,
  Tractor,
  ArrowRight,
  Wind,
  Sun,
  Layers,
  Activity,
} from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function AgroFarmingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#DBE1DA] text-[#1a1a1a] selection:bg-emerald-200"
    >
      {/* --- 1. MINIMAL HERO: IMMERSIVE EXPERIENCE --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
            alt="Agriculture Vision"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 text-center space-y-8"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="px-6 py-2 rounded-full border border-[#1a1a1a]/10 bg-white/30 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.6em]">
              Precision · Purity · Progress
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-9xl font-black tracking-tighter text-[#1a1a1a] leading-none"
          >
            REDEFINING <br />
            <span className="text-emerald-800 italic">AGRICULTURE.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg md:text-xl font-medium text-[#1a1a1a]/70"
          >
            AgroZen Care PLC integrates industrial-scale intelligence with
            organic integrity to secure the global food supply chain.
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-20 bg-[#1a1a1a]/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-emerald-700" />
          </div>
        </motion.div>
      </section>

      {/* --- 2. CORE PHILOSOPHY: THE SUSTAINABLE EDGE --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                alt="Tech Farming"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 right-10 p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg max-w-[200px]">
                <Activity className="text-emerald-700 mb-4" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/50 mb-1">
                  Yield Growth
                </p>
                <p className="text-3xl font-black">+42%</p>
              </div>
            </motion.div>

            <div className="space-y-10">
              <span className="text-emerald-800 font-black uppercase tracking-[0.4em] text-[10px]">
                Strategic Innovation
              </span>
              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                Synchronized <br /> Eco-Systems.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Automated Hydroponics",
                    desc: "Climate-controlled environments ensuring 365-day harvesting cycles with zero soil depletion.",
                  },
                  {
                    title: "Biological Shielding",
                    desc: "Advanced organic pest management systems that preserve nutritional density without chemicals.",
                  },
                  {
                    title: "Sensor-Driven Irrigation",
                    desc: "Hyper-localized water distribution using real-time soil moisture telemetry.",
                  },
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-emerald-700 group-hover:bg-emerald-700 transition-colors" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                      <p className="text-[#1a1a1a]/60 font-medium leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE AGROZEN ACADEMY: PROFESSIONAL EMPOWERMENT --- */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto rounded-[5rem] bg-[#1a1a1a] text-white p-16 md:p-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <Tractor
              size={600}
              className="text-emerald-500 translate-x-1/3 -translate-y-1/4 rotate-12"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-10">
            <span className="text-emerald-400 font-black uppercase tracking-[0.5em] text-[10px]">
              The Academy (Doc Info)
            </span>
            <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
              BEYOND THE <br /> HARVEST.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
              Based on our corporate mandate, the AgroZen Academy is our
              dedicated wing for transforming local labor into specialized
              agro-technicians. We provide direct training on modern machinery
              and high-yield scientific protocols.
            </p>
            <button className="flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 px-10 py-5 rounded-2xl transition-all group">
              <span className="font-black uppercase tracking-widest text-[10px]">
                Join the Professional Workforce
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* --- 4. DATA VISUALIZATION: PLC TRANSPARENCY --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            {
              label: "Land Under Management",
              value: "1,250",
              unit: "Acres",
              icon: Layers,
            },
            {
              label: "Community Partners",
              value: "4,800",
              unit: "Farmers",
              icon: Sprout,
            },
            {
              label: "Annual Clean Energy",
              value: "1.2",
              unit: "MW Solar",
              icon: Sun,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-white border border-[#1a1a1a]/5 hover:shadow-xl transition-all"
            >
              <stat.icon className="text-emerald-700 mb-10" size={32} />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#1a1a1a]/40 mb-4">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-6xl font-black tracking-tighter">
                  {stat.value}
                </h3>
                <span className="text-sm font-bold text-emerald-700">
                  {stat.unit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* --- 5. R&D & INNOVATION: THE FUTURE LAB --- */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-800/5 border border-emerald-800/10 text-emerald-800 text-[10px] font-black uppercase tracking-widest">
                <Microscope size={14} /> Research & Development
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                Innovation in <br /> Every Grain.
              </h2>
              <p className="text-[#1a1a1a]/60 text-lg font-medium leading-relaxed">
                Our specialized R&D labs focus on developing resilient crop
                varieties that can withstand extreme climatic shifts while
                maintaining peak nutritional profiles. We leverage genomic data
                and soil microbiology to ensure AgroZen products remain at the
                forefront of quality.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <h5 className="font-black text-2xl tracking-tighter">
                    Seed Tech
                  </h5>
                  <p className="text-xs text-[#1a1a1a]/50 font-bold uppercase">
                    Non-GMO Bio-Enhancement
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-black text-2xl tracking-tighter">
                    Soil Health
                  </h5>
                  <p className="text-xs text-[#1a1a1a]/50 font-bold uppercase">
                    Microbial Restoration
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-video rounded-[3rem] bg-emerald-900/10 flex items-center justify-center border border-emerald-900/5 shadow-inner overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10 text-center space-y-4">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                  <Activity
                    className="text-emerald-700 animate-pulse"
                    size={40}
                  />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900">
                  Live Bio-Analytics
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 6. SUSTAINABLE SUPPLY CHAIN (LOGISTICS) --- */}
      <section className="py-32 px-6 bg-[#cfd6ce]">
        <div className="max-w-6xl mx-auto text-center space-y-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-emerald-900 font-black uppercase tracking-[0.5em] text-[10px]">
              Supply Chain Integrity
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              From Our Fields <br /> To Your Enterprise.
            </h2>
            <p className="text-[#1a1a1a]/60 font-medium">
              We maintain a closed-loop supply chain that ensures freshness and
              reduces carbon footprint through strategic cold-storage and rapid
              logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Storage",
                desc: "AI-monitored cold storage facilities to eliminate post-harvest losses.",
              },
              {
                title: "Direct Logistics",
                desc: "Bypassing intermediaries to ensure maximum value for farmers and consumers.",
              },
              {
                title: "Eco-Packaging",
                desc: "Biodegradable materials that preserve product integrity and the environment.",
              },
            ].map((box, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="p-12 rounded-[3rem] bg-white/40 border border-white/20 backdrop-blur-sm text-left space-y-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-800 shadow-md">
                  {i === 0 ? (
                    <Layers size={20} />
                  ) : i === 1 ? (
                    <Wind size={20} />
                  ) : (
                    <ShieldCheck size={20} />
                  )}
                </div>
                <h4 className="text-2xl font-black tracking-tighter uppercase">
                  {box.title}
                </h4>
                <p className="text-sm text-[#1a1a1a]/60 font-bold leading-relaxed">
                  {box.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. FINAL CALL TO ACTION: THE PARTNERSHIP --- */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-20 rounded-[4rem] bg-emerald-900 text-[#DBE1DA] space-y-8 relative overflow-hidden"
          >
            {/* Background Grain/Noise */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter relative z-10">
              Ready to Cultivate <br /> The Future?
            </h2>
            <p className="max-w-xl mx-auto text-emerald-200/70 text-lg font-medium relative z-10">
              Join AgroZen Care PLC as a strategic partner, investor, or trainee
              in our upcoming agricultural cycles.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-5 bg-[#DBE1DA] text-emerald-900 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:scale-105 transition-all">
                Download Corporate Brochure
              </button>
              <button className="px-10 py-5 border border-[#DBE1DA]/30 text-[#DBE1DA] font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/10 transition-all">
                Inquire for Partnership
              </button>
            </div>
          </motion.div>

          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1a1a1a]/30">
            AgroZen Care PLC · Harvesting Excellence Since 2024
          </p>
        </div>
      </section>
    </main>
  );
}
