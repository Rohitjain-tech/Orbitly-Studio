import React from 'react';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { ProjectsSection } from '@/components/Projects';
import { BlogSection } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Overview Banner */}
      <section id="about" className="py-16 sm:py-24 bg-studio-card/60 border-t border-b border-studio-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-studio-muted px-3 py-1 bg-studio-surface rounded-full border border-studio-border inline-block">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-studio-dark leading-tight">
                We believe great software is defined by clarity, quiet confidence, and zero fluff.
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-6 text-studio-muted text-base sm:text-lg leading-relaxed font-normal">
              <p>
                In an era dominated by feature bloat and aggressive dark patterns, Orbitly Studio takes an editorial, craft-first approach to digital development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-medium text-studio-dark">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>No bloated frameworks</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-studio-dark">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct founder involvement</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-studio-dark">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Design system included</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-studio-dark">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% WCAG AAA accessible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Projects Showcase Section */}
      <ProjectsSection limit={4} showViewAll={true} />

      {/* Blog / Thought Leadership Section */}
      <BlogSection limit={3} showViewAll={true} />

      {/* Client Testimonials */}
      <Testimonials />
    </>
  );
}
