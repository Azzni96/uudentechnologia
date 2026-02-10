'use client'

import React, { memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, Preload } from '@react-three/drei'
import Card3D from './Card3D'

type SceneProps = {
  open: boolean
  flipped: boolean
  onToggleOpen: () => void
  onToggleFlip: () => void
}

const SceneContent = memo(
  ({ open, flipped, onToggleOpen, onToggleFlip }: SceneProps) => (
    <>
      <color attach="background" args={['#0b0f1a']} />

      {/* Lighting setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} castShadow />

      {/* Floor with shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]} receiveShadow>
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

      {/* 3D Card Component */}
      <Card3D
        open={open}
        flipped={flipped}
        onToggleOpen={onToggleOpen}
        onToggleFlip={onToggleFlip}
      />

      {/* Environment and preload */}
      <Environment preset="city" />
      <Preload all />
    </>
  )
)

SceneContent.displayName = 'SceneContent'

export default memo(function Scene(props: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5, max: 1 }}
      gl={{ antialias: true, alpha: false }}
    >
      <SceneContent {...props} />
    </Canvas>
  )
})
