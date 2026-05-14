"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Home,
  Users,
  ConciergeBell,
  ArrowRight,
  X,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 0,
    title: "Health",
    icon: HeartPulse,
    data: [
      "Regular Check-ups",
      "24/7 Medical Response",
      "Medicine Delivery",
      "Physiotherapy",
    ],
  },
  {
    id: 1,
    title: "Living",
    icon: Home,
    data: [
      "Barrier-Free Design",
      "Backup Power",
      "Luxury Suites",
      "Safety Alarms",
    ],
  },
  {
    id: 2,
    title: "Social",
    icon: Users,
    data: [
      "Cinema Lounge",
      "Reading Library",
      "Indoor Games",
      "Community Events",
    ],
  },
  {
    id: 3,
    title: "Service",
    icon: ConciergeBell,
    data: ["Farm-to-Table Dining", "Housekeeping", "Laundry Care", "Mini-Mart"],
  },
];

export default function CompactAgroZen() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F8F6F1] font-sans text-slate-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#052E26] text-white text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80')] bg-cover bg-center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            AgroZen <span className="italic text-emerald-400">Care</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 opacity-80">
            Redefining Senior Living with Dignity, Nature & Grace.
          </p>

          <div className="flex flex-wrap justify-center gap-4"></div>
        </motion.div>
      </section>

      {/* DYNAMIC CONTENT SECTION */}
      <section className="py-20 container mx-auto md:px-4">
        <div className="flex overflow-x-auto gap-3 mb-12 pb-2 no-scrollbar justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap tracking-widest uppercase ${
                active === cat.id
                  ? "bg-emerald-800 text-white shadow-xl scale-105"
                  : "bg-white text-slate-500 hover:bg-emerald-50"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories[active].data.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(item)}
              className="p-8 bg-white rounded-[2rem] border border-emerald-50 shadow-sm hover:shadow-xl cursor-pointer transition-all group relative overflow-hidden text-left"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                {React.createElement(categories[active].icon, { size: 22 })}
              </div>
              <h3 className="text-xl font-serif mb-3 text-slate-800">{item}</h3>
              <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">
                Tailored {item.toLowerCase()} services for a peaceful life.
              </p>
              <div className="flex items-center text-emerald-700 text-xs font-bold gap-2">
                LEARN MORE{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <Link href="/care">
            <button className="inline-flex items-center gap-2 text-emerald-800 font-serif text-lg hover:gap-4 transition-all group relative">
              Explore All Features <ArrowRight className="text-emerald-500" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* DETAILS MODAL */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] max-w-sm w-full relative shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                {React.createElement(categories[active].icon, { size: 30 })}
              </div>
              <h4 className="text-2xl font-serif mb-4 text-slate-900">
                {selected}
              </h4>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                Our {selected.toLowerCase()} program is designed with the
                highest standards of safety and comfort for all residents.
              </p>
              <button
                onClick={() => setSelected(null)}
                className="w-full py-4 bg-emerald-950 text-white rounded-2xl font-bold hover:bg-emerald-900 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}