import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function PortalCore() {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.4
  })
  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[1.1, 0.22, 200, 32]} />
        <meshStandardMaterial color="#6A0DAD" metalness={0.6} roughness={0.15} />
      </mesh>
    </group>
  )
}
