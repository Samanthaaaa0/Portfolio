import { motion } from 'framer-motion'
import { skills } from '../data/resumeData'

const CATEGORY_COLORS: Record<string, string> = {
  Languages: 'bg-pink/15 text-pink border-pink/30 hover:bg-pink hover:text-ink',
  Web: 'bg-turq/15 text-turq border-turq/30 hover:bg-turq hover:text-ink',
  Mobile: 'bg-pink-soft/15 text-pink-soft border-pink-soft/30 hover:bg-pink-soft hover:text-ink',
  Core: 'bg-grey-light/10 text-grey-light border-grey-light/30 hover:bg-grey-light hover:text-ink',
  Other: 'bg-turq/10 text-turq border-turq/20 hover:bg-turq hover:text-ink',
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl text-grey-light sm:text-5xl"
        >
          What I work with
        </motion.h2>

        <div className="mt-12 space-y-8">
          {Object.entries(skills).map(([category, items], ci) => (
            <div key={category}>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
                className="mb-3 font-body text-sm font-semibold text-grey"
              >
                {category}
              </motion.p>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: ci * 0.05 + i * 0.03 }}
                    whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                    className={`cursor-default rounded-full border px-4 py-1.5 font-body text-sm transition-colors ${
                      CATEGORY_COLORS[category] ?? CATEGORY_COLORS.Other
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
