'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'
import { AnimatePresence, motion } from 'framer-motion'

const categories = ['All', 'Go', 'TypeScript']

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((proj) => proj.stack.includes(activeCategory))

  return (
    <section id="projects" className="px-6 py-16 md:py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
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

