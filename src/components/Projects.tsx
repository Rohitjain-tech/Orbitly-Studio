import React from 'react';
import Link from 'next/link';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ProjectsSection({ limit = 4, showViewAll = true }: ProjectsSectionProps) {
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-studio-bg border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <SectionHeading
            label="Selected Work"
            title="Thoughtful products built for high-growth tech companies."
            description="We build digital products that combine spatial precision, high performance, and human intuition."
            className="mb-0 md:mb-0"
          />
          {showViewAll && (
            <div className="mt-6 md:mt-0 flex-shrink-0">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-medium text-studio-dark hover:text-studio-muted transition-colors group"
              >
                View all case studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
