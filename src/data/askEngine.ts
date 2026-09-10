import { profile, experience, education, projects, skills } from './resumeData'

type Rule = {
  keywords: string[]
  answer: () => string
}

const allSkills = Object.values(skills).flat().join(', ')
const projectTitles = projects.map((p) => p.title).join(', ')

const rules: Rule[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'yo', 'sup'],
    answer: () => `hey hey! I'm ${profile.name.split(' ')[0]} 👋 ask me about my skills, projects, experience or what I'm looking for!`,
  },
  {
    keywords: ['skill', 'stack', 'tech', 'language', 'know', 'good at'],
    answer: () => `I work across ${allSkills}. Python and full-stack web (React + TypeScript) are what I reach for most.`,
  },
  {
    keywords: ['project', 'built', 'build', 'portfolio', 'work on'],
    answer: () => `I've built ${projectTitles}. Scroll up to the projects section for the full details — or ask me about a specific one!`,
  },
  {
    keywords: ['photobooth'],
    answer: () => `Online Photobooth is a React + TypeScript + Vite app — capture, select, edit and decorate photos in a multi-stage flow. Still in progress!`,
  },
  {
    keywords: ['pathfinding', 'pibt', 'research', 'algorithm'],
    answer: () => `My pathfinding research looked at optimising the PIBT algorithm for multi-agent systems — benchmarking performance across different scenarios.`,
  },
  {
    keywords: ['m-eats', 'meats', 'restaurant'],
    answer: () => `M-Eats is a full-stack restaurant review platform — HTML, CSS, JS, SQL, with React-driven features and a real database backend.`,
  },
  {
    keywords: ['dressup', 'wardrobe', 'ios', 'swift'],
    answer: () => `DressUp is an iOS wardrobe app I built in Swift as part of an iOS development project.`,
  },
  {
    keywords: ['experience', 'job', 'tutor', 'teach', 'current role'],
    answer: () =>
      `Right now I'm a ${experience[0].role} at ${experience[0].company} — teaching Python, Scratch, Roblox Studio and robotics, and coaching students for competitions like the AIO and UK Bebras.`,
  },
  {
    keywords: ['education', 'university', 'degree', 'study', 'monash', 'school'],
    answer: () => `I studied ${education.degree} at ${education.school} (${education.period}). Also placed Top 25 in the Monash Coding League 2023!`,
  },
  {
    keywords: ['open to work', 'hiring', 'available', 'looking for', 'job search', 'seeking', 'role', 'opportunit'],
    answer: () => profile.seeking,
  },
  {
    keywords: ['contact', 'email', 'reach', 'linkedin', 'github', 'hire you'],
    answer: () => `Best way to reach me is ${profile.email} — or find me on LinkedIn / GitHub via the links at the top!`,
  },
  {
    keywords: ['language', 'speak', 'mandarin', 'malay'],
    answer: () => `I speak English and Mandarin fluently, and Malay at a proficient level.`,
  },
  {
    keywords: ['interest', 'hobby', 'fun', 'like', 'y2k', 'aesthetic', 'dance'],
    answer: () =>
      `Outside of code — I was President of the Monash Dance Society, and honestly? I'm a sucker for anything Y2K, interactive, and a little chaotic-cute. Can you tell? ✨`,
  },
  {
    keywords: ['who are you', 'about you', 'yourself', 'tell me about'],
    answer: () => profile.summary,
  },
  {
    keywords: ['thank', 'thanks', 'thx', 'cool', 'nice'],
    answer: () => `anytime! feel free to poke around more, or reach out at ${profile.email} 💗`,
  },
]

const FALLBACKS = [
  "hmm, I don't have a canned answer for that one — try asking about my skills, projects, experience or education!",
  "not sure I caught that! ask me about my projects, what I'm looking for, or how to reach me.",
  "I'm just a lil rule-based bot, not the real deal 😅 try asking about my skills or projects!",
]

export function getAnswer(question: string): string {
  const q = question.toLowerCase()
  for (const rule of rules) {
    if (rule.keywords.some((k) => q.includes(k))) {
      return rule.answer()
    }
  }
  return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)]
}

export const SUGGESTED_QUESTIONS = [
  'What are your skills?',
  'What projects have you built?',
  'Are you open to work?',
  'Tell me about yourself',
]
