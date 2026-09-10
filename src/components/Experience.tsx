import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { profile, experience, leadership } from '../data/resumeData'

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl text-grey-light sm:text-5xl"
        >
          A little about me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-2xl font-body text-base leading-relaxed text-grey sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 max-w-2xl font-body text-sm text-turq sm:text-base"
        >
          {profile.seeking}
        </motion.p>

        <div className="mt-14 space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl border border-grey-dim/40 bg-panel p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink/15 text-pink">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-grey-light sm:text-xl">{job.role}</h3>
                    <p className="font-body text-sm text-turq">{job.company}</p>
                  </div>
                </div>
                <span className="font-pixel text-lg text-grey-dim">{job.period}</span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 font-body text-sm leading-relaxed text-grey sm:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turq" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          {leadership.map((item) => (
            <div key={item.org} className="rounded-xl border border-grey-dim/30 bg-panel2 p-5">
              <p className="font-body text-sm font-semibold text-grey-light">{item.role}</p>
              <p className="font-body text-xs text-pink-soft">
                {item.org} · {item.period}
              </p>
              <p className="mt-2 font-body text-xs leading-relaxed text-grey">{item.bullets[0]}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
