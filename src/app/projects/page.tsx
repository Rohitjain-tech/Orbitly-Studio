'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract unique tags across all projects
  const allTags = ['All', ...Array.from(new Set(projectsData.flatMap((p) => p.tags)))];

  // Filter projects by active tag
  const filteredProjects =
    selectedTag === 'All'
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="py-16 sm:py-24 bg-studio-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          label="Portfolio"
          title="Explore our selected digital product case studies."
          description="Detailed breakdowns of how we turned complex software challenges into intuitive, scalable digital products."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-studio-border/60 pb-6">
          {allTags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all border ${
                  isActive
                    ? 'bg-studio-dark text-[#FAF9F5] border-studio-dark'
                    : 'bg-studio-surface text-studio-dark border-studio-border hover:bg-studio-card'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-studio-surface rounded-2xl border border-studio-border">
            <p className="text-studio-muted">No projects found matching category "{selectedTag}".</p>
          </div>
        )}

      </div>
    </div>
  );
}
