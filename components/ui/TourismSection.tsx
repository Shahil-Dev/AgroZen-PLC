"use client";
import { motion, Variants } from "framer-motion";
import {
  Palmtree,
  MapPinned,
  Compass,
  Globe2,
  ArrowRight,
  Navigation,
  Umbrella,
  Plane,
  Waves
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AgriTourismSection() {
  const experiences = [
    { icon: Palmtree, title: "Lush Lodges", desc: "Eco-designed architectural sanctuaries." },
    { icon: Globe2, title: "Heritage Hubs", desc: "Ancient farming wisdom uncovered." },
    { icon: Umbrella, title: "Holistic Wellness", desc: "Revitalize your soul in the green." },
    { icon: Compass, title: "Expeditions", desc: "Curated farm-to-table journeys." },
  ];

  return (
    <section className="relative w-full py-28 md:py-44 bg-[#F9F7F2] overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-10 left-[-5%] text-[15rem] font-serif italic text-stone-200/40 select-none pointer-events-none tracking-tighter leading-none hidden lg:block">
        Escape
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: EDITORIAL VISUALS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                {/* Background Image Placeholder - Replace with high-quality landscape */}
                <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop" 
                    alt="Agro Tourism"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-12 left-10 text-white space-y-2">
                    <div className="flex items-center gap-2">
                        <Waves size={16} className="text-cyan-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Signature Retreat</span>
                    </div>
                    <h3 className="text-4xl font-light font-serif italic leading-none">Azure Valley <br />Reserve</h3>
                </div>
            </div>

            {/* Floating Destination Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white p-6 rounded-[2.5rem] shadow-xl border border-stone-100 hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center text-white">
                <Navigation size={22} />
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-stone-400 tracking-widest">Next Voyage</p>
                <p className="text-stone-900 font-bold">Zenith Highlands</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: STORY & DETAILS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3">
                <Plane size={18} className="text-cyan-700" />
                <span className="text-cyan-800 font-bold tracking-[0.4em] uppercase text-[10px]">
                  Bespoke Eco-Tourism
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-light text-stone-900 tracking-tighter leading-[0.85]">
                Luxury in <br />
                <span className="italic font-serif text-cyan-700">Simplicity.</span>
              </h2>
              <p className="text-stone-500 text-xl font-light leading-relaxed max-w-xl">
                Rediscover the rhythm of the earth. We curate immersive stays that 
                marry high-end comfort with authentic agricultural soul, creating 
                memories that breathe.
              </p>
            </motion.div>

            {/* Experience Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-10"
            >
              {experiences.map((item, i) => (
                <div key={i} className="group space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white transition-all duration-500">
                        <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h5 className="font-bold text-stone-900 text-sm uppercase tracking-widest">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed pl-14">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* ACTION BUTTON */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-10 px-10 py-5 bg-[#1A1917] text-white rounded-full font-bold overflow-hidden shadow-2xl transition-all"
              >
                <span className="relative z-10 tracking-[0.2em] text-[11px] uppercase">
                  Explore Now
                </span>
                <div className="relative z-10 p-2 bg-cyan-500 rounded-full group-hover:translate-x-3 transition-transform duration-500">
                  <ArrowRight size={20} className="text-[#1A1917]" />
                </div>
                <div className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}