"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Globe2,
  ArrowUpRight,
  Award,
  Briefcase,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function AcademySection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-10 bg-amber-500/50" />
              <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-[11px] md:text-xs">
                Future-Ready Education
              </span>
              <span className="h-[1px] w-10 bg-amber-500/50" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] max-w-4xl">
              Empowering The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600">
                Global Workforce
              </span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium italic">
              "Building skillsets that transcend borders." From specialized
              boarding schools to certified caregiver institutes, we define
              international excellence.
            </p>
          </motion.div>

          {/* Cards Grid with Perfect Spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-8">
            {[
              {
                icon: BookOpen,
                title: "Elite Boarding",
                desc: "Integrated academic and vocational curriculum for holistic growth.",
                stat: "Top Tier Facility",
              },
              {
                icon: Award,
                title: "Caregiving Institute",
                desc: "ISO-certified nursing and caregiver training for global standards.",
                stat: "Global Certification",
              },
              {
                icon: Globe2,
                title: "Global Supply",
                desc: "Deploying skilled manpower to international healthcare markets.",
                stat: "100% Placement",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-500 text-left"
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-500 shadow-lg shadow-amber-500/5">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>

                <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>

                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-500/80">
                    {item.stat}
                  </span>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div variants={itemVariants} className="pt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-6 px-12 py-6 bg-amber-500 text-slate-900 rounded-[2rem] font-black overflow-hidden shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all"
            >
              <span className="relative z-10 tracking-widest text-lg uppercase">
                Join the Academy
              </span>
              <div className="relative z-10 bg-slate-900/10 p-2 rounded-full group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={24} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
