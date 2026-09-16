
export const profile = {
  name: 'Samantha Oh',
  location: 'Melbourne, Australia',
  email: 'samanthaohjiajia@gmail.com',
  phone: '04 5267 0239',
  linkedin: 'https://www.linkedin.com/in/samantha-oh-a1b0aa252', 
  github: 'https://github.com/Samanthaaaa0', 
  tagline: 'Coding tutor',
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

export type DemoGif = {
  src: string
  title: string
  caption: string
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
  thesis?: string
  site?:ProjectLink
  demoGifs?: DemoGif[]
  caseStudy?: CaseStudySection[]
  proof?: ProofOfWork
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
      'Extended the PIBT multi-agent pathfinding algorithm with deadlock and livelock detection, Push-and-Swap recovery, and corridor-based coordination mechanisms, then evaluated the approach through simulation.',
    github: 'https://github.com/Samanthaaaa0/pathfinding_for_games',
    thesis: '/thesis/PIBT-Thesis.pdf',
    bullets: [
      'Investigated improvements to the PIBT algorithm for multi-agent pathfinding.',
      'Benchmarked algorithm performance across varied simulation scenarios.',
    ],
    techList: ['Python', 'Algorithms', 'Multi-Agent Systems', 'Simulation & Benchmarking'],
    blurb:
      'An algorithm research project exploring how PIBT can recover from complex multi-agent deadlocks and livelocks while preserving its decentralised coordination model.',
    demoGifs: [
      {
        src: `${import.meta.env.BASE_URL}/demo/image1.gif`,
        title: 'Deadlock Resolution I',
        caption: 'Demonstration of the extended PIBT algorithm resolving a multi-agent deadlock.',
      },
      {
        src: `${import.meta.env.BASE_URL}/demo/image2.gif`,
        title: 'Deadlock Resolution II',
        caption: 'Another simulation demonstrating deadlock resolution in a constrained environment.',
      },
    ],
    caseStudy: [
      {
        label: '01',
        heading: 'Overview',
        paragraph:
          'PIBT (Priority Inheritance with Backtracking) is a decentralised algorithm for Multi-Agent Path Finding (MAPF), where multiple agents must navigate a shared environment without collisions. This project investigated how PIBT could be extended to better handle difficult coordination scenarios such as deadlocks and livelocks, where agents become trapped in cyclic patterns and stop making meaningful progress. \n\n \
          The research focused on improving coordination while preserving PIBT\'s lightweight, decentralised design rather than replacing the underlying algorithm.',
      },
      {
        label: '02',
        heading: 'Approach',
        paragraph:
          'The project kept PIBT as the core coordination algorithm and introduced additional recovery mechanisms that activate when PIBT cannot resolve a conflict.The main extensions were:',
        bullets: [
          'Deadlock detection: Identified cyclic dependencies when an agent\'s intended movement was blocked and PIBT\'s backtracking could not find a valid alternative.',
          'Push-and-Swap recovery: Integrated push and swap operations to break circular dependencies and free blocked agents.',
          'Corridor-based swapping: Extended the swap mechanism for larger deadlocks by temporarily creating space and sequentially moving agents through a corridor.',
          'Livelock detection: Developed a push-counter matrix to identify repeated cyclic behaviour and distinguish persistent livelocks from temporary congestion.',
          'Priority freezing: Temporarily fixed the priorities of agents involved in a livelock so the resulting dependency structure could be analysed and resolved.',
          'State restoration: Implemented a restoration mechanism to return agents to consistent configurations after push-and-swap operations.',
        ],
      },
      {
        label: '03',
        heading: 'Methodology',
        paragraph:
        'The algorithm was implemented and evaluated in Python using controlled 2D grid-based simulations. The experimental environment consisted of homogeneous agents moving synchronously through static environments, with each agent occupying one grid cell and being able to move to a neighbouring cell or remain stationary. PIBT was used as the baseline, with the proposed extensions integrated into its existing coordination loop. Deadlocks were detected by analysing blocking relationships between agents, while livelocks were identified using a push-counter matrix that tracked repeated priority-inheritance interactions between agents.\n\nWhen a deadlock was detected, the system attempted Push-and-Swap recovery. For larger multi-agent cycles, a corridor-based swap mechanism was used to sequentially reposition agents and break the circular dependency. Livelocks were handled by temporarily freezing the priorities of the affected agents and converting unresolved cyclic behaviour into a deadlock state that could be processed by the same recovery mechanisms.\n\nThe implementation used Python to support rapid prototyping and experimentation with different algorithmic behaviours and detection thresholds. Simulation-based testing was then used to evaluate the behaviour and performance of the extended algorithm across different grid configurations and multi-agent scenarios.'
      },
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
    proof: {
      note: 'The original deployment and repository are no longer publicly available. These screenshots show selected interfaces from the completed project.',
      images: [
        {
          src: `${import.meta.env.BASE_URL}meats/home.png`,
          alt: 'M-Eats restaurant home page',
          caption: 'Restaurant Home',
        },
        {
          src: `${import.meta.env.BASE_URL}meats/restaurants.png`,
          alt: 'M-Eats restaurants list',
          caption: 'Restaurant List',
        },
        {
          src: `${import.meta.env.BASE_URL}meats/filter.png`,
          alt: 'M-eats restaurants filter',
          caption: 'Restaurant Filtering',
        },
        {
          src: `${import.meta.env.BASE_URL}meats/review.png`,
          alt: 'M-Eats review page',
          caption: 'Review Submission',
        },
        {
          src: `${import.meta.env.BASE_URL}meats/vendorpage.png`,
          alt: 'M-eats Vendor home page',
          caption: 'Vendor Home',
        },
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