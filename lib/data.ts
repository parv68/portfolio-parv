export interface Project {
  name: string
  description: string
  stack: string[]
  status: 'development' | 'rc' | 'stable'
  featured: boolean
  links: {
    github?: string
    docs?: string
    demo?: string
  }
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Principle {
  title: string
  description: string
}

export interface OSStats {
  commits: number
  repos: number
  yearsActive: number
}

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
}

export const projects: Project[] = [
  {
    name: 'VaultSync',
    description:
      'Building a conflict-free, end-to-end encrypted, local-first synchronization and replication runtime in Rust. Implements CRDT-native conflict resolution, multi-tab safety, and a zero-trust coordinator.',
    stack: ['Rust', 'WebAssembly', 'SQLite'],
    status: 'development',
    featured: true,
    links: {
      github: 'https://github.com/parv68/VaultSync',
    },
  },
  {
    name: 'DevBox OS',
    description:
      'Developing an open-source local dev environment orchestrator. CLI + background system daemon built in Go that automates Docker sandbox creation, age workspace encryption, and snapshot sync.',
    stack: ['Go', 'Docker', 'gRPC'],
    status: 'rc',
    featured: true,
    links: {
      github: 'https://github.com/parv68/DevBoxOS',
    },
  },
  {
    name: 'Aegis',
    description:
      'Implementing an embedded Relation-Based Access Control (ReBAC) authorization engine in Rust. Resolves complex relationship paths and role hierarchies locally with sub-millisecond evaluation times.',
    stack: ['Rust', 'WebAssembly'],
    status: 'development',
    featured: false,
    links: {
      github: 'https://github.com/parv68/AEGIS',
    },
  },
  {
    name: 'StegaShare',
    description:
      'Developed a professional open-source steganography application. Conceals files inside ordinary images using AES-256-GCM encryption and LSB steganography natively or via WebAssembly.',
    stack: ['Rust', 'Next.js', 'WebAssembly', 'Tauri'],
    status: 'stable',
    featured: false,
    links: {
      github: 'https://github.com/parv68/StegaShare',
    },
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'State Synchronization'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Distributed Systems', 'WebSockets', 'gRPC / Protocol Buffers'],
  },
  {
    category: 'Database',
    skills: ['SQLite (Local-first)', 'PostgreSQL', 'Redis Caching', 'Vector Databases'],
  },
  {
    category: 'DevOps',
    skills: ['Docker Sandboxing', 'Linux Daemons', 'GitHub Actions', 'Cloudflare', 'AWS'],
  },
]

export const principles: Principle[] = [
  {
    title: 'Build for reliability',
    description:
      'Correctness before performance. If it isn\'t reliable, nothing else matters.',
  },
  {
    title: 'Measure before scaling',
    description:
      'Premature optimization compounds complexity without improving outcomes.',
  },
  {
    title: 'Keep systems simple',
    description:
      'Every abstraction has a maintenance cost. Earn it or avoid it.',
  },
  {
    title: 'Automate repetitive work',
    description: 'Manual toil is a tax on the system. Pay it once, then eliminate it.',
  },
  {
    title: 'Focus on user experience',
    description:
      'The interface is the product. Developer tools are no different.',
  },
  {
    title: 'Prefer maintainable solutions',
    description:
      'Code is read far more than it is written. Write for the next person.',
  },
]

export const openSourceStats: OSStats = {
  commits: 1200,
  repos: 18,
  yearsActive: 3,
}

export const social: SocialLinks = {
  github: 'https://github.com/parv68',
  linkedin: 'https://www.linkedin.com/in/parv-ruhil-429659290/',
  email: 'parvruhil68@gmail.com',
}
