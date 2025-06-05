"use client";
import React from "react";
import Image from "next/image";

export default function Expertise() {
  const expertiseData = [
    {
      icon: "💻",
      title: "Software",
      subtitle: "Development",
      description:
        "Experienced in developing both front back end technologies. Python, Ruby, JavaScript, TypeScript.",
    },
    {
      icon: "⚛️",
      title: "Frontend Dev",
      subtitle: "React, NextJS",
      description:
        "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    },
    {
      icon: "🎨",
      title: "Web Design",
      subtitle: "CSS3, Figma",
      description:
        "Skilled in creating and designing high-end visuals and animations with CSS3 and WebGL.",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#1a191d] text-white py-20 px-20">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-16">
          My Expertise
        </h2>

        <section className="w-full">
          <div className="flex items-stretch justify-center">
            {/* 前端 */}
            <div className="w-1/3">
              <div className="flex flex-col h-full border-solid border-[#a3a3a3] border-t-2 border-l-2 border-r-1 border-b-2 p-10">
                <div aria-label="headline" className="flex justify-start">
                  <Image
                    src="/icon-react.svg"
                    alt="icon-react"
                    width={42}
                    height={42}
                  />
                  <h5 className="text-2xl font-bold text-white ml-8">
                    <span className="expertise-frontend relative z-0">
                      Frontend Dev
                    </span>
                    <br />
                    React, NextJS
                  </h5>
                </div>

                <div className="expertise-description-container relative mt-4 flex-1">
                  <div className="expertise-description text-white font-normal font-sans pl-10">
                    Passionate about UI/UX. Over 5 years of development
                    experience in HTML, CSS, JS, React and NextJS frameworks.
                  </div>
                </div>
              </div>
            </div>
            {/* 后端 */}
            <div className="w-1/3">
              <div className="flex flex-col h-full border-solid border-[#a3a3a3] border-t-2 border-l-1 border-r-1 border-b-2 p-10">
                <div aria-label="headline" className="flex justify-start">
                  <Image
                    src="/icon-computer.svg"
                    alt="icon-computer"
                    width={42}
                    height={42}
                  />
                  <h5 className="text-2xl font-bold text-white ml-8">
                    <span className="expertise-backend-development relative z-0">
                      Software
                    </span>
                    <br />
                    Development
                  </h5>
                </div>

                <div className="expertise-description-container relative mt-4 flex-1">
                  <div className="expertise-description text-white font-normal font-sans pl-10">
                    Experienced in developing both front back end technologies.
                    Python, Ruby, JavaScript, TypeScript.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3">
              <div className="flex flex-col h-full border-solid border-[#a3a3a3] border-t-2 border-l-1 border-r-1 border-b-2 p-10">
                <div aria-label="headline" className="flex justify-start">
                  <Image
                    src="/icon-computer.svg"
                    alt="icon-computer"
                    width={42}
                    height={42}
                  />
                  <h5 className="text-2xl font-bold text-white ml-8">
                    <span className="expertise-cicd-development relative z-0">
                      Fullter Dev
                    </span>
                    <br />
                    Android, iOS
                  </h5>
                </div>

                <div className="expertise-description-container relative mt-4 flex-1">
                  <div className="expertise-description text-white font-normal font-sans pl-10">
                    Skilled in developing hybrid mobile apps and cross-platform
                    solutions using the Flutter framework.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <div className="mt-[-100px]">
            <Image
              className="opacity-20"
              src="/html-bg.png"
              alt=""
              width={640}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
