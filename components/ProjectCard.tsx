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
    <div className="flex bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
    
      <div className="w-1/2 py-3 px-3">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer"
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
