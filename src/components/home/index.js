"use client";
import Image from "next/image";
import { animate, createScope, createSpring } from "animejs";
import { useRef, useEffect } from "react";

export default function Home() {
  const root = useRef(null);
  const scope = useRef(null);

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

  return (
    <section
      ref={root}
      className="h-[86vh] w-full flex flex-col items-center justify-center relative"
    >
      <div
        aria-label="description"
        className="flex flex-col items-center justify-center translate-y-[-14vh] text-white"
      >
        <div className="logo font-bold text-[10vh] animate-slide-in-left">
          Hi, I&apos;m Ryo Zhu
        </div>
        <div className="font-bold text-[5vh] animate-slide-in-right">
          Software Engineer & Front end Developer
        </div>
      </div>

      <div
        aria-label="scroll-down"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[10vh] h-[10vh] hover:cursor-pointer flex items-center justify-center"
      >
        <Image
          className="scroll-down"
          src="/scroll-down.svg"
          alt="scroll-down"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
