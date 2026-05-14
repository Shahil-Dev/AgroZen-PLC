"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Syringe,
  Flower2,
  Dumbbell,
  Moon,
  Accessibility,
  ShieldCheck,
  Home,
  Zap,
  Tv,
  LayoutGrid,
  BookOpen,
  Utensils,
  ShoppingCart,
  WashingMachine,
  UserCheck,
  BedDouble,
  ArrowRight,
  X,
  MapPin,
  Phone,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const AgroZenCarePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalData, setModalData] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const healthData = [
    {
      icon: HeartPulse,
      title: "Regular Health Check-ups",
      desc: "Comprehensive geriatric assessments, preventive diagnostics, and personalized monitoring plans designed to support long-term wellness and early medical intervention.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
    },
    {
      icon: Activity,
      title: "24/7 Medical Response",
      desc: "Dedicated nursing professionals and emergency-ready medical facilities ensure immediate assistance and compassionate care at every hour.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop",
    },
    {
      icon: Syringe,
      title: "Medicine Coordination",
      desc: "Automated prescription management and doorstep medicine delivery provide comfort, consistency, and peace of mind for residents and families.",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2000&auto=format&fit=crop",
    },
    {
      icon: UserCheck,
      title: "Physiotherapy & Recovery",
      desc: "Advanced rehabilitation programs and mobility-focused therapies help residents maintain independence, flexibility, and confidence.",
      image:
        "https://images.unsplash.com/photo-1516549655669-df1a32f6df7b?q=80&w=2000&auto=format&fit=crop",
    },
    {
      icon: Flower2,
      title: "Nature Meditation",
      desc: "Quiet gardens, reflective walkways, and serene natural landscapes encourage mindfulness, emotional balance, and inner calm.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
    },
    {
      icon: Dumbbell,
      title: "Wellness Fitness Studio",
      desc: "Age-sensitive fitness programs, guided yoga, and therapeutic movement sessions support healthy and active aging.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const livingData = [
    {
      icon: Accessibility,
      title: "Barrier-Free Living",
      desc: "Every pathway, corridor, and residence is intentionally designed to minimize obstacles and maximize effortless mobility.",
    },
    {
      icon: Zap,
      title: "Backup Power Elevators",
      desc: "Reliable elevator systems with instant emergency power backup ensure uninterrupted accessibility throughout the community.",
    },
    {
      icon: MapPin,
      title: "Wheelchair-Friendly Grounds",
      desc: "Smooth landscaped pathways and spacious outdoor movement areas create a safe and graceful experience for every resident.",
    },
    {
      icon: Home,
      title: "Ventilated Luxury Residences",
      desc: "Natural light, premium airflow design, and spacious interiors cultivate a calm and breathable living atmosphere.",
    },
    {
      icon: ShieldCheck,
      title: "Integrated Safety Systems",
      desc: "Emergency response alarms, support rails, and intelligent safety infrastructure provide reassurance for residents and families alike.",
    },
  ];

  const socialData = [
    {
      icon: Tv,
      title: "Cinema Lounge",
      desc: "A sophisticated social lounge for movie nights, celebrations, storytelling sessions, and meaningful interactions.",
    },
    {
      icon: LayoutGrid,
      title: "Indoor Recreation",
      desc: "Dedicated activity spaces for chess, wellness games, and social engagement that encourage mental stimulation and companionship.",
    },
    {
      icon: BookOpen,
      title: "Modern Reading Library",
      desc: "A peaceful literary environment curated for quiet reflection, lifelong learning, and intellectual inspiration.",
    },
  ];

  const diningData = [
    {
      icon: Utensils,
      title: "Healthy Dining Hall",
      desc: "Fresh farm-to-table meals curated by nutrition experts to support senior wellness and dietary comfort.",
    },
    {
      icon: ShoppingCart,
      title: "Mini-Mart Convenience",
      desc: "Daily essentials and personal care products available within the community for effortless access.",
    },
    {
      icon: WashingMachine,
      title: "Laundry & Linen Care",
      desc: "Professional cleaning services that ensure convenience, comfort, and elevated living standards.",
    },
    {
      icon: UserCheck,
      title: "Housekeeping Services",
      desc: "Dedicated staff maintain every residence with exceptional cleanliness, care, and discretion.",
    },
    {
      icon: BedDouble,
      title: "Luxury Guest Suites",
      desc: "Elegant accommodations for visiting family members to stay connected and close to loved ones.",
    },
  ];

  const sections = [
    {
      title: "Health & Wellness",
      data: healthData,
    },
    {
      title: "Living Experience",
      data: livingData,
    },
    {
      title: "Social Lifestyle",
      data: socialData,
    },
    {
      title: "Daily Concierge",
      data: diningData,
    },
  ];

  return (
    <main className="bg-[#F8F6F1] text-[#1F2937] overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#052E26]/95 via-[#052E26]/80 to-[#052E26]/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="uppercase tracking-[0.4em] text-sm text-emerald-300 mb-6">
                AgroZen Care PLC
              </p>

              <h1 className="text-6xl md:text-8xl leading-[0.95] text-white font-serif">
                Redefining
                <span className="block italic text-emerald-300 mt-3">
                  Senior Living
                </span>
              </h1>

              <p className="mt-10 text-lg md:text-2xl text-white/75 max-w-2xl leading-relaxed font-light">
                A serene residential sanctuary where healthcare, nature,
                accessibility, and emotional well-being come together to create
                a dignified lifestyle for every resident.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Card */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden xl:block absolute bottom-12 right-12 bg-white/10 backdrop-blur-2xl border border-white/10 p-8 rounded-[15px] w-[320px]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-400/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-emerald-300" />
            </div>

            <div>
              <p className="text-white text-xl font-serif">Trusted Wellness</p>
              <p className="text-white/60 text-sm">
                Designed for peaceful aging
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              "24/7 Medical Oversight",
              "Barrier-Free Architecture",
              "Luxury Assisted Living",
            ].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-white/80 text-sm">{item}</span>

                <ChevronRight className="w-4 h-4 text-emerald-300" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION NAVIGATION */}

      <section className="py-16 bg-white border-b border-stone-200 sticky top-0 z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-7 py-3 rounded-full transition-all duration-500 text-sm uppercase tracking-[0.2em] font-semibold ${
                  activeTab === i
                    ? "bg-[#064E3B] text-white shadow-xl"
                    : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC GRID SECTION */}

      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="mb-20 max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-emerald-700 mb-5">
              Curated Living Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-[#111827]">
              Every Detail Crafted Around Comfort, Wellness & Dignity.
            </h2>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {sections[activeTab].data.map((item: any, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                onClick={() =>
                  setModalData({
                    title: item.title,
                    content: item.desc,
                  })
                }
                className="group relative rounded-[15px] overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-700 border border-stone-100"
              >
                {item.image && (
                  <div className="h-[260px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[1800ms]"
                    />
                  </div>
                )}

                <div className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:bg-[#064E3B] transition-all duration-500">
                    <item.icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-all duration-500" />
                  </div>

                  <h3 className="text-3xl font-serif text-[#111827] mb-5">
                    {item.title}
                  </h3>

                  <p className="text-stone-500 leading-relaxed font-light">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[#064E3B] font-semibold">
                    Explore Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURE SHOWCASE */}

      <section className="relative py-36 overflow-hidden bg-[#031C18] text-white">
        {/* CINEMATIC BACKGROUND */}

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center opacity-[0.08]" />

          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-white/5" />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[700px] h-[700px] rounded-full bg-emerald-400 blur-[140px] -top-60 -left-60"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[500px] h-[500px] rounded-full bg-white blur-[120px] bottom-0 right-0"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-20 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />

                <p className="uppercase tracking-[0.35em] text-[11px] text-emerald-200 font-medium">
                  Safety • Accessibility • Independence
                </p>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif leading-[0.95] tracking-tight max-w-3xl">
                Designed For
                <span className="block italic text-emerald-300 mt-2">
                  Graceful Independent Living
                </span>
              </h2>

              <p className="mt-10 text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl font-light">
                Every residence within AgroZen Care is thoughtfully crafted to
                provide emotional comfort, physical safety, and effortless
                mobility. From intelligent emergency systems to barrier-free
                architecture, every detail exists to help seniors live with
                confidence, dignity, and peace.
              </p>

              {/* FEATURE STACK */}

              <div className="mt-14 space-y-5">
                {livingData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.08,
                      duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 8,
                      borderColor: "rgba(52,211,153,0.35)",
                    }}
                    className="group relative overflow-hidden rounded-[15px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 transition-all duration-500"
                  >
                    {/* Hover Glow */}

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-emerald-400/10 to-transparent" />

                    <div className="relative flex gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                        <item.icon className="w-7 h-7 text-emerald-300" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-2xl font-serif tracking-tight">
                            {item.title}
                          </h4>

                          <div className="h-[1px] w-10 bg-emerald-300/40" />
                        </div>

                        <p className="mt-3 text-white/60 leading-relaxed font-light text-[15px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* MAIN IMAGE */}

              <div className="relative overflow-hidden rounded-[15px] border border-white/10">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.8 }}
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop"
                  alt="Luxury Senior Living"
                  className="h-[780px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating Content */}

                <div className="absolute bottom-0 left-0 p-10">
                  <div className="max-w-md">
                    <p className="uppercase tracking-[0.35em] text-xs text-emerald-300 mb-4">
                      Premium Assisted Living
                    </p>

                    <h3 className="text-4xl font-serif leading-tight">
                      A Residential Environment That Prioritizes Safety Without
                      Sacrificing Elegance.
                    </h3>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD */}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -left-10 md:left-[-40px] bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[15px] p-8 max-w-[290px] shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-[15px] bg-emerald-400/10 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-emerald-300" />
                  </div>

                  <div>
                    <p className="text-5xl font-serif italic leading-none text-white">
                      24/7
                    </p>

                    <p className="text-white/60 text-sm mt-2">
                      Emergency Response & Care
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Medical Monitoring",
                    "Emergency Alarm Systems",
                    "Wheelchair Accessibility",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-white/75 text-sm">{item}</span>

                      <ArrowRight className="w-4 h-4 text-emerald-300" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL + DINING */}

    <section className="relative py-32 bg-[#F7F5F1] overflow-hidden">
  {/* BACKGROUND ELEMENTS */}

  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-100 blur-[140px] opacity-70" />

    <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[#064E3B]/10 blur-[120px]" />
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* SECTION HEADER */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center mb-24"
    >
      <p className="uppercase tracking-[0.4em] text-xs text-emerald-700 mb-6">
        Lifestyle & Everyday Wellness
      </p>

      <h2 className="text-5xl md:text-7xl font-serif leading-[0.95] tracking-tight text-[#111827]">
        Meaningful Living Beyond
        <span className="block italic text-emerald-700">
          Healthcare & Safety
        </span>
      </h2>

      <p className="mt-8 text-lg md:text-xl text-stone-500 leading-relaxed max-w-3xl mx-auto font-light">
        AgroZen Care is thoughtfully designed to create a warm emotional
        environment where seniors feel socially connected, mentally inspired,
        and effortlessly supported every single day.
      </p>
    </motion.div>

    {/* MAIN GRID */}

    <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[15px] overflow-hidden bg-[#052E26] min-h-[850px]"
      >
        {/* IMAGE */}

        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop"
          alt="Community Life"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#021512] via-[#021512]/70 to-[#021512]/20" />

        {/* CONTENT */}

        <div className="relative z-10 flex flex-col justify-between h-full p-10 md:p-14">
          {/* TOP */}

          <div className="flex items-center justify-between">
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full">
              <p className="uppercase tracking-[0.35em] text-[11px] text-emerald-200">
                Community Living
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-white/50 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              Active Social Environment
            </div>
          </div>

          {/* BOTTOM */}

          <div>
            <h3 className="text-5xl md:text-6xl font-serif text-white leading-[1] max-w-2xl">
              Emotional Wellness Through
              <span className="block italic text-emerald-300 mt-2">
                Human Connection
              </span>
            </h3>

            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-2xl font-light">
              Shared experiences, engaging conversations, and meaningful social
              moments help residents feel emotionally fulfilled, mentally
              energized, and deeply connected to a vibrant community.
            </p>

            {/* SOCIAL CARDS */}

            <div className="mt-12 grid gap-5">
              {socialData.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -4,
                    backgroundColor: 'rgba(255,255,255,0.12)',
                  }}
                  className="group flex items-start gap-5 rounded-[15px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                    <s.icon className="w-7 h-7 text-emerald-300" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-5">
                      <h4 className="text-2xl font-serif text-white">
                        {s.title}
                      </h4>

                      <ArrowRight className="w-5 h-5 text-emerald-300 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>

                    <p className="mt-3 text-white/65 text-[15px] leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}

      <div className="space-y-8">
        {/* TOP CARD */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[15px] bg-[#052E26] text-white p-10"
        >
          <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-emerald-400/20 blur-[100px]" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.35em] text-[11px] text-emerald-300 mb-5">
              Concierge Services
            </p>

            <h3 className="text-4xl md:text-5xl font-serif leading-[1.05]">
              Everyday Comfort Thoughtfully Managed.
            </h3>

            <p className="mt-6 text-white/70 leading-relaxed text-[15px] font-light">
              From healthy dining experiences to personalized housekeeping,
              every daily detail is carefully designed to provide ease, comfort,
              and peace of mind.
            </p>
          </div>
        </motion.div>

        {/* SERVICE STACK */}

        <div className="grid gap-5">
          {diningData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.08,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                borderColor: 'rgba(5,78,59,0.15)',
              }}
              className="group rounded-[15px] border border-stone-200 bg-white p-7 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-emerald-700" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-5">
                    <h4 className="text-2xl font-serif text-[#111827]">
                      {item.title}
                    </h4>

                    <ArrowRight className="w-5 h-5 text-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  <p className="mt-3 text-stone-500 text-[15px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM FEATURE CARD */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[15px] bg-[#E9F7F1] border border-emerald-100 p-10"
        >
          <div className="absolute bottom-0 right-0 w-[240px] h-[240px] rounded-full bg-emerald-200 blur-[100px]" />

          <div className="relative z-10 flex items-start justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.35em] text-[11px] text-emerald-700 mb-5">
                Personalized Lifestyle Support
              </p>

              <h4 className="text-4xl font-serif text-[#052E26] leading-[1.1]">
                Hospitality-Level Living Designed For Seniors.
              </h4>

              <p className="mt-5 text-[#064E3B]/70 leading-relaxed max-w-md font-light">
                Residents enjoy premium lifestyle support services that create
                a calm, secure, and stress-free daily experience.
              </p>
            </div>

            <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white items-center justify-center shadow-lg shrink-0">
              <Sparkles className="w-7 h-7 text-emerald-700" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}

      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2200&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-[#052E26]/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-[0.35em] text-sm text-emerald-300 mb-6">
              Begin A Peaceful New Chapter
            </p>

            <h2 className="text-5xl md:text-7xl text-white font-serif leading-tight">
              Experience Senior Living Designed With Grace, Safety & Warmth.
            </h2>

            <p className="mt-10 text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
              Schedule a personalized campus tour and discover how AgroZen Care
              PLC creates an environment where seniors can live independently,
              comfortably, and joyfully.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">
              <a
                href="tel:+88012345678"
                className="bg-emerald-500 hover:bg-emerald-400 transition-all duration-500 text-white px-10 py-5 rounded-full font-semibold shadow-2xl flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                +880 17XX XXXXXX
              </a>

              <button className="bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 text-white px-10 py-5 rounded-full font-semibold">
                Contact Care Consultant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {modalData && (
          <div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setModalData(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full rounded-[15px] overflow-hidden shadow-2xl"
            >
              <div className="relative h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2000&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <button
                  onClick={() => setModalData(null)}
                  className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-serif text-white">
                    {modalData.title}
                  </h3>
                </div>
              </div>

              <div className="p-10">
                <p className="text-lg text-stone-600 leading-relaxed font-light">
                  {modalData.content}
                </p>

                <button
                  onClick={() => setModalData(null)}
                  className="mt-10 bg-[#064E3B] hover:bg-[#05392c] transition-all duration-500 text-white px-8 py-4 rounded-full font-semibold"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default AgroZenCarePage;
