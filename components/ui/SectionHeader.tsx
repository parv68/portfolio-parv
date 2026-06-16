interface SectionHeaderProps {
  title: string
  subtitle?: string
  number?: string
}

export function SectionHeader({ title, subtitle, number }: SectionHeaderProps) {
  return (
    <div className="mb-12 select-none">
      <div className="flex items-center gap-4 font-mono text-[9px] sm:text-xs font-semibold text-primary tracking-widest uppercase">
        {number && <span>SEC-ID // {number}</span>}
        <div className="h-[1px] flex-1 border-b border-dashed border-border/80" />
        <span className="text-muted-foreground/40 text-[8px] font-normal">SPEC-DOC_REF_2026</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground font-sans mt-3">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground font-sans text-sm leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
