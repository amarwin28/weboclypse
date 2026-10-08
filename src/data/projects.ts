export type Category = 'AI' | 'Web' | 'Mobile' | 'Education' | 'Business' | 'Environment' | 'Mobility'

export interface Project {
  name: string
  description: string
  categories: Category[]
  tags: string[]
}

export const CATEGORIES: Category[] = ['AI', 'Web', 'Mobile', 'Education', 'Business', 'Environment', 'Mobility']

// Exactly 14 WEBOCLYPSE Team Projects. Tags only where the technology is known.
export const PROJECTS: Project[] = [
  { name: 'JAS Traders Website', description: 'A professional business website for a paper-bag manufacturing company — company showcase, products and services, customer information and a credible online presence.', categories: ['Web', 'Business'], tags: [] },
  { name: 'AJ Controller', description: 'An Android-based PC controller. Connects a mobile device to a computer over Bluetooth and offers a mobile interface for controlling PC functions and games.', categories: ['Mobile'], tags: ['Android', 'Bluetooth'] },
  { name: 'JARVIS', description: 'A personal AI assistant built with Flutter — AI assistance, task management, alarms and memory-related features, with Android and Windows versions.', categories: ['AI', 'Mobile'], tags: ['Flutter', 'Android', 'Windows'] },
  { name: 'LoanLens AI', description: 'An AI-powered loan assessment and risk-analysis platform with application analysis, risk and confidence indicators, prediction explanations and what-if analysis.', categories: ['AI', 'Business'], tags: [] },
  { name: 'SkillGap AI', description: 'A resume skill-gap analyzer that compares a resume against the skills a job role needs — matched, missing and extra skills, plus recommendations.', categories: ['AI', 'Education'], tags: [] },
  { name: 'FeedGuard AI', description: 'An AI/ML-based feed and quality screening system with feed-quality analysis, anomaly detection, protein screening and an advisory engine.', categories: ['AI'], tags: ['AI/ML'] },
  { name: 'DC Outpass', description: 'A digital college outpass management system for student outpass requests, the approval workflow and related management processes.', categories: ['Education', 'Web'], tags: [] },
  { name: 'CodeVstudio', description: 'A digital development initiative focused on websites, web applications, UI/UX, interactive experiences and 3D digital experiences.', categories: ['Web'], tags: ['UI/UX', '3D'] },
  { name: 'NanoSpark Web Designing', description: 'A web-design and development initiative for websites, digital experiences, business websites and user-focused digital solutions.', categories: ['Web', 'Business'], tags: [] },
  { name: 'KG COMPUTERS', description: 'A full-stack management platform for a computer service business, with an automated admin dashboard and AI-powered marketing and promotional content generation.', categories: ['Business', 'AI'], tags: ['Full-stack'] },
  { name: 'JAL_RAKSHA', description: 'A web application for planning and tracking groundwater and spring recharge projects, with geospatial processing, data visualization and restoration support.', categories: ['Environment', 'Web'], tags: ['Geospatial'] },
  { name: 'Plannora', description: 'An AI-powered study planner that turns notes and syllabus documents into structured study schedules.', categories: ['AI', 'Education'], tags: ['RAG', 'OCR', 'LLM'] },
  { name: 'Memory Lens', description: 'A visual media search engine — search photos and videos using natural language through image embeddings, vector indexing and semantic retrieval.', categories: ['AI'], tags: ['Embeddings', 'Vector index'] },
  { name: 'EV Tracker', description: 'An EV charging station discovery platform — find nearby stations, view station information, discover suitable stations and plan routes efficiently.', categories: ['Mobility'], tags: [] },
]
