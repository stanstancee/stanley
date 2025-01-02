import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiChakraui } from "react-icons/si";

export const skills = [
  { name: "React", icon: <FaReact className="text-5xl text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-gray-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-400" /> },
  { name: "CSS3", icon: <FaCss3 className="text-5xl text-blue-500" /> },
  { name: "Chakra UI", icon: <SiChakraui className="text-5xl text-teal-300" /> },
];
