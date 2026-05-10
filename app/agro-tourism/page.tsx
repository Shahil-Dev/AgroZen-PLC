"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  TreePine,
  Sprout,
  Milk,
  GraduationCap,
  Home,
  ChevronRight,
  Wind,
  Apple,
  Carrot,
  Bird,
  Gem,
  Compass,
  Leaf,
  Droplets,
  Sun,
  Moon,
  Users,
  Flower2,
  MapPin,
  Calendar,
  ArrowUp,
} from "lucide-react";

// --- Utility: Character Reveal with Stagger ---
const RevealText = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => (
  <span className={`inline-block overflow-hidden ${className}`}>
    <motion.span
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
      className="inline-block"
    >
      {text}
    </motion.span>
  </span>
);

// --- Parallax Image Component with 10px Radius ---
const ParallaxImage = ({
  src,
  alt,
  speed = 0.5,
}: {
  src: string;
  alt: string;
  speed?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden rounded-[10px]"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
};

// --- Expandable Card Component ---
const ExpandableCard = ({
  title,
  description,
  details,
  icon: Icon,
  color,
}: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      layout
      className={`relative rounded-[10px] overflow-hidden cursor-pointer transition-all duration-500 ${isExpanded ? "md:col-span-2" : "col-span-1"}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        layout
        className="p-8 bg-white/90 backdrop-blur-sm border border-white/20 shadow-xl h-full"
      >
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-[10px] ${color.bg}`}>
            <Icon className={color.text} size={28} />
          </div>
          <motion.div
            layout="position"
            className="text-sm font-mono tracking-wider text-stone-400"
          >
            {isExpanded ? "− CLOSE" : "+ EXPLORE"}
          </motion.div>
        </div>
        <motion.h3 layout className="text-2xl font-light mt-6 mb-2">
          {title}
        </motion.h3>
        <motion.p layout className="text-stone-500 font-light">
          {description}
        </motion.p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 pt-6 border-t border-stone-200"
            >
              <p className="text-stone-600 leading-relaxed">{details}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ThemeSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`relative overflow-hidden ${className}`}>
    {children}
  </section>
);

