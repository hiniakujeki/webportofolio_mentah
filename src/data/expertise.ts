import type { ExpertiseItem } from '../types'

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Development',
    tagline: 'Precision architecture for modern client experiences.',
    description: 'Specializing in building bulletproof, high-performance web applications with modern component-driven architectures. From responsive layouts to reactive state synchronization, every millisecond is tuned for instant feedback and perceptual speed.',
    coreStack: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Zustand', 'TanStack Query', 'HTML5 / Modern CSS'],
    specialties: [
      'Component Architecture & Design Systems',
      'Complex Client-Side State Management',
      'Web Performance & Core Web Vitals Optimization',
      'Accessibility (WCAG 2.1 AA) Compliance',
      'Responsive & Mobile-First Implementation'
    ],
    codePreview: `// Architectural component pattern
const ResponsiveViewport = ({ children, threshold = 0.15 }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, threshold], [0, 1]);
  const y = useTransform(scrollYProgress, [0, threshold], [40, 0]);

  return (
    <motion.div style={{ opacity, y }} className="relative w-full">
      {children}
    </motion.div>
  );
};`
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Development',
    tagline: 'Scalable infrastructure, clean APIs, and robust data pipelines.',
    description: 'Engineering resilient server architectures, high-throughput REST and GraphQL endpoints, and secure transactional databases. Focused on maintainability, data integrity, and deterministic execution under heavy concurrent load.',
    coreStack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Docker', 'REST / GraphQL'],
    specialties: [
      'Relational & Document Database Schema Design',
      'Secure Authentication & JWT / OAuth Flows',
      'WebSocket Real-Time Bi-Directional Streaming',
      'Caching Strategies & Microsecond Query Optimization',
      'API Gateway & Microservice Coordination'
    ],
    codePreview: `// High-concurrency transaction pipeline
export async function processPipeline<T>(
  streamId: string,
  payload: TransactionPayload
): Promise<Result<T>> {
  const cacheKey = \`stream:\${streamId}:cursor\`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  return db.$transaction(async (tx) => {
    const record = await tx.ledger.create({ data: payload });
    await redis.setex(cacheKey, 60, JSON.stringify(record));
    return ok(record);
  });
}`
  },
  {
    id: 'uiux',
    number: '03',
    title: 'UI/UX Design',
    tagline: 'Bridging the visceral human intuition with rigorous digital logic.',
    description: 'Crafting editorial interfaces, brutalist grid structures, and fluid micro-interactions that leave lasting impressions. Design is not mere decoration; it is the deliberate orchestration of hierarchy, legibility, and emotional resonance.',
    coreStack: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Typography Hierarchy', 'Wireframing', 'User Journey Mapping'],
    specialties: [
      'Editorial Layout & Asymmetric Grid Systems',
      'High-Contrast Dark Mode & Chromatic Palette Strategy',
      'Kinetic Motion Design & Micro-interaction choreography',
      'Rapid High-Fidelity Interactive Prototyping',
      'Usability Auditing & Heuristic Evaluation'
    ],
    codePreview: `/* Design Tokens System */
:root {
  --color-primary-bg: #0A0A0A;
  --color-accent-crimson: #E50914;
  --type-scale-display: clamp(3.5rem, 8vw, 9rem);
  --easing-editorial: cubic-bezier(0.16, 1, 0.3, 1);
  --border-subtle: 1px solid rgba(255, 255, 255, 0.08);
}`
  },
  {
    id: 'creative-dev',
    number: '04',
    title: 'Creative Development',
    tagline: 'Pushing browser boundaries with shaders, physics, and canvas magic.',
    description: 'Transforming static web surfaces into living, breathing spatial artifacts. Leveraging WebGL, GLSL fragment shaders, interactive physics, and GPU-accelerated canvas to create unforgettable interactive moments.',
    coreStack: ['WebGL', 'Three.js', 'Framer Motion', 'GLSL Shaders', 'Canvas 2D API', 'Web Audio API', 'Physics Sims'],
    specialties: [
      'Interactive WebGL 3D Geometry & Camera Rigging',
      'Custom Fragment & Vertex Shader Distortions',
      'Physics-Driven Particle Engines & Fluid Simulation',
      'Sound-Reactive Visualizations & Web Audio Nodes',
      'Cinematic Scroll Orchestration & Spatial Parallax'
    ],
    codePreview: `// GLSL Fragment Shader: Red Chromatic Aberration
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float dist = distance(uv, u_mouse);
  float redShift = sin(u_time * 2.0 + dist * 10.0) * 0.04;
  gl_FragColor = vec4(1.0, 0.039, 0.078, 1.0) * (1.0 - dist);
}`
  }
]
