"use client";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users2, Building, ShieldCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center space-y-6"
        >
          <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Redefining the Future of <br />
            <span className="text-emerald-500">Holistic Living</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed">
            AgroZen Care PLC is a multi-sectoral Public Company Limited, dedicated to harmonizing 
            advanced agriculture, premium elderly care, and sustainable eco-tourism.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-950 py-20 mb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Founded", value: "2025" },
            { label: "Authorized Capital", value: "80.0M" },
            { label: "Total Shares", value: "8M" },
            { label: "Industry", value: "PLC" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-emerald-400 text-3xl md:text-5xl font-black">{stat.value}</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-6"
        >
          <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
            <Target size={28} />
          </div>
          <h3 className="text-3xl font-black text-slate-900">Our Mission</h3>
          <p className="text-slate-600 leading-relaxed">
            To implement high-tech agricultural solutions and compassionate care systems that 
            empower communities, ensuring food security and a dignified life for the elderly.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-12 rounded-[3rem] bg-slate-900 text-white space-y-6 shadow-2xl"
        >
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
            <Eye size={28} />
          </div>
          <h3 className="text-3xl font-black">Our Vision</h3>
          <p className="text-slate-400 leading-relaxed">
            To become a global benchmark in sustainable bio-tech agriculture and a 
            sanctuary of health, growth, and peace for every generation across the nation.
          </p>
        </motion.div>
      </section>
    </main>
  );
}