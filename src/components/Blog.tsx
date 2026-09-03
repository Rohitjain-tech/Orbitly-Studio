import React from 'react';
import Link from 'next/link';
import { SectionHeading } from './SectionHeading';
import { BlogCard } from './BlogCard';
import { blogData } from '@/data/blog';
import { ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function BlogSection({ limit = 3, showViewAll = true }: BlogSectionProps) {
  const displayedPosts = blogData.slice(0, limit);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-studio-bg border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <SectionHeading
            label="Thought Leadership"
            title="Perspectives on design, engineering, and digital craft."
            description="Essays and frameworks written by our team on how to build enduring digital products."
            className="mb-0 md:mb-0"
          />
          {showViewAll && (
            <div className="mt-6 md:mt-0 flex-shrink-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-medium text-studio-dark hover:text-studio-muted transition-colors group"
              >
                Explore all articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
