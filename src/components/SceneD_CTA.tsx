import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';

interface SceneD_CTAProps {
  frame: number;
  startFrame: number;
}

const SceneD_CTA: React.FC<SceneD_CTAProps> = ({ frame, startFrame }) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 240));

  // Logo scale and opacity
  const logoScale = interpolate(progress, [0, 0.25], [0.5, 1], {
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  const logoOpacity = interpolate(progress, [0, 0.25], [0, 1]);

  // Main content fade in
  const contentOpacity = interpolate(progress, [0.15, 0.4], [0, 1]);

  // Feature items stagger
  const feature1Progress = Math.max(0, Math.min(1, (progress - 0.35) / 0.15));
  const feature2Progress = Math.max(0, Math.min(1, (progress - 0.45) / 0.15));
  const feature3Progress = Math.max(0, Math.min(1, (progress - 0.55) / 0.15));

  const getFeatureStyle = (featureProgress: number) => ({
    transform: `translateX(${interpolate(featureProgress, [0, 1], [-40, 0])}px) scale(${interpolate(featureProgress, [0, 1], [0.9, 1])})`,
    opacity: interpolate(featureProgress, [0, 1], [0, 1]),
  });

  // CTA button pulse
  const btnScale = interpolate(
    (frame % 80) / 80,
    [0, 0.5, 1],
    [1, 1.05, 1],
    { easing: (t) => Math.sin(t * Math.PI) }
  );

  // CTA button fade in
  const btnOpacity = interpolate(progress, [0.5, 0.7], [0, 1]);

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
      {/* Background orbs */}
      <div
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent)',
          filter: 'blur(100px)',
          top: '-300px',
          right: '-300px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08), transparent)',
          filter: 'blur(120px)',
          bottom: '-200px',
          left: '-200px',
          pointerEvents: 'none',
        }}
      />

      {/* Logo/Badge */}
      <div
        style={{
          marginBottom: '40px',
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          zIndex: 20,
        }}
      >
        <div
          style={{
            padding: '16px 24px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(124, 58, 237, 0.4)',
            boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '24px' }}>🚀</span>
          <span
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            ExamSprint
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
          opacity: contentOpacity,
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-1.5px',
            margin: '0 0 20px 0',
            maxWidth: '700px',
            lineHeight: 1.2,
          }}
        >
          Learning Reimagined
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: 'Inter, sans-serif',
            margin: '0 0 40px 0',
            maxWidth: '600px',
          }}
        >
          Join thousands of students revolutionizing how they study and collaborate
        </p>
      </div>

      {/* Feature Benefits */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '50px',
          justifyContent: 'center',
          zIndex: 10,
          flexWrap: 'wrap',
          maxWidth: '900px',
        }}
      >
        {/* Feature 1 */}
        <div style={getFeatureStyle(feature1Progress)}>
          <div
            style={{
              padding: '20px 24px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '240px',
            }}
          >
            <span style={{ fontSize: '28px' }}>📖</span>
            <div style={{ textAlign: 'left' }}>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  margin: 0,
                }}
              >
                Smart Discovery
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  margin: '4px 0 0 0',
                }}
              >
                Find best resources
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div style={getFeatureStyle(feature2Progress)}>
          <div
            style={{
              padding: '20px 24px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '240px',
            }}
          >
            <span style={{ fontSize: '28px' }}>🤝</span>
            <div style={{ textAlign: 'left' }}>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  margin: 0,
                }}
              >
                Real Collaboration
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  margin: '4px 0 0 0',
                }}
              >
                Study with peers
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div style={getFeatureStyle(feature3Progress)}>
          <div
            style={{
              padding: '20px 24px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '240px',
            }}
          >
            <span style={{ fontSize: '28px' }}>✨</span>
            <div style={{ textAlign: 'left' }}>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  margin: 0,
                }}
              >
                Personalized AI
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  margin: '4px 0 0 0',
                }}
              >
                Your learning path
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div
        style={{
          opacity: btnOpacity,
          transform: `scale(${btnScale})`,
          zIndex: 10,
        }}
      >
        <button
          style={{
            padding: '18px 48px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: 'Space Grotesk, sans-serif',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 60px rgba(124, 58, 237, 0.8), 0 12px 32px rgba(124, 58, 237, 0.4)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.5px',
          }}
        >
          Join Beta Now
        </button>
      </div>

      {/* Bottom divider */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          width: '120px',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #7C3AED, transparent)',
          opacity: contentOpacity,
          zIndex: 10,
        }}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: i % 2 === 0 ? '#7C3AED' : '#10B981',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.abs(Math.sin((frame + i * 50) / 100)) * 0.4,
            boxShadow: i % 2 === 0 ? '0 0 4px rgba(124, 58, 237, 0.6)' : '0 0 4px rgba(16, 185, 129, 0.6)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export default SceneD_CTA;
