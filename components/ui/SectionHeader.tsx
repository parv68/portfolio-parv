interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
