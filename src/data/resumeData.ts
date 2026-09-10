// All your resume content lives here — edit this file to update the whole site.

export const profile = {
  name: 'Samantha Oh',
  location: 'Melbourne, Australia',
  email: 'samanthaohjiajia@gmail.com',
  phone: '04 5267 0239',
  linkedin: 'https://linkedin.com/in/', // TODO: paste your full LinkedIn URL
  github: 'https://github.com/', // TODO: paste your full GitHub URL
  tagline: 'Full-stack developer & coding tutor',
  summary:
    "Computer Science (Honours) graduate from Monash University with experience in software development, optimisation and technical education. Comfortable with Python, Java, JavaScript, SQL and full-stack development, with hands-on experience building web and mobile applications. Currently working as a coding tutor, teaching programming and problem-solving while preparing students for coding competitions. Curious, practical and keen to grow through real-world technology roles.",
  seeking:
    "Open to full-time software development, full-stack, or related engineering roles — genuinely not picky, keen to learn wherever I land.",
}

export const experience = [
  {
    role: 'Coding Tutor',
    company: 'Play AI Education',
    period: 'Jun 2025 — Present',
    bullets: [
      'Teach Python, Scratch, Roblox Studio (Lua) and robotics to students across different programming levels.',
      'Prepare students for coding and problem-solving competitions including the Australian Informatics Olympiad (AIO), UK Bebras and robotics competitions.',
      'Develop lessons and coding exercises covering programming fundamentals, algorithms, logic and debugging.',
      'Adapt explanations and teaching approaches to help students break down complex problems and build confidence in problem-solving.',
    ],
  },
]

export const leadership = [
  {
    role: 'President & Web Developer',
    org: 'Monash Dance Society',
    period: '2024 — 2025',
    bullets: ['Maintained the society website and ticketing functionality using HTML and CSS.'],
  },
  {
    role: 'Monash Ambassador',
    org: 'Monash University',
    period: '2024',
    bullets: ['Represented Monash at Open Day, answering questions and guiding prospective students and guests.'],
  },
]

export const education = {
  school: 'Monash University',
  degree: 'Bachelor of Computer Science (Honours)',
  period: '2022 — 2026',
  extras: [
    { label: 'Achievement', value: 'Monash Coding League 2023 — Top 25' },
    { label: 'Certification', value: 'Working with Children Check' },
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Mandarin', level: 'Fluent' },
    { name: 'Malay', level: 'Proficient' },
  ],
}

export type Project = {
  id: string
  title: string
  period: string
  stack: string
  status?: string
  description: string
  bullets?: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'photobooth',
    title: 'Online Photobooth',
    period: '2025',
    stack: 'React · TypeScript · Vite',
    status: 'In progress',
    description:
      'An interactive web-based photobooth with a multi-stage workflow: capture, select, edit and decorate your photos.',
    link: '', // TODO: add your live link or repo
  },
  {
    id: 'pathfinding',
    title: 'Pathfinding Optimisation Research',
    period: '2025',
    stack: 'Python · Algorithms Research',
    description:
      'Researched optimisation approaches for the PIBT pathfinding algorithm in multi-agent systems, evaluating performance across different scenarios.',
    bullets: [
      'Investigated improvements to the PIBT algorithm for multi-agent pathfinding.',
      'Benchmarked algorithm performance across varied simulation scenarios.',
    ],
    link: '',
  },
  {
    id: 'm-eats',
    title: 'M-Eats',
    period: '2024',
    stack: 'HTML · CSS · JavaScript · React · SQL',
    description:
      'A full-stack restaurant review platform with database-backed features and React-driven interactivity.',
    link: '',
  },
  {
    id: 'dressup',
    title: 'DressUp',
    period: '2024',
    stack: 'Swift · iOS',
    description: 'An online wardrobe iOS app built as part of an iOS development project.',
    link: '',
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  Web: ['HTML', 'CSS', 'JavaScript', 'Full-Stack Development'],
  Mobile: ['Flutter', 'Swift', 'Java'],
  Core: ['OOP', 'Data Structures & Algorithms', 'Databases', 'Optimisation'],
  Other: ['Problem Solving', 'Debugging', 'Project Management', 'Git'],
}
