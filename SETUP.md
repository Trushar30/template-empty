# ExamSprint Product Reveal Video - Premium Edition

A **16-second cinematic product reveal** for ExamSprint built with Remotion. Features Apple-grade glassmorphism, fluid motion design, and premium creative direction.

## Quick Start

```bash
# Install dependencies
pnpm install

# Preview in Remotion Studio (interactive, hot-reload)
pnpm run dev

# Export final video (1920×1080, 60fps, ~3-5 min)
pnpm run build
```

The preview loads at `http://localhost:3000` with real-time scrubbing and instant frame updates.

## Video Overview

**Duration:** 16 seconds | **Resolution:** 1920×1080 | **Frame Rate:** 60 FPS | **Total Frames:** 960

### Timeline Breakdown

| Scene | Duration | Start Frame | Content |
|-------|----------|-------------|---------|
| **A: Dashboard** | 5s | 0 | Device boot, navigation reveal, feature showcase |
| **B: Quick Actions** | 3s | 300 | FAB pulse, menu slide-up, staggered actions |
| **C: Modules** | 4s | 480 | Feature grid, cards reveal, capabilities |
| **D: Call-to-Action** | 4s | 720 | Logo reveal, benefits, "Join Beta" button |

## Project Architecture

```
src/
├── Composition.tsx                  # Video orchestrator (scene routing)
├── Root.tsx                         # Remotion config (resolution, FPS, duration)
├── styles.css                       # Design tokens, keyframes, fonts
│
└── components/
    ├── UIElements.tsx              # Reusable component library
    │   ├── GlassCard               # Frosted glass container
    │   ├── PulseButton             # Animated FAB with glow
    │   ├── FloatingNavBar          # Bottom navigation
    │   ├── DeviceMockup            # iPhone frame
    │   ├── GradientText            # Premium text gradients
    │   └── FeatureCard             # Showcase cards
    │
    ├── Animations.tsx              # Easing functions & utilities
    │   ├── easeOutCubic            # Smooth deceleration
    │   ├── easeOutBack             # Snappy bounce
    │   ├── easeInOutCubic          # Bidirectional smooth
    │   └── helpers                 # Stagger, pulse, float
    │
    ├── SceneA_Dashboard.tsx        # Frames 0-300 (5s)
    │   ├── Device boot animation
    │   ├── Navigation bar reveal
    │   ├── Feature card stagger
    │   └── Tab cycling
    │
    ├── SceneB_QuickActions.tsx     # Frames 300-480 (3s)
    │   ├── FAB pulse rings
    │   ├── FAB rotation on tap
    │   ├── Menu slide-up
    │   └── Action card stagger
    │
    ├── SceneC_Modules.tsx          # Frames 480-720 (4s)
    │   ├── Title reveal
    │   ├── Feature grid layout
    │   ├── Card stagger entrance
    │   └── Background gradients
    │
    └── SceneD_CTA.tsx              # Frames 720-960 (4s)
        ├── Logo scale-in
        ├── Feature callouts
        ├── CTA button pulse
        └── Corner accents
```

## Design System

### Color Palette

**Primary Purple** (hero accent)
- Light: `#7C3AED` | Dark: `#9F67FF`
- Gradient: `linear-gradient(135deg, #7C3AED, #9F67FF)`
- Glow: `0 0 32px rgba(124, 58, 237, 0.5)`

**Secondary Emerald** (positive actions)
- Light: `#10B981` | Dark: `#34D399`
- Gradient: `linear-gradient(135deg, #10B981, #34D399)`
- Glow: `0 0 24px rgba(16, 185, 129, 0.3)`

**Backgrounds**
- Dark: `#0B0B14` → `#13132A` (gradient)
- Light overlay: `rgba(0, 0, 0, 0.4)`
- Glass: `rgba(255, 255, 255, 0.05)`

### Typography

**Space Grotesk** (headings)
- Weights: 400, 500, 600, 700
- Letter spacing: -0.5px (tight)
- Size range: 16px - 56px

**Inter** (body text)
- Weights: 400, 500, 600
- Letter spacing: normal
- Size range: 12px - 24px

