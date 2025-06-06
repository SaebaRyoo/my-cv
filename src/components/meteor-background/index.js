"use client";
import { useRef, useEffect } from "react";

export default function MeteorBackground() {
  const canvasRef = useRef(null);
  const meteorsRef = useRef([]);
  const animationIdRef = useRef(null);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // 设置canvas尺寸
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 1000;
    };

    updateCanvasSize();

    const meteors = meteorsRef.current;

    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function createMeteor() {
      const meteor = {
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 2 + 2,
        alpha: Math.random() * (0.5 - 0.1) + 0.1,
        color: randomColor(),
      };
      meteors.push(meteor);
    }

    function updateMeteors() {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const meteor = meteors[i];
        meteor.y += meteor.speed;
        if (meteor.y > canvas.height) {
          meteors.splice(i, 1);
        }
      }
    }

    function drawMeteors() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      meteors.forEach((meteor) => {
        ctx.globalAlpha = meteor.alpha;
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x, meteor.y - meteor.length);
        ctx.strokeStyle = meteor.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ctx.restore();
    }

    function animate() {
      drawMeteors();
      updateMeteors();
      animationIdRef.current = requestAnimationFrame(animate);
    }

    // 启动动画
    intervalIdRef.current = setInterval(createMeteor, 100);
    animate();

    // 监听窗口大小变化
    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    // 清理函数
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
      meteorsRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-[-1]"
      style={{ height: "150vh" }}
    />
  );
}
