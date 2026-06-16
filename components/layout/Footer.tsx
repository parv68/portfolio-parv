export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <div className="text-center md:text-left">
          <span className="font-semibold text-foreground">Parv</span>
          <br />
          <span>Full Stack Developer & Systems Engineer</span>
        </div>
        <div className="text-center md:text-right">
          <span>&copy; 2026</span>
          <br />
          <span>Built with Next.js & TypeScript</span>
        </div>
      </div>
    </footer>
  )
}
