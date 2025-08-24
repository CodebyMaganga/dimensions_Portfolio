import { Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'

export default function ProjectPlanet({ idx, project, radius = 6, onSelect, total }) {
  const meshRef = useRef()
  const groupRef = useRef()
  const angle = (idx / total) * Math.PI * 2
  const y = useMemo(() => Math.sin(angle * 2) * 1.5, [angle])

  // Load texture for the planet
  const texture = useLoader(TextureLoader, '/textures/ceres.jpg')
  const [hover, setHover] = useState(false)
  const scaleFactor = useRef(1)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const rot = 0.15
    
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(angle + t * rot) * radius
      groupRef.current.position.z = Math.sin(angle + t * rot) * radius
      groupRef.current.position.y = y + Math.sin(t * 0.5 + idx) * 0.2
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      
      // Hover animation
      if (hover) {
        scaleFactor.current = THREE.MathUtils.lerp(scaleFactor.current, 1.15, 0.1)
      } else {
        scaleFactor.current = THREE.MathUtils.lerp(scaleFactor.current, 1, 0.1)
      }
      
      meshRef.current.scale.setScalar(scaleFactor.current)
    }
  })

  const handleClick = (e) => {
    e.stopPropagation()
    onSelect(project)
  }

  const handlePointerOver = () => {
    setHover(true)
    document.body.style.cursor = "pointer"
  }

  const handlePointerOut = () => {
    setHover(false)
    document.body.style.cursor = "auto"
  }

  return (
    <group ref={groupRef} position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      
      {/* Enhanced title display with multiple visual cues */}
      <Html
        position={[0, -2, 0]}
        distanceFactor={10}
        className="w-48 flex justify-center"
        style={{
          transform: 'translate3d(-96px, 0, 0)',
          pointerEvents: 'none'
        }}
      >
        <div className="relative">
          <div className={`
            bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-md 
            border rounded-xl px-4 py-2 text-center shadow-lg
            transition-all duration-300 transform
            ${hover 
              ? 'opacity-100 scale-105 border-indigo-400/50 shadow-indigo-500/20' 
              : 'opacity-80 scale-100 border-white/10'
            }
          `}>
            <div className="text-white text-sm font-semibold tracking-wide">
              {project.title}
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Click to explore
            </div>
          </div>
          
          {/* Connector line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className={`
              w-0.5 h-6 transition-all duration-300
              ${hover 
                ? 'bg-gradient-to-b from-indigo-400/80 to-transparent' 
                : 'bg-gradient-to-b from-white/30 to-transparent'
              }
            `}></div>
          </div>
          
          {/* Hover indicator */}
          {hover && (
            <div className="absolute -inset-2 rounded-xl bg-indigo-400/10 animate-pulse pointer-events-none"></div>
          )}
        </div>
      </Html>
    </group>
  )
}