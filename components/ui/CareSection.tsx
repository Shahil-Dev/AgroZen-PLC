"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { HeartPulse, Users, Wind, ShieldCheck, Sun } from "lucide-react";
import Link from "next/link";

const CinematicText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => (
  <span className="inline-block overflow-hidden">
    <motion.span
      initial={{ y: "100%" }}
      whileInView={{ y: "0%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.215, 0.61, 0.355, 1], delay }}
      className="block"
    >
      {text}
    </motion.span>
  </span>
);

export default function SeniorLivingSanctuary() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.25, 0.6]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-5 md:px-6 bg-[#F8F6F2] overflow-hidden"
    >
      <div className="6xl mx-auto">
        {/* Main Grid - Responsive Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT: STORY & EMOTION */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <h2 className="text-5xl md:text-6xl lg:text-[5.2rem] leading-[0.92] font-light tracking-tighter text-[#1F2A24]">
              A place where
              <br />
              <span className="font-serif italic text-emerald-700">
                <CinematicText text="wisdom ages gracefully" delay={0.15} />
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#44554A] font-light leading-tight max-w-lg">
              Golden years should feel like the richest chapter of life. Here,
              every sunrise brings gentle joy, meaningful connection, and deep
              peace.
            </p>

            {/* Philosophy Toggle */}
            <div className="pt-4">
              <motion.div
                onClick={() =>
                  setExpanded(expanded === "philosophy" ? null : "philosophy")
                }
                className="group flex items-center gap-4 cursor-pointer w-fit"
              >
                <div className="text-sm uppercase tracking-widest font-medium text-emerald-700 group-hover:tracking-[4px] transition-all duration-300">
                  Our Philosophy
                </div>
                <div
                  className={`w-9 h-px bg-emerald-700 transition-all duration-300 ${expanded === "philosophy" ? "rotate-45 w-9" : "group-hover:w-12"}`}
                />
              </motion.div>

              <AnimatePresence>
                {expanded === "philosophy" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 text-[#44554A] text-[17px] leading-relaxed border-l-2 border-emerald-200 pl-6"
                  >
                    Aging is not decline — it is continuation. We honor life
                    experience while nurturing vitality through nature,
                    community, and compassionate care.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Explore Link */}
              <div className="mt-8">
                <Link
                  href="/care"
                  className="group flex items-center gap-4 w-fit"
                >
                  <div className="text-sm uppercase tracking-widest font-medium text-emerald-700 group-hover:tracking-[4px] transition-all duration-300">
                    Explore the Sanctuary
                  </div>
                  <div className="w-9 h-px bg-emerald-700 group-hover:w-12 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: CINEMATIC IMAGE */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/13] lg:aspect-[16/12] rounded-3xl md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-[#EDE8E0]">
              <motion.img
                style={{ scale: imageScale }}
                src="https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Elderly couple enjoying peaceful morning in garden"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Soft Black Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b 
                    from-black/20 via-black/40 to-black/70 
                    md:from-black/10 md:via-black/35 md:to-black/65"
              />

              {/* Optional subtle vignette for extra depth */}
              <div
                className="absolute inset-0 bg-gradient-to-r 
                    from-black/10 via-transparent to-black/10"
              />

              {/* Floating serene elements */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center">
                <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 50,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border border-white/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 65,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-10 border border-white/20 rounded-full"
                  />
                </div>
              </div>

              {/* Morning Ritual Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="text-amber-300" size={26} />
                  <span className="uppercase text-xs tracking-widest opacity-75">
                    Morning in the Sanctuary
                  </span>
                </div>
                <p className="text-xl md:text-3xl font-light leading-tight max-w-md">
                  Gentle yoga under the trees. Warm herbal tea from our garden.
                  A new day embraced with gratitude.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
