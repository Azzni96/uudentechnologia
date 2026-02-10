'use client'

import { memo } from 'react'
import { projects } from '../lib/projects'
import { Badge } from '../components/Badge'
import { PrimaryLink } from '../components/PrimaryLink'

const ProjectCard = memo(({ project }: { project: (typeof projects)[0] }) => (
  <article className="group border border-white border-opacity-10 hover:border-white hover:border-opacity-20 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 bg-slate-800 bg-opacity-50 hover:bg-opacity-75">
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
      {project.title}
    </h2>

    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 opacity-85">
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>

    {/* Links */}
    {project.links && (
      <div className="flex flex-wrap gap-3 pt-4 border-t border-white border-opacity-10">
        {project.links.demo && (
          <a
            href={project.links.demo}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
          </a>
        )}
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            aria-label={`View repository for ${project.title} (opens in new window)`}
          >
            Repository
          </a>
        )}
      </div>
    )}
  </article>
))

ProjectCard.displayName = 'ProjectCard'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Projects</h1>
            <p className="text-sm sm:text-base text-gray-400">
              Explore my latest work and technical projects
            </p>
          </div>
          <PrimaryLink
            href="/"
            className="self-start sm:self-auto"
            aria-label="Back to home"
          >
            ← Back Home
          </PrimaryLink>
        </div>

        {/* Info about data-driven approach */}
        <div className="mb-12 p-6 sm:p-8 bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-xl">
          <p className="text-sm sm:text-base text-blue-100">
            <code className="text-blue-300">app/lib/projects.ts</code> powers this page. Edit that file to
            update your projects instantly.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-400 mb-6">No projects yet. Check back soon!</p>
            <PrimaryLink href="/">← Back to Home</PrimaryLink>
          </div>
        )}
      </div>
    </main>
  )
}
