"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Zap, Search, Layers, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    { name: "Responsive Websites", icon: Monitor },
    { name: "Custom Software", icon: Layers },
    { name: "High Performance", icon: Zap },
    { name: "SEO Friendly", icon: Search },
    { name: "SPA", icon: Code },
    { name: "Clean Code", icon: CheckCircle },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12" id="services">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center text-cyan-400 mb-3"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>
      <motion.span
        className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      ></motion.span>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34,211,238,0.5)" }}
              className="bg-cyan-900/20  border border-cyan-700/30 
                         text-white px-6 py-8 rounded-2xl shadow-lg transition-all 
                         flex flex-col items-center justify-center space-y-4"
            >
              {/* Icon with animation */}
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-4 rounded-full bg-cyan-800/30 shadow-md"
              >
                <Icon className="w-8 h-8 text-cyan-400" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
