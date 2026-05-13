"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function ScrollStack({ children }: Props) {
  return <div className="relative flex flex-col items-center">{children}</div>;
}

export function ScrollStackItem({ 
  children, 
  index 
}: { 
  children: React.ReactNode; 
  index: number 
}) {
  const container = useRef(null);
  
  // স্ক্রল প্রগ্রেস ট্র্যাকিং
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });


  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - index * 0.05]);

  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-0 w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10% + ${index * 25}px)`, 
        }}
        className="w-full h-[70vh] md:h-[65vh] bg-white rounded-[10px] shadow-2xl overflow-hidden border border-black/5 origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
}