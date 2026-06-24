'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Download, FileText, Globe, Mail, MapPin, Monitor } from 'lucide-react'
import { projects, skills, social } from '@/lib/data'

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive')
  const dialogRef = useRef<HTMLDivElement>(null)

  // Listen to open-resume events
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
      // Reset tab preference based on screen width (if mobile, default to interactive HTML tab)
      if (window.innerWidth < 768) {
        setActiveTab('interactive')
      } else {
        setActiveTab('pdf')
      }
    }
    window.addEventListener('open-resume', handleOpen)
    return () => window.removeEventListener('open-resume', handleOpen)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-[850px] rounded-2xl border border-border bg-background text-foreground shadow-2xl overflow-hidden flex flex-col h-[85vh] max-h-[780px]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-primary" />
            <h2 className="font-semibold text-base md:text-lg">Resume &mdash; Parv</h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/resume_my.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary hover:bg-[#115E59] px-3.5 py-1.5 text-xs text-white font-medium transition-colors cursor-pointer select-none"
            >
              <Download size={14} />
              Download PDF
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-1 rounded-full hover:bg-muted"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab selector */}
        <div className="flex border-b border-border bg-muted/30 px-6 py-2 gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`pb-2 pt-1.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'interactive'
                ? 'border-primary text-primary font-semibold'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Interactive Resume
          </button>
          <button
            onClick={() => setActiveTab('pdf')}
            className={`pb-2 pt-1.5 border-b-2 transition-colors cursor-pointer hidden md:block ${
              activeTab === 'pdf'
                ? 'border-primary text-primary font-semibold'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            PDF Preview
          </button>
        </div>

        {/* Modal Content Wrapper */}
        {/* Modal Content Wrapper */}
        <div className={`flex-1 bg-card ${activeTab === 'interactive' ? 'overflow-y-auto' : 'overflow-hidden flex flex-col'}`}>
          {activeTab === 'interactive' ? (
            <div className="p-6 md:p-10 max-w-[720px] mx-auto space-y-8 bg-background border-x border-border/50 min-h-full text-sm leading-relaxed shadow-sm">
              {/* HTML Resume Content */}
              <div className="text-center pb-6 border-b border-border">
                <h1 className="font-display text-4xl">Parv</h1>
                <p className="text-primary font-medium tracking-wide uppercase text-xs mt-1">Full Stack Developer & Systems Engineer</p>
                <div className="mt-4 flex flex-wrap justify-center gap-y-1 gap-x-4 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1"><MapPin size={12} /> India</span>
                  <span className="flex items-center gap-1">
                    <Mail size={12} />
                    <a href={`mailto:${social.email}`} className="hover:underline">{social.email}</a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe size={12} />
                    <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe size={12} />
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                  </span>
                </div>
              </div>

              {/* Education section */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.05em] text-primary font-semibold mb-2.5">Education</h3>
                <div>
                  <div className="flex justify-between items-baseline font-medium text-foreground">
                    <span>Bachelor of Computer Applications (BCA)</span>
                    <span className="font-mono text-xs text-muted-foreground">2023 &mdash; 2026</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Focusing on Algorithms, Systems Programming, and Distributed Architecture.</p>
                </div>
              </div>

              {/* Projects section */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.05em] text-primary font-semibold mb-3">Key Projects</h3>
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.name}>
                      <div className="flex justify-between items-baseline font-medium text-foreground">
                        <span className="font-semibold">{proj.name}</span>
                        <span className="font-mono text-xs text-muted-foreground uppercase">{proj.status}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {proj.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5 select-none">
                        {proj.stack.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills section */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.05em] text-primary font-semibold mb-3">Technical Stack</h3>
                <div className="space-y-2.5">
                  {skills.map((s) => (
                    <div key={s.category} className="grid grid-cols-1 sm:grid-cols-4 gap-1 select-text">
                      <span className="font-medium text-xs text-muted-foreground font-mono uppercase tracking-wider">{s.category}</span>
                      <span className="sm:col-span-3 text-xs text-foreground">{s.skills.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex-1 p-4 bg-card flex flex-col">
              <iframe
                src="/resume_my.pdf#toolbar=0&navpanes=0"
                className="w-full flex-1 border border-border rounded-lg"
                title="PDF Resume Preview"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