Both fonts auto-loaded via Google Fonts CDN.

## Component Reference

### GlassCard
Frosted glass container with backdrop blur and optional glow.

```tsx
<GlassCard
  blur={25}              // backdrop-filter blur (px)
  opacity={0.1}          // background opacity
  glow={false}           // enable glow shadow
  style={{ padding: '32px' }}
>
  {children}
</GlassCard>
```

**Props:**
- `blur` (number): 10-30px recommended
- `opacity` (number): 0.05-0.2 recommended
- `glow` (boolean): adds `0 0 32px rgba(124, 58, 237, 0.5)`
- `style` (CSSProperties): custom overrides

### PulseButton
Animated FAB with breathing glow and ripple rings.

```tsx
<PulseButton
  frame={frame}          // animation timeline frame
  isActive={true}        // intensity toggle
  size={120}             // diameter in pixels
>
  +
</PulseButton>
```

**Features:**
- Infinite sine-wave pulse
- Dynamic shadow glow
- Ripple effect rings (2 layers)
- GPU-accelerated transforms

### FloatingNavBar
Bottom navigation with 4 tabs, active indicator, bounce animation.

```tsx
<FloatingNavBar
  activeTab={activeTab}  // 0-3
  frame={frame}          // animation frame
/>
```

**Tabs:** Home, Classes, AI, Profile (emoji-based icons)

### DeviceMockup
Realistic iPhone Pro frame with bezel, notch, and drop shadow.

```tsx
<DeviceMockup width={420} height={860}>
  <div style={{ width: '100%', height: '100%' }}>
    {screen_content}
  </div>
</DeviceMockup>
```

### FeatureCard
Card component for showcase with staggered entrance animation.

```tsx
<FeatureCard
  title="Resource Hub"
  icon="📚"
  color="124, 58, 237"    // RGB for dynamic glow
  frame={frame}
  startFrame={480}
  duration={150}
/>
```

### GradientText
Text with premium gradient fill and tight tracking.

```tsx
<GradientText
  from="#7C3AED"
  to="#9F67FF"
  size={48}
  weight={700}
>
  ExamSprint
</GradientText>
```

## Scene Details

### Scene A: Dashboard (0-5 seconds)

**Visual Elements:**
- iPhone Pro mockup (1920×1080 canvas, scaled 420×860)
- Dark gradient background (0B0B14 → 13132A)
- Status bar (time, signal)
- Dashboard header: "Welcome to ExamSprint"
- 3 feature cards (Resource Hub, Study Groups, AI Playground)
- Floating navigation bar (Home, Classes, AI, Profile)
- Ambient light glow effect

**Animation Timeline:**
- 0-90 frames: Device boot (scale + opacity)
- 120-180 frames: Navigation bar slides up
- 90-150 frames: Dashboard content fades in
- 0-300 frames: Navigation tabs cycle with bounce
- 100-200 frames: Each feature card stagger (50 frames apart)

**Key Animation:**
```tsx
const bootOpacity = interpolate(progress, [0, 0.15, 1], [0, 0, 1]);
const navBarY = interpolate(progress, [0.4, 0.7], [200, 0]);
const contentOpacity = interpolate(progress, [0.2, 0.5], [0, 1]);
```

### Scene B: Quick Actions (5-8 seconds)

**Visual Elements:**
- Central FAB button (120px, purple gradient)
- Animated glow rings (2 layers radiating)
- Backdrop blur overlay
- Quick Actions menu (glassmorphic)
- 2 action cards (Create Class, Join Class)
- Floating particles constellation

**Animation Timeline:**
- 0-120 frames: FAB scales up (easeOutBack bounce)
- 180-300 frames: FAB rotates 45° on tap
- 120-240 frames: Menu slides up from bottom
- 180-300 frames: Create Class card stagger
- 240-360 frames: Join Class card stagger

**Key Animation:**
```tsx
const fabScale = interpolate(progress, [0, 0.2], [0, 1], { easing: easeOutBack });
const menuY = interpolate(progress, [0.4, 0.7], [200, 0]);
const backdropOpacity = interpolate(progress, [0.3, 0.5], [0, 0.6]);
```

