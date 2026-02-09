'use client'

import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment } from '@react-three/drei'
import Card3D from './Card3D'

type SceneProps = {
  open: boolean
  flipped: boolean
  onToggleOpen: () => void
  onToggleFlip: () => void
}

export default function Scene({
  open,
  flipped,
  onToggleOpen,
  onToggleFlip,
}: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <color attach="background" args={['#0b0f1a']} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Soft shadow under the card */}
      <ContactShadows
        position={[0, -1.62, 0]}
        opacity={0.55}
        scale={12}
        blur={2.4}
        far={8}
      />

      <Card3D
        open={open}
        flipped={flipped}
        onToggleOpen={onToggleOpen}
        onToggleFlip={onToggleFlip}
      />

      <Environment preset="city" />
    </Canvas>
  )
}
