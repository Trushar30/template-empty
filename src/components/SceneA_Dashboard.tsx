import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { DeviceMockup, FloatingNavBar, GlassCard } from './UIElements';

interface SceneA_DashboardProps {
  frame: number;
  startFrame: number;
}

const SceneA_Dashboard: React.FC<SceneA_DashboardProps> = ({
  frame,
  startFrame,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 300));

  // Boot up animation
  const bootOpacity = interpolate(progress, [0, 0.15, 1], [0, 0, 1]);
  const bootScale = interpolate(progress, [0, 0.15, 1], [1.2, 1.2, 1]);

  // Navigation bar slide up
  const navBarY = interpolate(progress, [0.4, 0.7], [200, 0]);
  const navBarOpacity = interpolate(progress, [0.4, 0.7], [0, 1]);

  // Dashboard content fade in
  const contentOpacity = interpolate(progress, [0.2, 0.5], [0, 1]);

  // Active tab cycling (every 1.5s = 90 frames)
  const cycleFrame = (frame - startFrame) % 90;
  const activeTab = Math.floor(((frame - startFrame) / 90) % 4);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0B0B14 0%, #13132A 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Ambient light effect */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent)',
          filter: 'blur(80px)',
          top: '-200px',
          left: '-200px',
          pointerEvents: 'none',
        }}
      />

      {/* Device mockup container */}
      <div
        style={{
          transform: `scale(${bootScale})`,
          opacity: bootOpacity,
          transformOrigin: 'center',
        }}
      >
        <DeviceMockup width={420} height={860}>
          {/* Screen background */}
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(180deg, #0F0F1E 0%, #1A1A3A 100%)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Top status bar */}
            <div
              style={{
                height: '40px',
                paddingTop: '12px',
                paddingBottom: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '20px',
                paddingRight: '20px',
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 500,
              }}
            >
              <span>9:41</span>
              <span>●●●●●</span>
            </div>

            {/* Dashboard header */}
            <div
              style={{
                opacity: contentOpacity,
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '20px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '-0.5px',
                  marginBottom: '8px',
                }}
              >
                Welcome to ExamSprint
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: 400,
                }}
              >
                Your learning hub, reimagined
              </div>
            </div>

            {/* Feature showcase cards */}
            <div
              style={{
                flex: 1,
                paddingLeft: '20px',
                paddingRight: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                opacity: contentOpacity,
                overflow: 'hidden',
              }}
            >
              {/* Resource card */}
              <GlassCard
                blur={25}
                opacity={0.1}
                style={{
                  padding: '16px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  minHeight: '80px',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(159, 103, 255, 0.2))',
                    borderRadius: '12px',
                    boxShadow: '0 0 16px rgba(124, 58, 237, 0.3)',
                  }}
                >
                  📚
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    Resource Hub
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    Find notes, PDFs & more
                  </div>
                </div>
              </GlassCard>

              {/* Classes card */}
              <GlassCard
                blur={25}
                opacity={0.1}
                style={{
                  padding: '16px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  minHeight: '80px',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2))',
                    borderRadius: '12px',
                    boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  👥
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    Study Groups
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    Join cohorts & collaborate
                  </div>
                </div>
              </GlassCard>

              {/* AI card */}
              <GlassCard
                blur={25}
                opacity={0.1}
                glow
                style={{
                  padding: '16px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  minHeight: '80px',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(159, 103, 255, 0.3))',
                    borderRadius: '12px',
                    boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
                  }}
                >
                  ✨
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    AI Playground
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    Smart learning powered by AI
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Floating Navigation Bar */}
            <div
              style={{
                position: 'relative',
                height: '100px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                transform: `translateY(${navBarY}px)`,
                opacity: navBarOpacity,
              }}
            >
              <FloatingNavBar activeTab={activeTab} frame={frame} />
            </div>
          </div>
        </DeviceMockup>
      </div>

      {/* Floating particles background */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              background: 'rgba(124, 58, 237, 0.6)',
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              opacity: Math.abs(Math.sin((frame + i * 30) / 60)) * 0.5,
              boxShadow: '0 0 8px rgba(124, 58, 237, 0.8)',
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export default SceneA_Dashboard;
