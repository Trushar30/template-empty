import React from "react";
import { easeOutCubic, easeOutBack, interpolateProgress } from "./Animations";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: number;
  opacity?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  blur = 20,
  opacity = 0.05,
}) => {
  return (
    <div
      className={className}
      style={{
        backdropFilter: `blur(${blur}px)`,
        background: `rgba(255, 255, 255, ${opacity})`,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "24px",
      }}
    >
      {children}
    </div>
  );
};

interface PulseButtonProps {
  frame: number;
  scale?: number;
  opacity?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const PulseButton: React.FC<PulseButtonProps> = ({
  frame,
  scale = 1,
  opacity = 1,
  children,
  onClick,
}) => {
  const pulseScale = 1 + 0.2 * Math.sin((frame / 30) * Math.PI * 2);
  const glowOpacity = 0.4 + 0.3 * Math.sin((frame / 30) * Math.PI * 2);

  return (
    <div style={{ position: "relative" }}>
      {/* Outer glow pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.6), transparent)",
          transform: `scale(${pulseScale})`,
          opacity: glowOpacity,
          filter: "blur(8px)",
        }}
      />

      {/* Button */}
      <button
        onClick={onClick}
        style={{
          position: "relative",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: `linear-gradient(135deg, #7C3AED, #9F67FF)`,
          border: "2px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${scale})`,
          opacity: opacity,
          boxShadow: "0 0 24px rgba(124, 58, 237, 0.6)",
          fontSize: "32px",
          color: "white",
        }}
      >
        {children || "+"}
      </button>
    </div>
  );
};

interface FloatingNavBarProps {
  frame: number;
  activeTab: number;
  onTabChange: (index: number) => void;
}

const tabs = [
  { icon: "📚", label: "Resources" },
  { icon: "👥", label: "Classes" },
  { icon: "⚡", label: "Create" },
  { icon: "🎮", label: "Play" },
];

export const FloatingNavBar: React.FC<FloatingNavBarProps> = ({
  frame,
  activeTab,
  onTabChange,
}) => {
  return (
    <GlassCard
      blur={30}
      opacity={0.08}
      className=""
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "350px",
        height: "70px",
        margin: "0 auto",
      } as React.CSSProperties}
    >
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        const hoverScale = isActive ? 1.1 : 1;
        const glowOpacity = isActive ? 0.6 : 0;

        return (
          <div key={index} style={{ position: "relative" }}>
            {/* Glow indicator */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.4), transparent)",
                borderRadius: "16px",
                opacity: glowOpacity,
              }}
            />

            {/* Tab button */}
            <button
              onClick={() => onTabChange(index)}
              style={{
                position: "relative",
                background: "transparent",
                border: "none",
                color: isActive ? "#9F67FF" : "rgba(255, 255, 255, 0.6)",
                fontSize: "24px",
                cursor: "pointer",
                transform: `scale(${hoverScale})`,
                transition: "all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {tab.icon}
            </button>
          </div>
        );
      })}
    </GlassCard>
  );
};

interface SceneProps {
  frame: number;
  durationInFrames: number;
  startFrame?: number;
}

interface AnimatedTextProps extends SceneProps {
  text: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  frame,
  startFrame = 0,
  text,
  delay = 0,
  duration = 30,
  style = {},
}) => {
  const progress = interpolateProgress(
    frame,
    startFrame + delay,
    startFrame + delay + duration
  );
  const eased = easeOutCubic(progress);

  return (
    <div
      style={{
        opacity: eased,
        transform: `translateY(${(1 - eased) * 20}px)`,
        ...style,
      }}
    >
      {text}
    </div>
  );
};

interface GradientIconProps {
  frame: number;
  size?: number;
  delay?: number;
  duration?: number;
}

export const GradientIcon: React.FC<GradientIconProps> = ({
  frame,
  size = 60,
  delay = 0,
  duration = 30,
}) => {
  const progress = interpolateProgress(frame, delay, delay + duration);
  const eased = easeOutBack(progress);

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "16px",
        background: `linear-gradient(135deg, #7C3AED, #9F67FF)`,
        opacity: eased,
        transform: `scale(${eased})`,
        boxShadow: "0 0 24px rgba(124, 58, 237, 0.6)",
      }}
    />
  );
};

export default {
  GlassCard,
  PulseButton,
  FloatingNavBar,
  AnimatedText,
  GradientIcon,
};
