import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiChakraui } from "react-icons/si";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = [
  { name: "React", icon: <FaReact className="text-5xl text-blue-400" />, level: "Advanced" },
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-gray-300" />, level: "Advanced" },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-400" />, level: "Intermediate" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-teal-400" />, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-400" />, level: "Intermediate" },
  { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-400" />, level: "Advanced" },
  { name: "CSS3", icon: <FaCss3 className="text-5xl text-blue-500" />, level: "Advanced" },
  { name: "Chakra UI", icon: <SiChakraui className="text-5xl text-teal-300" />, level: "Advanced" },
];

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

export default function SkillsAndAbout() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-12">
            <motion.div className="md:w-1/2" variants={itemVariants}>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 5 years of experience in web development, I specialize in building scalable,
                user-friendly applications. My expertise spans across modern frontend frameworks and
                backend technologies.
              </p>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition-all">
                Download Resume
              </button>
            </motion.div>
            <motion.div className="md:w-1/2 grid grid-cols-4 gap-4" variants={containerVariants}>
              {skillsData.map((skill, index) => (
                <motion.div key={index} className="flex flex-col items-center" variants={itemVariants}>
                  {skill.icon}
                  <span className="mt-2 text-sm text-gray-600">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="skills-section"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card>
                  <CardHeader className="flex flex-col items-center">
                    {skill.icon}
                    <CardTitle className="mt-4 text-center">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{skill.level}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
