'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { social } from '@/lib/data'
import { Mail, GitBranch, Globe, Download } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="px-6 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-[120px]">
      <div className="mx-auto max-w-[600px] text-center">
        <div className="mb-10 select-none">
          <div className="flex items-center gap-4 font-mono text-[9px] sm:text-xs font-semibold text-primary tracking-widest uppercase mb-6">
            <span>SEC-ID // 05</span>
            <div className="h-[1px] flex-1 border-b border-dashed border-border/80" />
            <span className="text-muted-foreground/40 text-[8px] font-normal">SPEC-DOC_REF_2026</span>
          </div>
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-4 text-muted-foreground text-sm">
              I&apos;m always interested in discussing software engineering, distributed systems,
              developer tools, and exciting opportunities.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.1}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${social.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail size={16} />
              {social.email}
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <GitBranch size={16} />
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Globe size={16} />
              LinkedIn
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume'))}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
