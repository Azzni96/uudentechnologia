import Link from 'next/link'
import { projects } from '../lib/projects'

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: 24,
        fontFamily: 'system-ui, Arial',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <h1 style={{ margin: 0 }}>Projects</h1>
        <Link href="/" style={{ textDecoration: 'none', opacity: 0.9 }}>
          ← Back to Home
        </Link>
      </div>

      <p style={{ marginTop: 10, opacity: 0.8, maxWidth: 900 }}>
        This page is rendered from a typed dataset (<code>app/lib/projects.ts</code>). Edit that file to
        update your projects.
      </p>

      <div style={{ display: 'grid', gap: 14, marginTop: 18, maxWidth: 1000 }}>
        {projects.map((p) => (
          <article
            key={p.id}
            style={{
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 14,
              padding: 16,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{p.title}</h2>
            <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.55 }}>{p.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
              {p.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12,
                    padding: '6px 10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 999,
                    opacity: 0.9,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {p.links && (
              <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    style={{
                      padding: '10px 12px',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: 10,
                      textDecoration: 'none',
                    }}
                  >
                    Live Demo
                  </a>
                )}
                {p.links.repo && (
                  <a
                    href={p.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '10px 12px',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: 10,
                      textDecoration: 'none',
                    }}
                  >
                    Repository
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  )
}
