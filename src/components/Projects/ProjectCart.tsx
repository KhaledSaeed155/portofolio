"use client";

import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  img: string;
  link: string;
   github: string;
}

interface Props {
  project: Project;
  item: Variants;
}

export default function ProjectCart({ project, item }: Props) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.03, y: -5 }} // Smooth hover animation
      whileTap={{ scale: 0.98 }} // On click effect
      className="group relative overflow-hidden rounded-2xl 
      bg-cyan-900/30 backdrop-blur-xl border border-cyan-400/20 
      shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500"
    >
      {/* Image */}
      <figure className="overflow-hidden relative">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </figure>

      {/* Card Body */}
      <div className="p-6 relative z-10">
        <h2 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-green-400 transition-colors duration-300">
          {project.title}
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {project.desc}
        </p>
        <div className="flex justify-end">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-sm font-medium rounded-full 
              bg-gradient-to-r from-cyan-500 to-green-500 
              text-white shadow-md hover:shadow-lg transition-all"
            >
              Visit →
            </motion.button>
            
          </Link>
             <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-sm font-medium rounded-full 
              bg-gradient-to-r from-cyan-500 to-green-500 
              text-white shadow-md hover:shadow-lg transition-all"
            >
              github →
            </motion.button>
            
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
