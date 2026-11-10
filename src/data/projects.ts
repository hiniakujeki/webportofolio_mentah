import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'kinetic-engine',
    title: 'KINETIC',
    subtitle: 'Next-Gen Creative Studio WebGL Engine',
    category: 'Creative Frontend',
    year: '2025',
    client: 'Creative Lab Concept',
    description: 'An experimental 3D canvas experience blending generative particle shaders with high-performance responsive layout transitions.',
    longDescription: 'KINETIC is an exploration into pushing browser visual limits without sacrificing 60fps performance. Built with custom GLSL shaders, Three.js, and Framer Motion, it features real-time fluid mouse dissipation, physics-based typography displacement, and responsive touch gestures.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['WebGL', 'Three.js', 'GLSL', 'React', 'Framer Motion', 'TypeScript'],
    liveUrl: 'https://kinetic-concept.demo.app',
    githubUrl: 'https://github.com/dzakirul/kinetic-engine',
    featured: true,
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Bundle Size', value: '< 180kb' },
      { label: 'Lighthouse Score', value: '98/100' }
    ],
    keyFeatures: [
      'Custom fragment shader distortion responding to scroll velocity',
      'Adaptive GPU rendering scaling down on lower-power mobile devices',
      'Accessible keyboard-driven spatial navigation alternative'
    ]
  },
  {
    id: 'nexus-terminal',
    title: 'NEXUS OS',
    subtitle: 'Cybernetic Financial Terminal & Interface',
    category: 'Full Stack',
    year: '2025',
    client: 'FinTech Systems Alpha',
    description: 'Ultra-low latency web terminal visualizing high-frequency market streaming metrics with an uncompromising dark cyberpunk aesthetic.',
    longDescription: 'Designed for quantitative analysts who demand precision. NEXUS OS features real-time WebSocket data feeds, canvas-accelerated order book depth charts, customizable modular widgets, and high-contrast red alert anomalies.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    tags: ['React 19', 'TypeScript', 'Node.js', 'WebSockets', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://nexus-os.demo.app',
    githubUrl: 'https://github.com/dzakirul/nexus-terminal',
    featured: true,
    metrics: [
      { label: 'Data Latency', value: '< 12ms' },
      { label: 'Chart Nodes', value: '50k pts' },
      { label: 'Memory Footprint', value: '45MB' }
    ],
    keyFeatures: [
      'Real-time bi-directional streaming via robust WebSocket channels',
      'Virtual canvas rendering for zero-lag 50,000 datapoints',
      'Keyboard-first hotkey command palette with fuzzy search'
    ]
  },
  {
    id: 'aura-sound',
    title: 'AURA SPATIAL',
    subtitle: 'Spatial Audio E-Commerce & Interactive Player',
    category: 'Interactive',
    year: '2024',
    client: 'Acoustic Soundscapes',
    description: 'An editorial commerce experience for boutique audio gear with integrated Web Audio API 3D spatial sound preview.',
    longDescription: 'Aura treats high-fidelity listening as a tactile digital ritual. Users can rotate 3D earphone models while listening to binaural sound spatialization that shifts based on camera orientation and room geometry simulation.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    tags: ['Web Audio API', 'React', 'Tailwind CSS', 'Zustand', 'Stripe API'],
    liveUrl: 'https://aura-sound.demo.app',
    githubUrl: 'https://github.com/dzakirul/aura-spatial-audio',
    featured: true,
    metrics: [
      { label: 'Spatial Latency', value: '< 5ms' },
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Audio Quality', value: 'Lossless' }
    ],
    keyFeatures: [
      'Interactive Web Audio API convolver node simulating studio acoustics',
      'Custom drag-and-drop playlist builder with instantaneous wave preview',
      'Dark editorial checkout flow optimized for high-ticket hardware'
    ]
  },
  {
    id: 'synapse-ai',
    title: 'SYNAPSE',
    subtitle: 'Cognitive Developer Workspace & Code Intelligence',
    category: 'Full Stack',
    year: '2024',
    client: 'Developer Tooling Concept',
    description: 'An AI-native code editor interface focused on contextual visual graph debugging and multi-file code synthesis.',
    longDescription: 'Synapse reimagines the developer workspace by combining tree-sitter AST parsing with visual architecture maps. Developers see their code dependencies rendered as an interactive node graph with real-time AI suggestions directly embedded.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    tags: ['TypeScript', 'Next.js', 'LLM Streaming', 'Tailwind CSS', 'Prisma', 'Monaco'],
    liveUrl: 'https://synapse-dev.demo.app',
    githubUrl: 'https://github.com/dzakirul/synapse-workspace',
    featured: false,
    metrics: [
      { label: 'Response Time', value: '450ms' },
      { label: 'Token Efficiency', value: '+40%' },
      { label: 'Syntax Trees', value: 'Instant' }
    ],
    keyFeatures: [
      'Visual interactive node graph representing project import hierarchies',
      'Streaming token response with zero layout thrashing',
      'Local-first persistent workspace with encrypted storage'
    ]
  },
  {
    id: 'monolith-space',
    title: 'MONOLITH',
    subtitle: 'Architectural Portfolio & Spatial Archive',
    category: 'UI/UX Design',
    year: '2024',
    client: 'Atelier Monolith',
    description: 'An asymmetrical editorial portfolio crafted for an avant-garde brutalist architecture collective in Kyoto and Berlin.',
    longDescription: 'Monolith contrasts severe typographic proportions with subtle horizontal scrolling transitions and high-resolution monochromatic photography. Every pixel reinforces structural permanence and architectural weight.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Figma to Code', 'Editorial Grid', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://monolith-arch.demo.app',
    githubUrl: 'https://github.com/dzakirul/monolith-portfolio',
    featured: false,
    metrics: [
      { label: 'Editorial Awards', value: 'Honorable' },
      { label: 'Image Load', value: 'Progressive' },
      { label: 'Typography', value: 'Custom Cut' }
    ],
    keyFeatures: [
      'Asymmetrical multi-column masonry with synchronized parallax',
      'Blueprint mode toggle showing underlying layout coordinates',
      'Full-bleed cinema lightbox with smooth gesture pinch-to-zoom'
    ]
  },
  {
    id: 'vortex-protocol',
    title: 'VORTEX',
    subtitle: 'Decentralized Automated Liquidity Protocol',
    category: 'Creative Frontend',
    year: '2023',
    client: 'DeFi Systems',
    description: 'Futuristic decentralized finance portal featuring interactive yield curve simulations and zero-slippage swap routing.',
    longDescription: 'Vortex rejects boring tabular crypto interfaces in favor of dynamic 3D topology graphs representing liquidity pools. Users see pool depth and impermanent loss simulations rendered live as tactile surfaces.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    tags: ['Ethers.js', 'React', 'Canvas 2D', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://vortex-protocol.demo.app',
    githubUrl: 'https://github.com/dzakirul/vortex-liquidity',
    featured: false,
    metrics: [
      { label: 'Simulations', value: 'Real-time' },
      { label: 'Gas Optimization', value: '-22%' },
      { label: 'Uptime', value: '99.99%' }
    ],
    keyFeatures: [
      'Interactive 3D surface mesh modeling liquidity pool concentration',
      'Transaction simulation sandbox previewing exact gas execution',
      'Hardware wallet connection with biometric signature feedback'
    ]
  }
]
