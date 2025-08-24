// src/components/Starfield.jsx
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Starfield() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <Stars
        radius={100} // how far the stars spread
        depth={50}   // starfield depth
        count={5000} // number of stars
        factor={4}   // star size factor
        saturation={0}
        fade
        speed={1}    // starfield rotation speed
      />
    </Canvas>
  );
}
