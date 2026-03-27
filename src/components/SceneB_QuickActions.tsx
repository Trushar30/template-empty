import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { PulseButton, GlassCard } from './UIElements';

interface SceneB_QuickActionsProps {
  frame: number;
  startFrame: number;
}

const SceneB_QuickActions: React.FC<SceneB_QuickActionsProps> = ({
  frame,
  startFrame,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 180));

  // FAB entrance
  const fabScale = interpolate(progress, [0, 0.2], [0, 1], {
    easing: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  });

  // FAB rotation on tap
  const fabRotation = interpolate(progress, [0.3, 0.5], [0, 45]);

  // Menu slide up
  const menuY = interpolate(progress, [0.4, 0.7], [200, 0]);
  const menuOpacity = interpolate(progress, [0.4, 0.7], [0, 1]);

  // Quick action items stagger
  const itemDelay = 0.05;
  const createItemProgress = Math.max(
    0,
    Math.min(1, (progress - 0.5) / 0.15)
  );
  const joinItemProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.15));

  const createScale = interpolate(createItemProgress, [0, 1], [0.8, 1], {
    easing: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  });
  const createOpacity = interpolate(createItemProgress, [0, 1], [0, 1]);
  const createY = interpolate(createItemProgress, [0, 1], [30, 0]);

  const joinScale = interpolate(joinItemProgress, [0, 1], [0.8, 1], {
    easing: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  });
  const joinOpacity = interpolate(joinItemProgress, [0, 1], [0, 1]);
  const joinY = interpolate(joinItemProgress, [0, 1], [30, 0]);

  // Backdrop blur reveal
  const backdropOpacity = interpolate(progress, [0.3, 0.5], [0, 0.6]);

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
      {/* Backdrop blur */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
          opacity: backdropOpacity,
        }}
      />

      {/* Glow rings around FAB */}
      {[...Array(2)].map((_, i) => {
        const ringScale = interpolate(
          (frame - startFrame) % 100,
          [0, 100],
          [1, 1.5],
          { easing: (t) => 1 - t * t }
        );
        const ringOpacity = interpolate(
          (frame - startFrame) % 100,
          [0, 50, 100],
          [1, 0.5, 0]
        );

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '2px solid rgba(124, 58, 237, 0.5)',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${ringScale})`,
              opacity: ringOpacity,
              pointerEvents: 'none',
              animation: `none`,
            }}
          />
        );
      })}

      {/* Central FAB Button */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%)`,
        }}
      >
        <PulseButton
          frame={frame}
          size={120}
          isActive={progress > 0.3}
          style={{
            transform: `scale(${fabScale}) rotate(${fabRotation}deg)`,
            filter:
              progress > 0.3
                ? 'drop-shadow(0 0 40px rgba(124, 58, 237, 0.8))'
                : 'drop-shadow(0 0 24px rgba(124, 58, 237, 0.6))',
          }}
        >
          <span style={{ fontSize: '48px', fontWeight: 300 }}>+</span>
        </PulseButton>
      </div>

      {/* Quick Actions Menu */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: '50%',
          transform: `translateX(-50%) translateY(${menuY}px)`,
          opacity: menuOpacity,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          maxWidth: '360px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        {/* Create Class Option */}
        <div
          style={{
            opacity: createOpacity,
            transform: `scale(${createScale}) translateY(${createY}px)`,
            transformOrigin: 'center',
          }}
        >
          <GlassCard
            blur={25}
            opacity={0.1}
            glow
            style={{
              padding: '18px 20px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 200ms ease-out',
              background: 'rgba(124, 58, 237, 0.08)',
              borderColor: 'rgba(124, 58, 237, 0.4)',
              boxShadow:
                '0 0 24px rgba(124, 58, 237, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #7C3AED, #9F67FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.6)',
              }}
            >
              ✏️
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  marginBottom: '4px',
                }}
              >
                Create Class
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                Start a new study group
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Join Class Option */}
        <div
          style={{
            opacity: joinOpacity,
            transform: `scale(${joinScale}) translateY(${joinY}px)`,
            transformOrigin: 'center',
          }}
        >
          <GlassCard
            blur={25}
            opacity={0.1}
            glow
            style={{
              padding: '18px 20px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 200ms ease-out',
              background: 'rgba(16, 185, 129, 0.08)',
              borderColor: 'rgba(16, 185, 129, 0.4)',
              boxShadow:
                '0 0 24px rgba(16, 185, 129, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #10B981, #34D399)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
              }}
            >
              🔗
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  marginBottom: '4px',
                }}
              >
                Join Class
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                Enter group code or search
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Floating light particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(4)].map((_, i) => {
          const angle = (i / 4) * Math.PI * 2;
          const distance = 150 + Math.sin((frame + i * 30) / 60) * 30;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(124, 58, 237, 0.8)',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                boxShadow: '0 0 12px rgba(124, 58, 237, 0.8)',
                opacity: progress > 0.3 ? 0.8 : 0,
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export default SceneB_QuickActions;
