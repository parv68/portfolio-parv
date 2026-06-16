import type { Principle } from '@/lib/data'

interface PrincipleCardProps {
  principle: Principle
  index: number
}

export function PrincipleCard({ principle, index }: PrincipleCardProps) {
  return (
    <div className="rounded-[16px] border border-border bg-card p-6">
      <span className="mb-3 block font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="text-lg font-semibold">{principle.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {principle.description}
      </p>
    </div>
  )
}
