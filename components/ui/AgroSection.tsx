"use client";
import { motion } from "framer-motion";
import { 
  Sprout, 
  ArrowUpRight, 
  CheckCircle2, 
  Microscope, 
  CloudSun, 
  ShieldCheck, 
  Waves 
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  },
};

export default function AgroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT: TECHNICAL DETAILS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-10"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-emerald-600 rounded-full" />
              <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-xs md:text-sm">
                Industrial Innovation
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.95]">
                Smart <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 via-green-500 to-lime-500">
                  Agro-Ecosystems
                </span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                Pioneering the integration of IoT and precision biotechnology to redefine sustainable food security. Our systems optimize yield while minimizing environmental footprint.
              </p>
            </motion.div>

            {/* Detailed Feature Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Precision IoT Monitoring", desc: "Real-time soil & climate analytics." },
                { title: "Hydroponic Architecture", desc: "Vertical farming with 90% less water." },
                { title: "Bio-Genomic Research", desc: "Enhanced seed resilience & nutrition." },
                { title: "Automated Harvesting", desc: "AI-driven robotic crop management." },
              ].map((feature, i) => (
                <div key={i} className="group flex flex-col gap-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="text-slate-900 font-bold text-base">{feature.title}</span>
                  </div>
                  <p className="text-slate-400 text-sm pl-7 leading-snug">{feature.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold overflow-hidden shadow-2xl transition-all"
              >
                <span className="relative z-10 tracking-wide text-lg">Explore Technology</span>
                <div className="relative z-10 p-1 bg-white/10 rounded-lg group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={22} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: VISUALS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Professional Floating Grid */}
            <div className="relative w-full aspect-square max-w-[500px]">
              
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-slate-200 rounded-full"
              />
              
              {/* Professional Icon Nodes */}
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                {[
                  { Icon: Microscope, label: "R&D Labs", pos: "justify-end items-end" },
                  { Icon: CloudSun, label: "Climate", pos: "justify-start items-end" },
                  { Icon: Waves, label: "Irrigation", pos: "justify-end items-start" },
                  { Icon: ShieldCheck, label: "Security", pos: "justify-start items-start" },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex ${node.pos} p-2`}
                  >
                    <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center gap-3 w-32 h-32 md:w-40 md:h-40 justify-center group hover:border-emerald-200 transition-all">
                      <node.Icon size={32} className="text-slate-400 group-hover:text-emerald-500 transition-colors duration-500" />
                      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors">
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center Floating Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-slate-900 p-8 rounded-[2rem] shadow-2xl text-white w-48 text-center border border-white/10 backdrop-blur-xl"
              >
                <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                   <Sprout size={24} />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-emerald-400">Yield Optima</h4>
                <p className="text-3xl font-black mt-1">98.4%</p>
                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}