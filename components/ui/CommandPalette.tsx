'use client'

import { useState, useEffect, useRef } from 'react'
import { Terminal, Command, X, CornerDownLeft } from 'lucide-react'
import { projects, skills, social } from '@/lib/data'

interface CommandResponse {
  input: string
  output: React.ReactNode
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [history, setHistory] = useState<CommandResponse[]>([
    {
      input: 'system-init',
      output: (
        <div className="text-[#8E8E93] text-xs">
          Welcome to Parv CLI v1.0.0. Type <span className="text-teal-400 font-semibold">help</span> to view available commands.
        </div>
      ),
    },
  ])

  const dialogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Listen for Ctrl+K, / and Escape keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault()
        setIsOpen(true)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto-focus input when menu opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Scroll to bottom on output updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase()
    let output: React.ReactNode = null

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#8E8E93] mb-1">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-teal-400 font-semibold w-16 inline-block">help</span> &mdash; Show this help menu</div>
              <div><span className="text-teal-400 font-semibold w-16 inline-block">about</span> &mdash; View bio details</div>
              <div><span className="text-teal-400 font-semibold w-16 inline-block">projects</span> &mdash; List portfolio projects</div>
              <div><span className="text-teal-400 font-semibold w-16 inline-block">skills</span> &mdash; Show technical stack</div>
              <div><span className="text-teal-400 font-semibold w-16 inline-block">contact</span> &mdash; Print contact links</div>
              <div><span className="text-teal-400 font-semibold w-16 inline-block">resume</span> &mdash; Open resume document</div>
              <div><span className="text-teal-400 font-semibold w-16 inline-block">clear</span> &mdash; Erase terminal output</div>
            </div>
          </div>
        )
        break

      case 'about':
        output = (
          <div className="space-y-1.5 text-xs text-[#D4D4D4]">
            <p><span className="text-teal-400 font-semibold">Parv</span> &mdash; Full Stack Developer & Systems Engineer</p>
            <p className="leading-relaxed">
              Pursuing Bachelor of Computer Applications. Interested in distributed systems, local-first architectures, authorization primitives, and building open-core runtime layers that developers actually enjoy.
            </p>
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#8E8E93]">Featured Projects:</p>
            {projects.map((proj) => (
              <div key={proj.name} className="border-l border-[#2D2D30] pl-2 py-0.5">
                <div className="flex items-center gap-1.5 font-semibold text-teal-400">
                  {proj.name}
                  <span className="text-[10px] px-1 bg-[#1C1C22] text-[#8E8E93] rounded border border-[#2D2D30] font-normal uppercase">
                    {proj.status}
                  </span>
                </div>
                <p className="text-[#A3A3A3] mt-0.5">{proj.description}</p>
                <div className="text-[10px] text-teal-500 mt-1 flex gap-2">
                  <span>Stack: {proj.stack.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        )
        break

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#8E8E93]">Skill Categories:</p>
            <div className="space-y-1.5">
              {skills.map((s) => (
                <div key={s.category}>
                  <span className="text-teal-400 font-semibold w-20 inline-block uppercase text-[10px] tracking-wider">{s.category}:</span>
                  <span className="text-[#D4D4D4]">{s.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-[#D4D4D4]">
            <p className="text-[#8E8E93]">Contact details:</p>
            <div>Email: <a href={`mailto:${social.email}`} className="text-teal-400 hover:underline">{social.email}</a></div>
            <div>GitHub: <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">{social.github}</a></div>
            <div>LinkedIn: <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">{social.linkedin}</a></div>
          </div>
        )
        break

      case 'resume':
        output = <div className="text-xs text-emerald-400">Opening resume_my.pdf in a new tab...</div>
        window.open('/resume_my.pdf', '_blank')
        break

      case 'clear':
        setHistory([])
        setInputValue('')
        return

      case '':
        return

      default:
        output = (
          <div className="text-xs text-red-400">
            Command not found: <span className="font-semibold">{cleanCmd}</span>. Type <span className="text-teal-400 font-semibold hover:underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for suggestions.
          </div>
        )
    }

    setHistory((prev) => [...prev, { input: cmd, output }])
    setInputValue('')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    executeCommand(inputValue)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      setIsOpen(false)
    }
  }

  // Hook global CLI trigger
  useEffect(() => {
    const handleOpenCLI = () => setIsOpen(true)
    window.addEventListener('open-cli', handleOpenCLI)
    return () => window.removeEventListener('open-cli', handleOpenCLI)
  }, [])

  if (!isOpen) return null

  return (
    <div
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-20 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-[600px] rounded-2xl border border-[#2D2D30] bg-[#18181B] text-[#D4D4D4] shadow-2xl overflow-hidden flex flex-col h-[420px] font-mono outline-none">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#2D2D30] bg-[#1E1E24] px-4 py-3 select-none">
          <div className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
            <Terminal size={14} className="text-teal-400" />
            <span>parv-cli.sh</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable output */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 select-text"
        >
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-teal-500 font-semibold select-none">$</span>
                <span className="text-white font-medium">{item.input}</span>
              </div>
              <div className="pl-3">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Input form */}
        <form
          onSubmit={handleFormSubmit}
          className="border-t border-[#2D2D30] bg-[#15151A] px-4 py-3 flex items-center gap-2"
        >
          <span className="text-teal-500 font-semibold select-none font-mono">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type command (e.g. 'help', 'projects', 'skills')..."
            className="flex-1 bg-transparent border-0 outline-none text-white font-mono text-sm placeholder-[#8E8E93]"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <button
            type="submit"
            className="text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
            title="Execute command"
          >
            <CornerDownLeft size={14} />
          </button>
        </form>

        {/* Footer shortcuts helper */}
        <div className="bg-[#111115] border-t border-[#2D2D30] px-4 py-2 flex items-center justify-between text-[10px] text-[#8E8E93] select-none">
          <div className="flex items-center gap-1">
            <Command size={10} />
            <span>+ K or &lsquo;/&lsquo; toggles terminal</span>
          </div>
          <div>ESC closes</div>
        </div>
      </div>
    </div>
  )
}
