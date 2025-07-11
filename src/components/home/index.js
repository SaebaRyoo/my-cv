"use client";
import Image from "next/image";
import { animate, createScope, createSpring } from "animejs";
import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { MoveDown } from "lucide-react";
import "./index.css";

export default function Home() {
  const root = useRef(null);
  const scope = useRef(null);
  const t = useTranslations("HomeSection");

  useEffect(() => {
    // 确保 root.current 存在后再创建 scope
    if (root.current) {
      scope.current = createScope({ root: root.current }).add((self) => {
        // Every anime.js instances declared here are now scopped to <div ref={root}>

        // Created a bounce animation loop for the name text
        animate(".scroll-down", {
          scale: [
            { to: 1.25, ease: "inOut(3)", duration: 200 },
            { to: 1, ease: createSpring({ stiffness: 300 }) },
          ],
          loop: true,
          loopDelay: 250,
        });
      });
    }

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, []);

  const scrollOneScreen = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={root}
      className="h-[86vh] w-full flex flex-col items-center justify-center relative px-4"
    >
      <div
        aria-label="description"
        className="flex flex-col items-center justify-center translate-y-[-14vh] text-white text-center"
      >
        <div className="logo font-bold text-4xl sm:text-6xl md:text-8xl lg:text-[10vh] animate-slide-in-left">
          {t("greeting")}
        </div>
        <div className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-[5vh] animate-slide-in-right mt-2">
          {t("subtitle")}
        </div>
      </div>

      <div
        aria-label="scroll-down"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:cursor-pointer flex items-center justify-center group"
        onClick={scrollOneScreen}
      >
        <a className="btn-wrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <MoveDown size={32} />
        </a>
      </div>
    </section>
  );
}
