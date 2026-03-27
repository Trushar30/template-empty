import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { GlassCard } from './UIElements';

interface SceneD_CTAProps {
  frame: number;
  startFrame: number;
}

const SceneD_CTA: React.FC<SceneD_CTAProps> = ({ frame, startFrame }) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 240));

  // Logo scale and fade
  const logoScale = interpolate(progress, [0, 0.2], [0.5, 1], {
    easing: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  });
  const logoOpacity = interpolate(progress, [0, 0.2], [0, 1]);
  const logoY = interpolate(progress, [0, 0.2], [60, 0]);

  // Subtitle animation
  const subtitleOpacity = interpolate(progress, [0.15, 0.35], [0, 1]);
  const subtitleY = interpolate(progress, [0.15, 0.35], [40, 0]);

  // Feature callouts stagger
  const feature1Progress = Math.max(0, Math.min(1, (progress - 0.35) / 0.12));
  const feature2Progress = Math.max(0, Math.min(1, (progress - 0.47) / 0.12));
  const feature3Progress = Math.max(0, Math.min(1, (progress - 0.59) / 0.12));

  const featureScale = (p: number) =>
    interpolate(p, [0, 1], [0.9, 1], {
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });

  const featureOpacity = (p: number) => interpolate(p, [0, 1], [0, 1]);
  const featureX = (p: number) => interpolate(p, [0, 1], [-40, 0]);

  // CTA button
  const ctaScale = interpolate(progress, [0.7, 0.85], [0, 1], {
    easing: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  });
  const ctaOpacity = interpolate(progress, [0.7, 0.85], [0, 1]);

  // Pulse animation for CTA
  const ctaPulse = interpolate(
    (frame - startFrame) % 60,
    [0, 60],
    [1, 1.05],
    { easing: (t) => Math.sin(t * Math.PI) }
  );

  // Background glow animation
  const bgGlowOpacity = interpolate(progress, [0, 1], [0.3, 0.8]);

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
      {/* Background gradient elements */}
      <div
        style={{
          position: 'absolute',
          width: '1000px',
          height: '1000px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent)',
          filter: 'blur(120px)',
          top: '-300px',
          left: '-300px',
          pointerEvents: 'none',
          opacity: bgGlowOpacity * 0.6,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent)',
          filter: 'blur(100px)',
          bottom: '-200px',
          right: '-200px',
          pointerEvents: 'none',
          opacity: bgGlowOpacity * 0.4,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        {/* ExamSprint Logo */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale}) translateY(${logoY}px)`,
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              borderRadius: '20px',
              background:
                'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(159, 103, 255, 0.1))',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 32px rgba(124, 58, 237, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: '56px',
                fontWeight: 800,
                background:
                  'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '-1px',
              }}
            >
              ExamSprint
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              marginBottom: '12px',
              letterSpacing: '-0.5px',
            }}
          >
            Your Learning Hub, Reimagined
          </div>
          <div
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            Share resources, collaborate with peers, and unlock your full potential with AI-powered learning.
          </div>
        </div>

        {/* Feature callouts */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              opacity: featureOpacity(feature1Progress),
              transform: `scale(${featureScale(
                feature1Progress
              )}) translateX(${featureX(feature1Progress)}px)`,
              transformOrigin: 'left center',
            }}
          >
            <GlassCard
              blur={20}
              opacity={0.08}
              style={{
                padding: '16px 20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                background: 'rgba(124, 58, 237, 0.05)',
                borderColor: 'rgba(124, 58, 237, 0.3)',
              }}
            >
              <div style={{ fontSize: '20px' }}>⚡</div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 500,
                }}
              >
                Smart resource discovery with AI-powered search
              </div>
            </GlassCard>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              opacity: featureOpacity(feature2Progress),
              transform: `scale(${featureScale(
                feature2Progress
              )}) translateX(${featureX(feature2Progress)}px)`,
              transformOrigin: 'left center',
            }}
          >
            <GlassCard
              blur={20}
              opacity={0.08}
              style={{
                padding: '16px 20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                background: 'rgba(16, 185, 129, 0.05)',
                borderColor: 'rgba(16, 185, 129, 0.3)',
              }}
            >
              <div style={{ fontSize: '20px' }}>👥</div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 500,
                }}
              >
                Real-time collaboration with study groups
              </div>
            </GlassCard>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              opacity: featureOpacity(feature3Progress),
              transform: `scale(${featureScale(
                feature3Progress
              )}) translateX(${featureX(feature3Progress)}px)`,
              transformOrigin: 'left center',
            }}
          >
            <GlassCard
              blur={20}
              opacity={0.08}
              style={{
                padding: '16px 20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                background: 'rgba(124, 58, 237, 0.05)',
                borderColor: 'rgba(124, 58, 237, 0.3)',
              }}
            >
              <div style={{ fontSize: '20px' }}>✨</div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 500,
                }}
              >
                Personalized study plans powered by AI
              </div>
            </GlassCard>
          </div>
        </div>

        {/* CTA Button */}
        <div
          style={{
            opacity: ctaOpacity,
            transform: `scale(${ctaScale * ctaPulse})`,
            transformOrigin: 'center',
          }}
        >
          <button
            style={{
              padding: '16px 48px',
              borderRadius: '16px',
              border: 'none',
              background: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              cursor: 'pointer',
              boxShadow:
                '0 0 40px rgba(124, 58, 237, 0.6), 0 0 20px rgba(159, 103, 255, 0.4)',
              transition: 'all 200ms ease-out',
            }}
          >
            Join Beta
          </button>
        </div>

        {/* Divider line */}
        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(124, 58, 237, 0.3), transparent)',
            margin: '40px 0 0 0',
            opacity: ctaOpacity,
          }}
        />
      </div>

      {/* Animated corner accents */}
      {[
        { top: 0, left: 0, angle: 0 },
        { top: 0, right: 0, angle: 90 },
        { bottom: 0, right: 0, angle: 180 },
        { bottom: 0, left: 0, angle: 270 },
      ].map((corner, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            pointerEvents: 'none',
            ...corner,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '2px',
              height: '40px',
              background: `linear-gradient(${corner.angle}deg, rgba(124, 58, 237, 0.6), transparent)`,
              opacity: progress > 0.5 ? 0.6 : 0,
              ...(corner.top === 0 && corner.left === 0
                ? { top: 0, left: 0 }
                : corner.top === 0 && corner.right === 0
                  ? { top: 0, right: 0 }
                  : corner.bottom === 0 && corner.right === 0
                    ? { bottom: 0, right: 0 }
                    : { bottom: 0, left: 0 }),
            }}
          />
        </div>
      ))}

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const radius = 300 + Math.sin((frame + i * 50) / 100) * 60;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                background: 'rgba(124, 58, 237, 0.6)',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                boxShadow: '0 0 6px rgba(124, 58, 237, 0.8)',
                opacity: progress > 0.3 ? 0.7 : 0,
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export default SceneD_CTA;
