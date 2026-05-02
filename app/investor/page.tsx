"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from '@/lib/utils'; 
import {
  TrendingUp,
  FileText,
  BarChart3,
  ShieldCheck,
  PieChart,
  ArrowUpRight,
  Download,
  Mail,
  ChevronRight,
  Globe,
  Building2,
} from "lucide-react";



export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFD] text-[#1a1a1a] selection:bg-emerald-100">
      {/* --- 1. CORPORATE HERO: HIGH IMPACT --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60 z-0" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer} // গ্লোবাল স্ট্যাগার কন্টেইনার ব্যবহার
            className="max-w-4xl space-y-10"
          >
            <motion.div
              variants={fadeInUp} // গ্লোবাল fadeInUp ব্যবহার
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-emerald-600"></span>
              <span className="text-emerald-700 text-[10px] font-black uppercase tracking-[0.4em]">
                Investor Relations
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase"
            >
              Capital with <br />{" "}
              <span className="text-emerald-600">Conscience.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-xl text-slate-500 font-medium leading-relaxed"
            >
              AgroZen Care PLC integrates high-yield agritech innovation with a
              social mandate for elderly care, creating a unique ESG investment
              frontier.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 pt-4"
            >
              <button className="group relative px-10 py-5 bg-[#1a1a1a] text-white overflow-hidden rounded-2xl transition-all">
                <span className="relative z-10 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Annual Report 2025{" "}
                  <Download
                    size={16}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-emerald-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button className="px-10 py-5 border border-slate-200 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
                Stock Info <ChevronRight size={14} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. LIVE METRICS --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            {[
              {
                label: "Rev. Growth",
                value: "24%",
                sub: "Year over Year",
                icon: TrendingUp,
              },
              {
                label: "Market Cap",
                value: "$14.2M",
                sub: "Estimated 2026",
                icon: Building2,
              },
              {
                label: "EBITDA Margin",
                value: "18.5%",
                sub: "Operational",
                icon: PieChart,
              },
              {
                label: "ESG Rating",
                value: "AAA",
                sub: "Top 5% Industry",
                icon: ShieldCheck,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-12 space-y-6 hover:bg-emerald-50/30 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <stat.icon size={24} />
                </div>
                <div>
                  <h3 className="text-5xl font-black tracking-tighter">
                    {stat.value}
                  </h3>
                  <div className="mt-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]">
                      {stat.label}
                    </p>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE INVESTMENT CASE --- */}
      <section className="py-32 px-6 bg-[#0f1410] text-white rounded-t-[5rem]">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="space-y-6">
              <span className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[10px]">
                Why AgroZen?
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                The Value <br /> Proposition.
              </h2>
            </div>
            <p className="max-w-xs text-slate-400 font-medium border-l border-emerald-500/30 pl-6">
              Diversifying portfolios through the intersection of essential food
              security and the growing silver economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Quarterly Results",
                date: "Q1 2026",
                desc: "Outperforming targets in agritourism revenue and organic exports.",
                file: "PDF",
              },
              {
                title: "Expansion Plan",
                date: "2026-2030",
                desc: "Strategic roadmap for 15 new eco-retreat sites across the region.",
                file: "PPT",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:border-emerald-500/50 transition-all flex flex-col justify-between aspect-video"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                      {item.date}
                    </span>
                    <h4 className="text-4xl font-black tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div className="flex items-end justify-between">
                  <p className="max-w-[250px] text-slate-400 text-sm font-medium">
                    {item.desc}
                  </p>
                  <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center font-black text-[10px]">
                    {item.file}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. GOVERNANCE & CONTACT --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black tracking-tighter uppercase">
              Stakeholder <br /> Inquiries.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <Mail className="text-emerald-600 shrink-0" size={24} />
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Investor Relations Email
                  </p>
                  <p className="text-xl font-bold tracking-tight">
                    investors@agrozen.care
                  </p>
                </div>
              </div>
              <div className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <Globe className="text-emerald-600 shrink-0" size={24} />
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Headquarters
                  </p>
                  <p className="text-xl font-bold tracking-tight">
                    AgroZen Tower, Chittagong, BD
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-600 p-16 rounded-[4rem] text-white space-y-8"
          >
            <h3 className="text-4xl font-black tracking-tighter uppercase">
              Request IR <br /> Presentation.
            </h3>
            <p className="text-emerald-100 font-medium">
              Schedule a deep-dive session with our executive board to
              understand our 5-year growth trajectory.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Corporate Email Address"
                className="w-full bg-emerald-700/50 border border-emerald-500/50 rounded-2xl p-5 placeholder:text-emerald-200/50 outline-none focus:bg-emerald-700 transition-all"
              />
              <button className="w-full bg-white text-emerald-900 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}