import React, { useState } from "react";
import { GlassCard, FloatingNavBar, AnimatedText } from "./UIElements";
import { interpolateProgress, easeOutCubic, easeOutBack } from "./Animations";

interface SceneA_DashboardProps {
  frame: number;
  startFrame: number;
}

export const SceneA_Dashboard: React.FC<SceneA_DashboardProps> = ({
  frame,
  startFrame,
}) => {
  const sceneProgress = interpolateProgress(frame, startFrame, startFrame + 300);
  const [activeTab, setActiveTab] = useState(2);

  // Device boot-up effect
  const bootProgress = interpolateProgress(frame, startFrame, startFrame + 60);
  const bootOpacity = easeOutCubic(bootProgress);

  // Navigation fade-in
  const navProgress = interpolateProgress(frame, startFrame + 60, startFrame + 150);
  const navOpacity = easeOutCubic(navProgress);

  // Tab interaction timing
  const tabInteractionFrame = frame - (startFrame + 180);
  const shouldChangeTab = tabInteractionFrame > 0 && tabInteractionFrame % 120 < 30;

  if (shouldChangeTab && tabInteractionFrame % 120 === 0) {
    setActiveTab((prev) => (prev + 1) % 4);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0B0B14, #13132A)",
        padding: "60px 40px",
        opacity: bootOpacity,
      }}
    >
      {/* Device Mockup */}
      <div
        style={{
          position: "relative",
          width: "340px",
          height: "680px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          borderRadius: "60px",
          border: "12px solid rgba(30, 30, 50, 0.8)",
          boxShadow:
            "0 0 60px rgba(124, 58, 237, 0.3), 0 20px 40px rgba(0, 0, 0, 0.8)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Status Bar */}
        <div
          style={{
            height: "44px",
            background: "linear-gradient(180deg, rgba(20,20,35,1), rgba(20,20,35,0.9))",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "20px",
            color: "white",
            fontSize: "12px",
            opacity: navOpacity,
          }}
        >
          <div>9:41</div>
          <div style={{ letterSpacing: "2px" }}>●●●●●</div>
        </div>

        {/* Dashboard Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            overflow: "hidden",
            opacity: navOpacity,
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "28px",
                fontWeight: "700",
                fontFamily: "Space Grotesk, sans-serif",
                marginBottom: "8px",
              }}
            >
              ExamSprint
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "13px",
              }}
            >
              Your Study Hub
            </div>
          </div>

          {/* Quick Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {[0, 1].map((i) => (
              <div
                key={i}
                style={{
                  opacity: navOpacity,
                  transform: `translateY(${(1 - navOpacity) * 20}px)`,
                }}
              >
                <GlassCard blur={20} opacity={0.06}>
                  <div
                    style={{
                      padding: "16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #7C3AED, #9F67FF)"
                            : "linear-gradient(135deg, #10B981, #34D399)",
                        opacity: 0.7,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        {i === 0 ? "My Classes" : "Resources"}
                      </div>
                      <div
                        style={{
                          color: "rgba(255, 255, 255, 0.5)",
                          fontSize: "11px",
                        }}
                      >
                        {i === 0 ? "5 active" : "120 saved"}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Bar - Sticks to Bottom */}
        <div
          style={{
            padding: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            opacity: navOpacity,
            transform: `translateY(${(1 - navOpacity) * 30}px)`,
          }}
        >
          <FloatingNavBar frame={frame} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "0",
          right: "0",
          textAlign: "center",
        }}
      >
        <AnimatedText
          frame={frame}
          startFrame={startFrame + 240}
          text="Beautiful, Intuitive Interface"
          duration={40}
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "20px",
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: "600",
            letterSpacing: "-0.5px",
          }}
        />
      </div>
    </div>
  );
};

export default SceneA_Dashboard;
