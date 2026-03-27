import React from 'react';
import { interpolate } from 'remotion';

// Premium Glass Card with dynamic glow
interface GlassCardProps {
  children: React.ReactNode;
  blur?: number;
  opacity?: number;
  glow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  blur = 20,
  opacity = 0.05,
  glow = false,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        boxShadow: glow
          ? '0 0 32px rgba(124, 58, 237, 0.5), 0 8px 32px rgba(0, 0, 0, 0.2)'
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Premium Glow Button with ripple effect
interface PulseButtonProps {
  frame: number;
  isActive?: boolean;
  size?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const PulseButton: React.FC<PulseButtonProps> = ({
  frame,
  isActive = false,
  size = 80,
  children,
  style = {},
}) => {
  const pulseScale = interpolate(
    (frame % 120) / 120,
    [0, 1],
    [1, 1.1],
    { easing: (t) => Math.sin(t * Math.PI) }
  );

  const pulseOpacity = interpolate(
    (frame % 120) / 120,
    [0, 1],
    [0.6, 0],
    { easing: (t) => 1 - t * t }
  );

  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      {/* Pulse ring */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.6), transparent)',
          opacity: pulseOpacity,
          transform: `scale(${pulseScale})`,
          pointerEvents: 'none',
        }}
      />

      {/* Main button */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
          boxShadow: isActive
            ? '0 0 40px rgba(124, 58, 237, 0.8), 0 0 20px rgba(159, 103, 255, 0.6)'
            : '0 0 24px rgba(124, 58, 237, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {children}
      </div>
    </div>
  );
};

// iPhone Mockup Frame
interface DeviceMockupProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  children,
  width = 400,
  height = 820,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        borderRadius: '56px',
        border: '14px solid #1a1a1a',
        overflow: 'hidden',
        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.8)',
        aspectRatio: '9 / 19.5',
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '140px',
          height: '28px',
          backgroundColor: '#000',
          borderRadius: '0 0 40px 40px',
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
};

// Floating Navigation Bar
interface NavBarProps {
  activeTab: number;
  frame: number;
}

export const FloatingNavBar: React.FC<NavBarProps> = ({
  activeTab,
  frame,
}) => {
  const tabs = [
    { icon: '🏠', label: 'Home' },
    { icon: '📚', label: 'Classes' },
    { icon: '✨', label: 'AI' },
    { icon: '👤', label: 'Profile' },
  ];

  return (
    <GlassCard
      blur={30}
      opacity={0.1}
      style={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        padding: '12px 16px',
        minWidth: '320px',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '32px',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {tabs.map((tab, idx) => {
          const isActive = idx === activeTab;
          const bounceScale = isActive
            ? interpolate((frame % 20) / 20, [0, 0.5, 1], [1, 1.15, 1], {
                easing: (t) =>
                  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
              })
            : 1;

          return (
            <div
              key={idx}
              style={{
                position: 'relative',
                transform: `scale(${bounceScale})`,
                transformOrigin: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  opacity: isActive ? 1 : 0.6,
                  textShadow: isActive
                    ? '0 0 16px rgba(124, 58, 237, 0.8)'
                    : 'none',
                }}
              >
                {tab.icon}
              </div>
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7C3AED, #9F67FF)',
                    boxShadow: '0 0 12px rgba(124, 58, 237, 0.8)',
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};

// Premium gradient text
interface GradientTextProps {
  children: string;
  from?: string;
  to?: string;
  size?: number;
  weight?: number;
  style?: React.CSSProperties;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  from = '#7C3AED',
  to = '#9F67FF',
  size = 48,
  weight = 700,
  style = {},
}) => {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: weight,
        background: `linear-gradient(135deg, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontFamily: 'Space Grotesk, sans-serif',
        letterSpacing: '-0.5px',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Animated feature card
interface FeatureCardProps {
  title: string;
  icon: string;
  color: string;
  frame: number;
  startFrame: number;
  duration: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  color,
  frame,
  startFrame,
  duration,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));

  const scale = interpolate(progress, [0, 1], [0.8, 1], {
    easing: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <GlassCard
        blur={25}
        opacity={0.08}
        glow
        style={{
          padding: '32px 24px',
          minWidth: '280px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{icon}</div>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#fff',
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          {title}
        </div>
      </GlassCard>
    </div>
  );
};

export default {
  GlassCard,
  PulseButton,
  FloatingNavBar,
  GradientText,
  FeatureCard,
  DeviceMockup,
};
