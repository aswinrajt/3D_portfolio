import React, { useEffect } from "react";

const SparkleEffect = () => {
  useEffect(() => {
    const colors = [""];

    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
      sparkle.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.91 19L12 15.77L8.09 19L9.5 13.14L5 9.27L10.91 8.26L12 2Z"/>
        </svg>
      `;
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 800);
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default SparkleEffect;
