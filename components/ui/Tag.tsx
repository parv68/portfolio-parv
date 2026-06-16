import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-[6px] bg-accent px-2.5 py-0.5 font-mono text-xs text-accent-foreground">
      {children}
    </span>
  )
}
