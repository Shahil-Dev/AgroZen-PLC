"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Heart, ShieldPlus, Users, Coffee, Thermometer, 
  Moon, Sun, Trees, Activity, Home, Sparkles, 
  PhoneCall, ArrowRight, ShieldCheck
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Skilled Nursing",
    desc: "Round-the-clock medical attention by certified geriatric specialists.",
    icon: ShieldPlus,
    color: "bg-rose-500",
  },
  {
    title: "Organic Diet",
    desc: "Farm-to-table nutrition plans sourced directly from our Agro-farms.",
    icon: Coffee,
    color: "bg-orange-500",
  },
  {
    title: "Eco-Therapy",
    desc: "Therapeutic gardening and nature walks within our green sanctuaries.",
    icon: Trees,
    color: "bg-green-500",
  },
];

export default function ElderlyCarePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fffcfb] text-slate-900 z-10 pt-24 pb-16  selection:bg-rose-100">
      
      {/* 1. Empathy-Driven Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-bold mb-8 border border-rose-100"
          >
            <Heart size={16} className="fill-rose-600" /> <span>A LEGACY OF COMPASSION</span>
          </motion.div>
          
          <h1 className="text-6xl Space md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Dignity, Peace, and <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
              Holistic Care
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
            We provide a sanctuary where the elderly can thrive, surrounded by nature and supported by the highest standards of medical and emotional excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-rose-500 text-white rounded-full font-bold flex items-center gap-2 hover:bg-rose-600 transition-all shadow-xl shadow-rose-200 hover:scale-105 active:scale-95">
              Book a Visit <PhoneCall size={18} />
            </button>
            <button className="px-10 py-5 bg-white border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
              Our Philosophy <Sparkles size={18} className="text-orange-400" />
            </button>
          </div>
        </motion.div>

        {/* Soft Background Animation */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px]" 
          />
        </div>
      </section>

      {/* 2. Core Values (Stats & Trust) */}
      <section className="py-24 bg-white border-y border-rose-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Caregivers", value: "24/7" },
            { label: "Recovery Rate", value: "98%" },
            { label: "Organic Meals", value: "100%" },
            { label: "Happy Families", value: "2k+" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-rose-500 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The AgroZen Sanctuary Experience */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Nature-Connected Living</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Bridging our agricultural expertise with elderly well-being for a unique recovery journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-white border border-rose-50 shadow-sm hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500 group"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-lg`}>
                <service.icon size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Detailed Feature: Holistic Wellness */}
      <section className="py-32 bg-rose-50/50 rounded-[60px] md:rounded-[100px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative rounded-[50px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581578731522-7452f96921bc?q=80&w=1000" 
                alt="Elderly Care Session" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-rose-500 rounded-full text-white"><ShieldCheck /></div>
                  <div>
                    <p className="font-bold text-slate-900 italic">"The care here feels like home, only better."</p>
                    <p className="text-sm text-slate-500">— Satisfied Resident</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-8 leading-tight">Beyond Medicine: <br/><span className="text-rose-500">Social Well-being</span></h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Isolation is the biggest challenge for seniors. At AgroZen, we create a vibrant social circuit through daily group activities and community bonding.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Sun, label: "Morning Walks", desc: "Guided garden tours" },
                  { icon: Activity, label: "Physio-Care", desc: "Expert motion therapy" },
                  { icon: Moon, label: "Restful Sleep", desc: "Quiet night protocols" },
                  { icon: Users, label: "Social Clubs", desc: "Hobby-based groups" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-6 bg-white rounded-[32px] border border-rose-100 shadow-sm">
                    <item.icon className="text-orange-400" size={24} />
                    <div>
                      <h4 className="font-bold text-slate-800">{item.label}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Heartfelt CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto p-12 md:p-20 rounded-[60px] bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Give Your Loved Ones <br/> The Peace They Deserve</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-light">
              Experience the perfect blend of agricultural serenity and clinical excellence. Join the AgroZen Care family today.
            </p>
            <button className="px-12 py-6 bg-rose-500 text-white rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-rose-500/20">
              Schedule a Free Tour
            </button>
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Heart size={300} />
          </div>
        </motion.div>
      </section>

    </div>
  );
}