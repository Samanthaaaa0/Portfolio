import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { profile } from '../data/resumeData'
import { SparkleStar, RingShape, HeartShape } from './FloatingShapes'

const NAME = profile.name.split('')

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
}

const letter: Variants = {
  hidden: { opacity: 0, y: 28, rotate: -6 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-6 sm:px-12 lg:px-24"
    >
      {/* decorative floating shapes */}
      <SparkleStar className="absolute left-[8%] top-[18%] text-turq/40 animate-float" />
      <RingShape className="absolute right-[12%] top-[22%] text-pink/30 animate-floatSlow" style={{ animationDelay: '1s' }} />
      <HeartShape className="absolute right-[20%] bottom-[20%] text-pink-soft/40 animate-float" style={{ animationDelay: '2s' }} />
      <SparkleStar className="absolute left-[18%] bottom-[15%] text-pink/30 animate-floatSlow" style={{ animationDelay: '0.5s' }} />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="mb-3 font-pixel text-2xl tracking-wide text-turq"
      >
        hi, welcome to my corner of the internet ✦
      </motion.p>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="font-display text-[15vw] leading-[0.95] tracking-tight text-grey-light sm:text-[10vw] lg:text-[7.5vw]"
        aria-label={profile.name}
      >
        {NAME.map((char, i) => (
          <motion.span key={i} variants={letter} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-4 max-w-xl font-body text-lg text-grey sm:text-xl"
      >
        {profile.tagline} — Monash CS (Honours) grad based in {profile.location}. I build things, break things,
        and teach kids to do the same.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6 }}
        className="mt-8 flex items-center gap-4"
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
        >
          <Mail size={16} /> Say hi
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="rounded-full border border-grey-dim p-2.5 text-grey-light transition-colors hover:border-turq hover:text-turq"
        >
          <Github size={18} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="rounded-full border border-grey-dim p-2.5 text-grey-light transition-colors hover:border-turq hover:text-turq"
        >
          <Linkedin size={18} />
        </a>
      </motion.div>

      <motion.a
        href="#experience"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-grey-dim transition-colors hover:text-turq"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.a>
    </section>
  )
}
