import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, getProjectBySlug } from '@/data/projects';
import { ArrowLeft, ArrowUpRight, CheckCircle, Target, Lightbulb, Trophy } from 'lucide-react';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Next.js static site generation for dynamic routes
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Orbitly Studio',
    };
  }

  return {
    title: `${project.title} Case Study | Orbitly Studio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Orbitly Studio Case Study`,
      description: project.shortDescription,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="py-12 sm:py-20 bg-studio-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-studio-muted hover:text-studio-dark transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all case studies
        </Link>

        {/* Header Block */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold uppercase tracking-wider text-studio-dark bg-studio-card px-3 py-1 rounded-full border border-studio-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-studio-dark leading-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-studio-muted leading-relaxed font-normal max-w-3xl">
            {project.shortDescription}
          </p>
        </header>

        {/* Project Metadata Specs Card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-studio-surface border border-studio-border mb-12">
          <div>
            <span className="text-xs font-mono uppercase text-studio-muted block mb-1">Client</span>
            <span className="text-base font-semibold text-studio-dark">{project.client}</span>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-studio-muted block mb-1">Industry</span>
            <span className="text-base font-semibold text-studio-dark">{project.industry}</span>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-studio-muted block mb-1">Year</span>
            <span className="text-base font-semibold text-studio-dark">{project.year}</span>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-studio-muted block mb-1">Core Deliverable</span>
            <span className="text-base font-semibold text-studio-dark">{project.tags[0]}</span>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-studio-border bg-studio-card mb-16 shadow-sm">
          <Image
            src={project.thumbnail}
            alt={`Hero showcase for ${project.title}`}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Narrative Case Study Grid (Problem, Approach, Outcome) */}
        <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
          
          {/* Section 1: The Problem */}
          <section className="p-8 sm:p-10 rounded-2xl bg-studio-surface border border-studio-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-medium text-studio-dark tracking-tight">The Challenge</h2>
            </div>
            <p className="text-base sm:text-lg text-studio-dark/85 leading-relaxed font-normal">
              {project.problem}
            </p>
          </section>

          {/* Section 2: The Approach & Solution */}
          <section className="p-8 sm:p-10 rounded-2xl bg-studio-surface border border-studio-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-medium text-studio-dark tracking-tight">Approach & Solution</h2>
            </div>
            <p className="text-base sm:text-lg text-studio-dark/85 leading-relaxed font-normal">
              {project.approach}
            </p>
          </section>

          {/* Section 3: The Outcome & Results */}
          <section className="p-8 sm:p-10 rounded-2xl bg-studio-dark text-[#FAF9F5] rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-medium text-white tracking-tight">Impact & Business Outcome</h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              {project.outcome}
            </p>
          </section>

        </div>

        {/* Gallery Showcase */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-12 border-t border-studio-border">
            <h3 className="text-2xl font-medium text-studio-dark mb-8 text-center">Visual Deliverables</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-studio-border bg-studio-card">
                  <Image
                    src={imgUrl}
                    alt={`${project.title} preview screenshot ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project Footer Nav */}
        <div className="mt-20 pt-12 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase text-studio-muted block mb-1">Next Case Study</span>
            <h4 className="text-2xl font-medium text-studio-dark">{nextProject.title}</h4>
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-studio-dark text-[#FAF9F5] rounded-full font-medium text-sm hover:bg-black transition-colors"
          >
            Explore next project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </article>
  );
}
