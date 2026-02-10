'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import InfoPanel from './components/InfoPanel'
import { ErrorBoundary } from './components/ErrorBoundary'

const Scene = dynamic(() => import('./components/Scene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-400 border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-400">Loading 3D scene...</p>
      </div>
    </div>
  ),
})

export default function Home() {
  const [open, setOpen] = useState(false)
  const [flipped, setFlipped] = useState(false)

  const handleToggleOpen = () => setOpen((v) => !v)
  const handleToggleFlip = () => setFlipped((v) => !v)

  return (
    <ErrorBoundary>
      <main className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Canvas Section */}
        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-400">Loading...</p>
            </div>
          }
        >
          <div className="flex-1 w-full md:w-auto">
            <Scene
              open={open}
              flipped={flipped}
              onToggleOpen={handleToggleOpen}
              onToggleFlip={handleToggleFlip}
            />
          </div>
        </Suspense>

        {/* Info Panel Section */}
        <InfoPanel open={open} />
      </main>
    </ErrorBoundary>
  )
}
