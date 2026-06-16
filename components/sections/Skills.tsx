'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillGroup } from '@/components/ui/SkillGroup'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-16 md:py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1000px]">
        <FadeIn>
          <SectionHeader title="Skills" />
        </FadeIn>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.05}>
              <SkillGroup group={group} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
