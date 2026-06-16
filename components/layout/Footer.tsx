export function Footer() {
  return (
    <footer className="border-t-4 border-double border-foreground/30 bg-secondary font-mono text-xs text-muted-foreground select-none">
      <div className="mx-auto max-w-[1000px] px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-semibold text-foreground text-sm">Parv</span>
          <p className="mt-1">Full Stack Developer & Systems Engineer</p>
          <p className="text-[10px] mt-2">&copy; 2026. All rights reserved.</p>
        </div>

        {/* Blueprint / Schematic Title Block */}
        <div className="border border-border rounded-lg overflow-hidden bg-background text-[10px] min-w-[280px] shadow-sm">
          <div className="grid grid-cols-2 border-b border-border">
            <div className="px-3 py-1.5 border-r border-border">
              <span className="text-[8px] uppercase tracking-wider block text-muted-foreground/80">Owner</span>
              <span className="font-bold text-foreground">PARV</span>
            </div>
            <div className="px-3 py-1.5">
              <span className="text-[8px] uppercase tracking-wider block text-muted-foreground/80">Document ID</span>
              <span className="font-bold text-foreground">PR-SYS-2026</span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-3 py-1.5 border-r border-border">
              <span className="text-[8px] uppercase tracking-wider block text-muted-foreground/80">Scale</span>
              <span className="font-bold text-foreground">1:1 NATIVE</span>
            </div>
            <div className="px-3 py-1.5">
              <span className="text-[8px] uppercase tracking-wider block text-muted-foreground/80">Revision</span>
              <span className="font-bold text-primary">04.ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