### Scene C: Modules (8-12 seconds)

**Visual Elements:**
- Section title: "Core Features" / "Everything You Need to Excel"
- 3-column feature grid
- Feature cards (Resource Hub, Study Groups, AI Playground)
- Tag pills (Notes, PYQs, Collaborate, Share, Smart, etc.)
- Background gradient elements (animated glow)
- Floating particle constellation

**Animation Timeline:**
- 0-90 frames: Title reveals (fade + slideUp)
- 90-240 frames: Grid layout established
- 120-240 frames: Resource Hub card stagger
- 180-300 frames: Study Groups card stagger
- 240-360 frames: AI Playground card stagger (with extra glow)

**Key Animation:**
```tsx
const titleOpacity = interpolate(progress, [0, 0.15], [0, 1]);
const cardProgress = (progress - delay) / duration;
const cardScale = interpolate(cardProgress, [0, 1], [0.85, 1], { easing: easeOutBack });
```

### Scene D: Call-to-Action (12-16 seconds)

**Visual Elements:**
- ExamSprint logo (gradient text in glassmorphic badge)
- Tagline: "Your Learning Hub, Reimagined"
- 3 feature callouts with icons (⚡ Smart, 👥 Collaborative, ✨ Personalized)
- "Join Beta" button (gradient, pulsing glow)
- Corner accent lines (4 animated lines)
- Floating light particles
- Background gradient elements (continuous)

**Animation Timeline:**
- 0-120 frames: Logo scales in (easeOutBack)
- 90-210 frames: Subtitle fades in
- 210-270 frames: Feature callout 1
- 270-330 frames: Feature callout 2
- 330-390 frames: Feature callout 3
- 420-510 frames: CTA button appears + pulses
- 240+ frames: Corner accents animate

**Key Animation:**
```tsx
const logoScale = interpolate(progress, [0, 0.2], [0.5, 1], { easing: easeOutBack });
const ctaScale = interpolate(progress, [0.7, 0.85], [0, 1]);
const ctaPulse = interpolate((frame % 60) / 60, [0, 60], [1, 1.05]);
```

## Animation Easing Reference

### EaseOutCubic
Smooth, natural deceleration. Use for fade-ins/outs and general transitions.
```tsx
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
```

### EaseOutBack
Snappy bounce effect with slight overshoot. Perfect for entrance animations.
```tsx
const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return c3 * t * t * t - c1 * t * t;
};
```

### EaseInOutCubic
Smooth acceleration in, smooth deceleration out. For interactive animations.
```tsx
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
```

## Customization Guide

### Change Brand Colors

Edit `/src/styles.css`:
```css
:root {
  --color-purple: #YOUR_PRIMARY;
  --color-purple-light: #YOUR_PRIMARY_LIGHT;
  --color-emerald: #YOUR_SECONDARY;
  /* ... */
}
```

Then update component gradients:
```tsx
background: `linear-gradient(135deg, ${your_color1}, ${your_color2})`
```

### Adjust Animation Timing

Edit `/src/Composition.tsx` scene start frames:
```tsx
const sceneA_start = 0;      // Change timing
const sceneB_start = 300;    // Adjust transitions
const sceneC_start = 480;
const sceneD_start = 720;
```

To slow down entire video, increase `durationInFrames` in `/src/Root.tsx`:
```tsx
<Composition
  durationInFrames={1200}  // Default: 960 (16s)
  fps={60}
/>
```

### Modify Scene Content

Each scene is fully editable:

**Dashboard (SceneA_Dashboard.tsx):**
- Edit dashboard text, card titles, descriptions
- Change feature icons (use emoji or replace with SVG)
- Adjust card colors/gradients

**Quick Actions (SceneB_QuickActions.tsx):**
- Modify action card labels
- Change icon styles
- Adjust menu appearance

**Modules (SceneC_Modules.tsx):**
- Update feature cards content
- Add/remove cards from grid
- Modify tag pills

