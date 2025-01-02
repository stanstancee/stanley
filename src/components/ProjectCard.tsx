import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col min-h-[300px]"> {/* Ensure minimum height */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-gray-200 mb-4">{project.description}</p>
        </div>

        {/* Content starting from the bottom */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
