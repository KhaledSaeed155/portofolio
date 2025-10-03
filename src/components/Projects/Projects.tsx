"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import ProjectCart from "./ProjectCart";

export default function Projects() {
  const projects = [
    {
      title: "Social App",
      desc: "React Project",
      img: "/social.jpeg",
      link: "https://social-app-mocha-nine.vercel.app/",
      github:"https://github.com/KhaledSaeed155/social-app"
    },
    {
      title: "E-Commerce Website",
      desc: "Built with Next.js",
      img: "/ecomerce2.jpg",
      link: "https://e-commerce-delta-ruby-60.vercel.app/login",
       github:"https://github.com/KhaledSaeed155/E-commerce"
    },
    {
      title: "Weather Website",
      desc: "Native JS",
      img: "/weather.png",
      link: "https://weather-gray-xi.vercel.app/",
       github:"https://github.com/KhaledSaeed155/weather"
    },
    {
      title: "Bookmark",
      desc: "Native JS",
      img: "/bookmark.jpg",
      link: "https://bookmark-ojba.vercel.app/",
      github:"https://github.com/KhaledSaeed155/bookmark",
    }
  ];

  // container
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // item
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-1">
          Projects
        </h2>
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full mb-10"></span>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCart key={index} project={project} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
