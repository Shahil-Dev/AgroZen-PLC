"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from '@/lib/utils'; 
import {
  Trees,
  Waves,
  Utensils,
  Map,
  Sparkles,
  Wind,
  Moon,
  Sun,
  Camera,
  Coffee,
} from "lucide-react";

export default function EcoRetreatPage() {
  return (
    <main className="min-h-screen bg-[#DBE1DA] text-[#1a1a1a] selection:bg-emerald-200">
      {/* --- 1. HERO: ESCAPE TO NATURE --- */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
            alt="Eco Retreat Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DBE1DA]/20 to-[#DBE1DA]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer} // স্ট্যাগার কন্টেইনার যুক্ত করা হয়েছে
          className="relative z-10 text-center space-y-8"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-[0.5em]">
              The Sanctuary · AgroZen Eco-Retreat
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase"
          >
            SLOW <br /> LIVING.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-xl mx-auto text-lg font-medium text-white/90"
          >
            Reconnect with the earth in our sustainably designed sanctuaries,
            nestled within AgroZen’s lush organic landscapes.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. PHILOSOPHY --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12 relative z-10"
          >
            <div className="space-y-6">
              <motion.span variants={fadeInUp} className="text-emerald-800 font-black uppercase tracking-[0.4em] text-[10px]">
                Agritourism Reimagined
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                Breathable <br /> Architecture.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#1a1a1a]/60 text-lg font-medium leading-relaxed">
                Our retreats are built using biodegradable and local materials,
                ensuring zero impact on the ecosystem while providing five-star
                comfort.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-black tracking-tighter">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/50">Solar Powered</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black tracking-tighter">Organic</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/50">Farm-to-Table</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl bg-emerald-900/10"
          >
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Eco Villa"
            />
          </motion.div>
        </div>
      </section>

      {/* --- 3. AMENITIES --- */}
      <section className="py-32 px-6 bg-[#1a1a1a] text-white rounded-t-[5rem]">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-6">
              <span className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[10px]">Curation</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">The Retreat <br /> Experience.</h2>
            </div>
            <p className="max-w-xs text-slate-400 font-medium pb-4">Thoughtfully curated activities to heal the mind.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-1 bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden"
          >
            {[
              { icon: Utensils, title: "Farm-to-Table", desc: "Harvest your own vegetables and enjoy a chef-prepared meal." },
              { icon: Moon, title: "Star Gazing", desc: "Zero light pollution allows for breathtaking views." },
              { icon: Wind, title: "Meditation Deck", desc: "Guided sessions by the river to align your energy." },
              { icon: Camera, title: "Nature Trails", desc: "Explore the biodiversity of our protected zones." },
              { icon: Coffee, title: "Artisan Coffee", desc: "Sip our home-grown organic blends at sunrise." },
              { icon: Waves, title: "Natural Pool", desc: "Chemical-free swimming in our spring-fed pool." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-12 space-y-6 hover:bg-white/5 transition-colors group"
              >
                <item.icon className="text-emerald-500 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-2xl font-black tracking-tighter uppercase">{item.title}</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. GALLERY --- */}
      <section className="py-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "photo-1506744038136-46273834b3fb", "photo-1464822759023-fed622ff2c3b", 
            "photo-1441974231531-c6227db76b6e", "photo-1502672260266-1c1ef2d93688",
            "photo-1510798831971-661eb04b3739", "photo-1500627768332-4e9420999052", 
            "photo-1540553016722-983e48a2cd10", "photo-1518173946687-a4c8a9b73686"
          ].map((id, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className={index % 2 === 1 ? "pt-12" : ""}
            >
              <img
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&q=60&w=800`}
                className={`rounded-3xl w-full object-cover shadow-lg bg-emerald-900/5 ${index % 2 === 0 ? "h-80" : "h-40"}`}
                alt={`Gallery ${index}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 5. CTA --- */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase"
          >
            DISCOVER <br /> YOUR WILD.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} className="text-lg font-medium text-[#1a1a1a]/60">
            Bookings for Summer 2026 are now open for AgroZen Elite members.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <button className="px-12 py-6 bg-emerald-900 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-2xl hover:scale-105 transition-all">
              Reserve Your Sanctuary
            </button>
            <button className="px-12 py-6 border border-emerald-900/20 text-emerald-900 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-emerald-900 hover:text-white transition-all">
              View All Locations
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}