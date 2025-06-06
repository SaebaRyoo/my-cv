"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectData, projectTypes } from "./data";

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((project) => project.projectType === activeFilter);

  return (
    <section className="min-h-screen w-full bg-[#1a191d] text-white py-10 sm:py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-8 sm:mb-16">
          My Projects
        </h2>

        {/* 过滤导航 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectTypes.map((type, index) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`relative px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-300 ${
                activeFilter === type
                  ? "text-[#66d9ed]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {type}
              <sup className="text-xs ml-1 opacity-60">
                {String(index + 1).padStart(2, "0")}
              </sup>
              {activeFilter === type && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#66d9ed]"></div>
              )}
            </button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Link href={`/project/${project.id}`} className="group block">
      <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-[#66d9ed]/50 transition-all duration-300 hover:transform hover:scale-105">
        {/* 项目图片 */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>

        {/* 项目信息 */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold group-hover:text-[#66d9ed] transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-xs px-2 py-1 bg-[#66d9ed]/20 text-[#66d9ed] rounded">
              {project.projectType}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* 技术栈 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-500">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* 链接 */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Click to view details</span>
            <svg
              className="w-5 h-5 text-[#66d9ed] transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
