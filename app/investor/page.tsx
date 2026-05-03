"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import {
  TrendingUp,
  BarChart3,
  ShieldCheck,
  PieChart,
  ArrowUpRight,
  Download,
  Mail,
  ChevronRight,
  Globe,
  Building2,
  Users,
  Leaf,
} from "lucide-react";

export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFD] text-[#1a1a1a] selection:bg-emerald-100 selection:text-emerald-900">
      {/* --- 1. PREMIUM HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[140px] opacity-70 z-0 animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-50 z-0" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl space-y-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="h-[2px] w-16 bg-emerald-600 rounded-full"></span>
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.3em]">
                AgroZen Care PLC · Global Investors
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-[8.5rem] font-black tracking-tighter leading-[0.9] uppercase italic"
            >
              Investing in <br />
              <span className="text-emerald-600 not-italic">
                Humanity's
              </span>{" "}
              Future.
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                We are bridging the gap between{" "}
                <span className="text-emerald-900 font-bold">
                  Chittagong&apos;s rich agricultural heritage
                </span>{" "}
                and high-tech healthcare solutions. A synergy of profit and
                social responsibility.
              </p>

              <div className="flex flex-wrap gap-4 md:justify-end">
                <button className="group relative px-8 py-5 bg-[#1a1a1a] text-white rounded-2xl overflow-hidden transition-all shadow-2xl hover:shadow-emerald-200">
                  <span className="relative z-10 font-bold text-[10px] uppercase tracking-widest flex items-center gap-3">
                    Investor Prospectus 2026
                    <Download
                      size={16}
                      className="group-hover:translate-y-1 transition-transform"
                    />
                  </span>
                  <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. IMPACT NUMBERS: DYNAMIC GRID --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                label: "Growth Index",
                value: "24.8%",
                sub: "+4.2% from Q4",
                icon: TrendingUp,
              },
              {
                label: "Community Impact",
                value: "12k+",
                sub: "Lives Empowered",
                icon: Users,
              },
              {
                label: "ESG Compliance",
                value: "Level A",
                sub: "Global Standards",
                icon: Leaf,
              },
              {
                label: "Market Cap",
                value: "$14.2M",
                sub: "Projected 2026",
                icon: BarChart3,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 hover:border-emerald-200 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <stat.icon size={28} />
                </div>
                <h3 className="text-5xl font-black tracking-tighter mb-2 italic">
                  {stat.value}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
                <p className="text-[10px] font-medium text-emerald-600 mt-1 uppercase tracking-tighter">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE STRATEGY: HUMAN TOUCH --- */}
      <section className="py-32 px-6 bg-[#1a1a1a] text-white rounded-2xl  mx-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Building2 size={400} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-xs">
                  Our Thesis
                </span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1] uppercase italic">
                  Beyond <br />{" "}
                  <span className="text-emerald-500">Spreadsheets.</span>
                </h2>
                <p className="max-w-md text-slate-400 text-lg leading-relaxed">
                  While others look at numbers, we look at{" "}
                  <span className="text-white font-bold italic">
                    Bailtoli&apos;s landscape
                  </span>{" "}
                  and the smiles of our senior citizens. Our investment strategy
                  is rooted in real-world infrastructure and genuine care.
                </p>
              </motion.div>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
                  Strategy Deep-Dive
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Transparency",
                  desc: "Open-ledger reporting for all stakeholders.",
                  icon: ShieldCheck,
                },
                {
                  title: "Sustainability",
                  desc: "100% organic waste-to-energy conversion.",
                  icon: Leaf,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex gap-6 items-center hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="w-16 h-16 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic tracking-tighter">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CONTACT: THE DIRECT CONNECTION --- */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              Talk to our <span className="text-emerald-600">Leadership.</span>
            </h2>
            <p className="text-slate-500 font-medium">
              Direct access for institutional and private equity partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:investors@agrozen.care"
              className="group p-10 bg-slate-50 rounded-2xl text-center hover:bg-emerald-600 transition-all duration-500"
            >
              <Mail
                className="mx-auto mb-6 group-hover:text-white transition-colors"
                size={32}
              />
              <p className="text-[10px] font-black uppercase text-slate-400 group-hover:text-emerald-100">
                Inquiries
              </p>
              <p className="font-bold group-hover:text-white">
                investors@agrozen.care
              </p>
            </a>

            <div className="p-10 bg-slate-50 rounded-2xl text-center hover:shadow-2xl transition-all cursor-default">
              <Globe className="mx-auto mb-6 text-emerald-600" size={32} />
              <p className="text-[10px] font-black uppercase text-slate-400">
                Headquarters
              </p>
              <p className="font-bold tracking-tighter">
                AgroZen Tower, Chittagong
              </p>
            </div>

            <div className="p-10 bg-[#1a1a1a] text-white rounded-2xl text-center flex flex-col justify-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-2">
                Next Briefing
              </p>
              <p className="text-2xl font-black italic">JUNE 15, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Signature: The ultimate human touch */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300">
          Designed with Purpose by AgroZen Engineering Team
        </p>
      </footer>
    </main>
  );
}
