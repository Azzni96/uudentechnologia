export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  links?: {
    demo?: string
    repo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'business-card-3d',
    title: '3D Business Card (Next.js + R3F)',
    description:
      'Interactive 3D portfolio card with realistic lighting, floor, contact shadows, and flip animation.',
    tech: ['Next.js', 'TypeScript', 'React Three Fiber', 'Three.js', 'Drei'],
    links: {
      repo: 'https://github.com/Azzni96/uudentechnologia',
    },
  },
]
