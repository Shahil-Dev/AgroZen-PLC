"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Leaf,
  Trees,
  Milk,
  GraduationCap,
  Mountain,
  ChevronDown,
  Quote,
  CalendarDays,
  Wheat,
  Flower2,
  Sun,
  Sparkles,
  Phone,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import OrchardSection from "@/components/orchardData";
import Testimonials from "@/components/Marquee";
import BookingSection from "@/components/ui/Booking";

const slides = [
  {
    id: "resort",
    title: "Resort with Grameen Flavour",
    image:
      "https://images.unsplash.com/photo-1706736231412-936c032d47ac?w=1200",
  },
  {
    id: "orchards",
    title: "Nature's Bounty: Fruit Trees",
    image: "https://images.pexels.com/photos/6870647/pexels-photo-6870647.jpeg",
  },
  {
    id: "vegetables",
    title: "Precision Organic Farming",
    image:
      "https://images.pexels.com/photos/17031600/pexels-photo-17031600.jpeg",
  },
  {
    id: "livestock",
    title: "Poultry & Dairy Ecosystems",
    image:
      "https://images.pexels.com/photos/20992487/pexels-photo-20992487.jpeg",
  },
  {
    id: "training",
    title: "Agricultural Training Excellence",
    image:
      "https://images.pexels.com/photos/36835033/pexels-photo-36835033.jpeg",
  },
  {
    id: "landscapes",
    title: "Poetic Landscapes & Shaded Parks",
    image:
      "https://images.pexels.com/photos/34453135/pexels-photo-34453135.png",
  },
];

const orchardCards = [
  {
    title: "Mango Grove",
    season: "Summer Harvest",
    icon: Sun,
  },
  {
    title: "Dragon Fruit",
    season: "Monsoon Bloom",
    icon: Sparkles,
  },
  {
    title: "Guava Fields",
    season: "Year Round",
    icon: Flower2,
  },
  {
    title: "Lemon Estate",
    season: "Winter Citrus",
    icon: Wheat,
  },
];

const farmingSteps = [
  "Soil Preparation",
  "Seed Calibration",
  "Drip Irrigation",
  "Natural Composting",
  "AI Crop Monitoring",
  "Premium Harvest",
];

const livestockData = [
  "Organic Dairy Monitoring",
  "Automated Feeding System",
  "Veterinary Wellness Routine",
  "Free-Range Poultry Ecosystem",
];

const courses = [
  {
    title: "Modern Organic Farming",
    content:
      "Advanced greenhouse systems, precision irrigation, and soil intelligence training.",
  },
  {
    title: "Smart Dairy Operations",
    content:
      "Farm automation, nutrition cycles, and livestock sustainability management.",
  },
  {
    title: "Agro Tourism Hospitality",
    content:
      "Luxury rural tourism experiences, guest engagement, and eco-resort management.",
  },
];

const testimonials = [
  {
    name: "Rahim Akhtar",
    text: "AgroZen feels less like a destination and more like a beautifully orchestrated experience.",
  },
  {
    name: "Sophia Martin",
    text: "The silence of nature mixed with luxury architecture created an unforgettable memory.",
  },
  {
    name: "Tanvir Hasan",
    text: "A masterpiece of sustainability, technology, and human-centric hospitality.",
  },
];

const pricing = [
  {
    title: "Eco Day Retreat",
    price: "$49",
    desc: "Farm tours, organic meals, orchard access.",
  },
  {
    title: "Luxury Village Escape",
    price: "$149",
    desc: "Premium stay, wellness sessions, shaded parks.",
  },
  {
    title: "Executive Agro Experience",
    price: "$399",
    desc: "Private resort suite with curated agro immersion.",
  },
];

