"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { useProjectData } from "@/utils/projectData";

// 滑动Gallery组件
function ImageGallery({ images, projectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("ProjectDetailPage");

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length <= 1) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{t("projectGallery")}</h2>
      <div className="relative">
        {/* 主图片容器 */}
        <div className="relative w-full">
          <div className="relative w-full h-0 pb-[60%] rounded-lg overflow-hidden bg-gray-800">
            <Image
              src={images[currentIndex]}
              alt={`${projectTitle} screenshot ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* 导航按钮 */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* 缩略图导航 */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 transition-colors ${
                  currentIndex === index
                    ? "border-[#66d9ed]"
                    : "border-gray-600 hover:border-gray-400"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* 指示器 */}
        {images.length > 1 && (
          <div className="flex justify-center gap-3 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-[#66d9ed]"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectPage({ params }) {
  const detailT = useTranslations("ProjectDetailPage");
  const projectData = useProjectData();
  const project = projectData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1a191d] text-white">
      {/* Header */}
      <div className="sticky top-0 bg-[#1a191d]/90 backdrop-blur-sm border-b border-gray-700 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-[#66d9ed] hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {detailT("backToProjects")}
          </Link>
          <span className="px-3 py-1 bg-[#66d9ed]/20 text-[#66d9ed] rounded text-sm">
            {project.projectType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="relative w-full mb-8 rounded-lg overflow-hidden">
          <div className="relative w-full h-0 pb-[40%] sm:pb-[35%]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain bg-gray-800"
              priority
            />
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {detailT("technologiesUsed")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 滑动Gallery */}
        <ImageGallery images={project.images} projectTitle={project.title} />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {project.link && project.link.trim() !== "" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-[#66d9ed] text-gray-900 rounded-lg font-semibold hover:bg-[#66d9ed]/90 transition-colors"
            >
              {detailT("viewLiveProject")}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {project.github && project.github.trim() !== "" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:border-[#66d9ed] hover:text-[#66d9ed] transition-colors"
            >
              {detailT("viewSourceCode")}
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {(!project.link || project.link.trim() === "") &&
            (!project.github || project.github.trim() === "") && (
              <div className="text-center py-4 text-gray-500">
                {project.noLinksText || detailT("noLinksText")}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
