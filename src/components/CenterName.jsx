// components/CenterName.jsx
import { Text } from '@react-three/drei'

export default function CenterName() {
  return (
    <>
      {/* Main Name */}
      <Text
        font="/fonts/Montserrat-Bold.ttf"   // Place font in /public/fonts
        fontSize={1.8}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
        outlineWidth={0.05}
        outlineColor="#00CFFF"   // Neon cyan outline for galaxy vibe
      >
        Maganga Mwambonu
      </Text>

      {/* Subtitle */}
      <Text
        font="/fonts/Montserrat-Regular.ttf"
        fontSize={0.7}
        color="#B19CD9"   // Soft cosmic purple
        position={[0, -2, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.03}
      >
        Senior Fullstack Engineer
      </Text>
    </>
  )
}
