"use client";
import React from "react";
import { motion } from "framer-motion";


export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 p-5"
    >
      <div className="max-w-5xl mx-auto px-6 bg-blue-950/10 p-10">
        {/* Title with Typing Effect */}
       <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent text-center relative mb-8">
  About
  <span className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
</h2>


        {/* Animated Card */}
        <motion.div
          className="card bg-black/50 shadow-xl rounded-2xl p-8 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
           
        >
        <p className="text-base md:text-lg text-white leading-relaxed opacity-90">
  I’m <span className="font-semibold text-cyan-400">Khaled Saeed</span>, 
  a passionate <span className="text-cyan-400 font-semibold">Frontend Developer </span> 
  with a <span className="text-cyan-400 font-semibold">B.Sc. in Computer Science </span> 
  from the Faculty of Science, Alexandria University (GPA: 
  <span className="text-green-400 font-semibold"> 3.5</span>).
  <br />  
  I enjoy creating modern, responsive, and user-friendly web applications, writing clean code, 
  exploring new technologies, and continuously improving my skills to deliver impactful digital 
  experiences.
  <br /><br />
  I have also completed a certified <span className="text-cyan-400 font-semibold">Frontend Development course </span> 
  from <span className="text-green-400 font-semibold">Route Academy</span>, which strengthened my expertise 
  in React.js, Next.js, TypeScript, and Tailwind CSS.
  <br /><br />
  Outside of programming, I’m passionate about exploring emerging technologies, keeping up with 
  industry trends, and contributing to open-source projects. I also enjoy sharing knowledge with 
  fellow developers through discussions and collaborations. Always excited to embrace new challenges 
  and build projects that create meaningful impact.
</p>


          <p className="mt-6 text-base md:text-lg text-white leading-relaxed opacity-80">
            Outside of programming, I’m deeply passionate about exploring emerging technologies,
            keeping up with industry trends, and experimenting with innovative ideas. I actively
            contribute to <span className="text-cyan-400 font-semibold">open-source projects</span>, 
            which helps me sharpen my skills while giving back to the community. I also enjoy
            sharing knowledge with fellow developers through discussions and collaborations.  
            I’m always excited to take on new challenges, push my boundaries, and build projects
            that create meaningful impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
