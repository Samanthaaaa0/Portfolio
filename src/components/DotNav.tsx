import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Welcome' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function DotNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          aria-current={active === s.id}
          className="group relative flex items-center justify-end"
        >
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-full bg-panel2 px-2.5 py-1 text-xs font-body text-grey-light opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id ? 'h-3 w-3 bg-pink' : 'h-2 w-2 bg-grey-dim group-hover:bg-turq'
            }`}
          />
        </a>
      ))}
    </nav>
  )
}
