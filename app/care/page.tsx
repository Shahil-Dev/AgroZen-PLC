"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  RiHeartPulseLine,
  RiShieldCrossLine,
  RiHomeHeartLine,
  RiMicroscopeLine,
  RiTimeLine,
  RiLeafLine,
  RiGroupLine,
  RiArrowRightUpLine,
  RiStethoscopeLine,
  RiWifiLine,
} from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Reusable Eyebrow Label ─────────────────────── */
function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${light ? "text-[#52B788]" : "text-[#2D6A4F]"}`}
    >
      <span className={`w-5 h-px ${light ? "bg-[#52B788]" : "bg-[#2D6A4F]"}`} />
      <span className="text-[9px] font-bold uppercase tracking-[0.45em]">
        {children}
      </span>
    </div>
  );
}

/* ─── Parallax Image Wrapper ─────────────────────── */
function ParallaxImage({ src, alt, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
}

/* ─── Stat Chip ──────────────────────────────────── */
function StatChip({ value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="text-4xl md:text-5xl font-bold text-[#1B3A2D] leading-none"
      >
        {value}
      </span>
      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#2D6A4F]/60">
        {label}
      </span>
    </div>
  );
}

export default function SeniorCarePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "12%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        /* Grain overlay */
        .az-grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 2;
          border-radius: inherit;
        }

        /* Glassmorphism card */
        .glass-card {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.7);
        }

        .glass-dark {
          background: rgba(15,31,22,0.65);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(82,183,136,0.15);
        }

        .linen { background-color: #F4F1EC; }
        .parchment { background-color: #E8E3DA; }

        /* Hover underline */
        .fancy-link::after {
          content: '';
          display: block;
          height: 1px;
          background: #2D6A4F;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .fancy-link:hover::after { transform: scaleX(1); }

        /* Decorative SVG divider */
        .wave-divider { display: block; width: 100%; overflow: hidden; line-height: 0; }
      `}</style>

      <main
        style={{ fontFamily: "'Jost', sans-serif" }}
        className="min-h-screen bg-[#F4F1EC] text-[#1B3A2D] selection:bg-emerald-200"
      >
        {/* ══════════════════════════════════════════════
            §1  HERO — EDITORIAL FULL BLEED
        ══════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
        >
          {/* Parallax BG */}
          <motion.div
            style={{ y: heroImgY }}
            className="absolute inset-0 scale-110"
          >
            <img
              src="https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Elderly Care Hero"
              className="w-full h-full object-cover"
            />
            {/* Gradient veil — heavier bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F16]/95 via-[#0F1F16]/40 to-[#0F1F16]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F16]/50 to-transparent" />
          </motion.div>

          {/* Grain */}
          <div className="absolute inset-0 az-grain pointer-events-none z-10" />

          {/* Content */}
          <motion.div
            style={{ y: heroTextY }}
            className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-14 pb-20 md:pb-28 grid md:grid-cols-2 gap-12 items-end"
          >
            {/* Left: Headline */}
            <div className="space-y-7">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                <Eyebrow light>Zenith Care · Dignity in Living</Eyebrow>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[0.92] tracking-tight"
              >
                Redefining
                <br />
                <em className="italic font-light text-[#52B788]">
                  Senior Life.
                </em>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
                className="max-w-sm text-[#E8E3DA]/70 text-sm font-light leading-relaxed"
              >
                AgroZen's healthcare wing unites precision medicine with a
                soulful philosophy — where every elder finds not just care, but
                a reason to thrive.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className="flex items-center gap-5"
              >
                <button className="group flex items-center gap-3 px-7 py-4 bg-[#52B788] hover:bg-[#2D6A4F] rounded-full text-white text-[10px] font-bold uppercase tracking-[0.35em] transition-all duration-500">
                  Schedule a Visit
                  <RiArrowRightUpLine
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
                <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white fancy-link transition-colors duration-300">
                  Our Services
                </button>
              </motion.div>
            </div>

            {/* Right: Floating stat glass cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="hidden md:flex flex-col gap-4 items-end"
            >
              <div className="glass-dark rounded-3xl px-8 py-6 space-y-1">
                <p className="text-[9px] text-[#52B788] font-bold uppercase tracking-[0.4em]">
                  Residents Served
                </p>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-5xl font-bold text-white"
                >
                  500+
                </p>
              </div>
              <div className="glass-dark rounded-3xl px-8 py-6 space-y-1">
                <p className="text-[9px] text-[#52B788] font-bold uppercase tracking-[0.4em]">
                  Care Staff
                </p>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-5xl font-bold text-white"
                >
                  120
                </p>
              </div>
              <div className="glass-dark rounded-3xl px-8 py-5 flex items-center gap-4">
                <RiHeartPulseLine size={22} className="text-[#52B788]" />
                <div>
                  <p className="text-[9px] text-white/50 font-bold uppercase tracking-[0.3em]">
                    Monitoring
                  </p>
                  <p className="text-sm font-semibold text-white">
                    24 / 7 Live
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="w-px h-10 bg-gradient-to-b from-[#52B788] to-transparent"
            />
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/30">
              Scroll
            </span>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════
            §2  CLINICAL INFRASTRUCTURE — SPLIT LAYOUT
        ══════════════════════════════════════════════ */}
        <section className="py-32 md:py-44 px-6 md:px-14 overflow-hidden linen">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
              <div className="space-y-4">
                <Eyebrow>Medical Excellence</Eyebrow>
                <h2
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight max-w-2xl"
                >
                  Advanced Clinical
                  <br />
                  <em className="font-light italic text-[#2D6A4F]">
                    Infrastructure.
                  </em>
                </h2>
              </div>
              {/* Stats row */}
              <div className="flex gap-10 md:gap-14">
                <StatChip value="99.9%" label="Diagnostic accuracy" />
                <div className="w-px h-14 bg-[#1B3A2D]/10 self-center" />
                <StatChip value="< 3min" label="Emergency response" />
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Feature cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: RiStethoscopeLine,
                    title: "Specialized Geriatrics",
                    desc: "Dedicated teams focused on age-specific conditions — from mobility therapy to cognitive support — tailoring care to each individual's rhythm of life.",
                    tag: "Clinical",
                  },
                  {
                    icon: RiWifiLine,
                    title: "24/7 Smart Monitoring",
                    desc: "IoT-enabled vitals tracking delivers instant alerts to on-call physicians, ensuring every health event is met with immediate, informed response.",
                    tag: "Technology",
                  },
                  {
                    icon: RiShieldCrossLine,
                    title: "Zenith Care Management",
                    desc: "Our proprietary hospital system centralizes patient records, medication schedules, and diagnostic histories into one seamless interface.",
                    tag: "Precision",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeLeft}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="group flex gap-6 p-6 rounded-3xl border border-[#1B3A2D]/8 hover:border-[#2D6A4F]/25 hover:bg-white/70 transition-all duration-500 cursor-default"
                  >
                    {/* Icon */}
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#1B3A2D]/5 group-hover:bg-[#2D6A4F] flex items-center justify-center text-[#2D6A4F] group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon size={22} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h4
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          className="text-xl font-bold tracking-tight"
                        >
                          {item.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-[#2D6A4F]/8 text-[#2D6A4F] text-[8px] font-bold uppercase tracking-widest">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#1B3A2D]/55 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right: Asymmetric image composition */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={scaleIn}
                className="relative"
              >
                {/* Main image */}
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(27,58,45,0.25)]">
                  <ParallaxImage
                    src="https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Clinical Technology"
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F16]/40 to-transparent" />
                </div>

                {/* Floating glass badge — bottom right */}
                <motion.div
                  initial={{ opacity: 0, y: 24, x: 24 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="glass-card absolute -bottom-6 -right-4 md:-right-10 rounded-3xl p-6 shadow-xl max-w-[200px]"
                >
                  <RiHeartPulseLine size={22} className="text-[#2D6A4F] mb-3" />
                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#2D6A4F] mb-0.5">
                    Precision
                  </p>
                  <p
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl font-bold text-[#1B3A2D]"
                  >
                    99.9%
                    <br />
                    <span className="text-base font-light">Accuracy</span>
                  </p>
                </motion.div>

                {/* Floating badge — top left */}
                <motion.div
                  initial={{ opacity: 0, y: -20, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="glass-card absolute -top-5 -left-4 md:-left-8 rounded-2xl px-5 py-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1B3A2D]">
                      Live Monitoring
                    </span>
                  </div>
                </motion.div>

                {/* Decorative circle */}
                <div className="absolute -z-10 -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#2D6A4F]/8 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            §3  RESIDENTIAL ECOSYSTEM — LIVING WITH PURPOSE
        ══════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-14 bg-[#F4F1EC]">
          <div className="max-w-7xl mx-auto">
            {/* Full-width quote banner */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[3rem] bg-[#1B3A2D] az-grain mb-20 px-10 md:px-20 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10"
            >
              {/* Decorative blob */}
              <div className="absolute right-0 top-0 w-80 h-80 bg-[#2D6A4F]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute left-1/3 bottom-0 w-56 h-56 bg-[#52B788]/10 rounded-full blur-2xl pointer-events-none" />

              <blockquote
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="relative z-10 text-4xl md:text-6xl font-light italic text-white max-w-2xl leading-tight"
              >
                "A place where every morning brings fresh air, fresh food, and a
                fresh reason to live."
              </blockquote>
              <div className="relative z-10 shrink-0 flex flex-col gap-2">
                <RiLeafLine size={40} className="text-[#52B788]" />
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#52B788]">
                  AgroZen Philosophy
                </p>
              </div>
            </motion.div>

            {/* Split: Text + Masonry Photos */}
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
              {/* Left: Copy */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="space-y-8 lg:pt-4 lg:sticky lg:top-32"
              >
                <Eyebrow>A Place Called Home</Eyebrow>
                <h2
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight"
                >
                  Living with
                  <br />
                  <em className="italic font-light text-[#2D6A4F]">Purpose.</em>
                </h2>
                <p className="text-[#1B3A2D]/60 text-sm font-light leading-relaxed max-w-sm">
                  Our residential complexes sit within our own organic
                  agricultural lands. Every day, residents wake to birdsong,
                  fresh-harvested produce, and a community that sees them — not
                  just their condition.
                </p>
                <p className="text-[#1B3A2D]/60 text-sm font-light leading-relaxed max-w-sm">
                  Spiritual wellness gardens, cultural events, and
                  multi-generational programmes ensure each resident writes a
                  new chapter — not simply completes one.
                </p>

                {/* Tag chips */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: RiLeafLine, label: "Organic Surroundings" },
                    { icon: RiGroupLine, label: "Community Events" },
                    { icon: RiHomeHeartLine, label: "24/7 Pastoral Care" },
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#1B3A2D]/6 hover:bg-[#2D6A4F] hover:text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-400 cursor-default group"
                    >
                      <t.icon
                        size={12}
                        className="text-[#2D6A4F] group-hover:text-white transition-colors"
                      />
                      {t.label}
                    </div>
                  ))}
                </div>

                {/* Small stat strip */}
                <div className="flex gap-8 pt-4 border-t border-[#1B3A2D]/10">
                  <StatChip value="4 ac" label="Green land" />
                  <div className="w-px h-10 bg-[#1B3A2D]/10 self-center" />
                  <StatChip value="3" label="Wellness zones" />
                </div>
              </motion.div>

              {/* Right: Masonry photo grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    src: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=800",
                    h: "h-72",
                    delay: 0,
                  },
                  {
                    src: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800",
                    h: "h-48 mt-10",
                    delay: 0.1,
                  },
                  {
                    src: "https://images.pexels.com/photos/2058130/pexels-photo-2058130.jpeg?auto=compress&cs=tinysrgb&w=800",
                    h: "h-48",
                    delay: 0.15,
                  },
                  {
                    src: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800",
                    h: "h-72",
                    delay: 0.2,
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    custom={p.delay}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scaleIn}
                    className={`${p.h} rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500`}
                  >
                    <img
                      src={p.src}
                      alt="Senior Living"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            §4  TELEMEDICINE & ACCESS — DARK SECTION
        ══════════════════════════════════════════════ */}
        <section className="py-32 md:py-44 px-6 md:px-14 bg-[#0F1F16] relative overflow-hidden az-grain">
          {/* Background orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2D6A4F]/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#52B788]/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-20 space-y-5 max-w-2xl"
            >
              <Eyebrow light>Digital Health Access</Eyebrow>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-5xl md:text-7xl font-bold text-white leading-[0.92] tracking-tight"
              >
                Care Without
                <br />
                <em className="font-light italic text-[#52B788]">
                  Boundaries.
                </em>
              </h2>
              <p className="text-[#E8E3DA]/50 text-sm font-light leading-relaxed max-w-md">
                The Zenith Care digital portal connects families to real-time
                health dashboards, physician consultations, and progress reports
                — wherever they are in the world.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: RiStethoscopeLine,
                  val: "Expert Physicians",
                  desc: "Consult with the nation's leading geriatricians, cardiologists, and neurologists — in-person or via our telehealth platform.",
                  num: "01",
                },
                {
                  icon: RiMicroscopeLine,
                  val: "Diagnostic Labs",
                  desc: "Fully equipped in-house laboratory delivering digital results within hours — not days — with AI-assisted analysis.",
                  num: "02",
                },
                {
                  icon: RiTimeLine,
                  val: "Immediate Response",
                  desc: "On-site paramedics and dedicated emergency transport ensure that every critical moment is answered in under three minutes.",
                  num: "03",
                },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 md:p-10 rounded-3xl border border-white/8 hover:border-[#52B788]/30 bg-white/3 hover:bg-white/6 transition-all duration-500 overflow-hidden"
                >
                  {/* Number watermark */}
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="absolute top-6 right-8 text-7xl font-bold text-white/4 group-hover:text-white/7 transition-colors select-none leading-none"
                  >
                    {box.num}
                  </span>

                  <box.icon size={28} className="text-[#52B788] mb-8" />
                  <h4
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
                  >
                    {box.val}
                  </h4>
                  <p className="text-sm text-[#E8E3DA]/45 font-light leading-relaxed">
                    {box.desc}
                  </p>

                  {/* Bottom border reveal on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#52B788] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                </motion.div>
              ))}
            </div>

            {/* Inline metric strip */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-3xl overflow-hidden"
            >
              {[
                { v: "500+", l: "Active Residents" },
                { v: "24/7", l: "Portal Access" },
                { v: "98%", l: "Family Satisfaction" },
                { v: "< 3m", l: "Emergency Response" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-[#0F1F16] px-8 py-7 flex flex-col gap-1"
                >
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-3xl md:text-4xl font-bold text-white"
                  >
                    {m.v}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#52B788]/60">
                    {m.l}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            §5  CTA — WARM & HUMAN
        ══════════════════════════════════════════════ */}
        <section className="py-32 px-6 md:px-14 linen">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative rounded-[4rem] overflow-hidden az-grain"
              style={{
                background:
                  "linear-gradient(135deg, #1B3A2D 0%, #2D6A4F 60%, #1B3A2D 100%)",
              }}
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#52B788]/10 blur-3xl" />
                <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#52B788]/8 blur-2xl -translate-y-1/3 translate-x-1/4" />
              </div>

              <div className="relative z-10 px-10 md:px-24 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Copy */}
                <div className="space-y-7">
                  <HiOutlineSparkles size={32} className="text-[#52B788]" />
                  <h2
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-5xl md:text-6xl font-bold text-white leading-[0.95] tracking-tight"
                  >
                    Your Family is
                    <br />
                    <em className="font-light italic text-[#52B788]">
                      Our Responsibility.
                    </em>
                  </h2>
                  <p className="text-[#E8E3DA]/60 text-sm font-light leading-relaxed max-w-sm">
                    Whether you're enquiring about residential availability,
                    hospital services, or our nursing caregiver institute — we
                    are here, and we are listening.
                  </p>
                </div>

                {/* Right: CTA cards */}
                <div className="space-y-4">
                  {[
                    {
                      title: "Schedule a Visit",
                      desc: "Walk through our facilities and meet the team who will care for your loved one.",
                      primary: true,
                    },
                    {
                      title: "Contact Medical Team",
                      desc: "Speak directly with our chief of geriatrics or nursing director.",
                      primary: false,
                    },
                    {
                      title: "Enrol in Nursing Institute",
                      desc: "Join our internationally certified caregiver training programme.",
                      primary: false,
                    },
                  ].map((cta, i) => (
                    <motion.button
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      whileHover={{ x: 6 }}
                      className={`w-full text-left flex items-center justify-between gap-4 px-7 py-5 rounded-2xl transition-all duration-400 ${
                        cta.primary
                          ? "bg-[#52B788] hover:bg-white text-white hover:text-[#1B3A2D]"
                          : "border border-white/12 hover:border-[#52B788]/50 hover:bg-white/5 text-white"
                      }`}
                    >
                      <div>
                        <p
                          className={`text-sm font-semibold mb-0.5 ${cta.primary ? "" : "text-white"}`}
                        >
                          {cta.title}
                        </p>
                        <p
                          className={`text-[10px] font-light ${cta.primary ? "text-white/70 hover:text-[#1B3A2D]/60" : "text-white/40"}`}
                        >
                          {cta.desc}
                        </p>
                      </div>
                      <RiArrowRightUpLine
                        size={18}
                        className="shrink-0 opacity-60"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
