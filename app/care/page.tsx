"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Stethoscope,
  Activity,
  Clock,
  ShieldPlus,
  Users,
  ArrowRight,
  Microscope,
  Home,
  BriefcaseMedical,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function SeniorCarePage() {
  return (
    <main className="min-h-screen z-10 pt-4  bg-[#DBE1DA] text-[#1a1a1a] selection:bg-emerald-200">
      
      {/* --- 1. HERO: COMPASSIONATE INNOVATION --- */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Elderly Care Hero"
            className="w-full h-full object-cover opacity-40 grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#DBE1DA]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 text-center space-y-8 max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="px-5 py-2 rounded-full border border-[#1a1a1a]/10 bg-white/40 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.5em]">
              Zenith Care · Dignity in Living
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-none"
          >
            REDEFINING <br />
            <span className="text-emerald-800">SENIOR LIFE.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg font-medium text-[#1a1a1a]/70"
          >
            AgroZen's healthcare wing combines state-of-the-art medical
            technology with a soulful approach to elderly living.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. THE ZENITH CARE DIFFERENCE (HOSPITAL CONTEXT) --- */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <span className="text-emerald-800 font-black uppercase tracking-[0.4em] text-[10px]">
                  Medical Excellence
                </span>
                <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                  Advanced <br /> Clinical Infrastructure.
                </h2>
              </div>

              <div className="grid gap-8">
                {[
                  {
                    title: "Specialized Geriatrics",
                    desc: "Dedicated medical teams focusing exclusively on age-related wellness and chronic condition management.",
                    icon: Stethoscope,
                  },
                  {
                    title: "24/7 Smart Monitoring",
                    desc: "IoT-enabled patient tracking ensures immediate response to any critical health event.",
                    icon: Activity,
                  },
                  {
                    title: "Zenith Care Management",
                    desc: "Our proprietary hospital management system optimizes patient records and diagnostic precision.",
                    icon: ShieldPlus,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center text-emerald-700 shadow-sm border border-black/5 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[#1a1a1a]/60 font-medium text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Content (The Fixed Image Section) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-0"
            >
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-emerald-900/5">
                <div className="absolute inset-0 bg-emerald-900/10 z-10 pointer-events-none" />
                <img
                  src="https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Hospital Technology"
                  className="w-full h-full object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl z-20 border border-white/20"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800 mb-1">
                    Precision
                  </p>
                  <p className="text-lg font-black text-[#1a1a1a]">
                    99.9% Accuracy
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. THE RESIDENTIAL ECOSYSTEM: ELDERLY HOME --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[5rem] p-16 md:p-32 overflow-hidden shadow-xl border border-black/5 relative">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <span className="text-emerald-800 font-black uppercase tracking-[0.5em] text-[10px]">
                A Place Called Home
              </span>
              <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
                LIVING WITH <br /> PURPOSE.
              </h2>
              <p className="text-lg text-[#1a1a1a]/60 font-medium leading-relaxed">
                Our residential complexes are designed to foster community,
                peace, and spiritual wellness. Surrounded by our own green
                agricultural lands, residents enjoy fresh organic food and a
                serene environment.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-6 py-3 bg-[#DBE1DA] rounded-full text-xs font-black uppercase tracking-widest">
                  <Home size={14} /> Organic Surroundings
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-[#DBE1DA] rounded-full text-xs font-black uppercase tracking-widest">
                  <Users size={14} /> Community Events
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="rounded-3xl h-64 w-full object-cover shadow-lg"
                  alt="Senior Living 1"
                />
                <img
                  src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="rounded-3xl h-40 w-full object-cover shadow-lg"
                  alt="Senior Living 2"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img
                  src="https://images.pexels.com/photos/2058130/pexels-photo-2058130.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="rounded-3xl h-40 w-full object-cover shadow-lg"
                  alt="Senior Living 3"
                />
                <img
                  src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="rounded-3xl h-64 w-full object-cover shadow-lg"
                  alt="Senior Living 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TELEMEDICINE & ACCESS --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Care Without Boundaries.
            </h2>
            <p className="max-w-xl mx-auto text-[#1a1a1a]/60 font-medium">
              Empowering families to connect with their loved ones and monitor
              health metrics in real-time through the Zenith Care digital
              portal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BriefcaseMedical,
                val: "Expert Physicians",
                desc: "Consultations with the nation's leading medical experts.",
              },
              {
                icon: Microscope,
                val: "Diagnostic Labs",
                desc: "In-house lab services with rapid and accurate digital reporting.",
              },
              {
                icon: Clock,
                val: "Immediate Response",
                desc: "Emergency medical transport and on-site paramedics 24/7.",
              },
            ].map((box, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[3.5rem] bg-white border border-black/5 text-left transition-all hover:shadow-xl"
              >
                <box.icon size={32} className="text-emerald-700 mb-8" />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                  {box.val}
                </h4>
                <p className="text-sm font-bold text-[#1a1a1a]/50 leading-relaxed">
                  {box.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CALL TO ACTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center bg-[#1a1a1a] text-white p-20 rounded-[4rem] space-y-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Your Family is <br /> Our Responsibility.
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 font-medium">
            Inquire about residential availability, hospital services, or
            medical internships at AgroZen Care PLC.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all">
              Schedule a Visit
            </button>
            <button className="px-10 py-5 border border-white/20 hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all">
              Contact Medical Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}