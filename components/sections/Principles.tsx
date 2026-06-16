'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PrincipleCard } from '@/components/ui/PrincipleCard'
import { principles } from '@/lib/data'

export function Principles() {
  return (
    <section id="principles" className="px-6 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-[120px]">
      <div className="mx-auto max-w-[1000px]">
        <FadeIn>
          <SectionHeader
            title="How I Build"
            subtitle="The engineering principles that guide my work."
            number="04"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 0.05}>
              <PrincipleCard principle={principle} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
