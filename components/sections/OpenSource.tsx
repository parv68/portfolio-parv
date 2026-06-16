'use client'

import { useEffect, useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { openSourceStats } from '@/lib/data'
import { ExternalLink, Star, GitFork, BookOpen } from 'lucide-react'

interface Repository {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

export function OpenSource() {
  const [stats, setStats] = useState({
    commits: openSourceStats.commits,
    repos: openSourceStats.repos,
    followers: 12,
  })
  const [repos, setRepos] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch profile metrics
        const profileRes = await fetch('https://api.github.com/users/parv68')
        if (profileRes.ok) {
          const profileData = await profileRes.json()
          setStats({
            commits: openSourceStats.commits, // Keep commits as mock
            repos: profileData.public_repos || openSourceStats.repos,
            followers: profileData.followers || 12,
          })
        }

        // Fetch recent repositories
        const reposRes = await fetch('https://api.github.com/users/parv68/repos?sort=updated&per_page=3')
        if (reposRes.ok) {
          const reposData = await reposRes.json()
          const formattedRepos = reposData.map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'No description provided.',
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language || 'TypeScript',
          }))
          setRepos(formattedRepos)
        }
      } catch (err) {
        console.error('Error fetching github data', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <section
      id="opensource"
      className="bg-secondary px-6 py-16 md:py-20 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1000px]">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Open Source Contributions
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I actively contribute to open source and believe good software
            should be accessible to everyone.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="rounded-[16px] border border-border bg-background p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="font-display text-5xl">
                {stats.commits}+
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.05em] text-muted-foreground">
                Commits
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-[16px] border border-border bg-background p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="font-display text-5xl">{stats.repos}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.05em] text-muted-foreground">
                Repos
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-[16px] border border-border bg-background p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="font-display text-5xl">
                {stats.followers}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.05em] text-muted-foreground">
                Followers
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Recent Repositories Grid */}
        {repos.length > 0 && (
          <FadeIn delay={0.25}>
            <div className="mt-16">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground font-mono">
                <BookOpen size={18} className="text-primary" />
                Latest Active Repositories
              </h3>
              <div className="grid gap-6 sm:grid-cols-3">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-border bg-background p-5 hover:border-primary hover:shadow-sm transition-all group duration-200"
                  >
                    <h4 className="font-mono text-sm font-bold text-primary group-hover:underline flex items-center justify-between">
                      {repo.name}
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {repo.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                      <span className="inline-flex items-center rounded bg-accent px-1.5 py-0.5 text-accent-foreground font-semibold">
                        {repo.language}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-0.5">
                          <Star size={10} />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork size={10} />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/parv68"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-[#115E59]"
            >
              View GitHub Profile <ExternalLink size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

