// All your resume content lives here — edit this file to update the whole site.

export const profile = {
  name: 'Samantha Oh',
  location: 'Melbourne, Australia',
  email: 'samanthaohjiajia@gmail.com',
  phone: '04 5267 0239',
  linkedin: 'https://www.linkedin.com/in/samantha-oh-a1b0aa252', 
  github: 'https://github.com/Samanthaaaa0', 
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

export type ProjectLink = {
  url: string
  status: 'live' | 'offline'
}

export type CaseStudySection = {
  label: string // e.g. '01'
  heading: string
  paragraph?: string
  bullets?: string[]
}

export type ProjectImage = {
  src: string
  alt: string
  caption?: string
}

export type ProofOfWork = {
  note?: string
  images: ProjectImage[]
}

export type Project = {
  id: string
  title: string
  period: string
  stack: string
  status?: string
  description: string
  bullets?: string[]
  // Fields below power the "maximised" project detail popup
  techList?: string[]
  blurb?: string
  github?: string
  site?: ProjectLink
  caseStudy?: CaseStudySection[]
  proof?: ProofOfWork
  // Set to render a small interactive illustrative diagram in the popup
  interactiveDiagram?: 'pathfinding-grid'
}

export const projects: Project[] = [
  {
    id: 'photobooth',
    title: 'Online Photobooth',
    period: '2025',
    stack: 'React · TypeScript · Vite',
    status: 'In progress',
    github: 'https://github.com/Samanthaaaa0/online-photobooth',
    description:
      'An interactive web-based photobooth with a multi-stage workflow: capture, select, edit and decorate your photos.',
  },
  {
    id: 'pathfinding',
    title: 'Pathfinding Optimisation Research',
    period: '2025',
    stack: 'Python · Algorithms Research',
    description:
      'Researched optimisation approaches for the PIBT pathfinding algorithm in multi-agent systems, evaluating performance across different scenarios.',
    github: 'https://github.com/Samanthaaaa0/pathfinding_for_games',
      bullets: [
      'Investigated improvements to the PIBT algorithm for multi-agent pathfinding.',
      'Benchmarked algorithm performance across varied simulation scenarios.',
    ],
    techList: ['Python', 'Algorithms', 'Multi-Agent Systems', 'Simulation & Benchmarking'],
    blurb:
      'Research into optimising PIBT, a fast rule-based algorithm for coordinating many agents moving at once without collisions.',
    interactiveDiagram: 'pathfinding-grid',
    caseStudy: [
      {
        label: '01',
        heading: 'Overview',
        paragraph:
          'PIBT (Priority Inheritance with Backtracking) is a lightweight, rule-based algorithm used to coordinate movement for many agents at once in multi-agent pathfinding (MAPF) — the kind of problem behind automated warehouses, simulated crowds and robot fleets. This project explored ways to optimise it further.',
      },
      {
        label: '02',
        heading: 'Approach',
        bullets: [
          'Investigated improvements to the PIBT algorithm for multi-agent pathfinding.',
          'Benchmarked algorithm performance across varied simulation scenarios.',
        ],
      },
      // TODO: once the thesis PDF is shared, expand this with a Methodology
      // and a Results & Findings section using the real abstract/data.
    ],
  },
  {
    id: 'm-eats',
    title: 'M-Eats',
    period: '2024',
    stack: 'Node.js · Express.js · MongoDB Atlas · EJS',
    status: 'Team project',
    description:
      'A full-stack campus restaurant discovery platform for students and vendors — reviews, vendor posts, and JWT + OTP-secured accounts.',
    techList: ['JavaScript', 'Node.js', 'Express.js', 'EJS', 'MongoDB Atlas', 'AWS S3', 'JWT', 'Twilio / SNS', 'HTML', 'CSS'],
    blurb:
      'Full-stack campus restaurant discovery platform with reviews, vendor accounts, JWT + OTP authentication, and S3-hosted images.',
    site: { url: '', status: 'offline' }, // demo no longer live — shown as an inactive state in the popup
    proof: {
      note: "The live demo and repo aren't publicly available anymore, so here's a look at the interface instead.",
      images: [
        { src: '/projects/m-eats/shot-1.svg', alt: 'M-Eats restaurant discovery page', caption: 'Restaurant discovery' },
        { src: '/projects/m-eats/shot-2.svg', alt: 'M-Eats restaurant detail and reviews page', caption: 'Restaurant details & reviews' },
        { src: '/projects/m-eats/shot-3.svg', alt: 'M-Eats vendor dashboard', caption: 'Vendor dashboard' },
      ],
    },
    caseStudy: [
      {
        label: '01',
        heading: 'Overview',
        paragraph:
          'M-eats helps students, staff and visitors discover restaurants across campus, browse restaurant info and reviews, and interact with restaurant content. It supports both customer and vendor accounts, with discovery, search and filtering, reviews, profiles, vendor posts, tags and image uploads.',
      },
      {
        label: '02',
        heading: 'My Role',
        paragraph:
          'Built as a team, with different members owning different areas. I worked mainly on the customer-facing frontend, the Express.js server, and the integration between them.',
        bullets: [
          'Developed customer-facing pages and reusable EJS components',
          'Built the restaurant discovery and restaurant-detail interfaces',
          'Implemented login and account-related interfaces',
          'Developed and connected Express.js routes',
          'Worked with MongoDB-backed functionality',
          'Improved responsive behaviour across desktop and mobile',
          'Tested backend routes and debugged integration issues',
        ],
      },
      {
        label: '03',
        heading: 'System Architecture',
        paragraph:
          'Client/UI → EJS views → Express.js → MongoDB Atlas, with AWS S3 for image storage, JWT + refresh-token cookies for sessions, and Twilio/Amazon SNS for OTP delivery.',
      },
      {
        label: '04',
        heading: 'Key Features',
        bullets: [
          'Restaurant discovery, search and tags',
          'Customer and vendor accounts',
          'Reviews and vendor posts',
          'JWT authentication + OTP two-factor login',
          'AWS S3 image uploads',
          'Responsive desktop and mobile layouts',
        ],
      },
      {
        label: '05',
        heading: 'Challenges & Solutions',
        bullets: [
          'Frontend-backend integration: learned to trace bugs through the full request flow (UI → Express route → database → response) instead of debugging each layer in isolation.',
          'Responsive behaviour: horizontally scrollable restaurant sections needed different interaction logic on desktop vs. mobile — solved with iterative CSS/JS adjustments.',
          'Team collaboration: coordinated changes across a shared codebase using feature branches in Git.',
        ],
      },
      {
        label: '06',
        heading: 'What I Learned',
        paragraph:
          'Gained hands-on experience with Node.js/Express backend development, MongoDB, EJS server-side rendering, JWT and OTP-based authentication, AWS S3 integration, responsive frontend work, and collaborative Git workflows — and a system-level habit of asking "where in the request flow is this breaking?" rather than just "why isn\u2019t this working?"',
      },
    ],
  },
  {
    id: 'dressup',
    title: 'DressUp',
    period: '2024',
    stack: 'Swift · iOS',
    github: 'https://github.com/Samanthaaaa0/DressUp',
    description: 'An online wardrobe iOS app built as part of an iOS development project.',
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  Web: ['HTML', 'CSS', 'JavaScript', 'Full-Stack Development'],
  Mobile: ['Flutter', 'Swift', 'Java'],
  Core: ['OOP', 'Data Structures & Algorithms', 'Databases', 'Optimisation'],
  Other: ['Problem Solving', 'Debugging', 'Project Management', 'Git'],
}