export default function AgroTourismMasterpiece() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div ref={containerRef} className="bg-[#0b0b0b] text-white overflow-hidden">
      {/* Floating Booking */}

      {/* HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          style={{ y }}
          className="relative z-20 h-full flex items-center"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[0.4em] text-sm text-white/70 mb-6">
                AgroZen Care PLC
              </p>

              <h1 className="text-5xl md:text-8xl font-light leading-[0.95] tracking-tight">
                {slides[current].title}
              </h1>

              <div className="mt-10">
                <button
                  onClick={() => scrollToSection(slides[current].id)}
                  className="group border border-white/30 backdrop-blur-md px-7 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition-all duration-500"
                >
                  Explore Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <ChevronDown className="animate-bounce w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* SECTION 01 */}
      <section
        id="resort"
        className="bg-[#f5f0e8] text-black py-32 relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-500">
              Heritage Luxury
            </p>

            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Rural Elegance,
              <br />
              Reimagined.
            </h2>

            <p className="mt-8 text-lg leading-9 text-neutral-700">
              AgroZen blends timeless village culture with refined modern
              architecture. Every pathway, courtyard, and handcrafted interior
              is designed to celebrate the soul of rural life through a luxury
              editorial lens.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src={slides[0].image}
              alt="Resort"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 02 */}
      <OrchardSection></OrchardSection>

      {/* SECTION 03 */}
      <section
        id="vegetables"
        className="bg-white text-black py-32 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* --- Section Header --- */}
          <div className="mb-24">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="uppercase tracking-[0.4em] text-xs font-bold text-emerald-800 mb-6"
            >
              Precision Organic Agriculture
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-light tracking-tighter leading-tight"
            >
              Vegetable{" "}
              <span className="italic font-serif text-emerald-900">
                Farming
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* --- Left Column: Detailed Features --- */}
            <div className="lg:col-span-7 space-y-20">
              {/* Detail 01: Soil Preparation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="text-4xl font-serif italic text-stone-200 group-hover:text-emerald-200 transition-colors">
                  01
                </div>
                <div>
                  <h3 className="text-3xl font-light mb-4">
                    Bio-Intensive Soil Management
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed font-light max-w-xl">
                    Our farming begins deep within the earth. We use proprietary
                    vermicompost and organic bio-fertilizers to create a living
                    soil rich in microbial life, ensuring our vegetables are
                    packed with natural minerals.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-emerald-800 font-medium uppercase tracking-wider">
                    <li>• Zero Chemical Pesticides</li>
                    <li>• Microbial Enrichment</li>
                    <li>• Natural PH Balancing</li>
                  </ul>
                </div>
              </motion.div>

              {/* Detail 02: Diverse Crops */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="text-4xl font-serif italic text-stone-200 group-hover:text-emerald-200 transition-colors">
                  02
                </div>
                <div>
                  <h3 className="text-3xl font-light mb-4">
                    Diverse Seasonal Rotation
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed font-light max-w-xl">
                    We cultivate a vast array of vegetables including Heirloom
                    Tomatoes, Organic Eggplants, Crisp Leafy Greens, and Root
                    Vegetables. Our crop rotation policy prevents soil
                    exhaustion and naturally breaks pest cycles.
                  </p>
                </div>
              </motion.div>

              {/* Detail 03: Precision Irrigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="text-4xl font-serif italic text-stone-200 group-hover:text-emerald-200 transition-colors">
                  03
                </div>
                <div>
                  <h3 className="text-3xl font-light mb-4">
                    Sustainable Water Architecture
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed font-light max-w-xl">
                    Using smart drip-irrigation systems, we deliver water
                    directly to the roots, reducing waste by 70%. Rainwater
                    harvesting ensures our farming remains sustainable even
                    during the dry seasons.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* --- Right Column: Visual Showcase --- */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="sticky top-32"
              >
                <div className="relative aspect-[3/4] rounded-[15px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/36866792/pexels-photo-36866792.jpeg"
                    alt="Fresh Vegetable Harvest"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Accent Image */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border-8 border-white overflow-hidden shadow-xl hidden xl:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1566385270613-56837061f238?auto=format&fit=crop&w=600&q=80"
                    alt="Close up vegetable"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* --- Bottom Feature: Grid of Crops --- */}
          <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Leafy Greens",
                img: "https://images.pexels.com/photos/27666299/pexels-photo-27666299.jpeg?w=400",
              },
              {
                name: "Root Veggies",
                img: "https://images.pexels.com/photos/8983833/pexels-photo-8983833.jpeg",
              },
              {
                name: "Organic Peppers",
                img: "https://images.pexels.com/photos/14069430/pexels-photo-14069430.jpeg",
              },
              {
                name: "Fresh Gourds",
                img: "https://images.pexels.com/photos/6547614/pexels-photo-6547614.jpeg",
              },
            ].map((crop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <img
                  src={crop.img}
                  alt={crop.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">
                    {crop.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 */}
      <section
        id="poultry-dairy"
        className="bg-[#0A120E] text-white py-32 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* --- Header Section --- */}
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="uppercase tracking-[0.4em] text-xs font-bold text-emerald-500 mb-6"
              >
                Livestock & Farm Excellence
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-light tracking-tighter leading-tight"
              >
                Poultry &{" "}
                <span className="italic font-serif text-emerald-400">
                  Dairy
                </span>
              </motion.h2>
            </div>
            <div className="text-stone-400 max-w-sm text-lg font-light leading-relaxed">
              Our farm integrates ethical livestock management with pure dairy
              production, ensuring a healthy ecosystem for both animals and
              consumers.
            </div>
          </div>

          {/* --- Interactive Content Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 01. Dairy Farm Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-[15px] overflow-hidden bg-stone-900 aspect-square md:aspect-video lg:aspect-square"
            >
              <img
                src="https://images.pexels.com/photos/16924558/pexels-photo-16924558.jpeg?auto=format&fit=crop&w=1200&q=80"
                alt="Dairy Farm"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Fresh Milk & Dairy
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-light mb-6">
                  Sustainable Dairy Production
                </h3>
                <p className="text-stone-300 font-light leading-relaxed max-w-md mb-8">
                  Experience the morning ritual of fresh milking. Our cows are
                  raised in open pastures, fed with organic green fodder for the
                  richest, chemical-free milk.
                </p>
                <div className="flex gap-8 text-xs font-bold uppercase tracking-tighter">
                  <div className="flex flex-col">
                    <span className="text-emerald-500 text-xl">100%</span> Grass
                    Fed
                  </div>
                  <div className="flex flex-col">
                    <span className="text-emerald-500 text-xl">Pure</span> A2
                    Grade
                  </div>
                  <div className="flex flex-col">
                    <span className="text-emerald-500 text-xl">No</span>{" "}
                    Antibiotics
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02. Poultry Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group rounded-[15px] overflow-hidden bg-stone-900 aspect-square md:aspect-video lg:aspect-square"
            >
              <img
                src="https://images.pexels.com/photos/35877059/pexels-photo-35877059.jpeg"
                alt="Poultry Farm"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Free Range Poultry
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-light mb-6">
                  Organic Eggs & Poultry
                </h3>
                <p className="text-stone-300 font-light leading-relaxed max-w-md mb-8">
                  Our poultry roam freely in a stress-free environment. From
                  country chicken to ducks, we prioritize animal welfare to
                  deliver the highest quality organic proteins.
                </p>
                <div className="flex gap-8 text-xs font-bold uppercase tracking-tighter">
                  <div className="flex flex-col">
                    <span className="text-emerald-500 text-xl">Cage</span> Free
                  </div>
                  <div className="flex flex-col">
                    <span className="text-emerald-500 text-xl">High</span>{" "}
                    Protein
                  </div>
                  <div className="flex flex-col">
                    <span className="text-emerald-500 text-xl">Daily</span>{" "}
                    Harvest
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- Farm Statistics / Mini Feature --- */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
            <div>
              <h4 className="text-emerald-500 text-4xl font-light mb-2">
                06:00 AM
              </h4>
              <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">
                Milking Time
              </p>
            </div>
            <div>
              <h4 className="text-emerald-500 text-4xl font-light mb-2">
                Organic
              </h4>
              <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">
                Feed Composition
              </p>
            </div>
            <div>
              <h4 className="text-emerald-500 text-4xl font-light mb-2">
                Sanitized
              </h4>
              <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">
                Habitats
              </p>
            </div>
            <div>
              <h4 className="text-emerald-500 text-4xl font-light mb-2">
                Vet-Led
              </h4>
              <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">
                Animal Health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 */}
      <section id="training" className="bg-[#FAF9F6] py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* --- Section Header --- */}
          <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="uppercase tracking-[0.4em] text-xs font-bold text-emerald-800 mb-6"
              >
                Empowering the Future Farmers
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-light tracking-tighter leading-tight text-[#0F1715]"
              >
                Agricultural{" "}
                <span className="italic font-serif text-emerald-900">
                  Training
                </span>
              </motion.h2>
            </div>
            <div className="lg:max-w-md">
              <p className="text-stone-500 text-xl font-light leading-relaxed">
                Bridging the gap between traditional wisdom and modern
                innovation through hands-on training modules tailored for the
                Bangladeshi landscape.
              </p>
            </div>
          </div>

          {/* --- Training Modules Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Visual Storytelling */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative rounded-[15px] overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/15954898/pexels-photo-15954898.jpeg"
                  alt="Practical Field Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Live Workshop
                  </span>
                  <h4 className="text-2xl font-light mt-2">
                    Organic Pest Management Training
                  </h4>
                </div>
              </motion.div>

              <div className="p-10 bg-emerald-900 rounded-[15px] text-white">
                <h4 className="text-2xl font-light mb-4 text-emerald-200">
                  The Bangladesh Context
                </h4>
                <p className="text-emerald-50/70 font-light leading-relaxed">
                  In a land of seasonal diversity, we focus on crop-specific
                  mastery—from Aman & Boro rice cycles to high-value winter
                  vegetables. Our training includes climate-smart techniques to
                  combat salinity and flooding.
                </p>
              </div>
            </div>

            {/* Right Side: Modules & Curriculum */}
            <div className="lg:col-span-7 space-y-12">
              {/* Module 01 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="group border-b border-stone-200 pb-10"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-mono text-stone-400">
                    Module 01
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                </div>
                <h3 className="text-3xl font-light mb-4 group-hover:text-emerald-800 transition-colors">
                  Precision Soil Diagnostics
                </h3>
                <p className="text-stone-500 font-light leading-relaxed max-w-xl">
                  Learn to read your land. This module covers soil pH testing,
                  nutrient mapping, and bio-fertilizer application tailored for
                  different districts of Bangladesh.
                </p>
              </motion.div>

              {/* Module 02 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="group border-b border-stone-200 pb-10"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-mono text-stone-400">
                    Module 02
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                </div>
                <h3 className="text-3xl font-light mb-4 group-hover:text-emerald-800 transition-colors">
                  Modern Irrigation & Hydroponics
                </h3>
                <p className="text-stone-500 font-light leading-relaxed max-w-xl">
                  Training on water-saving technologies, drip irrigation setups,
                  and soilless farming for urban and rooftop agricultural
                  entrepreneurs.
                </p>
              </motion.div>

              {/* Module 03 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="group border-b border-stone-200 pb-10"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-mono text-stone-400">
                    Module 03
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                </div>
                <h3 className="text-3xl font-light mb-4 group-hover:text-emerald-800 transition-colors">
                  Agro-Business & Market Supply Chain
                </h3>
                <p className="text-stone-500 font-light leading-relaxed max-w-xl">
                  Beyond the field. Understanding crop valuation, cold storage
                  logistics, and how to connect directly with premium digital
                  marketplaces.
                </p>
              </motion.div>

              <section
                id="training"
                className="bg-[#FAF9F6]  overflow-hidden relative"
              >
                <div className="max-w-6xl mx-auto px-6">
                  <div className="mt-12">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="px-10 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-900 transition-all"
                    >
                      Apply for Certification
                    </button>
                  </div>
                </div>

                {/* --- Coming Soon Modal --- */}
                <AnimatePresence>
                  {isOpen && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                      />

                      {/* Modal Box */}
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-white rounded-[2.5rem] p-12 max-w-md w-full text-center shadow-2xl"
                      >
                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                          <span className="text-4xl">🌱</span>
                        </div>

                        <h3 className="text-3xl font-light mb-4 text-stone-900">
                          Coming Soon
                        </h3>
                        <p className="text-stone-500 font-light leading-relaxed mb-10">
                          Our certification program is currently under
                          development. We are working with experts to bring you
                          the best curriculum. Stay tuned!
                        </p>

                        <button
                          onClick={() => setIsOpen(false)}
                          className="w-full py-4 border border-stone-200 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-colors text-stone-900"
                        >
                          Close
                        </button>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 06 */}
      <section id="landscape-parks" className="bg-white py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* --- Section Header --- */}
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.5em] text-xs font-bold text-emerald-800 mb-6"
            >
              Oasis of Tranquility
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-light tracking-tighter leading-tight text-[#0F1715]"
            >
              Botanical{" "}
              <span className="italic font-serif text-emerald-900">
                Sanctuary
              </span>
            </motion.h2>
            <p className="mt-8 text-xl text-stone-500 font-light leading-relaxed">
              Escape into our meticulously curated landscaped gardens and shaded
              parks, where architectural precision meets the untamed beauty of
              nature.
            </p>
          </div>

          {/* --- Content Layout --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Landscaped Garden Visual */}
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-[15px] overflow-hidden aspect-[4/5] shadow-2xl relative"
              >
                <img
                  src="https://images.pexels.com/photos/25903941/pexels-photo-25903941.jpeg"
                  alt="Landscaped Garden"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            </div>

            {/* Right Column: Text & Features */}
            <div className="space-y-16">
              {/* Feature 01: Landscaped Gardens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 font-serif italic">
                  1
                </div>
                <div>
                  <h3 className="text-3xl font-light mb-4">
                    Architectural Landscaping
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed font-light">
                    Our gardens are designed to be more than just green spaces.
                    We follow Zen-inspired principles to create paths that
                    encourage mindfulness, featuring native Bangladeshi plants
                    and stone artistry.
                  </p>
                </div>
              </motion.div>

              {/* Feature 02: Shaded Parks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 font-serif italic">
                  2
                </div>
                <div>
                  <h3 className="text-3xl font-light mb-4">
                    The Shaded Canopy Parks
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed font-light">
                    Find solace under the sprawling canopies of ancient Banyan
                    and Rain trees. Our shaded parks offer a natural cooling
                    effect, perfect for quiet contemplation, reading, or family
                    picnics away from the tropical sun.
                  </p>
                </div>
              </motion.div>

              {/* Mini Showcase Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-[15px] overflow-hidden h-64 shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80"
                  alt="Shaded Park Bench"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* --- Bottom Gallery Row --- */}
          <div className="mt-32 pt-20 border-t border-stone-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Quiet Benches",
                  img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",
                },
                {
                  label: "Reflecting Pools",
                  img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500",
                },
                {
                  label: "Canopy Walks",
                  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
                },
                {
                  label: "Evening Lights",
                  img: "https://images.pexels.com/photos/18656860/pexels-photo-18656860.jpeg",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials></Testimonials>

      {/* BOOKING */}
    <BookingSection></BookingSection>
    </div>
  );
}







