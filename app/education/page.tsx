"use client";

import { fadeInUp } from "@/lib/utils";
import { motion } from "framer-motion";

import {
  BookOpen,
  GraduationCap,
  Microscope,
  Globe,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a]">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-8"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest"
            >
              AgroZen Academy
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
            >
              ROOTED IN <br />{" "}
              <span className="text-emerald-600">KNOWLEDGE.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-md text-lg text-slate-600 leading-relaxed"
            >
              Empowering the next generation of agri-entrepreneurs and
              healthcare professionals through hands-on learning and sustainable
              practices.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <button className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-colors">
                Explore Programs
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Education"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl space-y-2 hidden md:block">
              <p className="text-4xl font-black text-emerald-600">15+</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                Research Programs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE PILLARS --- */}
      <section className="py-32 px-6 bg-[#f8f9f8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Microscope,
                title: "Agricultural Science",
                desc: "Deep dive into organic farming techniques and soil health management.",
              },
              {
                icon: GraduationCap,
                title: "Professional Care",
                desc: "Certification programs for elderly care and specialized nursing.",
              },
              {
                icon: Lightbulb,
                title: "Sustainability",
                desc: "Workshops on renewable energy and eco-friendly business models.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
                <div className="pt-4 flex items-center text-emerald-600 font-bold text-xs uppercase tracking-widest gap-2 cursor-pointer">
                  Learn More <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT SECTION --- */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto rounded-[4rem] bg-emerald-900 overflow-hidden relative"
        >
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Impact"
          />
          <div className="relative z-10 py-24 px-12 text-center text-white space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Where Learning <br /> Meets Purpose.
            </h2>
            <p className="max-w-2xl mx-auto text-emerald-100/80 text-lg font-medium">
              Join a community of 5000+ students and professionals who are
              redefining the future of rural development and compassionate care.
            </p>
            <div className="flex justify-center gap-12 pt-8">
              <div>
                <p className="text-4xl font-black italic">98%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  Success Rate
                </p>
              </div>
              <div className="w-[1px] bg-white/20 h-12" />
              <div>
                <p className="text-4xl font-black italic">50+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  Partner Universities
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 4. COURSE GRID --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex justify-between items-end">
            <h2 className="text-5xl font-black tracking-tighter uppercase">
              Featured <br /> Programs.
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] pb-2">
              Batch 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Modern Agritourism Management",
                image:
                  "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070",
                duration: "6 Months",
              },
              {
                title: "Geriatric Care Specialization",
                image:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
                duration: "1 Year",
              },
            ].map((course, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6">
                  <img
                    src={course.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={course.title}
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase">
                    {course.duration}
                  </div>
                </div>
                <h4 className="text-3xl font-black tracking-tight group-hover:text-emerald-600 transition-colors">
                  {course.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
