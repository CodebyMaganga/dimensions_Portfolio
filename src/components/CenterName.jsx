// components/CenterName.jsx
import { Text } from '@react-three/drei'

export default function CenterName() {
  return (
    <>
      <Text
  font="/fonts/Orbitron-Bold.ttf"   // futuristic, geometric — great for "AI/space" vibe
  fontSize={1.8}
  color="#E0E7FF"
  anchorX="center"
  anchorY="middle"
  letterSpacing={0.1}
  outlineWidth={0.06}
  outlineColor="#A855F7"   // violet outline instead of cyan
>
  Maganga Mwambonu
</Text>
<Text
  font="/fonts/Orbitron-Regular.ttf"
  fontSize={0.6}
  color="#67E8F9"   // cyan subtitle, swapped with the name's outline color
  position={[0, -2, 0]}
  anchorX="center"
  anchorY="middle"
  letterSpacing={0.05}
>
  Senior Fullstack Engineer & Systems Architect
</Text>
    </>
  )
}
