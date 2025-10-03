"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-400" size={30} />,
      link: "https://wa.me/201205951536",
      text: "+20 1205951536",
    },
    {
      name: "Email",
      icon: <Mail className="text-cyan-400" size={28} />,
      link: "mailto:khaledbeboo155@gmail.com",
      text: "khaledbeboo155@gmail.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-300" size={30} />,
      link: "https://github.com/KhaledSaeed155",
      text: "github.com/KhaledSaeed155",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-400" size={30} />,
      link: "https://www.facebook.com/khaledbeboo155",
      text: "facebook.com/khaledbeboo155",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-blue-500" size={30} />,
      link: "https://www.linkedin.com/in/khaled-saeed-34ba4723b/",
      text: "linkedin.com/in/khaled-saeed-34ba4723b",
    },
  ];

  // animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-16" id="contact">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>
        <motion.span
          className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.span>

        {/* Animated cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{  amount: 0.2 }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="cursor-pointer flex items-center gap-4 p-5 
                bg-cyan-900/20 backdrop-blur-md text-white rounded-lg shadow-md 
                hover:shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              {contact.icon}
              <div className="text-left select-text">
                <h3 className="text-lg font-semibold">{contact.name}</h3>
                <p className="opacity-80">{contact.text}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
