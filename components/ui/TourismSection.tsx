"use client";
import { motion, Variants } from "framer-motion";
import {
  Palmtree,
  MapPinned,
  Compass,
  Globe2,
  ArrowUpRight,
  Navigation,
  Umbrella,
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

export default function TourismSection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-slate-50 overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-0 left-[-2%] text-[18rem] font-black text-slate-200/30 select-none pointer-events-none tracking-tighter leading-none">
        TRAVEL
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* LEFT CONTENT: VISUALS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-full aspect-[4/5] max-w-[480px]">
              {/* Main Premium Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-950 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(30,58,138,0.25)] overflow-hidden">
                {/* Animated Compass Overlay */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-24 -right-24 opacity-10 text-white"
                >
                  <Compass size={450} strokeWidth={0.5} />
                </motion.div>

                {/* Internal Content Padding set to p-10 md:p-14 */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between text-white">
                  <div className="space-y-4">
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center border border-white/20"
                    >
                      <Navigation className="text-blue-300" size={36} />
                    </motion.div>
                    <h4 className="text-3xl font-bold tracking-tight mt-6 leading-tight">
                      Elite <br />
                      Eco-Reserves
                    </h4>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="flex-1 h-[1px] bg-white/20" />
                      <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-300 whitespace-nowrap">
                        Est. 2026
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-medium">
                      Curating high-end sustainable retreats where traditional
                      agriculture meets five-star hospitality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Element with adjusted Padding */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -right-6 bg-white p-7 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block"
              >
                <div className="flex items-center gap-5">
                  <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-200">
                    <MapPinned className="text-white" size={24} />
                  </div>
                  <div className="pr-4">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
                      Destination
                    </p>
                    <p className="text-slate-900 font-extrabold text-lg">
                      Azure Reserve
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: TECHNICAL DETAILS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-12 order-1 lg:order-2"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="h-[2px] w-14 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-[11px] md:text-xs">
                Premium Agri-Tourism
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] lg:max-w-md">
                Refined <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-400">
                  Eco-Lodges
                </span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg font-medium italic">
                "Where nature whispers and luxury speaks." Our retreats offer an
                immersive escape into the heart of agricultural heritage.
              </p>
            </motion.div>

            {/* Feature Highlights Grid with better Alignment */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
            >
              {[
                {
                  icon: Palmtree,
                  title: "Lush Lodges",
                  desc: "Eco-friendly architectural marvels.",
                },
                {
                  icon: Globe2,
                  title: "Heritage Hubs",
                  desc: "Discover ancient farming wisdom.",
                },
                {
                  icon: Umbrella,
                  title: "Wellness",
                  desc: "Holistic sanctuary for the soul.",
                },
                {
                  icon: Compass,
                  title: "Expeditions",
                  desc: "Curated farm-to-table journeys.",
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-100 transition-all duration-300">
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
                  Book Stay
                </span>
                <div className="relative z-10 bg-white/10 p-2 rounded-full group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={24} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
