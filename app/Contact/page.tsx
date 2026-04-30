"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px]">Get in Touch</span>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                Let's Start a <br /> <span className="text-emerald-500">Conversation.</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-md font-medium">
                Whether you're interested in investment opportunities, smart farming, or care services, our team is here to assist.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Headquarters", details: "Chittagong, Bangladesh" },
                { icon: Phone, title: "Inquiries", details: "+880 1XXX-XXXXXX" },
                { icon: Mail, title: "Official Email", details: "info@agrozen.care" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 shrink-0 border border-slate-100">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.title}</h4>
                    <p className="text-xl font-bold text-slate-800">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-950 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[100px]" />
            
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Service Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                  <option className="bg-slate-900">Precision Agriculture</option>
                  <option className="bg-slate-900">Elderly Care PLC</option>
                  <option className="bg-slate-900">Investment Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Your Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-900/20">
                <Send size={18} />
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}