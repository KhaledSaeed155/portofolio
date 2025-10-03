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
        <motion.h2
          className="text-3xl md:text-4xl mb-10 text-center font-bold bg-blue-200/10 backdrop-blur-[10px] shadow-xl rounded-2xl py-5 w-[50%] mx-auto mb-1"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technologies
        </motion.h2>
   
        

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
              className="bg-cyan-900/20 backdrop-blur-[5px] text-white px-6 py-4 
              rounded-xl shadow-[#0076b187]  hover:shadow-xl hover:scale-105 
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
