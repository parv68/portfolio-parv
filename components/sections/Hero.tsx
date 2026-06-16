'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { DeveloperConsole } from '@/components/ui/DeveloperConsole'
import { social } from '@/lib/data'
import { ArrowDown, Download } from 'lucide-react'
import { section } from 'framer-motion/client'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center border-b border-border px-6">
      <div className="mx-auto w-full max-w-[1000px] pb-24 pt-24 md:pb-20 md:pt-16 lg:pt-22">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left copy column */}
          <div className="lg:col-span-7">
            {/* Newspaper Masthead */}
            <FadeIn>
              <div className="border-b-4 border-double border-foreground/60 pb-2 mb-6 font-mono text-[10px] tracking-wider text-muted-foreground/85 uppercase flex items-center justify-between select-none">
                <span>The Systems Gazette</span>
                <span className="hidden sm:inline">Dispatch // Vol. 2026 No. 04</span>
                <span>Est. 2023</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-3">
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none font-normal tracking-tight text-foreground uppercase border-b border-border/40 pb-3">
                  Parv Ruhil
                </h1>
                <p className="font-mono text-[10px] sm:text-xs font-bold text-primary tracking-wider uppercase">
                  LATEST DISPATCH: SHIFTING WEB RUNTIMES TO RUST & LOCAL-FIRST STATE
                </p>
              </div>
            </FadeIn>

            {/* Newspaper columns text with Drop Cap */}
            <FadeIn delay={0.2}>
              <div className="mt-6 text-sm text-muted-foreground leading-relaxed text-justify sm:columns-2 gap-6 border-b border-border/40 pb-6">
                <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-primary">
                  Building developer tools, distributed state synchronizers, and sandbox runtimes. Currently engineering local-first database replication engines and isolated process coordinators in Rust and WebAssembly.
                </p>
                <p className="mt-3 sm:mt-0">
                  Focused on writing clean, composable open-core frameworks that developer teams love. Championing offline-first workflows where user actions bypass remote server round-trips entirely.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-4 items-center justify-between sm:justify-start">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-[#115E59] font-mono uppercase"
                  >
                    View Projects <ArrowDown size={14} />
                  </a>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-resume'))}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary cursor-pointer font-mono uppercase"
                  >
                    View Resume <Download size={14} />
                  </button>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    GH ↗
                  </a>
                  <span>&middot;</span>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    LN ↗
                  </a>
                  <span>&middot;</span>
                  <a
                    href={`mailto:${social.email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    MAIL ↗
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right developer console column */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:items-end w-full">
            {/* Matching schematic top line for desktop alignment */}
            <div className="w-full border-b border-dashed border-border/80 pb-2.5 mb-6 font-mono text-[10px] tracking-wider text-muted-foreground/50 uppercase flex items-center justify-between select-none hidden lg:flex">
              <span>Terminal Telemetry</span>
              <span>Replicas: 03/03</span>
            </div>
            <FadeIn delay={0.5} className="w-full flex justify-center lg:justify-end">
              <DeveloperConsole />
            </FadeIn>
          </div>
        </div>

        {/* Currently Building section spanning full width, with three cards */}
        <FadeIn delay={0.45}>
          <div className="mt-12 pt-6 border-t border-border/60">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-1.5 select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Currently Building
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-card rounded-lg border border-border">
                <span className="font-mono font-semibold text-primary">VaultSync</span>
                <p className="text-muted-foreground mt-0.5">Distributed state sync & conflict resolution engine in Rust</p>
              </div>
              <div className="p-3 bg-card rounded-lg border border-border">
                <span className="font-mono font-semibold text-primary">DevBox OS</span>
                <p className="text-muted-foreground mt-0.5">Local dev environment container manager daemon in Go</p>
              </div>
              <div className="p-3 bg-card rounded-lg border border-border">
                <span className="font-mono font-semibold text-primary">Aegis</span>
                <p className="text-muted-foreground mt-0.5">Embedded Relation-Based Access Control (ReBAC) authorization engine in Rust</p>
              </div>
            </div>
          </div>
        </FadeIn>
        </div>
    </section>
  )
}

