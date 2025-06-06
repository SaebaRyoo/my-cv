"use client";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "Expertise",
    target: "expertise",
  },
  {
    label: "Projects",
    target: "projects",
  },
  {
    label: "Experience",
    target: "experience",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // 关闭移动端菜单
    setIsMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 left-0 w-full z-50 border-0"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="h-[14vh] px-4 md:pl-[4.4vh] md:pr-[4.4vh] flex items-center justify-between">
        <div
          aria-label="logo"
          className="hidden md:block text-[#66d9ed] text-[5vh] h-[10vh] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Ryo Zhu
        </div>

        <nav
          aria-label="navigation"
          className="hidden md:flex items-center gap-x-[1.6vh]"
        >
          <div aria-label="nav-container" className="h-full flex items-center">
            <ul className="flex items-center gap-x-[1.6vh]">
              {navItems.map((item) => (
                <li
                  className="relative px-[1.6vh] py-[0.8vh] text-white text-nowrap font-bold cursor-pointer hover:text-[#66d9ed] transition-colors"
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-gray-600">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.label} className="px-4 py-2">
                <button
                  className="block text-white font-bold hover:text-[#66d9ed] transition-colors w-full text-left"
                  onClick={() => scrollToSection(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
