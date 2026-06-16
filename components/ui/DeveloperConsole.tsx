'use client'

import { useState, useEffect, useRef } from 'react'
import { Terminal, FileJson, Settings } from 'lucide-react'

interface LogLine {
  timestamp: string
  type: 'info' | 'success' | 'warn' | 'error'
  message: string
}

const startupLogs: LogLine[] = [
  { timestamp: '12:54:01', type: 'info', message: 'Initializing VaultSync daemon...' },
  { timestamp: '12:54:02', type: 'info', message: 'Connecting to local SQLite database: sqlite://local.db' },
  { timestamp: '12:54:02', type: 'success', message: 'Database connected successfully.' },
  { timestamp: '12:54:03', type: 'info', message: 'Loading cryptographic keys from DevBox environment...' },
  { timestamp: '12:54:03', type: 'success', message: 'Keys loaded. Protocol: age-encryption active.' },
  { timestamp: '12:54:04', type: 'info', message: 'Checking partition state synchronization...' },
  { timestamp: '12:54:04', type: 'info', message: 'Received state delta package (4.2 KB) from peer node-east-3' },
  { timestamp: '12:54:05', type: 'success', message: 'Resolved synchronization delta: LWW client wins applied.' },
  { timestamp: '12:54:05', type: 'success', message: 'SUCCESS state fully synchronized. Ready.' },
]

