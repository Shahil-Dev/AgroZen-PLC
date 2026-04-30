/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Sprout,
  Palmtree,
  HeartPulse,
  GraduationCap,
  Users2,
  Languages,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

// FIX 1: Mock/Placeholder for translation logic (Replace with your actual import if available)
const siteTranslations: any = {
  en: { nav: { home: "Home", contact: "Contact" } },
  bn: { nav: { home: "হোম", contact: "যোগাযোগ" } }
};

export function Navbar() {
  // FIX 2: Re-enabled language state and logic
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  
  // FIX 3: Defined the 't' object so the UI doesn't crash
  const t = siteTranslations[language];

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const resourceLinks = [
    { name: "Agro & Farming", href: "/agro", icon: <Sprout size={18} /> },
    { name: "Eco-Retreat", href: "/tourism", icon: <Palmtree size={18} /> },
    { name: "Senior Care & Hospital", href: "/care", icon: <HeartPulse size={18} /> },
    { name: "Education", href: "/education", icon: <GraduationCap size={18} /> },
    { name: "Investor Relations", href: "#investor", icon: <Users2 size={18} /> },
  ];

  return (
    <>
      <header className="fixed top-4 z-50 w-full px-6">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 h-16 md:h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md shadow-lg transition-all duration-300">
          
          <Link
            href="/"
            className="flex items-center gap-2 group ml-2"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex-shrink-0 h-10 w-10 md:h-10 md:w-10 rounded-full bg-white overflow-hidden border border-white/50 shadow-sm">
              <img
                src="/image/Untitled design.png"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" 
                alt="Logo"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="Space text-[16px] md:text-2xl  text-black tracking-tight">
                AgroZen Care PLC
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10">
            <li>
              <Link
                href="/"
                className={`plus text-[13px] lg:text-[14px] font-medium transition-all ${pathname === "/" ? "text-green-500" : "text-black hover:text-green-500"}`}
              >
                {/* FIX 4: t.nav.home is now defined */}
                {t.nav.home}
              </Link> 
            </li>

            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <div className="flex plus items-center gap-1 text-[13px] lg:text-[14px] font-medium text-black group-hover:text-green-500 transition-all">
                Core Section
                <ChevronDown size={14} className={`transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
              </div>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[140%] -left-10 w-64 bg-[#1a3d1f]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-2 grid gap-1"
                  >
                    {resourceLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-all"
                      >
                        <span className="text-white/60">{sub.icon}</span>
                        <span className="text-[13px] font-semibold">{sub.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                href="/About"
                className={`text-[13px] plus lg:text-[14px] font-medium transition-all ${pathname === "/About" ? "text-green-500" : "text-black hover:text-green-500"}`}
              >
                About Us
              </Link>
            </li>
            
            <li>
              <Link
                href="/Contact"
                className={`text-[13px] plus lg:text-[14px] font-medium transition-all ${pathname === "/Contact" ? "text-green-500" : "text-black  hover:text-green-500"}`}
              >
                {/* FIX 5: t.nav.contact is now defined */}
                {t.nav.contact}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 bg-white text-[#020202] px-5 py-1.5 rounded-full text-[13px] font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              <Languages size={14} />
              {/* FIX 6: language variable is now defined */}
              <span>{language === "bn" ? "English" : "বাংলা"}</span>
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-[#1a3d1f] md:hidden flex flex-col pt-24 px-8"
          >
            {/* FIX 7: Changed text-black to text-white for mobile menu visibility against dark background */}
            <ul className="flex flex-col gap-4 text-white">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-2xl font-bold border-b border-white/10 pb-2">Home</Link>
              <div className="py-2">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Core Section</p>
                <div className="grid gap-4">
                  {resourceLinks.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-lg opacity-80">
                      {link.icon} {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/About" onClick={() => setMobileOpen(false)} className="text-2xl font-bold border-b border-white/10 pb-2 pt-4">About Us</Link>
              <Link href="/Contact" onClick={() => setMobileOpen(false)} className="text-2xl font-bold">Contact</Link>
              
              {/* FIX 8: Added onClick to mobile language toggle */}
              <button 
                onClick={toggleLanguage}
                className="mt-8 flex items-center justify-center gap-2 py-4 rounded-2xl bg-white text-[#1a3d1f] font-black uppercase text-sm tracking-widest"
              >
                <Languages size={18} /> {language === "bn" ? "English" : "বাংলা"}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}





