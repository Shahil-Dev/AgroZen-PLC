"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { RiArrowRightLine, RiGoogleFill, RiLeafLine, RiHeartPulseLine, RiShieldUserLine } from "react-icons/ri";
import Link from "next/link";

export default function AgroZenLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen  z-10 md:pt-20  flex overflow-hidden bg-[#FDFCFB] font-sans">
      
      {/* LEFT SIDE - RESIDENT & FAMILY LOGIN */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 md:p-16 relative z-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[420px]"
        >
          {/* Brand Identity */}
          <div className="mb-10 text-center lg:text-left">
            
            <h1 className="text-4xl font-serif tracking-tight text-stone-900 mb-3">
              AgroZen <span className="italic text-emerald-600 font-light">Care</span>
            </h1>
            <p className="text-stone-500 font-light leading-relaxed">
              Welcome back to your sanctuary. Access your resident dashboard or manage care plans.
            </p>
          </div>

          <div className="space-y-6">
            <form className="space-y-5">
              {/* Email - High Precision Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 ml-1">Resident ID / Email</label>
                <div className="relative group">
                  <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-emerald-600 transition-colors" size={20} />
                  <input 
                    type="email" 
                    placeholder="yemtehan@agrozen.com"
                    className="w-full bg-stone-50/50 border border-stone-100 py-4 pl-12 pr-4 rounded-xl outline-none focus:border-emerald-500/30 focus:bg-white transition-all text-stone-800 placeholder:text-stone-300 font-light"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Security Key</label>
                  <Link href="#" className="text-[10px] font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-widest transition-all">Recover?</Link>
                </div>
                <div className="relative group">
                  <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-emerald-600 transition-colors" size={20} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full bg-stone-50/50 border border-stone-100 py-4 pl-12 pr-12 rounded-xl outline-none focus:border-emerald-500/30 focus:bg-white transition-all text-stone-800 font-light"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 hover:text-emerald-700 transition-colors"
                  >
                    {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Primary Action */}
              <motion.button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-emerald-950 text-white rounded-xl font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-950/20"
              >
                Enter Sanctuary
                <motion.div animate={{ x: isHovered ? 5 : 0 }}>
                  <RiArrowRightLine size={18} />
                </motion.div>
              </motion.button>
            </form>

            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-100"></div></div>
              <span className="relative bg-white px-4 text-[10px] text-stone-300 uppercase tracking-[0.3em] font-medium">Verified Access</span>
            </div>

            {/* Google Sign In - Clean & Minimal */}
            <button className="w-full flex items-center justify-center gap-3 py-4 border border-stone-100 rounded-xl hover:bg-stone-50 transition-all group">
              <RiGoogleFill size={20} className="text-stone-400 group-hover:text-emerald-600" />
              <span className="font-bold text-stone-600 text-[11px] uppercase tracking-wider">Connect with Google</span>
            </button>
          </div>

          <p className="text-center mt-10 text-stone-400 text-xs font-light">
            New to the community? 
            <Link href="#" className="text-emerald-700 font-bold ml-2 hover:underline underline-offset-8 transition-all uppercase tracking-tighter">Request Enrollment</Link>
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE - THE BRAND EXPERIENCE */}
      <div className="hidden lg:flex w-[55%] relative items-center justify-center bg-[#052E26] overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
            alt="Nature Healthcare" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#052E26] via-transparent to-[#052E26]/40" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 px-16 max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="h-[1px] w-12 bg-emerald-500/50"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400">Institutional Excellence</span>
            </div>

            <h2 className="text-6xl font-serif leading-[1.1] mb-8">
              Where <span className="italic text-emerald-400">Dignity</span> <br /> 
              Meets the <br /> 
              Touch of Nature.
            </h2>

            <p className="text-emerald-100/70 font-light text-lg leading-relaxed mb-12 max-w-md">
              A Public Limited Company dedicated to creating the world's most tranquil senior care ecosystem. 
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <RiHeartPulseLine size={28} className="text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Global Standard</h4>
                  <p className="text-xs text-emerald-100/40 font-light italic">Medical facilities integrated with 5-star hospitality.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RiShieldUserLine size={28} className="text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Total Security</h4>
                  <p className="text-xs text-emerald-100/40 font-light italic">State-of-the-art protection for our residents and data.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle Bottom Credit */}
        <div className="absolute bottom-8 right-8">
           <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-light">AgroZen Care PLC &copy; 2026</p>
        </div>
      </div>
    </div>
  );
}