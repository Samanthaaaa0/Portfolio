import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer id="contact" className="relative px-6 py-28 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl text-grey-light sm:text-5xl"
        >
          Let's talk
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-xl font-body text-grey sm:text-lg"
        >
          {profile.seeking} If any of that sounds like a fit, my inbox is open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 rounded-full border border-grey-dim px-5 py-2.5 font-body text-sm text-grey-light hover:border-turq hover:text-turq"
          >
            <Phone size={16} /> {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-grey-dim px-5 py-2.5 font-body text-sm text-grey-light hover:border-turq hover:text-turq"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-grey-dim px-5 py-2.5 font-body text-sm text-grey-light hover:border-turq hover:text-turq"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        <p className="mt-16 font-pixel text-lg text-grey-dim">
          made with lots of tabs open — {profile.name}, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
