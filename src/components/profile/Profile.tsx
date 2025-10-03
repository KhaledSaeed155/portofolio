"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {ReactTyped, Typed} from "react-typed";
import React from "react";
import { FaWhatsapp, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Circle } from 'lucide-react';

export default function Profile() {
  return (
    <div className="w-full max-w-4xl my-auto mx-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="card bg-blue-200/10 backdrop-blur-[2px] shadow-xl rounded-2xl overflow-hidden relative"
      >
        {/* Badge */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute top-3 left-6"
        >
          <span className="badge bg-gray-800/90 backdrop-blur-md border-[#0076b187] text-xs px-5 py-5 hover:shadow-[inset_0px_0px_25px_#0076b187] shadow-[inset_0px_0px_10px_#0076b187] font-bold text-white">
          <Circle size={15} className="me-1 text-green-300 " fill=" rgb(2, 255, 44)" /> Open for Projects
          </span>
        </motion.div>

        {/* Profile Image */}
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
            className="relative w-92 h-92 rounded-full overflow-hidden ring-4 ring-cyan-500 shadow-lg"
          >
            <Image
              src="/khaled.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Card Body */}
        <div className="card-body text-center text-white">
          {/* Animated Name */}
          <motion.h2
            className="card-title text-2xl font-bold text-center mx-auto text-3xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Khaled Saeed
          </motion.h2>

          {/* Typing Animation for Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg font-semibold text-cyan-400"
          >
            <ReactTyped
              strings={["Frontend Developer", "Software Engineer"]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </motion.div>

          {/* Paragraph (appears after typing) */}
          <motion.p
            className="text-sm opacity-80 mt-3 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            Passionate about building modern, responsive web applications with a
            focus on React & Next.js, delivering clean code and great user
            experiences.
          </motion.p>

          {/* Button */}
          <motion.div
            className="card-actions justify-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 0.8 }}
          >
            <div className="flex gap-3">  </div>
            <Link href="mailto:khaledbeboo155@gmail.com"> <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #06b6d4" }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 rounded-full shadow-md border-0"
            >
              Hire Me
            </motion.button></Link>
            <Link href="/Khaled_Saeed_Frontend_CV.pdf" download>
  <motion.button
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #06b6d4" }}
    whileTap={{ scale: 0.95 }}
    className="btn bg-gradient-to-r from-green-500 to-cyan-500 text-white px-3 translate-x-[-4px] rounded-full shadow-md ml-3 border-0"
  >
    Download CV
  </motion.button>
</Link>
           
          </motion.div>


          <div className="socialLinks flex justify-center mt-4 gap-4">
  <Link href="https://wa.me/201205951536" target="_blank">
    <FaWhatsapp size={28} className="text-green-400 hover:scale-110 transition" />
  </Link>
  <Link href="https://www.linkedin.com/in/khaled-saeed-34ba4723b/" target="_blank">
    <FaLinkedin size={28} className="text-blue-500 hover:scale-110 transition" />
  </Link>
  <Link href="https://github.com/KhaledSaeed155" target="_blank">
    <FaGithub size={28} className="hover:scale-110 transition" />
  </Link>
</div>

          

        </div>
      </motion.div>
    </div>
  );
}
