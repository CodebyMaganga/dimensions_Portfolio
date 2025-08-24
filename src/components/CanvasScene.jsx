import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CanvasScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Controls */}
      <OrbitControls enableZoom={false} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* Example mesh */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
    </Canvas>
  );
}
