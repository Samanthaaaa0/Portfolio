import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ExternalLink, Ban, ZoomIn } from 'lucide-react'
import type { Project, ProjectImage } from '../data/resumeData'
import ScrollFadeSection from './ScrollFadeSection'
import PathfindingDiagram from './PathfindingDiagram'

type Props = {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<ProjectImage | null>(null)

  // lock background scroll + close on Escape while open (lightbox takes priority)
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKey(e: KeyboardEvent) {
      if (e.key !== 'Escape') return
      setLightbox((current) => {
        if (current) return null
        onClose()
        return current
      })
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  const tech = project.techList ?? project.stack.split('·').map((s) => s.trim()).filter(Boolean)
  const blurb = project.blurb ?? project.description
  const hasGithub = Boolean(project.github)
  const hasThesis = Boolean(project.thesis)
  const hasSite = Boolean(project.site)
  const hasProof = Boolean(project.proof && project.proof.images.length > 0)
  const proofLabel = String((project.caseStudy?.length ?? 0) + 1).padStart(2, '0')

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label={`${project.title} details`}>
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* maximised window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-3 sm:inset-8 md:inset-12 flex flex-col overflow-hidden rounded-2xl border border-turq/30 bg-panel"
      >
        {/* title bar */}
        <div className="relative flex shrink-0 items-center justify-between overflow-hidden border-b border-turq/20 bg-panel2 px-5 py-3">
          <div className="polka-dots-turq-dense pointer-events-none absolute inset-0 opacity-20" />
          <span className="relative font-pixel text-lg text-turq">
            {project.id}.app — {project.status === 'In progress' ? 'building' : 'project details'}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-grey-light transition-colors hover:bg-turq hover:text-ink"
          >
            <X size={18} />
          </button>
        </div>

        {/* body — scrollable, left-aligned */}
        <div ref={scrollRef} className="modal-scroll relative flex-1 overflow-y-auto px-6 py-7 sm:px-10 lg:px-14">
          <div className="polka-dots-turq pointer-events-none absolute inset-0 opacity-[0.15]" />

          <div className="relative max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-3xl text-grey-light sm:text-5xl">{project.title}</h3>
              <span className="font-pixel text-xl text-grey-dim">{project.period}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-turq/40 bg-turq/10 px-3 py-1 font-body text-xs text-turq sm:text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-5 font-body text-base leading-relaxed text-grey-light sm:text-lg">{blurb}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {hasSite && project.site!.status === 'live' && (
                <a
                  href={project.site!.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-turq px-5 py-2.5 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
                >
                  Visit site <ExternalLink size={15} />
                </a>
              )}

              {hasSite && project.site!.status === 'offline' && (
                <button
                  disabled
                  aria-disabled="true"
                  title="This demo isn't live anymore"
                  className="flex cursor-not-allowed items-center gap-2 rounded-full border border-grey-dim/50 px-5 py-2.5 font-body text-sm text-grey-dim"
                >
                  <Ban size={15} /> Demo no longer live
                </button>
              )}

              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-turq/50 px-5 py-2.5 font-body text-sm font-semibold text-turq transition-colors hover:bg-turq hover:text-ink"
                >
                  <ExternalLink size={15} /> GitHub
                </a>
              )}

              {hasThesis && (
                <a
                  href={project.thesis}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-turq/50 px-5 py-2.5 font-body text-sm font-semibold text-turq transition-colors hover:bg-turq hover:text-ink"
                >
                  <ExternalLink size={15} /> Read Thesis
                </a>
              )}

              {!hasSite && !hasGithub && !hasProof && (
                <span className="font-body text-sm italic text-grey-dim">Links coming soon.</span>
              )}
            </div>

            {/* interactive illustrative diagram */}
            {project.interactiveDiagram === 'pathfinding-grid' && (
              <ScrollFadeSection root={scrollRef} className="mt-9 border-t border-turq/15 pt-8">
                <PathfindingDiagram />
              </ScrollFadeSection>
            )}

            {/* deep-dive case study sections */}
            {project.caseStudy?.map((section, i) => (
              <ScrollFadeSection
                key={section.label}
                root={scrollRef}
                className={`${i === 0 && project.interactiveDiagram !== 'pathfinding-grid' ? 'mt-9 border-t border-turq/15 pt-8' : 'mt-7'}`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-pixel text-lg text-turq">{section.label}</span>
                  <h4 className="font-display text-lg text-grey-light sm:text-xl">{section.heading}</h4>
                </div>

                {section.paragraph && (
                  <p className="mt-2.5 font-body text-sm leading-relaxed text-grey sm:text-[15px]">{section.paragraph}</p>
                )}

                {section.bullets && (
                  <ul className="mt-2.5 space-y-1.5">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 font-body text-sm leading-relaxed text-grey sm:text-[15px]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turq" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollFadeSection>
            ))}

            {/* proof of work gallery */}
            {hasProof && (
              <ScrollFadeSection root={scrollRef} className="mt-7 pb-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-pixel text-lg text-turq">{proofLabel}</span>
                  <h4 className="font-display text-lg text-grey-light sm:text-xl">Proof of Work</h4>
                </div>
                {project.proof!.note && (
                  <p className="mt-2.5 font-body text-sm leading-relaxed text-grey sm:text-[15px]">{project.proof!.note}</p>
                )}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.proof!.images.map((img) => (
                    <button
                      key={img.src}
                      onClick={() => setLightbox(img)}
                      aria-label={`Enlarge: ${img.caption ?? img.alt}`}
                      className="group relative overflow-hidden rounded-lg border border-turq/25 bg-panel2 transition-transform hover:-translate-y-0.5"
                    >
                      <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover" />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity group-hover:bg-ink/40 group-hover:opacity-100">
                        <ZoomIn size={18} className="text-turq" />
                      </span>
                      {img.caption && (
                        <span className="block truncate px-2 py-1.5 text-left font-body text-[11px] text-grey">
                          {img.caption}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </ScrollFadeSection>
            )}
          </div>
        </div>
      </motion.div>

      {/* lightbox — sibling of the window so it isn't clipped by its transform */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-6"
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-lg border border-turq/30 object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-grey-light hover:bg-turq hover:text-ink"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}