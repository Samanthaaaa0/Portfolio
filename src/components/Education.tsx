import { motion } from 'framer-motion'
import { GraduationCap, Award, ShieldCheck } from 'lucide-react'
import { education } from '../data/resumeData'

const LEVEL_WIDTH: Record<string, string> = {
  Fluent: '100%',
  Proficient: '75%',
}

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl text-grey-light sm:text-5xl"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-2xl border-2 border-dashed border-pink-soft/50 bg-panel p-7 sm:p-9"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-turq/15 text-turq">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl text-grey-light sm:text-2xl">{education.school}</h3>
                <p className="font-body text-sm text-pink-soft sm:text-base">{education.degree}</p>
              </div>
            </div>
            <span className="font-pixel text-xl text-grey-dim">{education.period}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {education.extras.map((e) => (
              <span
                key={e.label}
                className="flex items-center gap-2 rounded-full bg-panel2 px-4 py-2 font-body text-xs text-grey-light sm:text-sm"
              >
                {e.label === 'Achievement' ? <Award size={14} className="text-pink" /> : <ShieldCheck size={14} className="text-turq" />}
                {e.value}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl bg-panel2 p-7 sm:p-9"
        >
          <p className="font-display text-sm text-grey-light sm:text-base">Languages</p>
          <div className="mt-4 space-y-3">
            {education.languages.map((l) => (
              <div key={l.name}>
                <div className="mb-1 flex justify-between font-body text-xs text-grey sm:text-sm">
                  <span>{l.name}</span>
                  <span className="text-turq">{l.level}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink to-turq"
                    style={{ width: LEVEL_WIDTH[l.level] ?? '60%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
