"use client";

import React from "react";

export const InteractiveLight: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(120deg, rgba(120,119,198,0.18) 0%, rgba(180,99,255,0.12) 50%, rgba(108,99,255,0.18) 100%)",
          filter: "blur(60px)",
          opacity: 0.8,
          animation: "auroraWave 12s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes auroraWave {
          0% {
            transform: scale(1.1) translateY(-10px) skewY(-2deg);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2) translateY(10px) skewY(2deg);
            opacity: 1;
          }
          100% {
            transform: scale(1.1) translateY(-10px) skewY(-2deg);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveLight; 