export default function AgroZenMasterpiece() {
  const [activeTrainingModule, setActiveTrainingModule] = useState<
    string | null
  >(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) =>
      setShowScrollTop(v > 0.1),
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  const trainingModules = [
    {
      id: "soil",
      title: "Soil Intelligence",
      icon: Leaf,
      desc: "IoT-enabled soil analysis and regenerative practices.",
    },
    {
      id: "water",
      title: "Hydro Logic",
      icon: Droplets,
      desc: "Precision irrigation and water harvesting systems.",
    },
    {
      id: "market",
      title: "Agri-Tech Commerce",
      icon: Users,
      desc: "Blockchain traceability and direct market linkage.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-stone-50 text-stone-900 selection:bg-emerald-900 selection:text-white font-sans overflow-x-hidden"
    >
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-900 text-white rounded-full shadow-2xl hover:bg-emerald-800 transition-all duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================= 1. HERO: Fixed for Navbar & Responsive ================= */}
      <ThemeSection className="h-screen flex items-center justify-center bg-[#0A2F2A]">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 0.3], [1, 1.3]),
            opacity: useTransform(scrollYProgress, [0, 0.3], [0.6, 0.3]),
          }}
          className="absolute inset-0 z-0"
        >
          <ParallaxImage
            src="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Nature"
            speed={0.8}
          />
        </motion.div>

        {/* Navbar Overlay Fix: Dark gradient top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F2A]/90 via-[#0A2F2A]/20 to-[#0A2F2A]/80" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center items-center gap-4"
          >
            {/* <div className="h-px w-8 md:w-16 bg-emerald-400" /> */}
          </motion.div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            {/* Main Heading - Now Normal & Clean */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight">
              Where the <span className="text-emerald-400 italic">Earth</span>{" "}
              Speaks <br className="hidden md:block" />
              and Luxury{" "}
              <span className="text-emerald-400 italic">Listens</span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 md:mt-8 text-white/70 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
            >
              A sanctuary where sustainable ecology meets human-centric
              hospitality. Experience the future of agro-living in the heart of
              nature.
            </motion.p>
          </div>
        </div>
      </ThemeSection>

      {/* ================= 2. RESORT: Village Flavor ================= */}
      <ThemeSection className="py-24 md:py-40 px-6 bg-[#F4EFE6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-2xl"
          >
            <ParallaxImage
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=2000"
              alt="Resort"
              speed={0.3}
            />
          </motion.div>
          <div className="space-y-6 md:space-y-10">
            <div className="p-4 w-fit bg-stone-800 rounded-[10px]">
              <Home className="text-stone-300" size={32} />
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#2D241E] leading-tight">
              <RevealText text="The Village" />
              <br />
              <span className="italic font-serif">
                <RevealText text="Sanctuary" delay={0.1} />
              </span>
            </h2>
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-light">
              Feel the morning mist rise from rice paddies as you wake in a
              space designed for the human soul. Our architecture honors
              heritage building wisdom—delivering five-star comfort within
              nature's embrace.
            </p>
          </div>
        </div>
      </ThemeSection>

      {/* ================= 3. ORCHARD & FARM ================= */}
      <ThemeSection className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-32">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-stone-800 uppercase">
              <RevealText text="Harvesting" />
              <br />
              <span className="font-serif italic text-emerald-700">
                <RevealText text="Biodiversity" delay={0.1} />
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="group relative h-[400px] md:h-[600px] rounded-[10px] overflow-hidden shadow-xl">
              <ParallaxImage
                src="https://images.pexels.com/photos/909966/pexels-photo-909966.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Orchard"
                speed={0.4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 p-10 flex flex-col justify-end">
                <h3 className="text-white text-3xl md:text-4xl font-light">
                  Multi-Layered Orchards
                </h3>
              </div>
            </div>
            <div className="group relative h-[400px] md:h-[600px] rounded-[10px] overflow-hidden shadow-xl">
              <ParallaxImage
                src="https://images.pexels.com/photos/5726791/pexels-photo-5726791.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Farm"
                speed={0.4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 p-10 flex flex-col justify-end">
                <h3 className="text-white text-3xl md:text-4xl font-light">
                  Seed-to-Plate
                </h3>
              </div>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* ================= 4. POULTRY & DAIRY ================= */}
      <ThemeSection className="py-24 md:py-40 px-6 bg-[#E8EDE9]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
              <RevealText text="Ethical" />
              <br />
              <span className="font-serif italic">
                <RevealText text="Livestock" delay={0.1} />
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Milk,
                  title: "Premium Dairy",
                  color: "text-blue-700",
                  bg: "bg-blue-50",
                  desc: "Automated, stress-free milking environments.",
                },
                {
                  icon: Bird,
                  title: "Organic Poultry",
                  color: "text-amber-700",
                  bg: "bg-amber-50",
                  desc: "Free-range rotational systems for nutrient cycling.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 bg-white rounded-[10px] shadow-sm border border-emerald-100/50"
                >
                  <div className={`p-3 h-fit rounded-[10px] ${item.bg}`}>
                    <item.icon className={item.color} size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-stone-500 font-light text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-[10px] overflow-hidden h-64 md:h-96 shadow-2xl">
              <ParallaxImage
                src="https://images.pexels.com/photos/57416/cow-sweet-calf-cattle-57416.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Dairy"
                speed={0.3}
              />
            </div>
            <div className="rounded-[10px] overflow-hidden h-64 md:h-96 mt-12 shadow-2xl">
              <ParallaxImage
                src="https://images.pexels.com/photos/8113992/pexels-photo-8113992.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Poultry"
                speed={0.3}
              />
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* ================= 5. TRAINING ================= */}
      <ThemeSection className="py-24 md:py-48 px-6 bg-[#0C120F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <GraduationCap
              size={48}
              className="text-emerald-400 mx-auto mb-6"
            />
            <h2 className="text-5xl md:text-7xl font-light mb-8 italic uppercase">
              <RevealText text="Knowledge" />
              <br />
              <span className="not-italic font-serif text-emerald-400 uppercase">
                <RevealText text="The Growth" delay={0.1} />
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingModules.map((module, idx) => (
              <ExpandableCard
                key={module.id}
                title={module.title}
                description="Workshop"
                details={module.desc}
                icon={module.icon}
                color={{ bg: "bg-white/10", text: "text-emerald-400" }}
              />
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* ================= 6. LANDSCAPE: Sacred Geometry ================= */}
      <ThemeSection className="py-24 md:py-48 px-6 bg-[#D9DCD1]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-emerald-950 leading-none">
              <RevealText text="Poetry in" />
              <br />
              <span className="italic font-serif">
                <RevealText text="Landscape" delay={0.1} />
              </span>
            </h2>
            <p className="text-lg text-emerald-900/60 font-light mt-8">
              Micro-climates optimized for human wellness. Shaded parks designed
              for natural cooling.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-emerald-900 rounded-[10px] p-6 flex flex-col justify-between text-white shadow-xl">
              <Wind size={36} />
              <p className="text-[10px] font-bold uppercase tracking-widest">
                Aerodynamics
              </p>
            </div>
            <div className="h-64 bg-white rounded-[10px] p-6 flex flex-col justify-between text-emerald-950 shadow-xl">
              <TreePine size={36} />
              <p className="text-[10px] font-bold uppercase tracking-widest">
                Indigenous Flora
              </p>
            </div>
          </div>
        </div>
      </ThemeSection>
    </div>
  );
}
