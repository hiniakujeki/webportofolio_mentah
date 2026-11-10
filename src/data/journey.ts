import type { JourneyItem } from '../types'

export const journeyItems: JourneyItem[] = [
  // Experience
  {
    id: 'exp-1',
    type: 'experience',
    period: '2024 — PRESENT',
    role: 'Creative Web Developer & Digital Engineer',
    organization: 'Independent Practice / Studio Freelance',
    location: 'Remote / Global',
    description: 'Directing the architecture and creative engineering of interactive web applications, digital brand platforms, and high-performance frontend interfaces for visionary clients.',
    highlights: [
      'Architected bespoke digital experiences blending Framer Motion and modern React',
      'Developed low-latency frontend applications with custom design systems',
      'Collaborated closely with designers and product teams to translate Figma prototypes into pixel-perfect code'
    ]
  },
  {
    id: 'exp-2',
    type: 'experience',
    period: '2023 — 2024',
    role: 'Frontend Developer Intern / Junior Engineer',
    organization: 'Technology Solutions & Digital Agency',
    location: 'Indonesia',
    description: 'Contributed to client web applications, component libraries, responsive UI redesigns, and backend API integrations across production environments.',
    highlights: [
      'Refactored legacy UI components into reusable TypeScript React modules',
      'Improved lighthouse performance scores across key landing pages by 30%',
      'Integrated RESTful API endpoints and implemented robust form validation pipelines'
    ]
  },
  {
    id: 'exp-3',
    type: 'experience',
    period: '2022 — 2023',
    role: 'Web Development & UI Research Fellow',
    organization: 'Campus Tech Initiative & Open Source Guild',
    location: 'Indonesia',
    description: 'Led student developer study groups on modern JavaScript ecosystems, UI/UX design fundamentals, and open-source contributions.',
    highlights: [
      'Authored interactive coding workshops attended by 100+ participants',
      'Built community project showcases and internal documentation portals'
    ]
  },

  // Education
  {
    id: 'edu-1',
    type: 'education',
    period: '2021 — 2025',
    role: 'Bachelor of Computer Science / Information Technology',
    organization: 'University Engineering Faculty',
    location: 'Indonesia',
    description: 'Comprehensive academic study focusing on software engineering principles, algorithms, data structures, human-computer interaction, and modern web architectures.',
    highlights: [
      'Focus: Advanced Web Technologies, Software Architecture & UI Engineering',
      'Capstone Research: Interactive WebGL Interface Optimization for Low-Power Devices',
      'Active leadership in technology and creative developer clubs'
    ]
  },
  {
    id: 'edu-2',
    type: 'education',
    period: '2023',
    role: 'Advanced Creative Development & Shaders Specialization',
    organization: 'Self-Directed Creative Coding Intensive',
    location: 'Online',
    description: 'Rigorous coursework in GLSL fragment shaders, Three.js 3D mathematical rendering, physics simulations, and generative art algorithms.',
    highlights: [
      'Deep dive into GPU pipeline, vector calculus for graphics, and spatial transformations',
      'Produced series of generative audiovisual experiments on GitHub and CodePen'
    ]
  },

  // Achievements
  {
    id: 'ach-1',
    type: 'achievement',
    period: '2024',
    role: 'Finalist / Best Interface Innovation',
    organization: 'National Web Innovation Challenge',
    location: 'National Competition',
    description: 'Recognized for building an experimental accessible web platform featuring spatial audio guidance and high-contrast brutalist design.',
    highlights: [
      'Selected among top 5 finalists out of 250+ national engineering teams',
      'Praised by industry jury for novel micro-interactions and strict WCAG compliance'
    ]
  },
  {
    id: 'ach-2',
    type: 'achievement',
    period: '2024',
    role: 'Open Source Contributor & Showcase Feature',
    organization: 'Creative Dev Community Spotlight',
    location: 'Global Open Source',
    description: 'Featured in developer roundups for experimental interactive UI components and custom Framer Motion transition hooks.',
    highlights: [
      'Gathered 300+ stars across open-source creative frontend repositories',
      'Adopted by indie developers building experimental portfolio platforms'
    ]
  },
  {
    id: 'ach-3',
    type: 'achievement',
    period: '2023',
    role: 'Dean’s Academic & Innovation Honors',
    organization: 'Faculty of Computer Science',
    location: 'University',
    description: 'Awarded academic distinction for outstanding project execution in software engineering and creative digital technologies.',
    highlights: [
      'Maintained top academic standing across software engineering courses',
      'Recognized for exceptional collaborative spirit and project leadership'
    ]
  }
]
