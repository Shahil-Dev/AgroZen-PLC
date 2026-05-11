"use client";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden font-sans bg-[#040D0B]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#040D0B] to-[#020504]" />

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[1px] border-dashed border-emerald-500/20 rounded-full"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 lg:inset-10"
          >
            <div className="w-full h-full border-t-[3px] border-l-[1px] border-emerald-400/40 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.1)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex items-center justify-center"
          >
            <motion.div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-150" />

              <motion.img
                src="image/high png agro.png"
                alt="AgroZen Logo"
                className="w-full h-full object-contain relative z-10"
                animate={{
                  filter: [
                    "brightness(1) saturate(1)",
                    "brightness(1.2) saturate(1.2)",
                    "brightness(1) saturate(1)",
                  ],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 lg:mt-0 flex flex-col items-center"
        >
          <span className="text-emerald-500/80 font-medium tracking-[0.8em] uppercase text-[10px] lg:text-[13px]">
            AgroZen Care PLC
          </span>

          <div className="mt-6 w-56 lg:w-80 h-[1px] bg-emerald-950 rounded-full relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 bottom-0 w-3/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
