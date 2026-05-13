"use client";

import React from 'react';

const testimonials = [
  {
    name: "Arifur Rahman",
    role: "Nature Enthusiast",
    text: "AgroZen Care provides the perfect escape from city life. Their sustainable approach is truly inspiring.",
    image: "https://i.pravatar.cc/150?u=arif"
  },
  {
    name: "Sarah Jenkins",
    role: "Agro-Tourist",
    text: "The vegetable farming experience was educational and refreshing. Highly recommended for families!",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Tanvir Ahmed",
    role: "Local Investor",
    text: "A masterpiece of modern agriculture in Bangladesh. The quality of their organic produce is unmatched.",
    image: "https://i.pravatar.cc/150?u=tanvir"
  },
  {
    name: "Elena Rodriguez",
    role: "Environmentalist",
    text: "The way they manage their livestock and dairy is an example of ethical farming at its best.",
    image: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Kabir Hossain",
    role: "Student",
    text: "Their agricultural training modules are very practical. I learned a lot about soil health.",
    image: "https://i.pravatar.cc/150?u=kabir"
  },
  {
    name: "Sonia Mirza",
    role: "Wellness Coach",
    text: "The shaded parks are incredibly peaceful. It's the best place for mindfulness and meditation.",
    image: "https://i.pravatar.cc/150?u=sonia"
  },
  {
    name: "Michael Scott",
    role: "Food Critic",
    text: "Farm-to-table has a new meaning here. Everything tastes so fresh and full of nutrients.",
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Nusrat Jahan",
    role: "Photographer",
    text: "The landscaped gardens are a visual treat. Every corner is designed with so much care.",
    image: "https://i.pravatar.cc/150?u=nusrat"
  },
  {
    name: "David Miller",
    role: "Tourist",
    text: "Excellent hospitality and a unique learning experience about Bangladesh's agriculture.",
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Zayan Khan",
    role: "Organic Advocate",
    text: "AgroZen is leading the way for a greener future. Truly impressed by their vision.",
    image: "https://i.pravatar.cc/150?u=zayan"
  }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[380px] mx-4 p-8 bg-white rounded-[24px] border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative w-16 h-16 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full rounded-full object-cover border-2 border-emerald-100"
        />
      </div>
      <div>
        <h4 className="font-bold text-stone-900 text-base tracking-tight leading-none mb-1">{item.name}</h4>
        <p className="text-emerald-700 text-[10px] uppercase tracking-[0.2em] font-bold">{item.role}</p>
      </div>
    </div>
    <p className="text-stone-500 font-light leading-relaxed italic whitespace-normal">
      "{item.text}"
    </p>
  </div>
);

export default function Testimonials() {
  return (
    <section className="bg-[#FAF9F6] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
        <p className="uppercase tracking-[0.4em] text-xs font-bold text-emerald-800 mb-6">
          Voices of AgroZen
        </p>
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#0F1715]">
          Community <span className="italic font-serif text-emerald-900">Feedback</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
       
        <div className="animate-marquee flex whitespace-nowrap items-stretch py-4">
          {/* First set */}
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
          {/* Duplicate set for infinite loop */}
          {testimonials.map((item, index) => (
            <TestimonialCard key={`dup-${index}`} item={item} />
          ))}
        </div>

    
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10"></div>
      </div>
    </section>
  );
}