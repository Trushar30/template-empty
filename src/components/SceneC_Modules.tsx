import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { GlassCard, FeatureCard } from './UIElements';

interface SceneC_ModulesProps {
  frame: number;
  startFrame: number;
}

const SceneC_Modules: React.FC<SceneC_ModulesProps> = ({
  frame,
  startFrame,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 240));

  // Title reveal
  const titleOpacity = interpolate(progress, [0, 0.15], [0, 1]);
  const titleY = interpolate(progress, [0, 0.15], [40, 0]);

  // Content animation
  const contentOpacity = interpolate(progress, [0.2, 0.5], [0, 1]);

  // Card animations - staggered entrance
  const card1Progress = Math.max(0, Math.min(1, (progress - 0.3) / 0.15));
  const card2Progress = Math.max(0, Math.min(1, (progress - 0.45) / 0.15));
  const card3Progress = Math.max(0, Math.min(1, (progress - 0.6) / 0.15));

  const cardScale = (p: number) =>
    interpolate(p, [0, 1], [0.85, 1], {
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });

  const cardOpacity = (p: number) => interpolate(p, [0, 1], [0, 1]);
  const cardY = (p: number) => interpolate(p, [0, 1], [50, 0]);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0B0B14 0%, #13132A 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        overflow: 'hidden',
      }}
    >
      {/* Animated background gradients */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent)',
          filter: 'blur(100px)',
          top: '-300px',
          right: '-300px',
          pointerEvents: 'none',
          opacity: progress * 0.8,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.08), transparent)',
          filter: 'blur(80px)',
          bottom: '-200px',
          left: '-100px',
          pointerEvents: 'none',
          opacity: (1 - progress) * 0.6,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '1200px',
        }}
      >
        {/* Section title */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(124, 58, 237, 0.8)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '16px',
            }}
          >
            Core Features
          </div>
          <div
            style={{
              fontSize: '44px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-1px',
              lineHeight: '1.2',
            }}
          >
            Everything You Need to Excel
          </div>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '40px',
            opacity: contentOpacity,
          }}
        >
          {/* Resource Hub Card */}
          <div
            style={{
              opacity: cardOpacity(card1Progress),
              transform: `scale(${cardScale(
                card1Progress
              )}) translateY(${cardY(card1Progress)}px)`,
              transformOrigin: 'center bottom',
            }}
          >
            <GlassCard
              blur={25}
              opacity={0.08}
              glow
              style={{
                padding: '32px 24px',
                background: 'rgba(124, 58, 237, 0.05)',
                borderColor: 'rgba(124, 58, 237, 0.3)',
                boxShadow:
                  '0 0 32px rgba(124, 58, 237, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '8px',
                }}
              >
                📚
              </div>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Resource Hub
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  flex: 1,
                }}
              >
                Discover and share curated notes, PDFs, past year questions, and study materials organized by subject.
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: 'auto',
                }}
              >
                {['Notes', 'PYQs', 'Slides'].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11px',
                      padding: '6px 12px',
                      borderRadius: '12px',
                      background: 'rgba(124, 58, 237, 0.2)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Study Groups Card */}
          <div
            style={{
              opacity: cardOpacity(card2Progress),
              transform: `scale(${cardScale(
                card2Progress
              )}) translateY(${cardY(card2Progress)}px)`,
              transformOrigin: 'center bottom',
            }}
          >
            <GlassCard
              blur={25}
              opacity={0.08}
              glow
              style={{
                padding: '32px 24px',
                background: 'rgba(16, 185, 129, 0.05)',
                borderColor: 'rgba(16, 185, 129, 0.3)',
                boxShadow:
                  '0 0 32px rgba(16, 185, 129, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '8px',
                }}
              >
                👥
              </div>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Study Groups
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  flex: 1,
                }}
              >
                Join cohorts and collaborate with peers in real-time, share resources, and learn together effectively.
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: 'auto',
                }}
              >
                {['Collaborate', 'Share', 'Grow'].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11px',
                      padding: '6px 12px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* AI Playground Card */}
          <div
            style={{
              opacity: cardOpacity(card3Progress),
              transform: `scale(${cardScale(
                card3Progress
              )}) translateY(${cardY(card3Progress)}px)`,
              transformOrigin: 'center bottom',
            }}
          >
            <GlassCard
              blur={25}
              opacity={0.1}
              glow
              style={{
                padding: '32px 24px',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(159, 103, 255, 0.05))',
                borderColor: 'rgba(124, 58, 237, 0.4)',
                boxShadow:
                  '0 0 40px rgba(124, 58, 237, 0.4), 0 8px 32px rgba(0, 0, 0, 0.2)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* AI glow effect */}
              <div
                style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(124, 58, 237, 0.3), transparent)',
                  filter: 'blur(60px)',
                  top: '-50px',
                  right: '-50px',
                  opacity: Math.abs(Math.sin((frame + 30) / 80)) * 0.5 + 0.3,
                }}
              />

              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '8px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                ✨
              </div>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                AI Playground
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  flex: 1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Leverage AI-powered tools to generate summaries, practice questions, and personalized study plans.
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: 'auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {['Smart', 'Quick', 'Adaptive'].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11px',
                      padding: '6px 12px',
                      borderRadius: '12px',
                      background: 'rgba(124, 58, 237, 0.25)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Animated dots decoration */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 400 + Math.sin((frame + i * 40) / 120) * 50;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: 'rgba(124, 58, 237, 0.4)',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                boxShadow: '0 0 8px rgba(124, 58, 237, 0.6)',
                opacity: progress > 0.2 ? 0.6 : 0,
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export default SceneC_Modules;
