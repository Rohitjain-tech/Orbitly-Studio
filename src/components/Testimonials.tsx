import React from 'react';
import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/types';

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Orbitly Studio delivered a complete product interface redesign in half the time our internal team estimated. Their attention to subtle typography and cognitive clarity was extraordinary.',
    author: 'Ananya Sharma',
    role: 'VP of Product',
    company: 'Finora Global',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    quote: 'Working with Orbitly felt like embedding a principal design team directly into our engineering squad. They challenged our UX assumptions and helped us ship our highest-rated platform yet.',
    author: 'Rohan Deshmukh',
    role: 'Co-founder & CEO',
    company: 'Aether Cloud',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    quote: 'The digital flagship Orbitly crafted for Noma transformed our brand perception globally. We went from a regional architectural firm to securing top tier luxury commissions.',
    author: 'Priya Kulkarni',
    role: 'Creative Director',
    company: 'Noma Architecture',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-studio-bg border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Endorsed by visionary founders and product leaders."
          description="What our partners say about building next-generation digital products with Orbitly."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-studio-surface border border-studio-border hover:border-studio-dark/30 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-studio-dark/20 mb-6" />
                <p className="text-studio-dark text-base sm:text-lg leading-relaxed font-normal italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 border-t border-studio-border/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-studio-border bg-studio-card">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-studio-dark">
                    {t.author}
                  </h4>
                  <p className="text-xs text-studio-muted font-normal">
                    {t.role}, <span className="text-studio-dark">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
