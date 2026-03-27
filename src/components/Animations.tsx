import { useFrame } from "remotion";
import { useState } from "react";

// Custom easing functions
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);
export const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return c3 * t * t * t - c1 * t * t;
};
export const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Normalize progress based on frame timing
export const interpolateProgress = (
  frame: number,
  startFrame: number,
  endFrame: number
): number => {
  if (frame < startFrame) return 0;
  if (frame > endFrame) return 1;
  return (frame - startFrame) / (endFrame - startFrame);
};

// Stagger animation helper
export const getStaggerValue = (
  index: number,
  totalItems: number,
  progress: number,
  staggerDelay: number
): number => {
  const itemDelay = index * staggerDelay;
  const itemProgress = Math.max(0, Math.min(1, progress - itemDelay));
  return itemProgress;
};

// Pulse animation for infinite breathing effect
export const usePulseAnimation = (frame: number, duration: number = 120) => {
  const cycle = frame % duration;
  const progress = cycle / duration;
  return 1 + 0.15 * Math.sin(progress * Math.PI * 2);
};

// Float animation (vertical bounce)
export const useFloatAnimation = (frame: number, duration: number = 120) => {
  const cycle = frame % duration;
  const progress = cycle / duration;
  return Math.sin(progress * Math.PI * 2) * 12;
};
