"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingSection() {
  const [isOpen, setIsOpen] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <section id="booking" className="bg-[#F4F2EE] text-black py-32 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Branding & Info */}
        <div className="flex flex-col justify-between py-10">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="uppercase tracking-[0.4em] text-xs font-bold text-emerald-800 mb-6"
            >
              Contact & Reservations
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-light tracking-tighter leading-tight"
            >
              Start Your <br />
              <span className="italic font-serif text-emerald-900">Green Journey</span>
            </motion.h2>
            <p className="mt-8 text-xl text-stone-500 font-light leading-relaxed max-w-md">
              Plan your visit to AgroZen Care. Whether it's a farm tour, stay, or 
              consultation, we are ready to welcome you.
            </p>
          </div>

          <div className="mt-20 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-stone-400">Direct Inquiries</p>
            <p className="text-2xl font-light">hello@agrozen.care</p>
            <p className="text-2xl font-light">+880 1XXX-XXXXXX</p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 group-focus-within:text-emerald-700 transition-colors">
                Full Name
              </label>
              <input
                required
                placeholder="John Doe"
                className="w-full border-b border-stone-200 bg-transparent py-4 outline-none text-lg font-light focus:border-emerald-900 transition-all"
              />
            </div>

            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 group-focus-within:text-emerald-700 transition-colors">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full border-b border-stone-200 bg-transparent py-4 outline-none text-lg font-light focus:border-emerald-900 transition-all"
              />
            </div>

            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 group-focus-within:text-emerald-700 transition-colors">
                Preferred Package
              </label>
              <select className="w-full border-b border-stone-200 bg-transparent py-4 outline-none text-lg font-light focus:border-emerald-900 transition-all appearance-none cursor-pointer">
                <option>Farm Tour & Experience</option>
                <option>Agricultural Training</option>
                <option>Organic Bulk Order</option>
                <option>Consultancy</option>
              </select>
            </div>

            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 group-focus-within:text-emerald-700 transition-colors">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your ideal experience"
                className="w-full border-b border-stone-200 bg-transparent py-4 outline-none text-lg font-light focus:border-emerald-900 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-emerald-950 text-white rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </div>

      {/* --- Success/Coming Soon Modal --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[3rem] p-12 max-w-md w-full text-center shadow-2xl overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-5xl">📅</span>
              </div>

              <h3 className="text-3xl font-light mb-4 text-stone-900 italic serif">
                Booking Reservation
              </h3>
              <p className="text-stone-500 font-light leading-relaxed mb-10">
                Our automated booking engine is currently under maintenance. 
                But don't worry! Your interest has been noted. We are launching 
                our full digital concierge service very soon.
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-5 bg-stone-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-all"
              >
                Back to Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}