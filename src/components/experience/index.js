"use client";
import { useState } from "react";
import Image from "next/image";
import { experienceData } from "./data";

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="min-h-screen w-full bg-[#1a191d] text-white py-10 sm:py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-12 sm:mb-20">
          Professional Experience
        </h2>

        {/* 经验列表 */}
        <div className="space-y-4">
          {experienceData.map((item) => (
            <ExperienceItem
              key={item.id}
              item={item}
              isExpanded={expandedItem === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, isExpanded, onToggle }) {
  return (
    <div className="rounded-lg overflow-hidden transition-all duration-300">
      {/* 头部 - 始终可见 */}
      <button
        onClick={onToggle}
        className={`w-full px-6 sm:px-8 py-6 flex items-center justify-between transition-all duration-300 ${
          isExpanded
            ? "bg-gradient-to-r from-purple-600 to-purple-700"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 text-left">
          <h3 className="text-lg sm:text-xl font-semibold">
            {item.position} @ {item.company}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm sm:text-base text-gray-300 hidden sm:block">
            {item.duration}
          </span>
          <div className="flex-shrink-0">
            {isExpanded ? (
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
                  d="M20 12H4"
                />
              </svg>
            ) : (
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </div>
        </div>
      </button>

      {/* 移动端时间显示 */}
      {!isExpanded && (
        <div className="sm:hidden px-6 pb-2 bg-gray-800">
          <span className="text-sm text-gray-400">{item.duration}</span>
        </div>
      )}

      {/* 展开内容 */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-purple-700 to-purple-800 px-6 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Logo 区域 */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                {/* 如果你有实际的logo，可以使用Image组件 */}
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-sm">
                    {item.company.charAt(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="flex-1">
              {/* 位置和网站 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{item.location}</span>
                </div>

                {item.website && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-4 h-4"
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
                    <span className="text-sm">{item.website}</span>
                  </div>
                )}
              </div>

              {/* 描述 */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* 技术栈 */}
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-full transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
