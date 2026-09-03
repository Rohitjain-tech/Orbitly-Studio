import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Compass, Layout, Code, Target, ArrowRight } from 'lucide-react';
import { Service } from '@/types';

export const servicesList: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'We construct timeless visual systems, custom typography, and brand positioning that elevate your product above noisy marketplaces.',
    deliverables: ['Logo & Visual Systems', 'Brand Strategy & Voice', 'Design Tokens & Guidelines', 'Marketing Collateral'],
    iconName: 'Compass',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Human-centered digital product interfaces engineered for clarity, accessibility, and high conversion across web and mobile platforms.',
    deliverables: ['Product Architecture', 'Figma Design Systems', 'Interactive Prototypes', 'Usability Testing'],
    iconName: 'Layout',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Performant, scalable frontend codebases built with Next.js, React, and Tailwind CSS. Clean, maintainable, and SEO-optimized.',
    deliverables: ['Next.js Architecture', 'TypeScript Engineering', 'Micro-Animations', 'Headless CMS Setup'],
    iconName: 'Code',
  },
  {
    id: 'product-strategy',
    title: 'Product Strategy',
    description: 'Bridging technical feasibility and business goals. We help teams prioritize features, streamline workflows, and define clear launch roadmaps.',
    deliverables: ['Feature Prioritization', 'Competitive Analysis', 'UX Audits & Metrics', 'Launch Strategy'],
    iconName: 'Target',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-studio-dark" />,
  Layout: <Layout className="w-6 h-6 text-studio-dark" />,
  Code: <Code className="w-6 h-6 text-studio-dark" />,
  Target: <Target className="w-6 h-6 text-studio-dark" />,
};

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-studio-bg border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Craft-driven capabilities for modern digital products."
          description="We take a disciplined, multi-disciplinary approach to digital design and engineering, ensuring every touchpoint delivers measurable business value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl bg-studio-surface border border-studio-border hover:border-studio-dark/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-studio-card flex items-center justify-center border border-studio-border group-hover:scale-105 transition-transform">
                    {iconMap[service.iconName]}
                  </div>
                  <span className="text-sm font-mono text-studio-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-studio-dark tracking-tight mb-3">
                  {service.title}
                </h3>
                
                <p className="text-studio-muted leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="pt-6 border-t border-studio-border/60">
                  <p className="text-xs font-semibold text-studio-dark uppercase tracking-wider mb-3">
                    Deliverables
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-studio-dark/80 bg-studio-card px-3 py-1 rounded-md border border-studio-border/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