export function DeveloperConsole() {
  const [activeTab, setActiveTab] = useState<'vaultsync' | 'devbox' | 'aegis'>('vaultsync')
  const [logs, setLogs] = useState<LogLine[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const consoleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight
    }
  }, [logs])

  // Stream logs on page load
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < startupLogs.length) {
        const nextLog = startupLogs[index]
        setLogs((prev) => [...prev, nextLog])
        index++
      } else {
        setIsFinished(true)
        clearInterval(timer)
      }
    }, 350)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full rounded-2xl border border-border bg-card text-foreground shadow-2xl overflow-hidden font-mono text-sm max-w-full lg:max-w-[450px] xl:max-w-[480px]">
      {/* Title Bar (macOS style buttons) */}
      <div className="flex items-center justify-between border-b border-border bg-muted/70 px-4 py-3 select-none">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56] transition-opacity hover:opacity-80" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E] transition-opacity hover:opacity-80" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F] transition-opacity hover:opacity-80" />
        </div>
        <div className="text-xs text-muted-foreground/85">terminal &mdash; zsh</div>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-border bg-muted/40 text-xs">
        <button
          onClick={() => setActiveTab('vaultsync')}
          className={`flex items-center gap-1.5 border-r border-border px-4 py-2.5 transition-colors cursor-pointer select-none ${
            activeTab === 'vaultsync' ? 'bg-card text-foreground font-semibold border-t-2 border-t-primary' : 'text-muted-foreground/80 hover:bg-muted/30 hover:text-foreground'
          }`}
        >
          <Terminal size={12} className="text-teal-600 dark:text-teal-400" />
          vaultsync.log
        </button>
        <button
          onClick={() => setActiveTab('devbox')}
          className={`flex items-center gap-1.5 border-r border-border px-4 py-2.5 transition-colors cursor-pointer select-none ${
            activeTab === 'devbox' ? 'bg-card text-foreground font-semibold border-t-2 border-t-primary' : 'text-muted-foreground/80 hover:bg-muted/30 hover:text-foreground'
          }`}
        >
          <Settings size={12} className="text-amber-600 dark:text-amber-400" />
          devbox.yaml
        </button>
        <button
          onClick={() => setActiveTab('aegis')}
          className={`flex items-center gap-1.5 border-r border-border px-4 py-2.5 transition-colors cursor-pointer select-none ${
            activeTab === 'aegis' ? 'bg-card text-foreground font-semibold border-t-2 border-t-primary' : 'text-muted-foreground/80 hover:bg-muted/30 hover:text-foreground'
          }`}
        >
          <FileJson size={12} className="text-blue-600 dark:text-blue-400" />
          aegis.json
        </button>
      </div>

      {/* Code Console Screen */}
      <div ref={consoleContainerRef} className="h-[280px] overflow-y-auto no-scrollbar p-4 select-text leading-relaxed">
        {activeTab === 'vaultsync' && (
          <div className="space-y-1 text-xs">
            {logs.map((log, index) => log && (
              <div key={index} className="flex gap-2">
                <span className="text-muted-foreground/50 shrink-0 select-none">[{log.timestamp}]</span>
                <span
                  className={`shrink-0 uppercase font-semibold select-none ${
                    log.type === 'success'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : log.type === 'warn'
                        ? 'text-amber-600 dark:text-amber-400'
                        : log.type === 'error'
                          ? 'text-rose-600 dark:text-rose-400'
                          : 'text-blue-600 dark:text-blue-400'
                  }`}
                >
                  {log.type.padEnd(7)}
                </span>
                <span className="text-foreground break-all">{log.message}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'devbox' && (
          <pre className="text-xs text-foreground whitespace-pre">
            <code>
              <span className="text-teal-600 dark:text-teal-400">name</span>: <span className="text-amber-700 dark:text-amber-200">devbox-local</span>{'\n'}
              <span className="text-teal-600 dark:text-teal-400">version</span>: <span className="text-emerald-600 dark:text-emerald-400">1.0.0</span>{'\n'}
              <span className="text-teal-600 dark:text-teal-400">services</span>:{'\n'}
              {'  '}<span className="text-teal-600 dark:text-teal-400">db</span>:{'\n'}
              {'    '}<span className="text-teal-600 dark:text-teal-400">image</span>: <span className="text-amber-700 dark:text-amber-200">postgres:15</span>{'\n'}
              {'    '}<span className="text-teal-600 dark:text-teal-400">ports</span>: [<span className="text-emerald-600 dark:text-emerald-400">5432:5432</span>]{'\n'}
              {'  '}<span className="text-teal-600 dark:text-teal-400">api</span>:{'\n'}
              {'    '}<span className="text-teal-600 dark:text-teal-400">build</span>: <span className="text-amber-700 dark:text-amber-200">./backend</span>{'\n'}
              {'    '}<span className="text-teal-600 dark:text-teal-400">env</span>:{'\n'}
              {'      '}<span className="text-teal-600 dark:text-teal-400">PORT</span>: <span className="text-emerald-600 dark:text-emerald-400">8080</span>{'\n'}
              {'      '}<span className="text-teal-600 dark:text-teal-400">ENCRYPTION</span>: <span className="text-amber-700 dark:text-amber-200">age</span>{'\n'}
              <span className="text-teal-600 dark:text-teal-400">secrets</span>:{'\n'}
              {'  '}<span className="text-teal-600 dark:text-teal-400">encrypted</span>: <span className="text-blue-600 dark:text-blue-400">true</span>{'\n'}
              {'  '}<span className="text-teal-600 dark:text-teal-400">provider</span>: <span className="text-amber-700 dark:text-amber-200">devbox.age-key</span>
            </code>
          </pre>
        )}

        {activeTab === 'aegis' && (
          <pre className="text-xs text-foreground whitespace-pre">
            <code>
              {'{'}{'\n'}
              {'  '}<span className="text-indigo-600 dark:text-teal-400">&quot;$schema&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;aegis/rebac/v1&quot;</span>,{'\n'}
              {'  '}<span className="text-indigo-600 dark:text-teal-400">&quot;namespace&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;repository&quot;</span>,{'\n'}
              {'  '}<span className="text-indigo-600 dark:text-teal-400">&quot;relations&quot;</span>: {'{'}{'\n'}
              {'    '}<span className="text-indigo-600 dark:text-teal-400">&quot;owner&quot;</span>: [<span className="text-amber-700 dark:text-amber-300">&quot;user&quot;</span>],{'\n'}
              {'    '}<span className="text-indigo-600 dark:text-teal-400">&quot;maintainer&quot;</span>: [<span className="text-amber-700 dark:text-amber-300">&quot;user&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;repository#owner&quot;</span>],{'\n'}
              {'    '}<span className="text-indigo-600 dark:text-teal-400">&quot;writer&quot;</span>: [<span className="text-amber-700 dark:text-amber-300">&quot;user&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;repository#maintainer&quot;</span>],{'\n'}
              {'    '}<span className="text-indigo-600 dark:text-teal-400">&quot;reader&quot;</span>: [<span className="text-amber-700 dark:text-amber-300">&quot;user&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;repository#writer&quot;</span>]{'\n'}
              {'  '}{'},'}{'\n'}
              {'  '}<span className="text-indigo-600 dark:text-teal-400">&quot;tuples&quot;</span>: [{'\n'}
              {'    '}{'{'}{'\n'}
              {'      '}<span className="text-indigo-600 dark:text-teal-400">&quot;user&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;user:parv&quot;</span>,{'\n'}
              {'      '}<span className="text-indigo-600 dark:text-teal-400">&quot;relation&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;owner&quot;</span>,{'\n'}
              {'      '}<span className="text-indigo-600 dark:text-teal-400">&quot;object&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;repo:vaultsync&quot;</span>{'\n'}
              {'    '}{'},'}{'\n'}
              {'    '}{'{'}{'\n'}
              {'      '}<span className="text-indigo-600 dark:text-teal-400">&quot;user&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;user:guest&quot;</span>,{'\n'}
              {'      '}<span className="text-indigo-600 dark:text-teal-400">&quot;relation&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;reader&quot;</span>,{'\n'}
              {'      '}<span className="text-indigo-600 dark:text-teal-400">&quot;object&quot;</span>: <span className="text-amber-700 dark:text-amber-300">&quot;repo:vaultsync&quot;</span>{'\n'}
              {'    '}{'}'}{'\n'}
              {'  ]'}{'\n'}
              {'}'}
            </code>
          </pre>
        )}
      </div>

      {/* Terminal Actions Footer */}
      <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-3">
        <div className="text-[10px] text-muted-foreground/80 flex items-center gap-1.5 select-none">
          <span className={`h-1.5 w-1.5 rounded-full inline-block ${isFinished ? 'bg-emerald-600 dark:bg-emerald-400' : 'bg-amber-500 animate-pulse'}`} />
          {isFinished ? 'system status: synchronized' : 'active session: streaming daemon...'}
        </div>
        <div className="text-[10px] text-muted-foreground/80 font-mono select-none">
          UTF-8
        </div>
      </div>
    </div>
  )
}
