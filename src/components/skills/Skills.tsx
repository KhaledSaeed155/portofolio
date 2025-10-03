"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  FileCode2,
  Atom,
  Layers,
  Palette,
  GitBranch,
  Boxes,
  Rocket,
  FolderGit2,
  Wrench,
  Database,
} from "lucide-react";
import Technology from "../Technology/Technology";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // تشغيل الأنيميشن لما الصفحة تتعمل لها Load
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const skills = [
    { name: "JavaScript", level: 90, icon: <Braces className="w-10 h-10 text-yellow-400" /> },
    { name: "TypeScript", level: 80, icon: <FileCode2 className="w-10 h-10 text-blue-400" /> },
    { name: "React", level: 85, icon: <Atom className="w-10 h-10 text-cyan-400" /> },
    { name: "Next.Js", level: 89, icon: <Layers className="w-10 h-10 text-gray-300" /> },
    { name: "Tailwind CSS", level: 90, icon: <Palette className="w-10 h-10 text-sky-400" /> },
    { name: "Bootstrap", level: 90, icon: <Boxes className="w-10 h-10 text-purple-400" /> },
    { name: "Git/GitHub", level: 80, icon: <GitBranch className="w-10 h-10 text-orange-400" /> },
    { name: "Framer Motion", level: 90, icon: <Rocket className="w-10 h-10 text-pink-400" /> },
    { name: "Postman", level: 85, icon: <Wrench className="w-10 h-10 text-amber-400" /> },
    { name: "TanStack Query", level: 90, icon: <Database className="w-10 h-10 text-green-400" /> },
    { name: "NPM", level: 85, icon: <FolderGit2 className="w-10 h-10 text-red-500" /> },
  ];

  return (
    <section className="w-full py-16" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-1">
          Skills
        </h2>
         <span className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full mb-5"></span>

        {/* Grid */}
                <motion.div
          className="card bg-black/50 shadow-xl rounded-2xl p-8 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
           
        >         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-cyan-900/10 backdrop-blur-md text-white p-6 rounded-2xl 
              shadow-2xl hover:shadow-[inset_0px_0px_30px_#0076b187] shadow-[inset_0px_0px_20px_#0076b187] transition-transform hover:scale-105 duration-500"
            >
              <div className="flex flex-col items-center gap-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm opacity-80">{skill.level}%</p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div> 
     
        <Technology/>
        
        
        </motion.div>

      </div>
    </section>
  );
}
