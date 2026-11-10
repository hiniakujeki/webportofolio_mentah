export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'Full Stack' | 'Creative Frontend' | 'UI/UX Design' | 'Interactive'
  year: string
  client: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  metrics?: { label: string; value: string }[]
  keyFeatures: string[]
}

export interface ExpertiseItem {
  id: string
  title: string
  number: string
  tagline: string
  description: string
  coreStack: string[]
  specialties: string[]
  codePreview?: string
}

export interface JourneyItem {
  id: string
  period: string
  role: string
  organization: string
  type: 'experience' | 'education' | 'achievement'
  description: string
  highlights: string[]
  location: string
}

export interface BeyondItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  aspect: 'tall' | 'wide' | 'square'
  quote?: string
}
