import React from "react";
import { GlassCard, GradientIcon, AnimatedText } from "./UIElements";
import {
  interpolateProgress,
  easeOutCubic,
  easeOutQuad,
  getStaggerValue,
} from "./Animations";

interface SceneC_ModulesProps {
  frame: number;
  startFrame: number;
}

const modules = [
  {
    icon: "📚",
    title: "Resource Hub",
    description: "Access millions of study materials",
    gradient: "linear-gradient(135deg, #7C3AED, #9F67FF)",
  },
  {
    icon: "👥",
    title: "Study Groups",
    description: "Collaborate with peers in real-time",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
  },
  {
    icon: "⚡",
    title: "AI Playground",
    description: "Smart tutoring powered by AI",
    gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)",
  },
];

export const SceneC_Modules: React.FC<SceneC_ModulesProps> = ({
  frame,
  startFrame,
}) => {
  // Background fade-in
  const bgProgress = interpolateProgress(frame, startFrame, startFrame + 60);
  const bgOpacity = easeOutCubic(bgProgress);

  // Module cards stagger animation
  const cardsStartFrame = startFrame + 80;
  const staggeredCards = modules.map((_, index) => {
    const cardProgress = getStaggerValue(
      index,
      modules.length,
      interpolateProgress(frame, cardsStartFrame, cardsStartFrame + 240),
      0.06
    );
    return {
      opacity: easeOutCubic(cardProgress),
      scale: 0.9 + easeOutQuad(cardProgress) * 0.1,
      rotateY: (1 - easeOutCubic(cardProgress)) * 20,
    };
  });

  // Bottom text animation
  const textProgress = interpolateProgress(frame, startFrame + 280, startFrame + 330);
  const textOpacity = easeOutCubic(textProgress);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0B0B14, #13132A)",
        padding: "80px 40px",
        position: "relative",
        opacity: bgOpacity,
      }}
    >
      {/* Animated background grid effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.05) 25%, rgba(124, 58, 237, 0.05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.05) 75%, rgba(124, 58, 237, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.05) 25%, rgba(124, 58, 237, 0.05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.05) 75%, rgba(124, 58, 237, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Module Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "900px",
          width: "100%",
          perspective: "1200px",
          zIndex: 1,
        }}
      >
        {modules.map((module, index) => (
          <div
            key={index}
            style={{
              opacity: staggeredCards[index].opacity,
              transform: `scale(${staggeredCards[index].scale}) perspective(600px) rotateY(${staggeredCards[index].rotateY}deg)`,
              transformOrigin: "center center",
            }}
          >
            <GlassCard blur={25} opacity={0.06}>
              <div
                style={{
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  minHeight: "240px",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gradient overlay effect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "200px",
                    height: "200px",
                    background: `${module.gradient}`,
                    opacity: 0.1,
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />

                {/* Content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: module.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "32px",
                      marginBottom: "16px",
                      boxShadow: `0 0 24px ${module.gradient.split(",")[1].split(")")[0]}40`,
                    }}
                  >
                    {module.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      color: "rgba(255, 255, 255, 0.95)",
                      fontSize: "18px",
                      fontWeight: "700",
                      fontFamily: "Space Grotesk, sans-serif",
                      letterSpacing: "-0.5px",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "13px",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {module.description}
                  </p>
                </div>

                {/* Animated border glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${module.gradient.split(",")[1]} 0%, transparent 100%)`,
                    opacity: 0.1,
                    borderRadius: "24px",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      {/* Feature Callout Text */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "0",
          right: "0",
          textAlign: "center",
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "20px",
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: "600",
            letterSpacing: "-0.5px",
            textShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
          }}
        >
          Everything You Need to Excel
        </div>
      </div>
    </div>
  );
};

export default SceneC_Modules;
