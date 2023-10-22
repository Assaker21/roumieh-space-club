import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import "./background.component.scss";

function Background() {
  return (
    <div className="background">
      <Canvas>
        <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} autoRotateSpeed={0.1} autoRotate={true} />
        <Stars />
      </Canvas>
      <div className="background-overlay"></div>
    </div>
  );
}

export default Background;
