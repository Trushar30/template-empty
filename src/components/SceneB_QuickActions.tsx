import React from "react";
import { PulseButton, GlassCard, AnimatedText } from "./UIElements";
import {
  interpolateProgress,
  easeOutCubic,
  easeOutBack,
  getStaggerValue,
} from "./Animations";

interface SceneB_QuickActionsProps {
  frame: number;
  startFrame: number;
}

const quickActions = [
  { icon: "📝", label: "Create Class", color: "#7C3AED" },
  { icon: "👥", label: "Join Class", color: "#10B981" },
  { icon: "⚡", label: "Quick Note", color: "#F59E0B" },
  { icon: "🎮", label: "Start Quiz", color: "#EC4899" },
];

export const SceneB_QuickActions: React.FC<SceneB_QuickActionsProps> = ({
  frame,
  startFrame,
}) => {
  // FAB button animation
  const fabProgress = interpolateProgress(frame, startFrame, startFrame + 80);
  const fabScale = easeOutBack(fabProgress);
  const fabOpacity = easeOutCubic(fabProgress);

  // Menu slide-up animation
  const menuProgress = interpolateProgress(frame, startFrame + 60, startFrame + 180);
  const menuTranslateY = (1 - easeOutCubic(menuProgress)) * 300;
  const menuOpacity = easeOutCubic(menuProgress);

  // Individual action items stagger
  const itemsStartFrame = startFrame + 100;
  const staggeredItems = quickActions.map((_, index) => {
    const itemProgress = getStaggerValue(
      index,
      quickActions.length,
      interpolateProgress(frame, itemsStartFrame, itemsStartFrame + 200),
      0.08
    );
    return {
      opacity: easeOutCubic(itemProgress),
      translateX: (1 - easeOutCubic(itemProgress)) * 40,
      scale: 0.8 + itemProgress * 0.2,
    };
  });

  // Floating text animation
  const textProgress = interpolateProgress(frame, startFrame + 200, startFrame + 240);
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
        padding: "60px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow effect */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* FAB Button */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          opacity: fabOpacity,
          transform: `scale(${fabScale})`,
        }}
      >
        <PulseButton frame={frame} />
      </div>

      {/* Quick Actions Menu */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${menuTranslateY}px)`,
          opacity: menuOpacity,
          zIndex: 5,
        }}
      >
        {/* Menu container */}
        <GlassCard blur={30} opacity={0.08}>
          <div
            style={{
              padding: "24px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
              minWidth: "280px",
            }}
          >
            {quickActions.map((action, index) => (
              <div
                key={index}
                style={{
                  opacity: staggeredItems[index].opacity,
                  transform: `translateX(${staggeredItems[index].translateX}px) scale(${staggeredItems[index].scale})`,
                  transformOrigin: "center center",
                }}
              >
                <GlassCard blur={20} opacity={0.04}>
                  <div
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      minHeight: "100px",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 200ms",
                    }}
                  >
                    {/* Icon background gradient */}
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${action.color}, ${action.color}dd)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        boxShadow: `0 0 16px ${action.color}40`,
                        opacity: 0.8,
                      }}
                    >
                      {action.icon}
                    </div>

                    {/* Label */}
                    <div
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "13px",
                        fontWeight: "600",
                        fontFamily: "Space Grotesk, sans-serif",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {action.label}
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Text Callout */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "0",
          right: "0",
          textAlign: "center",
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "18px",
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: "600",
            letterSpacing: "-0.5px",
          }}
        >
          One Tap, Infinite Actions
        </div>
      </div>
    </div>
  );
};

export default SceneB_QuickActions;
