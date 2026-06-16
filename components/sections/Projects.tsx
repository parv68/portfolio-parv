'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'
import { AnimatePresence, motion } from 'framer-motion'

const categories = ['All', 'Rust', 'Go', 'TypeScript']

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((proj) => proj.stack.includes(activeCategory))

  return (
    <section id="projects" className="px-6 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-[120px]">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-12 select-none">
          <div className="flex items-center gap-4 font-mono text-[9px] sm:text-xs font-semibold text-primary tracking-widest uppercase">
            <span>SEC-ID // 02</span>
            <div className="h-[1px] flex-1 border-b border-dashed border-border/80" />
            <span className="text-muted-foreground/40 text-[8px] font-normal">SPEC-DOC_REF_2026</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-4">
            <FadeIn>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
                Featured Projects
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex gap-2 text-xs font-mono select-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-md border transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'border-primary bg-primary text-white font-semibold'
                        : 'border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Project grid with layout animations */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 relative">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

