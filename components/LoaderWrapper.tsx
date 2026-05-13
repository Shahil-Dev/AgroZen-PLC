"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <LoadingSpinner />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-full flex flex-col"
        >
          <Navbar />
          <div className="bg-[#DBE1DA] flex-grow">{children}</div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
