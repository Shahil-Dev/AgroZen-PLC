"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Leaf,
  Trees,
  Milk,
  GraduationCap,
  Flower2,
  ArrowDown,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const heroWords = [
  "Where",
  "Heritage",
  "Breathes",
  "Through",
  "Luxury",
];

export default function AgroTourismMasterpiece() {
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.15]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0]
  );

  return (
    <main className="bg-[#0d0f0c] text-[#f5f2ea] overflow-hidden">
      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
            alt="AgroZen Landscape"
            fill
            priority
            quality={100}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6"
        >
          <div className="overflow-hidden">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="inline-block text-[11vw] md:text-[8vw] leading-none font-extralight tracking-[-0.06em] mr-6"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto mt-12 text-lg md:text-2xl text-[#e6e0d5]/80 font-light leading-relaxed"
          >
            AgroZen Care PLC reimagines rural Bangladesh through cinematic
            agro-tourism, Italian agriturismo elegance, and Japanese-inspired
            harmony with nature.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-24 flex justify-center"
          >
            <ArrowDown className="w-7 h-7 text-white/70 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* HERITAGE */}

      <section className="bg-[#f4efe5] text-[#1c1c1c] min-h-screen py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[80vh] rounded-[40px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1800&auto=format&fit=crop"
              alt="Heritage Resort"
              fill
              quality={95}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Trees className="w-7 h-7" />

              <span className="uppercase tracking-[0.3em] text-sm text-black/50">
                Heritage Resort
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-extralight tracking-[-0.06em] leading-[0.95]">
              Grameen
              <span className="block italic font-serif">
                Luxury Retreat
              </span>
            </h2>

            <p className="mt-10 text-xl leading-relaxed text-black/70 font-light">
              Earthen textures, handcrafted bamboo architecture, silent water
              reflections, and curated hospitality create a deeply emotional
              rural sanctuary.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-8">
              {[
                "Private Courtyard Villas",
                "Clay Architecture",
                "Handwoven Interiors",
                "Cultural Experiences",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-t border-black/10 pt-5 text-sm uppercase tracking-[0.15em]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ORCHARDS */}

      <section className="relative min-h-screen bg-[#132018] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop"
          alt="Orchard"
          fill
          quality={100}
          className="object-cover opacity-40"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-40">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8 text-white">
              <Leaf className="w-7 h-7" />

              <span className="uppercase tracking-[0.3em] text-sm text-white/50">
                Tropical Orchards
              </span>
            </div>

            <h2 className="text-white text-7xl md:text-[9rem] font-extralight tracking-[-0.07em] leading-[0.9]">
              Fruit
              <span className="block italic font-serif">
                Forests
              </span>
            </h2>

            <p className="mt-12 text-2xl max-w-3xl text-white/70 font-light leading-relaxed">
              Mango canopies, dragon fruit corridors, citrus terraces, and
              botanical pathways transform agriculture into immersive tourism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LIVESTOCK */}

      <section className="bg-[#101418] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Milk className="w-7 h-7" />

              <span className="uppercase tracking-[0.3em] text-sm text-white/40">
                Ethical Livestock
              </span>
            </div>

            <h2 className="text-7xl font-extralight tracking-[-0.06em] leading-[0.92]">
              Humane
              <span className="block italic font-serif">
                Ecosystems
              </span>
            </h2>

            <p className="mt-10 text-xl leading-relaxed text-white/70 font-light">
              Advanced dairy and poultry environments prioritize animal welfare,
              ecological balance, and ethical stewardship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-[40px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1600&auto=format&fit=crop"
              alt="Livestock"
              fill
              quality={95}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-black text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl font-extralight tracking-[-0.05em]">
            AgroZen Care PLC
          </h3>

          <p className="mt-8 max-w-2xl text-white/50 text-lg font-light leading-relaxed">
            A cinematic convergence of agriculture, hospitality,
            sustainability, and cultural heritage.
          </p>
        </div>
      </footer>
    </main>
  );
}