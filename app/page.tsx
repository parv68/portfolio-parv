import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Principles } from "@/components/sections/Principles";
import { Contact } from "@/components/sections/Contact";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ResumeModal } from "@/components/ui/ResumeModal";

function SectionDivider({ sector, x, y }: { sector: string; x: number; y: number }) {
  return (
    <div className="flex items-center justify-between px-6 py-2 border-y border-border/40 font-mono text-[9px] text-muted-foreground/35 select-none pointer-events-none">
      <span>SECTOR_REF // {sector}</span>
      <div className="h-[1px] flex-1 mx-4 border-b border-dotted border-border/40" />
      <span className="hidden sm:inline">COORD_REF: X={x}, Y={y}</span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative mx-auto max-w-[1040px] border-x border-border/40 bg-background/25">
        {/* Schematic Layout Accents / Corner Crop Marks */}
        <div className="absolute -left-[1px] top-0 h-4 w-4 border-t-2 border-l-2 border-primary/40 select-none pointer-events-none" />
        <div className="absolute -right-[1px] top-0 h-4 w-4 border-t-2 border-r-2 border-primary/40 select-none pointer-events-none" />
        <div className="absolute -left-[1px] bottom-0 h-4 w-4 border-b-2 border-l-2 border-primary/40 select-none pointer-events-none" />
        <div className="absolute -right-[1px] bottom-0 h-4 w-4 border-b-2 border-r-2 border-primary/40 select-none pointer-events-none" />

        {/* Technical schematic metadata in margins */}
        <div className="absolute -left-[30px] top-[15%] font-mono text-[9px] text-muted-foreground/30 hidden xl:block select-none [writing-mode:vertical-lr] rotate-180 tracking-widest">
          SYS-SPEC // REF: 906E477 // SCALE: 1:1
        </div>
        <div className="absolute -right-[30px] top-[30%] font-mono text-[9px] text-muted-foreground/30 hidden xl:block select-none [writing-mode:vertical-lr] tracking-widest">
          SHEET: 01_OF_01 // SEC: CORE_DESIGNS
        </div>

        <main>
          <Hero />
          <SectionDivider sector="01-A" x={104} y={788} />
          <About />
          <SectionDivider sector="02-B" x={240} y={1450} />
          <Projects />
          <SectionDivider sector="03-C" x={380} y={2240} />
          <Skills />
          <SectionDivider sector="04-D" x={520} y={3050} />
          <Principles />
          <SectionDivider sector="05-E" x={660} y={3910} />
          <Contact />
        </main>
      </div>
      <Footer />
      <CommandPalette />
      <ResumeModal />
    </>
  );
}
