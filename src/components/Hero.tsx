"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiChakraui,
  SiAngular,
  SiGraphql,
  SiVuedotjs,
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const skillsData = [
    {
      name: "React",
      icon: <FaReact className="text-5xl text-blue-400" />,
      level: "Advanced",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-5xl text-gray-300" />,
      level: "Advanced",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-5xl text-blue-400" />,
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-teal-400" />,
      level: "Advanced",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl text-green-400" />,
      level: "Intermediate",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-5xl text-orange-400" />,
      level: "Advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3 className="text-5xl text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="text-5xl text-teal-300" />,
      level: "Advanced",
    },
    {
      name: "Angular",
      icon: <SiAngular className="text-5xl text-red-500" />,
      level: "Intermediate",
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs className="text-5xl text-green-500" />,
      level: "Intermediate",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-5xl text-pink-500" />,
      level: "Intermediate",
    },
    {
      name: "Python",
      icon: <FaPython className="text-5xl text-yellow-500" />,
      level: "Intermediate",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Text Section */}
        <div className="flex flex-col gap-4 md:gap-8">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating Bold & Impactful Web Solutions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With over 6 years of experience in web development, I specialize in
            building scalable, user-friendly applications. My expertise spans
            across modern frontend frameworks and backend technologies.
          </motion.p>
          <motion.div
            className="grid grid-cols-4 gap-4 mt-4"
            variants={containerVariants}
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                {skill.icon}
                <span className="mt-2 text-sm text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative rounded-lg overflow-hidden shadow-lg h-[40rem]">
          <motion.div
            className=" bg-gradient-to-b from-transparent "
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.img
            src="/developer-hero.jpg"
            alt="Web developer at work"
            className="min-w-full object-cover   "
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className=" flex  mt-6 md:mt-12 flex-col md:flex-row gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <button
          onClick={() =>
            document
              .getElementById("portfolio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-white transition-all shadow-md hover:shadow-lg"
        >
          Explore My Portfolio
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border-2 border-teal-400 hover:bg-teal-400 px-8 py-3 rounded-full font-semibold text-teal-400 hover:text-white transition-all shadow-md hover:shadow-lg"
        >
          Get In Touch
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
