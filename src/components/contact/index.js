"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [showWeChatModal, setShowWeChatModal] = useState(false);

  const contactLinks = [
    {
      name: "GitHub",
      href: "https://github.com/SaebaRyoo",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "bg-[#333333] hover:bg-[#24292e]",
    },
    {
      name: "Email",
      href: "mailto:yuanddmail@gmail.com",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-[#EA4335] hover:bg-[#d33b2c]",
    },
    {
      name: "WeChat",
      href: "",
      isModal: true,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.162 4.203 2.969 5.563.303.227.453.59.393.955l-.481 2.898c-.073.437.405.776.802.569l3.417-1.777c.188-.098.411-.089.591-.03.615.205 1.268.314 1.936.314 4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342zm-.5 11.897c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1 1.1.493 1.1 1.1-.493 1.1-1.1 1.1zm3.44 0c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1 1.1.493 1.1 1.1-.493 1.1-1.1 1.1z" />
          <path d="M15.722 8.883c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1 1.1.493 1.1 1.1-.493 1.1-1.1 1.1zm3.44 0c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1 1.1.493 1.1 1.1-.493 1.1-1.1 1.1z" />
          <path d="M24 14.966c0-3.259-2.999-5.907-6.691-5.907-3.692 0-6.691 2.648-6.691 5.907 0 3.26 2.999 5.907 6.691 5.907.615 0 1.268-.109 1.936-.314.18-.059.403-.068.591.03l3.417 1.777c.397.207.875-.132.802-.569l-.481-2.898c-.06-.365.09-.728.393-.955C22.838 19.169 24 17.178 24 14.966z" />
        </svg>
      ),
      color: "bg-[#07C160] hover:bg-[#06ad56]",
    },
    // {
    //   name: "Instagram",
    //   href: "https://instagram.com/ryozhu",
    //   icon: (
    //     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    //     </svg>
    //   ),
    //   color:
    //     "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    // },
    // {
    //   name: "LinkedIn",
    //   href: "https://linkedin.com/in/ryozhu",
    //   icon: (
    //     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    //     </svg>
    //   ),
    //   color: "bg-[#0077B5] hover:bg-[#005885]",
    // },
  ];

  const handleContactClick = (link, e) => {
    if (link.isModal) {
      e.preventDefault();
      setShowWeChatModal(true);
    }
  };

  const closeWeChatModal = () => {
    setShowWeChatModal(false);
  };

  return (
    <section className="w-full bg-[#1a191d] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Let&apos;s Connect
        </h2>

        {/* Social Links Grid */}
        <div className="flex justify-center items-center gap-8 mb-16 max-w-2xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Email" ? "_self" : "_blank"}
              rel={link.name === "Email" ? "" : "noopener noreferrer"}
              onClick={(e) => handleContactClick(link, e)}
              className={`${link.color} w-20 h-20 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group cursor-pointer`}
              aria-label={link.name}
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-8"></div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Ryo Zhu <span className="text-purple-400">©2025</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      {showWeChatModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeWeChatModal}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-sm w-full mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeWeChatModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="关闭"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {/* QR Code Placeholder */}
              <div className="flex justify-center items-center">
                <Image
                  src="/wechat.jpeg"
                  alt="WeChat QR Code"
                  width={300}
                  height={300}
                />
              </div>

              <p className="text-gray-500 text-xs">微信号：wowzqy</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
