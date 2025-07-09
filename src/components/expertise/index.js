"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useExpertiseData } from "@/utils/expertiseData";

export default function Expertise() {
  const t = useTranslations("ExpertiseSection");
  const expertiseData = useExpertiseData();

  return (
    <section className="min-h-screen w-full text-white py-10 sm:py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-8 sm:mb-16">
          {t("title")}
        </h2>

        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {expertiseData.map((item) => (
              <div key={item.id} className="w-full">
                <div
                  className={`flex flex-col h-full border-solid border-[#a3a3a3] ${item.borderClass} p-6 sm:p-10`}
                >
                  <div
                    aria-label="headline"
                    className="flex justify-start items-start"
                  >
                    <Image
                      src={item.icon}
                      alt={item.iconAlt}
                      width={42}
                      height={42}
                      className="flex-shrink-0"
                    />
                    <h5 className="text-xl sm:text-2xl font-bold text-white ml-4 sm:ml-8">
                      <span className={`${item.className} relative z-0`}>
                        {item.title}
                      </span>
                      <br />
                      {item.subtitle}
                    </h5>
                  </div>

                  <div className="expertise-description-container relative mt-4 flex-1">
                    <div className="expertise-label-line-wrapper relative">
                      <div className="expertise-description text-white font-normal font-sans pl-6 sm:pl-10 text-sm sm:text-base">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center">
          <div className="mt-[-50px] sm:mt-[-100px]">
            <Image
              className="opacity-20 w-full max-w-[320px] sm:max-w-[640px]"
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
