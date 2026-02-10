'use client'

import { memo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

type Card3DProps = {
  open: boolean
  flipped: boolean
  onToggleOpen: () => void
  onToggleFlip: () => void
}

const Card3D = memo(function Card3D({
  open,
  flipped,
  onToggleOpen,
  onToggleFlip,
}: Card3DProps) {
  const cardRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!cardRef.current) return

    const { x, y } = state.pointer

    // Mouse tilt
    const baseRotX = y * 0.35
    const baseRotY = x * 0.55

    // Flip adds 180° rotation
    const flipRotY = flipped ? Math.PI : 0

    // Smooth rotation with lerp
    cardRef.current.rotation.x = THREE.MathUtils.lerp(
      cardRef.current.rotation.x,
      baseRotX,
      0.08
    )
    cardRef.current.rotation.y = THREE.MathUtils.lerp(
      cardRef.current.rotation.y,
      baseRotY + flipRotY,
      0.08
    )

    // Push forward when open
    const targetZ = open ? 0.28 : 0
    cardRef.current.position.z = THREE.MathUtils.lerp(
      cardRef.current.position.z,
      targetZ,
      0.08
    )

    // Hover scale
    const targetScale = hovered ? 1.04 : 1
    cardRef.current.scale.x = THREE.MathUtils.lerp(
      cardRef.current.scale.x,
      targetScale,
      0.08
    )
    cardRef.current.scale.y = THREE.MathUtils.lerp(
      cardRef.current.scale.y,
      targetScale,
      0.08
    )
  })

  const handleClick = () => {
    onToggleOpen()
    onToggleFlip()
  }

  return (
    <group
      position={[0, -0.1, 0]}
    >
      <RoundedBox
        ref={cardRef}
        args={[3.2, 2.0, 0.12]}
        radius={0.15}
        smoothness={10}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={handleClick}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          metalness={0.35}
          roughness={0.22}
          emissive={
            hovered ? new THREE.Color(0.08, 0.08, 0.12) : new THREE.Color(0, 0, 0)
          }
          emissiveIntensity={1}
        />
      </RoundedBox>

      {/* FRONT SIDE */}
      <group position={[0, 0, 0.12]}>
        <Text
          position={[0, 0.35, 0.02]}
          fontSize={0.22}
          anchorX="center"
          maxWidth={3}
          color="#ffffff"
        >
          Nihad Azzam
        </Text>
        <Text
          position={[0, 0.05, 0.02]}
          fontSize={0.14}
          anchorX="center"
          maxWidth={3}
          color="rgba(255, 255, 255, 0.8)"
        >
          Web Developer • Next.js • 3D
        </Text>
        <Text
          position={[0, -0.45, 0.02]}
          fontSize={0.11}
          anchorX="center"
          maxWidth={3}
          color="rgba(255, 255, 255, 0.6)"
        >
          Click to flip & open
        </Text>
      </group>

      {/* BACK SIDE (rotated so it reads correctly when flipped) */}
      <group position={[0, 0, -0.12]} rotation={[0, Math.PI, 0]}>
        <Text
          position={[0, 0.25, 0.02]}
          fontSize={0.18}
          anchorX="center"
          maxWidth={3}
          color="#ffffff"
        >
          Projects
        </Text>
        <Text
          position={[0, -0.15, 0.02]}
          fontSize={0.12}
          anchorX="center"
          maxWidth={3}
          color="rgba(255, 255, 255, 0.8)"
        >
          GitHub • LinkedIn
        </Text>
      </group>
    </group>
  )
})

Card3D.displayName = 'Card3D'

export default Card3D
