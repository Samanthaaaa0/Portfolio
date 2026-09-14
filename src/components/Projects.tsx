import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { projects } from '../data/resumeData'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openProject = projects.find((p) => p.id === openId) ?? null

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl text-grey-light sm:text-5xl"
        >
          Things I've built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 max-w-xl font-body text-grey"
        >
          A few windows into what I've been working on. Click one to open it up.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-xl border border-grey-dim/40 bg-panel shadow-[6px_6px_0px_0px_rgba(255,111,176,0.15)]"
            >
              {/* window title bar */}
              <button
                onClick={() => setOpenId(p.id)}
                aria-label={`Open ${p.title} details`}
                className="flex w-full items-center justify-between border-b border-grey-dim/30 bg-panel2 px-4 py-2.5 text-left transition-colors hover:bg-panel2/70"
              >
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-pink" />
                  <span className="h-2.5 w-2.5 rounded-full bg-pink-soft" />
                  <span className="h-2.5 w-2.5 rounded-full bg-turq" />
                </div>
                <span className="flex items-center gap-1.5 font-pixel text-base text-grey-dim">
                  {p.period} <Maximize2 size={12} />
                </span>
              </button>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg text-grey-light">{p.title}</h3>
                  {p.status && (
                    <span className="rounded-full bg-turq/15 px-2.5 py-0.5 font-body text-[11px] text-turq">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-body text-xs text-pink-soft">{p.stack}</p>

                <p className="mt-3 font-body text-sm leading-relaxed text-grey">{p.description}</p>

                {p.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 font-body text-xs leading-relaxed text-grey">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-turq" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5">
                  <button
                    onClick={() => setOpenId(p.id)}
                    className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-pink hover:text-turq"
                  >
                    View details <Maximize2 size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openProject && <ProjectModal project={openProject} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </section>
  )
}
