"use client";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 py-2 px-2">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm md:text-base"
            >
              Live link
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer text-sm md:text-base"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
