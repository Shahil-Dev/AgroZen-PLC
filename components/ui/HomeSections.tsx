"use client";
import { motion, Variants } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Globe2,
  Medal,
  BarChart4,
  Scale,
  Building2,
  Briefcase,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

// Professional Animation Variants
const fadeInLazy: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as any 
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardSlideIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as any 
    } 
  },
};

export default function HomeSections() {
  return (
    <div className="space-y-32 py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION 1: STRATEGIC EXCELLENCE */}
        <section className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-1/2 space-y-8"
            >
              <motion.div
                variants={fadeInLazy}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]"
              >
                <Leaf size={14} className="animate-pulse" /> Precision Agriculture
              </motion.div>

              <motion.h2
                variants={fadeInLazy}
                className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter"
              >
                Pioneering <span className="text-emerald-600">Bio-Tech</span> <br />
                Efficiency
              </motion.h2>

              <motion.p
                variants={fadeInLazy}
                className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium"
              >
                At AgroZen Care PLC, we redefine traditional farming through high-tech ecosystems. From climate-controlled smart greenhouses to AI-driven soil management, we are engineering the future of food security.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100"
              >
                <motion.div variants={fadeInLazy} className="group cursor-default">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={18} className="text-emerald-500" />
                    <h4 className="font-bold text-slate-800 text-lg uppercase tracking-tight">Data-Driven Yield</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Maximizing production through nutrient precision and automated monitoring.
                  </p>
                </motion.div>
                <motion.div variants={fadeInLazy} className="group cursor-default">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe2 size={18} className="text-emerald-500" />
                    <h4 className="font-bold text-slate-800 text-lg uppercase tracking-tight">Export Grade</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Meeting global compliance standards for premium international markets.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Interactive Grid Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { icon: Globe2, label: "Global Reach", color: "text-blue-600 bg-blue-50" },
                { icon: ShieldCheck, label: "PLC Integrity", color: "text-emerald-600 bg-emerald-50" },
                { icon: Medal, label: "Elite Quality", color: "text-amber-600 bg-amber-50" },
                { icon: BarChart4, label: "Bio-Analytics", color: "text-purple-600 bg-purple-50" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={cardSlideIn}
                  whileHover={{ y: -8, boxShadow: "0 30px 60px -12px rgba(0,0,0,0.1)" }}
                  className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 flex flex-col items-center justify-center text-center transition-all duration-500 group"
                >
                  <div className={`p-5 rounded-2xl ${card.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <card.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="font-black text-slate-800 uppercase tracking-widest text-[11px] md:text-xs leading-none">
                    {card.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: INSTITUTIONAL STRENGTH */}
        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-[3rem] bg-slate-950 p-8 md:p-20 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,#10b981,transparent)]" />
            <motion.div
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h2
                  variants={fadeInLazy}
                  className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none"
                >
                  Built on <span className="text-emerald-400">Institutional</span> <br />
                  Excellence
                </motion.h2>

                <motion.p
                  variants={fadeInLazy}
                  className="text-slate-400 text-lg leading-relaxed max-w-md"
                >
                  As a Public Company Limited by Shares, AgroZen Care PLC operates with complete transparency and financial stability, fostering trust for stakeholders nationwide.
                </motion.p>

                <motion.div variants={fadeInLazy} className="flex flex-wrap gap-4">
                  {[
                    { icon: Scale, text: "Legal Compliance" },
                    { icon: Building2, text: "Incorporated in BD" },
                  ].map((badge, b) => (
                    <div key={b} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                      <badge.icon size={18} className="text-emerald-400" />
                      <span className="text-xs font-black uppercase tracking-widest leading-none">{badge.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Financial Status Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 space-y-10 relative group"
              >
                <div className="absolute top-8 right-8 text-emerald-400 opacity-20 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={40} />
                </div>

                <div className="space-y-2">
                  <p className="text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                    Authorized Capital
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl md:text-6xl font-black">80.0M</p>
                    <span className="text-lg md:text-2xl font-light text-slate-500 uppercase tracking-widest">BDT</span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Total Shares</p>
                    <p className="text-3xl font-bold tracking-tighter text-white">8,000,000</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-1 border border-emerald-500/20">
                      Ordinary
                    </div>
                    <p className="text-slate-500 text-[9px] uppercase font-medium">Class A Shares</p>
                  </div>
                </div>

                <p className="text-slate-500 text-[10px] italic text-center font-medium opacity-60">
                  Regulated by the Companies Act, 1994 (Act XVIII of 1994)
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}