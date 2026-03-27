# ExamSprint Product Reveal Video - Setup Guide

## Overview
This is a professional product reveal video for ExamSprint built with **Remotion** (React + Video). The video is 16 seconds long (960 frames at 60fps) and features premium glassmorphism design, fluid animations, and Apple-esque product cinematography.

## Project Structure

```
src/
├── Composition.tsx              # Main video composition, orchestrates all scenes
├── Root.tsx                     # Remotion configuration
├── index.ts                     # Entry point
├── styles.css                   # Global styles and animations
└── components/
    ├── Animations.tsx           # Easing functions and animation utilities
    ├── UIElements.tsx           # Reusable glass components
    ├── SceneA_Dashboard.tsx      # Device mockup + navigation bar (0-5s)
    ├── SceneB_QuickActions.tsx   # FAB button + menu interaction (5-8s)
    ├── SceneC_Modules.tsx        # Feature modules showcase (8-12s)
    └── SceneD_CTA.tsx            # Branding + call-to-action (12-16s)
```

## Video Breakdown

### Scene A: Dashboard (0-5 seconds)
- iPhone mockup "boots up" with gradient background
- ExamSprint dashboard reveals with glassmorphic UI
- Navigation bar with 4 tabs (Resources, Classes, Create, Play)
- Interactive tab switching with glow effects
- Text overlay: "Beautiful, Intuitive Interface"

### Scene B: Quick Actions (5-8 seconds)
- Floating Action Button (FAB) pulses with glow
- Quick Actions menu slides up from bottom
- 4 action items stagger-animate into view (Create Class, Join Class, Quick Note, Start Quiz)
- Each action has gradient icons and color-coded backgrounds
- Text overlay: "One Tap, Infinite Actions"

### Scene C: Modules (8-12 seconds)
- Animated grid background with subtle pattern
- 3 module cards with staggered entrance animation
- Resource Hub, Study Groups, AI Playground features showcased
- Gradient icons and glassmorphic cards
- Each card has hover-like styling and glow effects
- Text overlay: "Everything You Need to Excel"

### Scene D: CTA (12-16 seconds)
- Animated particles in background
- ExamSprint logo reveals with scale and glow
- Features list staggered fade-in (Intuitive Design, Lightning Fast, Secure & Private, AI-Powered)
- "Get Started Now" button with gradient
- Final full-screen logo reveal with opacity fade

## Technical Specs

- **Resolution:** 1920x1080 (Full HD)
- **Frame Rate:** 60 FPS
- **Duration:** 960 frames (16 seconds)
- **Color System:**
  - Primary: Electric Purple (#7C3AED to #9F67FF)
  - Secondary: Emerald Green (#10B981)
  - Dark Background: #0B0B14, #13132A
- **Typography:** Space Grotesk (headings), Inter (body)
- **Effects:** Glassmorphism, blur, glow shadows, smooth easing

## Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Development Server
```bash
pnpm run dev
```

This opens the Remotion Studio at `http://localhost:3000` where you can:
- Preview the video in real-time
- Scrub through timeline
- Export as MP4 or sequence

### 3. Export Video
```bash
pnpm run build
# Output: out/ExamSprintReveal.mp4
```

## Animation Architecture

All animations use custom easing functions:
- **EaseOutCubic** - Standard smooth fade-in/out
- **EaseOutQuad** - Quadratic easing for scale effects
- **EaseOutBack** - Bouncy overshoot for entrance animations
- **EaseInOutCubic** - Smooth bidirectional animations

Frame-based timeline:
- Each scene calculates its own `startFrame` and uses `interpolateProgress()` to calculate animation progress
- `getStaggerValue()` helper creates staggered entrance effects for multiple items

## Customization

### Change Brand Colors
Edit `/src/styles.css` CSS variables:
```css
--color-purple: #7C3AED;
--color-emerald: #10B981;
--color-dark-bg: #0B0B14;
```

### Modify Scene Timing
Edit `/src/Composition.tsx`:
```typescript
const sceneA_start = 0;      // Change where Scene A starts
const sceneB_start = 300;    // Adjust transitions
```

### Update Copy/Text
Each scene has hardcoded text. Edit:
- Dashboard title: `SceneA_Dashboard.tsx`
- Feature labels: `SceneB_QuickActions.tsx`, `SceneC_Modules.tsx`
- CTA text: `SceneD_CTA.tsx`

### Add/Remove Feature Cards
Modify the `modules` array in `/src/components/SceneC_Modules.tsx`:
```typescript
const modules = [
  { icon: "📚", title: "...", description: "...", gradient: "..." },
  // Add more here
];
```

## Performance Tips

1. **Optimize Blur Effects** - Glassmorphism blur can be expensive; consider using CSS filters
2. **Use `transform`** - All animations use GPU-accelerated transforms (scale, translateY, etc.)
3. **Memoize Components** - Wrap components with `React.memo()` if re-renders are heavy
4. **Test Exports** - Always render a test section before full 16-second export

## Export Formats

- **MP4 (H.264)** - Best for web, email, social media
- **WebM** - Modern web browsers
- **PNG Sequence** - For further editing in After Effects/Premiere

## Rendering Settings

Default export settings (edit in `remotion.config.ts` if needed):
- Codec: h264
- Quality: 90
- Pixel format: yuv420p
- Audio: N/A (video only)

## Troubleshooting

### Video Not Rendering
- Check for console errors in Remotion Studio
- Ensure all imports are correct
- Verify `Root.tsx` composition matches `Composition.tsx` duration/fps

### Animation Jumpy/Stuttering
- Check if frame calculations are correct
- Ensure `interpolateProgress()` is being used properly
- Profile performance in Chrome DevTools

### Colors Not Showing Correctly
- Verify CSS is imported in `Composition.tsx`
- Check browser color profile (export will be accurate)
- Use hex codes, not RGB values for consistency

## Future Enhancements

- [ ] Add audio sync/music bed
- [ ] Add particle effects library
- [ ] Create light mode variant
- [ ] Add transition effects between scenes
- [ ] Implement dynamic text from config file
- [ ] Add callout animations (arrows, highlights)

## Resources

- [Remotion Documentation](https://www.remotion.dev)
- [React Documentation](https://react.dev)
- [Easing Visualizer](https://easings.net)

---

**Built with ❤️ using Remotion and React**
