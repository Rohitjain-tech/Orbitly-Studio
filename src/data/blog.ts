import { BlogPost } from '@/types';

export const blogData: BlogPost[] = [
  {
    title: 'Designing SaaS Products Users Actually Understand',
    slug: 'designing-saas-products-users-actually-understand',
    excerpt: 'How reducing cognitive load and embracing radical clarity converts casual signups into daily power users.',
    category: 'Product Design',
    author: {
      name: 'Aditi Rao',
      role: 'Head of Design Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    },
    date: 'August 14, 2024',
    readingTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Most enterprise SaaS software fails not because of a lack of engineering firepower, but because it overwhelms users with choices. When every action carries equal visual weight, nothing feels important.'
      },
      {
        type: 'heading',
        text: 'The Principle of Progressive Disclosure'
      },
      {
        type: 'paragraph',
        text: 'Progressive disclosure is the art of showing users only the information they need at any given moment. Rather than surfacing 40 configuration toggles on a primary settings canvas, group them into logical layers that reveal themselves upon intent.'
      },
      {
        type: 'quote',
        text: 'Simplicity is not the absence of clutter, but the presence of clear direction.'
      },
      {
        type: 'heading',
        text: 'Three Tactics for Lowering Friction'
      },
      {
        type: 'list',
        items: [
          'Audit your primary action buttons: A single screen should rarely feature more than one primary CTA button.',
          'Replace cryptic status codes with plain-language outcome statements.',
          'Use smart defaults calculated from historical user behavior to skip empty onboarding forms.'
        ]
      },
      {
        type: 'paragraph',
        text: 'By treating interface space as a precious resource, product teams create experiences that feel calm, reassuring, and undeniably modern.'
      }
    ],
  },
  {
    title: 'From Figma to Production',
    slug: 'from-figma-to-production',
    excerpt: 'Bridging the disconnect between design components and React production code without losing visual fidelity.',
    category: 'Engineering & Design',
    author: {
      name: 'Aarav Mehta',
      role: 'Design Engineering Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    },
    date: 'July 28, 2024',
    readingTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'The handing off of static Figma frames to frontend developers is a relic of the past. High-performing digital studios build shared systems where design tokens directly drive component CSS variables in code.'
      },
      {
        type: 'heading',
        text: 'Aligning Naming Conventions Across Boundaries'
      },
      {
        type: 'paragraph',
        text: 'When a designer names a spacing value `$spacing-lg` and a developer references `p-6`, friction inevitably occurs. Creating a single source of truth in JSON format allows automatic syncing to both Figma variables and Tailwind CSS utility themes.'
      },
      {
        type: 'heading',
        text: 'Key Practices for Seamless Hand-offs'
      },
      {
        type: 'list',
        items: [
          'Store design tokens in version-controlled repositories.',
          'Treat code components as the canonical reference for interactive states like hover, focus, and disabled.',
          'Run automated visual regression tests in CI/CD pipelines to catch layout drifts early.'
        ]
      },
      {
        type: 'paragraph',
        text: 'When design and engineering speak the exact same visual vocabulary, product velocity increases dramatically while visual bugs drop toward zero.'
      }
    ],
  },
  {
    title: 'The UX Cost of "Just One More Feature"',
    slug: 'the-ux-cost-of-just-one-more-feature',
    excerpt: 'Why relentless feature addition degrades product usability and how product teams can say no with confidence.',
    category: 'Product Strategy',
    author: {
      name: 'Sneha Agarwal',
      role: 'Principal Strategist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    },
    date: 'June 19, 2024',
    readingTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Feature creep rarely happens overnight. It creeps in slowly through one-off customer requests, executive pet projects, and competitive parity checklists until your once-elegant app becomes an unmanageable swiss army knife.'
      },
      {
        type: 'heading',
        text: 'The Hidden Tax on System Architecture'
      },
      {
        type: 'paragraph',
        text: 'Every feature added increases the test matrix exponentially. A single checkbox in a workflow can interact with dozens of existing permissions, dark mode themes, and mobile viewport breakpoints.'
      },
      {
        type: 'quote',
        text: 'Great product management is defined far more by what you refuse to build than what you ship.'
      },
      {
        type: 'heading',
        text: 'How to Protect Product Integrity'
      },
      {
        type: 'list',
        items: [
          'Enforce a strict "One In, One Out" feature policy for secondary navigation menus.',
          'Evaluate features on core workflow completion speed rather than raw functionality lists.',
          'Routinely sunset legacy features that serve under 2% of active monthly users.'
        ]
      }
    ],
  },
  {
    title: 'Building Better Design Systems',
    slug: 'building-better-design-systems',
    excerpt: 'A practical framework for creating design systems that teams actually enjoy adopting day-to-day.',
    category: 'Design Systems',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Design Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    },
    date: 'May 04, 2024',
    readingTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Too many design systems end up as abandoned documentation sites. The root cause is almost always dogmatism: creating rigid component libraries that force product designers to hack around constraints.'
      },
      {
        type: 'heading',
        text: 'Designing for Flexibility and Scale'
      },
      {
        type: 'paragraph',
        text: 'A resilient design system provides clear primitives (typography, spacing, color tokens) while leaving layout assembly flexible for individual product domains.'
      },
      {
        type: 'list',
        items: [
          'Prioritize composition over mega-components with 50 configuration props.',
          'Maintain live code playgrounds alongside design documentation.',
          'Treat your design system as an internal open-source project with clear contribution guidelines.'
        ]
      }
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((post) => post.slug === slug);
}
