"use client";

import { motion, Variants } from "framer-motion";

export default function Technology() {
  const Tech = [
    { name: "React Router" },
    { name: "React Hooks" },
    { name: "Context API" },
    { name: "SSR" },
    { name: "SSG" },
    { name: "Middleware" },
    { name: "Flexbox" },
    { name: "Grid" },
    { name: "Media Queries" },
    { name: "Zod" },
    { name: "Axios" },
    { name: "Fetch" },
    { name: "Responsive Design" },
    { name: "CSS Animations" },
    { name: "React Hook Form" },
  ];

  // Container Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between children
      },
    },
  };

  // Item Variants
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-16" id="technology">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
          Technologies
        </h2>
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full mb-8"></span>

        {/* Tech Grid with motion */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Tech.map((itemTech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-cyan-900/20 backdrop-blur-md text-white px-6 py-4 
              rounded-xl shadow-green-300/20 hover:shadow-xl hover:scale-105 
              transition-all duration-300 flex items-center justify-center font-medium"
            >
              {itemTech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
