import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';

interface SceneB_QuickActionsProps {
  frame: number;
  startFrame: number;
}

const SceneB_QuickActions: React.FC<SceneB_QuickActionsProps> = ({
  frame,
  startFrame,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 180));

  // FAB button scale
  const fabScale = interpolate(progress, [0, 0.3], [0, 1], {
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  // FAB glow pulse
  const pulseRing = interpolate((frame % 100) / 100, [0, 1], [1, 1.4], {
    easing: (t) => Math.sin(t * Math.PI),
  });

  // Menu items fade in
  const item1Progress = Math.max(0, Math.min(1, (progress - 0.4) / 0.15));
  const item2Progress = Math.max(0, Math.min(1, (progress - 0.55) / 0.15));

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0B0B14 0%, #13132A 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent)',
          filter: 'blur(80px)',
          bottom: '-200px',
          right: '-150px',
          pointerEvents: 'none',
        }}
      />

      {/* Main FAB Button */}
      <div
        style={{
          position: 'relative',
          width: '140px',
          height: '140px',
          zIndex: 20,
        }}
      >
        {/* Pulse rings */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4), transparent)',
            transform: `scale(${pulseRing})`,
            opacity: 1 - (pulseRing - 1) * 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3), transparent)',
            transform: `scale(${interpolate((frame % 200) / 200, [0, 1], [1, 1.6], { easing: (t) => Math.sin(t * Math.PI) })})`,
            opacity: 0.6 - ((frame % 200) / 200) * 0.6,
          }}
        />

        {/* Main button */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
            boxShadow: '0 0 60px rgba(124, 58, 237, 0.8), 0 0 20px rgba(159, 103, 255, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${fabScale})`,
            fontSize: '56px',
            cursor: 'pointer',
          }}
        >
          +
        </div>
      </div>

      {/* Quick Action Items */}
      <div
        style={{
          position: 'absolute',
          bottom: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '32px',
          zIndex: 15,
        }}
      >
        {/* Create Class */}
        <div
          style={{
            opacity: interpolate(item1Progress, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(item1Progress, [0, 1], [60, 0])}px) scale(${interpolate(item1Progress, [0, 1], [0.8, 1])})`,
          }}
        >
          <div
            style={{
              padding: '24px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              textAlign: 'center',
              minWidth: '160px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📝</div>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif',
                margin: 0,
              }}
            >
              Create Class
            </p>
          </div>
        </div>

        {/* Join Class */}
        <div
          style={{
            opacity: interpolate(item2Progress, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(item2Progress, [0, 1], [60, 0])}px) scale(${interpolate(item2Progress, [0, 1], [0.8, 1])})`,
          }}
        >
          <div
            style={{
              padding: '24px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              textAlign: 'center',
              minWidth: '160px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔗</div>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif',
                margin: 0,
              }}
            >
              Join Class
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default SceneB_QuickActions;
