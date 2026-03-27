import "./styles.css";
import { AbsoluteFill } from "remotion";
import SceneA_Dashboard from "./components/SceneA_Dashboard";
import SceneB_QuickActions from "./components/SceneB_QuickActions";
import SceneC_Modules from "./components/SceneC_Modules";
import SceneD_CTA from "./components/SceneD_CTA";

interface MyCompositionProps {
  frame?: number;
}

export const MyComposition: React.FC<MyCompositionProps> = ({ frame = 0 }) => {
  // Scene timing (in frames at 60fps)
  const sceneA_start = 0;    // 0s - 5s (300 frames)
  const sceneB_start = 300;  // 5s - 8s (180 frames)
  const sceneC_start = 480;  // 8s - 12s (240 frames)
  const sceneD_start = 720;  // 12s - 16s (240 frames)

  return (
    <>
      {/* Scene A: Dashboard (0-300 frames) */}
      {frame < 300 && (
        <SceneA_Dashboard frame={frame} startFrame={sceneA_start} />
      )}

      {/* Scene B: Quick Actions (300-480 frames) */}
      {frame >= 300 && frame < 480 && (
        <SceneB_QuickActions frame={frame} startFrame={sceneB_start} />
      )}

      {/* Scene C: Modules (480-720 frames) */}
      {frame >= 480 && frame < 720 && (
        <SceneC_Modules frame={frame} startFrame={sceneC_start} />
      )}

      {/* Scene D: CTA (720-960 frames) */}
      {frame >= 720 && (
        <SceneD_CTA frame={frame} startFrame={sceneD_start} />
      )}
    </>
  );
};
