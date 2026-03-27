import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';

interface SceneA_DashboardProps {
  frame: number;
  startFrame: number;
}

const SceneA_Dashboard: React.FC<SceneA_DashboardProps> = ({
  frame,
  startFrame,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 300));

  // Main opacity fade in
  const fadeOpacity = interpolate(progress, [0, 0.2], [0, 1]);

  // Title scale and opacity
  const titleScale = interpolate(progress, [0.15, 0.35], [0.8, 1], {
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  const titleOpacity = interpolate(progress, [0.15, 0.35], [0, 1]);

  // Content fade in
  const contentOpacity = interpolate(progress, [0.3, 0.5], [0, 1]);

  // Card stagger animations
  const card1Progress = Math.max(0, Math.min(1, (progress - 0.45) / 0.15));
  const card2Progress = Math.max(0, Math.min(1, (progress - 0.55) / 0.15));
  const card3Progress = Math.max(0, Math.min(1, (progress - 0.65) / 0.15));

  const getCardStyle = (cardProgress: number) => ({
    transform: `translateY(${interpolate(cardProgress, [0, 1], [40, 0])}px) scale(${interpolate(cardProgress, [0, 1], [0.9, 1])})`,
    opacity: interpolate(cardProgress, [0, 1], [0, 1]),
  });

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
        opacity: fadeOpacity,
      }}
    >
      {/* Animated background orb */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2), transparent)',
          filter: 'blur(100px)',
          top: '-200px',
          right: '-200px',
          pointerEvents: 'none',
        }}
      />

      {/* Title Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '80px',
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-2px',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ExamSprint
        </h1>
        <p
          style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            margin: 0,
          }}
        >
          Your Learning Hub, Reimagined
        </p>
      </div>

      {/* Features Grid */}
      <div
        style={{
          opacity: contentOpacity,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '600px',
          zIndex: 10,
        }}
      >
        {/* Feature 1 */}
        <div
          style={{
            padding: '32px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 32px rgba(124, 58, 237, 0.3)',
            ...getCardStyle(card1Progress),
          }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>📚</div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              marginBottom: '8px',
            }}
          >
            Resource Hub
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
            }}
          >
            Curated study materials and notes shared by students worldwide
          </p>
        </div>

        {/* Feature 2 */}
        <div
          style={{
            padding: '32px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 32px rgba(124, 58, 237, 0.3)',
            ...getCardStyle(card2Progress),
          }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>👥</div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              marginBottom: '8px',
            }}
          >
            Study Groups
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
            }}
          >
            Connect with peers, collaborate, and learn together in real-time
          </p>
        </div>

        {/* Feature 3 */}
        <div
          style={{
            padding: '32px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 32px rgba(124, 58, 237, 0.3)',
            ...getCardStyle(card3Progress),
          }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>✨</div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              marginBottom: '8px',
            }}
          >
            AI Playground
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
            }}
          >
            Smart study plans, mock tests, and personalized learning paths
          </p>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#7C3AED',
            left: `${20 + i * 25}%`,
            top: `${40 + i * 15}%`,
            opacity: Math.abs(Math.sin((frame + i * 60) / 120)) * 0.4,
            boxShadow: '0 0 8px rgba(124, 58, 237, 0.8)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export default SceneA_Dashboard;
