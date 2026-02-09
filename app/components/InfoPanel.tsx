'use client'

import Link from 'next/link'

type InfoPanelProps = {
  open: boolean
}

const GITHUB_URL = 'https://github.com/'
const LINKEDIN_URL = 'https://www.linkedin.com/'

export default function InfoPanel({ open }: InfoPanelProps) {
  return (
    <aside
      style={{
        padding: 20,
        borderLeft: '1px solid rgba(255,255,255,0.1)',
        fontFamily: 'system-ui, Arial',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <h2 style={{ margin: 0 }}>Nihad Azzam</h2>
          <p style={{ marginTop: 8, opacity: 0.8 }}>
            Interactive 3D portfolio built with Next.js and React Three Fiber.
          </p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'right' }}>
          <Link href="/" style={{ textDecoration: 'none', opacity: 0.9 }}>
            Home
          </Link>
          <Link href="/projects" style={{ textDecoration: 'none', opacity: 0.9 }}>
            Projects
          </Link>
        </nav>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.08)', margin: '16px 0' }} />

      {open ? (
        <>
          <h3 style={{ marginTop: 0 }}>About</h3>
          <p style={{ opacity: 0.85, lineHeight: 1.55 }}>
            This project demonstrates 3D rendering, lighting, animation, and interaction in the browser
            using modern web technologies.
          </p>

          <h3>Links</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '10px 12px',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 10,
                textDecoration: 'none',
              }}
            >
              GitHub
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '10px 12px',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 10,
                textDecoration: 'none',
              }}
            >
              LinkedIn
            </a>

            <Link
              href="/projects"
              style={{
                padding: '10px 12px',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 10,
                textDecoration: 'none',
              }}
            >
              View Projects
            </Link>
          </div>

          <h3 style={{ marginTop: 18 }}>Tech</h3>
          <ul style={{ lineHeight: 1.7, opacity: 0.9 }}>
            <li>Next.js (App Router)</li>
            <li>React Three Fiber + Drei</li>
            <li>Three.js fundamentals</li>
            <li>Interaction + smooth animation</li>
          </ul>
        </>
      ) : (
        <p style={{ marginTop: 16, opacity: 0.75 }}>
          Click the 3D card to open details →
        </p>
      )}
    </aside>
  )
}
