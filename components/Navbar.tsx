/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Palmtree,
  HeartPulse,
  GraduationCap,
  Users2,
  Languages,
  Menu,
  X,
  ChevronDown,
  LogIn,
} from "lucide-react";

// Translations
const siteTranslations: any = {
  en: { nav: { home: "Home", contact: "Contact", login: "Login" } },
  bn: { nav: { home: "হোম", contact: "যোগাযোগ", login: "লগইন" } },
};

export function Navbar() {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));

  const t = siteTranslations[language];
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Updated Core Section Links
  const resourceLinks = [
    {
      name: "Agro Tourism",
      href: "/agro-tourism", 
      icon: <Palmtree size={18} />,
    },
    {
      name: "Senior Care & Hospital",
      href: "/care",
      icon: <HeartPulse size={18} />,
    },
    {
      name: "Education",
      href: "/education",
      icon: <GraduationCap size={18} />,
    },
    {
      name: "Investor Relations",
      href: "/investor",
      icon: <Users2 size={18} />,
    },
  ];

  return (
    <>
      <header className="fixed top-4 z-50 w-full px-6">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 h-16 md:h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md shadow-lg transition-all duration-300">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 group ml-2"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white overflow-hidden border border-white/50 shadow-sm">
              <img
                src="image/high png agro.png"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="Space text-[15px] md:text-xl text-black tracking-tight font-bold">
                AgroZen Care PLC
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10">
            <li>
              <Link
                href="/"
                className={`plus text-[13px] lg:text-[14px] font-medium transition-all ${pathname === "/" ? "text-green-600" : "text-black hover:text-green-600"}`}
              >
                {t.nav.home}
              </Link>
            </li>

            {/* Core Section Dropdown */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <div className="flex plus items-center gap-1 text-[13px] lg:text-[14px] font-medium text-black group-hover:text-green-600 transition-all">
                Core Section
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                />
              </div>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[140%] -left-10 w-64 bg-[#0d1a16]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-2 grid gap-1"
                  >
                    {resourceLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-emerald-500/20 text-white/80 hover:text-emerald-400 transition-all"
                      >
                        <span className="text-emerald-500/60">{sub.icon}</span>
                        <span className="text-[13px] font-semibold">
                          {sub.name}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                href="/About"
                className={`text-[13px] plus lg:text-[14px] font-medium transition-all ${pathname === "/About" ? "text-green-600" : "text-black hover:text-green-600"}`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/Contact"
                className={`text-[13px] plus lg:text-[14px] font-medium transition-all ${pathname === "/Contact" ? "text-green-600" : "text-black hover:text-green-600"}`}
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>

          {/* Action Buttons (Language & Login) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#020202] px-4 py-1.5 rounded-full text-[12px] font-bold hover:bg-white transition-all shadow-sm border border-black/5"
            >
              <Languages size={14} />
              <span>{language === "bn" ? "EN" : "বাং"}</span>
            </button>

            {/* NEW: Login Button */}
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 bg-emerald-600 text-white px-5 py-1.5 rounded-full text-[12px] font-bold hover:bg-emerald-700 transition-all shadow-md"
            >
              <LogIn size={14} />
              <span>{t.nav.login}</span>
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/10 text-black border border-black/5"
            >
              {mobileOpen ? <X size={20} className="text-white" /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-[#050d0a] md:hidden flex flex-col pt-24 px-8"
          >
            <ul className="flex flex-col gap-6 text-white">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold border-b border-white/10 pb-2"
              >
                Home
              </Link>

              <div className="py-2">
                <p className="text-[10px] uppercase tracking-widest text-emerald-500 mb-4 font-bold">
                  Core Services
                </p>
                <div className="grid gap-5">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-4 text-xl opacity-90 hover:text-emerald-400"
                    >
                      <span className="p-2 bg-white/5 rounded-lg">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/About"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold border-b border-white/10 pb-2 pt-2"
              >
                About Us
              </Link>

              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold text-emerald-400"
              >
                {t.nav.login}
              </Link>

              <div className="mt-auto mb-10 grid grid-cols-2 gap-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/10 text-white border border-white/10 font-bold uppercase text-xs"
                >
                  <Languages size={18} />{" "}
                  {language === "bn" ? "English" : "বাংলা"}
                </button>
                <Link
                  href="/Contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center py-4 rounded-2xl bg-emerald-600 text-white font-bold uppercase text-xs"
                >
                  Contact
                </Link>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
