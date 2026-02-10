'use client'

import { memo } from 'react'
import { PrimaryLink } from './PrimaryLink'
import { Badge } from './Badge'

type InfoPanelProps = {
  open: boolean
}

const GITHUB_URL = 'https://github.com/Azzni96'
const LINKEDIN_URL = 'https://www.linkedin.com/in/nihad-azzam-6b4747171/'

const TechList = memo(() => (
  <ul className="space-y-2 text-sm opacity-90">
    <li className="flex items-start">
      <span className="mr-2 text-blue-400">→</span>
      <span>Next.js (App Router)</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-400">→</span>
      <span>React Three Fiber + Drei</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-400">→</span>
      <span>Three.js fundamentals</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-400">→</span>
      <span>Interaction + smooth animation</span>
    </li>
  </ul>
))

TechList.displayName = 'TechList'

const InfoPanel = memo(function InfoPanel({ open }: InfoPanelProps) {
  return (
    <aside
      className="hidden md:flex flex-col w-full md:w-96 border-l border-white border-opacity-10 bg-linear-to-b from-slate-900 to-slate-800 overflow-y-auto"
      role="complementary"
      aria-label="Portfolio information panel"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 space-y-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Nihad Azzam</h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Interactive 3D portfolio built with Next.js and React Three Fiber.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 pt-2" aria-label="Main navigation">
          <PrimaryLink
            href="/"
            className="text-sm"
            aria-current="page"
          >
            Home
          </PrimaryLink>
          <PrimaryLink
            href="/projects"
            className="text-sm"
          >
            Projects
          </PrimaryLink>
        </nav>
      </div>

      <hr className="border-0 border-t border-white border-opacity-10" />

      {/* Dynamic Content */}
      <div className="flex-1 p-6 sm:p-8 space-y-6">
        {open ? (
          <>
            {/* About Section */}
            <section aria-labelledby="about-heading">
              <h3 id="about-heading" className="text-lg font-semibold text-white mb-3">
                About
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed opacity-85">
                This project demonstrates 3D rendering, lighting, animation, and interaction in the
                browser using modern web technologies.
              </p>
            </section>

            {/* Links Section */}
            <section aria-labelledby="links-heading">
              <h3 id="links-heading" className="text-lg font-semibold text-white mb-3">
                Links
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  aria-label="Visit GitHub profile (opens in new window)"
                >
                  GitHub
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  aria-label="Visit LinkedIn profile (opens in new window)"
                >
                  LinkedIn
                </a>

                <PrimaryLink
                  href="/projects"
                  className="text-sm"
                >
                  Projects
                </PrimaryLink>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section aria-labelledby="tech-heading">
              <h3 id="tech-heading" className="text-lg font-semibold text-white mb-3">
                Tech Stack
              </h3>
              <TechList />
            </section>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-gray-400 text-center">
              💡 Click the 3D card to open details →
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 sm:p-8 border-t border-white border-opacity-10">
        <div className="flex flex-wrap gap-2">
          <Badge>Next.js</Badge>
          <Badge>3D</Badge>
          <Badge>React</Badge>
        </div>
      </div>
    </aside>
  )
})

InfoPanel.displayName = 'InfoPanel'

export default InfoPanel
