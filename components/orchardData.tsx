"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
// import ScrollStack, { ScrollStackItem } from './ScrollStack';

const orchardItems = [
  {
    title: "Mango Grove",
    subtitle: "Summer Harvest",
    description:
      "Experience the golden essence of our heirloom mango varieties, ripened under the intense tropical sun.",
    image:
      "https://images.pexels.com/photos/30220865/pexels-photo-30220865.jpeg",
    theme: "bg-[#FFF9E5]",
  },
  {
    title: "Dragon Fruit",
    subtitle: "Monsoon Bloom",
    description:
      "Vibrant pink pitayas flourishing in the monsoon rain, offering a refreshing and exotic sensory journey.",
    image:
      "https://images.unsplash.com/photo-1772941003128-ced0278f0fb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERyYWdvbiUyMEZydWl0JTIwdHJlZXN8ZW58MHx8MHx8fDA%3D",
    theme: "bg-[#FFF0F5]",
  },
  {
    title: "Guava Fields",
    subtitle: "Year Round",
    description:
      "Emerald-green orchards providing crisp, organic guavas through every cycle of the moon.",
    image:
      "https://images.pexels.com/photos/36767508/pexels-photo-36767508.jpeg",
    theme: "bg-[#F4F9F1]",
  },
  {
    title: "Lemon Estate",
    subtitle: "Winter Citrus",
    description:
      "Zesty winter harvests from our citrus trails, perfect for revitalizing the soul and providing natural energy.",
    image: "https://images.pexels.com/photos/7518588/pexels-photo-7518588.jpeg",
    theme: "bg-[#FEFCE8]",
  },
];

const OrchardEcosystems = () => {
  return (
    <section id="orchards" className="bg-[#FAF9F6] py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-emerald-800 mb-6">
            The Seasonal Calendar
          </p>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-tight text-[#0F1715]">
            Orchard{" "}
            <span className="italic font-serif text-emerald-900">
              Ecosystems
            </span>
          </h2>
          <p className="mt-8 text-xl text-stone-500 font-light leading-relaxed">
            Discover the rhythmic cycles of nature. Each season brings a new
            harvest, blending traditional agro-wisdom with modern precision.
          </p>
        </div>

        {/* New Smooth ScrollStack */}
        <ScrollStack>
          {orchardItems.map((item, index) => (
            <ScrollStackItem key={index} index={index}>
              <div
                className={`flex flex-col md:flex-row h-full w-full ${item.theme}`}
              >
                <div className="flex-1 p-10 md:p-20 flex flex-col justify-center">
                  <span className="text-xs font-mono text-emerald-700 mb-4 tracking-[0.2em] uppercase">
                    {item.subtitle}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-lg font-light leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                  <div className="mt-10 h-px w-20 bg-stone-200" />
                </div>
                <div className="flex-1 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default OrchardEcosystems;
