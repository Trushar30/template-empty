import React from "react";
import { GlassCard, AnimatedText } from "./UIElements";
import {
  interpolateProgress,
  easeOutCubic,
  easeOutBack,
  getStaggerValue,
} from "./Animations";

interface SceneD_CTAProps {
  frame: number;
  startFrame: number;
}

const features = [
  "✨ Intuitive Design",
  "⚡ Lightning Fast",
  "🔒 Secure & Private",
  "🤖 AI-Powered",
];

export const SceneD_CTA: React.FC<SceneD_CTAProps> = ({
  frame,
  startFrame,
}) => {
  // Background animation
  const bgProgress = interpolateProgress(frame, startFrame, startFrame + 60);
  const bgOpacity = easeOutCubic(bgProgress);

  // Logo/Title entrance
  const titleProgress = interpolateProgress(frame, startFrame + 40, startFrame + 120);
  const titleOpacity = easeOutCubic(titleProgress);
  const titleScale = easeOutBack(titleProgress);

  // Feature items stagger
  const featuresStartFrame = startFrame + 140;
  const staggeredFeatures = features.map((_, index) => {
    const featureProgress = getStaggerValue(
      index,
      features.length,
      interpolateProgress(frame, featuresStartFrame, featuresStartFrame + 240),
      0.08
    );
    return {
      opacity: easeOutCubic(featureProgress),
      translateY: (1 - easeOutCubic(featureProgress)) * 20,
    };
  });

  // CTA button animation
  const ctaProgress = interpolateProgress(frame, startFrame + 320, startFrame + 380);
  const ctaOpacity = easeOutCubic(ctaProgress);
  const ctaScale = easeOutBack(ctaProgress);

  // Final logo reveal and glow
  const finalLogoProgress = interpolateProgress(frame, startFrame + 380, startFrame + 420);
  const finalLogoOpacity = easeOutCubic(finalLogoProgress);
  const glowIntensity = 0.3 + 0.3 * Math.sin((frame / 15) * Math.PI);

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
        padding: "60px 40px",
        position: "relative",
        overflow: "hidden",
        opacity: bgOpacity,
      }}
    >
      {/* Animated background particles effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.3,
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "#7C3AED",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float 6s ease-in-out infinite`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          zIndex: 1,
        }}
      >
        {/* ExamSprint Logo */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            textAlign: "center",
          }}
        >
          {/* Logo icon */}
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #7C3AED, #9F67FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              marginBottom: "24px",
              boxShadow: `0 0 40px rgba(124, 58, 237, ${glowIntensity})`,
              margin: "0 auto 24px",
            }}
          >
            📚
          </div>

          {/* Logo text */}
          <h1
            style={{
              color: "rgba(255, 255, 255, 0.95)",
              fontSize: "48px",
              fontWeight: "800",
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "-1px",
              margin: "0 0 8px 0",
            }}
          >
            ExamSprint
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "16px",
              margin: "0",
            }}
          >
            Smart Learning, Faster Results
          </p>
        </div>

        {/* Features List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                opacity: staggeredFeatures[index].opacity,
                transform: `translateY(${staggeredFeatures[index].translateY}px)`,
              }}
            >
              <GlassCard blur={20} opacity={0.05}>
                <div
                  style={{
                    padding: "12px 24px",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "15px",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  {feature}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          style={{
            opacity: ctaOpacity,
            transform: `scale(${ctaScale})`,
          }}
        >
          <button
            style={{
              padding: "16px 48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7C3AED, #9F67FF)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "-0.3px",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)",
              transition: "all 200ms",
            }}
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Final ExamSprint Logo - Full Screen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: finalLogoOpacity,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(124, 58, 237, ${0.2 * finalLogoOpacity}), transparent)`,
            filter: "blur(60px)",
          }}
        />

        {/* Centered logo */}
        <div
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.1)",
            fontSize: "120px",
            fontWeight: "800",
            fontFamily: "Space Grotesk, sans-serif",
            letterSpacing: "-2px",
            opacity: finalLogoOpacity * 0.5,
          }}
        >
          ExamSprint
        </div>
      </div>
    </div>
  );
};

export default SceneD_CTA;
