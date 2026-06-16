'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { DeveloperConsole } from '@/components/ui/DeveloperConsole'
import { social } from '@/lib/data'
import { ArrowDown, Download } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center border-b border-border px-6">
      <div className="mx-auto w-full max-w-[1000px] pb-24 pt-24 md:pb-0 md:pt-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left copy column */}
          <div className="lg:col-span-7">
            <FadeIn>
              <h1 className="font-display text-4xl leading-tight md:text-6xl text-foreground">
                Parv
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-3 text-2xl font-bold font-sans text-muted-foreground md:text-[30px] leading-tight">
                Full Stack Developer<br className="hidden sm:block" />
                & Systems Engineer
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Building developer tools, distributed systems, and local-first runtimes.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#115E59]"
                >
                  View Projects <ArrowDown size={16} />
                </a>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-resume'))}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary cursor-pointer"
                >
                  Download Resume <Download size={16} />
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <span>&middot;</span>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <span>&middot;</span>
                <a
                  href={`mailto:${social.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {social.email}
                </a>
              </div>
            </FadeIn>

            {/* Currently Building Sub-section */}
            <FadeIn delay={0.45}>
              <div className="mt-10 pt-6 border-t border-border/60">
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5 select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Currently Building
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <span className="font-mono font-semibold text-primary">VaultSync</span>
                    <p className="text-muted-foreground mt-0.5">Distributed state sync & conflict resolution engine</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <span className="font-mono font-semibold text-primary">DevBox OS</span>
                    <p className="text-muted-foreground mt-0.5">Local dev environment container manager daemon</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right developer console column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.5} className="w-full flex justify-center lg:justify-end">
              <DeveloperConsole />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

