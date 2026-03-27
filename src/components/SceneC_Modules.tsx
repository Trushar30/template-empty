import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';

interface SceneC_ModulesProps {
  frame: number;
  startFrame: number;
}

const SceneC_Modules: React.FC<SceneC_ModulesProps> = ({
  frame,
  startFrame,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 240));

  // Title fade in
  const titleOpacity = interpolate(progress, [0, 0.2], [0, 1]);
  const titleScale = interpolate(progress, [0, 0.2], [0.9, 1]);

  // Card stagger
  const card1Progress = Math.max(0, Math.min(1, (progress - 0.25) / 0.18));
  const card2Progress = Math.max(0, Math.min(1, (progress - 0.4) / 0.18));
  const card3Progress = Math.max(0, Math.min(1, (progress - 0.55) / 0.18));

  const getCardStyle = (cardProgress: number) => ({
    transform: `translateY(${interpolate(cardProgress, [0, 1], [50, 0])}px) scale(${interpolate(cardProgress, [0, 1], [0.85, 1])})`,
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
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent)',
          filter: 'blur(100px)',
          top: '-300px',
          left: '-200px',
          pointerEvents: 'none',
        }}
      />

      {/* Title Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-1px',
            margin: '0 0 12px 0',
          }}
        >
          Core Features
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: 'Inter, sans-serif',
            margin: 0,
          }}
        >
          Everything you need to excel
        </p>
      </div>

      {/* Features Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          maxWidth: '1000px',
          zIndex: 10,
        }}
      >
        {/* Card 1 - Resource Hub */}
        <div
          style={{
            padding: '40px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)',
            ...getCardStyle(card1Progress),
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📚</div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              margin: '0 0 12px 0',
            }}
          >
            Resource Hub
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: '0 0 16px 0',
              lineHeight: 1.6,
            }}
          >
            Curated study materials from top students
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                color: '#9F67FF',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Notes
            </span>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                color: '#9F67FF',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              PYQs
            </span>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                color: '#9F67FF',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Books
            </span>
          </div>
        </div>

        {/* Card 2 - Study Groups */}
        <div
          style={{
            padding: '40px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)',
            ...getCardStyle(card2Progress),
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>👥</div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              margin: '0 0 12px 0',
            }}
          >
            Study Groups
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: '0 0 16px 0',
              lineHeight: 1.6,
            }}
          >
            Learn with peers in interactive sessions
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: '#34D399',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Collaborate
            </span>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: '#34D399',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Share
            </span>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: '#34D399',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Discuss
            </span>
          </div>
        </div>

        {/* Card 3 - AI Playground */}
        <div
          style={{
            padding: '40px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)',
            ...getCardStyle(card3Progress),
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
              margin: '0 0 12px 0',
            }}
          >
            AI Playground
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: '0 0 16px 0',
              lineHeight: 1.6,
            }}
          >
            Smart learning with personalized paths
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                color: '#9F67FF',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Smart
            </span>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                color: '#9F67FF',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Adaptive
            </span>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                color: '#9F67FF',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Quick
            </span>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: '#7C3AED',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.abs(Math.sin((frame + i * 40) / 80)) * 0.3,
            boxShadow: '0 0 6px rgba(124, 58, 237, 0.6)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export default SceneC_Modules;
