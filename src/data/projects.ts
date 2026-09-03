import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    title: 'Finora',
    slug: 'finora',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'AI-powered wealth management platform designed for modern financial clarity and effortless portfolio tracking.',
    tags: ['Product Strategy', 'UI/UX Design', 'Design System'],
    year: '2024',
    client: 'Finora Global Inc.',
    industry: 'Fintech / Asset Management',
    problem: 'Traditional wealth management platforms are cluttered with redundant tables, opaque charts, and high cognitive friction, causing high drop-off rates among new-generation investors seeking clear insights.',
    approach: 'We redesigned the product core around progressive disclosure. Complex data visualisations were stripped back to purposeful metric cards, customizable widget drawers, and plain-language financial summaries.',
    outcome: 'Achieved a 42% increase in daily active session length, a 35% growth in user retention over 90 days, and won the 2024 Red Dot Design Award for Financial Interface Design.',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
  },
  {
    title: 'Noma Architecture',
    slug: 'noma',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Editorial digital experience showcasing sustainable residential architecture and sculptural interior spaces.',
    tags: ['Brand Identity', 'Web Development', 'Editorial Design'],
    year: '2024',
    client: 'Noma Design Studio',
    industry: 'Architecture & Luxury Living',
    problem: 'Noma needed a web experience that mirrored the tactile craftsmanship and silent luxury of their physical residential projects, moving away from standard template grid portfolios.',
    approach: 'Crafted a bespoke digital flagship with fluid page transitions, ultra-large imagery, asymmetric editorial grid layouts, and minimal monochrome typography inspired by high-end design monographs.',
    outcome: 'Increased inbound commission inquiries from international property developers by 180% within three months of launch.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
  },
  {
    title: 'Aether Cloud',
    slug: 'aether',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Developer-first cloud orchestration interface built to simplify multi-region Kubernetes deployments.',
    tags: ['UI/UX Design', 'Design System', 'Product Strategy'],
    year: '2023',
    client: 'Aether Systems',
    industry: 'Developer Tools & Cloud Infrastructure',
    problem: 'Engineers spent hours navigating fragmented CLI tools and nested browser tabs just to verify cluster health and rollback failed production builds.',
    approach: 'Built a unified developer workspace featuring real-time node topology maps, keyboard-first navigation shortcuts, and context-aware error diagnostics with inline fix recommendations.',
    outcome: 'Reduced average incident resolution time (MTTR) by 54% across 12,000 active engineering teams.',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
  },
  {
    title: 'Luma Health',
    slug: 'luma-health',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Patient-centric telehealth suite connecting chronic care patients with dedicated medical specialists in real time.',
    tags: ['Mobile & Web UI', 'Accessibility', 'Brand Strategy'],
    year: '2023',
    client: 'Luma Health Tech',
    industry: 'Healthcare & Medical Devices',
    problem: 'Elderly patients managing chronic illness struggled with complex video call links, obscure medication schedules, and unreadable font sizes on standard health portals.',
    approach: 'Designed an WCAG AAA compliant interface prioritizing high-contrast typography, single-tap appointment joins, large touch targets, and automated family caregiver updates.',
    outcome: 'Onboarded over 250,000 active senior patients with a 98% appointment completion rate and zero compliance violations.',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}