**CTA (SceneD_CTA.tsx):**
- Change logo text
- Update tagline/subtitle
- Modify feature callouts
- Edit CTA button text

### Add Custom Fonts

Replace Google Fonts import in `/src/styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Then update `fontFamily` in components:
```tsx
fontFamily: 'YourFont, sans-serif'
```

## Performance Optimization

### 1. Reduce Blur Effects
Backdrop blur is expensive. Cap at 20-25px:
```tsx
blur={20}  // Not 30+
```

### 2. Limit Particles
Keep floating particles to 6-8 total across all scenes.

### 3. GPU Acceleration
Always use `transform` instead of `left`/`top`:
```tsx
// ✅ Good (GPU accelerated)
transform: `translateX(${x}px) scale(${scale})`

// ❌ Bad (CPU intensive)
left: `${x}px`; top: `${y}px`;
```

### 4. Optimize Rendering
Export with H.264 codec and high concurrency:
```bash
pnpm run build -- --concurrency 8 --codec h264
```

## Export Instructions

### Standard MP4 (H.264)
```bash
pnpm run build
# Output: out/video.mp4 (~20-30MB, high compatibility)
```

### Smaller WebM (VP9)
```bash
pnpm run build -- --codec vp9
# Output: out/video.webm (~10-15MB, slower render ~8-10 min)
```

### Add Audio Track

1. Export video: `pnpm run build`
2. Use FFmpeg:
```bash
ffmpeg -i out/video.mp4 -i music.mp3 -c:v copy -c:a aac -shortest final.mp4
```

### Custom Resolution

Edit `/src/Root.tsx`:
```tsx
<Composition
  width={1280}    // Default: 1920
  height={720}    // Default: 1080
  fps={30}        // Default: 60 (lower = faster render)
/>
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Composition with ID MyComp not found" | Verify `id="MyComp"` in `Root.tsx` |
| Fonts not rendering | Clear cache (Cmd+Shift+R), check Google Fonts import |
| Animations stuttering | Reduce blur (20px), lower concurrency, close other apps |
| File size too large | Switch to WebM codec, reduce resolution, compress post-export |
| Colors look different | Check display color profile, export will be accurate |
| Export hangs/timeout | Check system RAM (~4GB needed), reduce video length for testing |

## File Size Reference

| Format | Duration | File Size | Render Time |
|--------|----------|-----------|------------|
| MP4 (H.264) | 16s | 20-30MB | 3-5 min |
| WebM (VP9) | 16s | 10-15MB | 8-10 min |
| 1280×720 MP4 | 16s | 8-12MB | 1-2 min |
| With audio | +50MB | - | +1-2 min |

## Dependencies

```json
{
  "remotion": "^4.0.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

All dependencies auto-installed via `pnpm install`.

## Development Workflow

1. **Preview:** `pnpm run dev` → Edit scenes → Hot reload
2. **Test Export:** Build short segment for quality check
3. **Final Export:** `pnpm run build` → Full 16-second video
4. **Post-Production:** Add audio, color grade in After Effects/Premiere if needed

## Browser Support

- **Preview:** Chrome/Firefox/Safari (latest)
- **Rendering:** Node.js 16+ required
- **Export:** FFmpeg auto-downloaded by Remotion

## Resources

- **[Remotion Docs](https://www.remotion.dev)** — Complete API reference
- **[Easings.net](https://easings.net)** — Easing function visualizer
- **[Google Fonts](https://fonts.google.com)** — Free premium typography

## Credits

Built with:
- [Remotion](https://www.remotion.dev) — React video engine
- [React 19](https://react.dev) — Component framework
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — Premium headings
- [Inter](https://fonts.google.com/specimen/Inter) — Legible body font

Design inspired by Apple's WWDC keynotes and premium AI product reveals (minimal, clean, motion-forward).

---

## Next Steps

1. Run `pnpm run dev` to preview in Remotion Studio
2. Customize content in each scene component
3. Adjust colors in `/src/styles.css`
4. Export final video with `pnpm run build`

**Ready to create something amazing? Let's go! 🚀**
