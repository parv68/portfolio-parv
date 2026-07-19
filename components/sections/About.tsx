'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const milestones = [
  {
    year: '2026',
    title: 'BCA Graduation & Open Source',
    desc: 'Graduated with BCA. Authored and launched open-source developer engines: DevBoxOS, VaultSync, Aegis, StegaShare, and CryptoTrace.',
  },
  {
    year: '2025',
    title: 'Software Engineer Intern (Ruhil Future Technologies)',
    desc: 'Worked as a full-time paid Software Engineer Intern, designing core developer infrastructure and distributed components.',
  },
  {
    year: '2023',
    title: 'BCA Foundations',
    desc: 'Began BCA. Focused on computer science fundamentals, data structures, and database engines.',
  },
]

export function About() {
  return (
    <section id="about" className="px-6 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-[120px]">
      <div className="mx-auto max-w-[1000px]">
        <FadeIn>
          <SectionHeader title="About" number="01" />
        </FadeIn>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <FadeIn delay={0.1} className="flex-1">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a Full Stack Developer and Systems Engineer.I focus on building
                developer tools, secure sandboxed runtimes, and local-first systems.
                I enjoy engineering tools that remove friction, solve complex resource orchestration
                problems, and empower other developers to build better software.
              </p>
              <p>
                My technical interests are deeply rooted in systems programming and distributed architectures.
                I spend my time exploring database internals, peer-to-peer synchronization, and security compilation
                primitives. I strongly believe that local-first synchronization and client-side runtimes represent the
                future of collaborative software, enabling offline functionality, speed, and privacy.
              </p>
              <p>
                When building, I write clean, performant, and type-safe systems using languages like Go, Rust, and TypeScript.
                I value engineering simplicity: I prefer designing software that is clear to read, straightforward to deploy,
                and maintainable over decades rather than just the next release cycle.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="md:w-[320px] shrink-0">
            <h3 className="mb-4 text-lg font-semibold">Journey Milestones</h3>
            <hr className="mb-6 border-border" />
            <div className="relative border-l border-border pl-6 ml-2 space-y-6">
              {milestones.map((ms) => (
                <div key={ms.year} className="relative group">
                  <span className="absolute -left-[32px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background transition-all group-hover:border-primary group-hover:bg-[#CCEBE9] duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground transition-all group-hover:bg-primary duration-300" />
                  </span>
                  <div>
                    <span className="font-mono text-xs text-primary font-semibold tracking-wider">
                      {ms.year}
                    </span>
                    <h4 className="text-sm font-semibold mt-0.5 text-foreground transition-colors group-hover:text-primary duration-200">
                      {ms.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

