'use client'

import { useState } from 'react'
import Scene from './components/Scene'
import InfoPanel from './components/InfoPanel'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [flipped, setFlipped] = useState(false)

  return (
    <main
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
      }}
    >
      <Scene
        open={open}
        flipped={flipped}
        onToggleOpen={() => setOpen((v) => !v)}
        onToggleFlip={() => setFlipped((v) => !v)}
      />

      <InfoPanel open={open} />
    </main>
  )
}
