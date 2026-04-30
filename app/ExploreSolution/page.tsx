"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sprout,
  BarChart3,
  Droplets,
  Target,
  Zap,
  ShieldCheck,
  Database,
  Leaf,
  Cpu,
  PieChart,
  Map,
  Plane,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

const stats = [
  { label: "Yield Increase", value: "40%" },
  { label: "Water Conservation", value: "25M Liters" },
  { label: "Active Investors", value: "500+" },
  { label: "Eco-Tourism Footprint", value: "12 Sites" },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function SolutionsPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen z-10 pt-24 pb-16 bg-slate-50 text-slate-900 font-sans selection:bg-green-100"
    >
     
    <div>
 {/* 1. Cinematic Hero Section */}
      <section className="relative max-w-6xl mx-auto min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-white to-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 text-green-700 text-sm font-bold mb-8"
          >
            <Cpu size={16} /> <span>THE DIGITAL HARVEST PROTOCOL</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Agriculture
            </span>{" "}
            is Intelligent
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
            AgroZen Care PLC integrates IoT automation and predictive AI to
            create a self-sustaining ecosystem of high-yield farming and
            eco-conscious investment.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 hover:bg-black transition-all shadow-xl shadow-slate-200">
              Launch Dashboard <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
              Whitepaper
            </button>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scaleProgress }}
          className="absolute inset-0 z-0 opacity-30"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-200/50 rounded-full blur-[120px]" />
        </motion.div>
      </section>

      {/* 2. Live Performance Metrics */}
      <section className="py-20 bg-white max-w-6xl mx-auto border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="flex flex-col items-center md:items-start"
              >
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-green-600 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Agro-Tech Core Stack */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-4">
            <Zap className="text-green-600" /> Technology Stack
          </h2>
          <div className="h-1 w-20 bg-green-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Irrigation",
              icon: Droplets,
              desc: "Autonomous water management systems reducing consumption by 30% via IoT sensors.",
            },
            {
              title: "Precision Drones",
              icon: Target,
              desc: "Multispectral imaging for real-time soil health assessment and pest detection.",
            },
            {
              title: "Yield Prediction",
              icon: Database,
              desc: "AI algorithms analyzing historical weather patterns for optimal harvest timing.",
            },
            {
              title: "Investor Ledger",
              icon: ShieldCheck,
              desc: "A transparent, blockchain-verified system for tracking agricultural returns.",
            },
            {
              title: "Organic Integrity",
              icon: Leaf,
              desc: "Automated certification tracking to ensure 100% pesticide-free produce.",
            },
            {
              title: "Eco-Energy",
              icon: Zap,
              desc: "Solar-powered farm infrastructure reducing the carbon footprint of production.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-10 rounded-[40px] bg-white border border-slate-200 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-8">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Agro-Investment & Tourism (Corporate Expansion) */}
      <section className="py-32 bg-slate-900 max-w-7xl mx-auto text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-8">
                Beyond Farming: <br />
                <span className="text-green-400">Wealth & Recreation</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                AgroZen isn't just a producer; it's an asset class. We bridge
                the gap between rural productivity and urban lifestyle through
                eco-tourism and transparent investment models.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl h-fit">
                    <PieChart className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Passive Agro-Income
                    </h4>
                    <p className="text-slate-400 font-light">
                      Investors participate in high-value crop cycles with
                      quarterly dividend payouts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl h-fit">
                    <Map className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Eco-Tourism Circuit
                    </h4>
                    <p className="text-slate-400 font-light">
                      Direct integration with elderly care retreats and
                      smart-farm tours for immersive experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000"
                alt="AgroZen Investment Land"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto p-16 rounded-[60px] bg-green-600 text-white shadow-3xl shadow-green-200"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Cultivate <br /> Your Future?
          </h2>
          <p className="text-green-100 text-xl mb-12">
            Contact AgroZen Care PLC for institutional investment opportunities
            and partnership inquiries.
          </p>
          {/* <button className="px-12 py-5 bg-white text-green-700 rounded-full font-black text-lg hover:scale-105 transition-transform">
            Inquire Now
          </button> */}
        </motion.div>
      </section>
    </div>


    </div>
  );
}





