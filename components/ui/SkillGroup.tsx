'use client'

import type { SkillGroup as SkillGroupType } from '@/lib/data'

interface SkillGroupProps {
  group: SkillGroupType
}

export function SkillGroup({ group }: SkillGroupProps) {
  const handleMouseEnter = (tech: string) => {
    window.dispatchEvent(new CustomEvent('highlight-tech', { detail: tech }))
  }

  const handleMouseLeave = () => {
    window.dispatchEvent(new CustomEvent('highlight-tech', { detail: null }))
  }

  return (
    <div>
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.05em] text-muted-foreground">
        {group.category}
      </h3>
      <div className="space-y-2">
        {group.skills.map((skill) => (
          <div
            key={skill}
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={handleMouseLeave}
            className="border-l-2 border-accent pl-3 text-sm transition-all hover:border-primary hover:text-primary cursor-pointer select-none"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

