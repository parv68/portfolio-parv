'use client'

import { useState, useEffect } from 'react'
import { Tag } from './Tag'
import type { Project } from '@/lib/data'

const statusConfig = {
  development: {
    label: 'In Development',
    className: 'bg-[#FEF3C7] text-[#92400E]',
  },
  rc: {
    label: 'RC1 / Beta',
    className: 'bg-[#DBEAFE] text-[#1E40AF]',
  },
  stable: {
    label: 'Stable',
    className: 'bg-[#D1FAE5] text-[#065F46]',
  },
} as const

const visualizerConfig = {
  'VaultSync': {
    title: 'local-state-sync-visualizer',
    buttonLabel: 'Sync State',
    steps: ['Client Edit', 'Replicate', 'Synchronized'],
  },
  'DevBox OS': {
    title: 'sandbox-orchestration-visualizer',
    buttonLabel: 'Deploy Env',
    steps: ['Init Sandbox', 'Encrypt', 'Mount Volume'],
  },
  'Aegis': {
    title: 'rebac-auth-evaluator-visualizer',
    buttonLabel: 'Check Relation',
    steps: ['Resolve Path', 'Verify Tuple', 'Access Granted'],
  },
  'StegaShare': {
    title: 'stegashare-pipeline-visualizer',
    buttonLabel: 'Conceal File',
    steps: ['Compress File', 'Encrypt GCM', 'Weave LSB'],
  },
} as const

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status]
  const [isHighlighted, setIsHighlighted] = useState(false)

  // Visualizer Animation state
  const [wfStatus, setWfStatus] = useState<'idle' | 'running' | 'completed'>('idle')
  const [activeStep, setActiveStep] = useState<number | null>(null)

  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const tech = (e as CustomEvent).detail
      if (tech && project.stack.includes(tech)) {
        setIsHighlighted(true)
      } else {
        setIsHighlighted(false)
      }
    }
    window.addEventListener('highlight-tech', handleHighlight)
    return () => window.removeEventListener('highlight-tech', handleHighlight)
  }, [project.stack])

  const runWorkflow = () => {
    if (wfStatus === 'running') return
    setWfStatus('running')
    setActiveStep(0)

    setTimeout(() => {
      setActiveStep(1)
      setTimeout(() => {
        setActiveStep(2)
        setTimeout(() => {
          setActiveStep(null)
          setWfStatus('completed')
        }, 800)
      }, 800)
    }, 800)
  }

  const viz = visualizerConfig[project.name as keyof typeof visualizerConfig]

  return (
    <div
      className={`group rounded-[16px] border bg-card p-6 transition-all duration-300 ${
        isHighlighted
          ? '-translate-y-1 border-primary shadow-[0_4px_24px_rgba(15,118,110,0.15)] bg-accent-dim/10'
          : 'border-border hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]'
      }`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs ${status.className}`}
        >
          {status.label}
        </span>
        {project.featured && (
          <span className="font-mono text-xs text-muted-foreground">
            Featured
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="mt-1 line-clamp-2 text-[15px] text-muted-foreground">
        {project.description}
      </p>

      {/* Interactive Micro-Visualizer */}
      {viz && (
        <div className="mt-4 border border-border bg-background/50 rounded-lg p-3 text-[11px] font-mono select-none">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-border">
            <span className="text-muted-foreground flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {viz.title}
            </span>
            <button
              onClick={runWorkflow}
              className="flex items-center gap-1 rounded bg-primary px-2 py-0.5 text-[10px] text-white hover:bg-[#115E59] transition-colors cursor-pointer font-medium"
            >
              {wfStatus === 'running' ? 'Running...' : wfStatus === 'completed' ? 'Re-run' : viz.buttonLabel}
            </button>
          </div>
          <div className="flex items-center justify-between px-0.5 py-1 gap-1">
            {/* Step 1 */}
            <div
              className={`flex-1 flex items-center justify-center py-2 px-1 rounded border transition-all duration-300 text-[10px] truncate ${
                activeStep === 0
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold scale-[1.02] shadow-[0_0_8px_rgba(16,185,129,0.2)]'
                  : wfStatus === 'completed'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'border-border text-muted-foreground bg-background'
              }`}
              title={viz.steps[0]}
            >
              <span>{viz.steps[0]}</span>
            </div>

            {/* Connector */}
            <div
              className={`h-0.5 w-3 sm:w-6 transition-colors duration-300 ${
                (activeStep !== null && activeStep >= 1) || wfStatus === 'completed'
                  ? 'bg-emerald-500'
                  : activeStep === 0
                    ? 'bg-emerald-300 animate-pulse'
                    : 'bg-border'
              }`}
            />

            {/* Step 2 */}
            <div
              className={`flex-1 flex items-center justify-center py-2 px-1 rounded border transition-all duration-300 text-[10px] truncate ${
                activeStep === 1
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold scale-[1.02] shadow-[0_0_8px_rgba(16,185,129,0.2)]'
                  : wfStatus === 'completed'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'border-border text-muted-foreground bg-background'
              }`}
              title={viz.steps[1]}
            >
              <span>{viz.steps[1]}</span>
            </div>

            {/* Connector */}
            <div
              className={`h-0.5 w-3 sm:w-6 transition-colors duration-300 ${
                (activeStep !== null && activeStep >= 2) || wfStatus === 'completed'
                  ? 'bg-emerald-500'
                  : activeStep === 1
                    ? 'bg-emerald-300 animate-pulse'
                    : 'bg-border'
              }`}
            />

            {/* Step 3 */}
            <div
              className={`flex-1 flex items-center justify-center py-2 px-1 rounded border transition-all duration-300 text-[10px] truncate ${
                activeStep === 2
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold scale-[1.02] shadow-[0_0_8px_rgba(16,185,129,0.2)]'
                  : wfStatus === 'completed'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'border-border text-muted-foreground bg-background'
              }`}
              title={viz.steps[2]}
            >
              <span>{viz.steps[2]}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="mt-4 flex gap-4 font-mono text-xs text-primary">
        {project.links.github && (
          <a href={project.links.github} className="hover:underline">
            GitHub ↗
          </a>
        )}
        {project.links.docs && (
          <a href={project.links.docs} className="hover:underline">
            Docs ↗
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} className="hover:underline">
            Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}
