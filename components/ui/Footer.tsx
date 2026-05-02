"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Programs",
      links: ["Agri-Science", "Geriatric Care", "Sustainability", "Research"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Vision", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="relative bg-[#0A1A12] text-white pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* 1. Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Leaf size={24} className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                AgroZen<span className="text-emerald-500">Care</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Redefining the future of agriculture and compassionate healthcare
              through innovation and sustainable practices.
            </p>
            <div className="flex gap-4">
              {[CiFacebook, FaXTwitter, FaLinkedin, IoLogoInstagram].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          {/* 2. Quick Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors flex items-center group gap-2"
                    >
                      {link}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 3. Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">
              Get in Touch
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <MapPin size={20} className="text-emerald-500 shrink-0" />
                <span className="text-sm">
                  Gachbaria, Chandanaish, <br />
                  Chittagong, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <Phone size={20} className="text-emerald-500 shrink-0" />
                <span className="text-sm">+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <Mail size={20} className="text-emerald-500 shrink-0" />
                <span className="text-sm">hello@agrozen.care</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} AgroZen Care PLC. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                System Operational
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
