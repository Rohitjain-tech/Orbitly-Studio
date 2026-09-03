import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-studio-surface rounded-2xl overflow-hidden border border-studio-border hover:border-studio-dark/30 transition-all flex flex-col h-full">
      {/* Image Thumbnail Container */}
      <Link href={`/projects/${project.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-studio-card block">
        <Image
          src={project.thumbnail}
          alt={`Thumbnail preview for ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-4 right-4 bg-studio-dark/80 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded-full border border-white/10">
          {project.year}
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-studio-muted font-medium bg-studio-card px-2.5 py-1 rounded-md border border-studio-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-medium text-studio-dark tracking-tight mb-2 group-hover:text-studio-accentBlue transition-colors">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-studio-muted text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {project.shortDescription}
          </p>
        </div>

        {/* View Case Study Link */}
        <div className="pt-4 border-t border-studio-border/60 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-muted">
            {project.client}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-studio-dark group-hover:translate-x-0.5 transition-transform"
          >
            View case study
            <ArrowUpRight className="w-4 h-4 text-studio-dark group-hover:text-studio-accentBlue transition-colors" />
          </Link>
        </div>
      </div>
    </article>
  );
}
