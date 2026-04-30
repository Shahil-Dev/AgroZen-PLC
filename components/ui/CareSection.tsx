"use client";
import { motion, Variants } from "framer-motion";
import {
  HeartPulse,
  Home,
  Activity,
  ShieldCheck,
  ArrowUpRight,
  Stethoscope,
  Users,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      // ease-এর শেষে 'as any' অথবা '[number, number, number, number]' লিখে দিন
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export default function CareSection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-50/40 -skew-x-12 translate-x-32 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* LEFT CONTENT: TECHNICAL DETAILS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-12"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="h-[2px] w-14 bg-rose-500 rounded-full" />
              <span className="text-rose-500 font-black tracking-[0.4em] uppercase text-[11px] md:text-xs">
                Compassionate Caregiving
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] lg:max-w-md">
                Dignified <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-600 via-rose-500 to-orange-500">
                  Senior Living
                </span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg font-medium italic">
                "Honoring generations through specialized care." We provide
                premium assisted living solutions with 24/7 medical supervision
                and a warm, home-like environment.
              </p>
            </motion.div>

            {/* Feature Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
            >
              {[
                {
                  icon: Stethoscope,
                  title: "24/7 Support",
                  desc: "Expert clinical monitoring and management.",
                },
                {
                  icon: Users,
                  title: "Social Wellness",
                  desc: "Community programs for emotional health.",
                },
                {
                  icon: ShieldCheck,
                  title: "Safe Haven",
                  desc: "Secure environments with modern amenities.",
                },
                {
                  icon: Activity,
                  title: "Geriatric Care",
                  desc: "Specialized physiotherapy and nutrition.",
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-rose-200 transition-all duration-300">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 mt-1">
                    <h5 className="font-bold text-slate-900 text-lg leading-none tracking-tight">
                      {item.title}
                    </h5>
                    <p className="text-slate-400 text-sm leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-6 px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-bold overflow-hidden shadow-2xl transition-all"
              >
                <span className="relative z-10 tracking-widest text-lg uppercase">
                  Explore Care
                </span>
                <div className="relative z-10 bg-white/10 p-2 rounded-full group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={24} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: VISUALS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Outer Decorative Circle with Pulse Effect */}
              <div className="absolute inset-0 border border-rose-100 rounded-full animate-[pulse_4s_infinite]" />
              <div className="absolute inset-10 border border-rose-50 rounded-full animate-[pulse_6s_infinite]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[85%] aspect-square bg-rose-50 rounded-[4rem] p-12 border border-rose-100/50 shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Floating Elements Background */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 50,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-[0.05]"
                  >
                    <HeartPulse size={400} className="text-rose-900" />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    {[
                      { icon: Home, label: "Eco-Lodge" },
                      { icon: ShieldCheck, label: "Security" },
                      { icon: Activity, label: "Vitality" },
                      { icon: Users, label: "Comfort" },
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, y: -10 }}
                        className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-[2.5rem] shadow-xl border border-rose-50 flex flex-col items-center justify-center gap-3 group transition-all"
                      >
                        <node.icon
                          size={32}
                          className="text-rose-500 group-hover:scale-110 transition-transform"
                        />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900">
                          {node.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Vital Signs Card */}
              <motion.div
                animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200">
                  <Activity className="text-white animate-pulse" size={24} />
                </div>
                <div className="pr-4">
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
                    Live Monitoring
                  </p>
                  <p className="text-slate-900 font-extrabold text-xl tracking-tight">
                    Active Pulse
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
