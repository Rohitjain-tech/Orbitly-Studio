'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { BlogCard } from '@/components/BlogCard';
import { blogData } from '@/data/blog';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories across all posts
  const categories = ['All', ...Array.from(new Set(blogData.map((p) => p.category)))];

  // Filter posts by active category
  const filteredPosts =
    selectedCategory === 'All'
      ? blogData
      : blogData.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 bg-studio-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          label="Journal"
          title="Essays and frameworks on modern digital product craft."
          description="Thought leadership articles written by our designers and engineers on building software users actually love."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-studio-border/60 pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all border ${
                  isActive
                    ? 'bg-studio-dark text-[#FAF9F5] border-studio-dark'
                    : 'bg-studio-surface text-studio-dark border-studio-border hover:bg-studio-card'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-studio-surface rounded-2xl border border-studio-border">
            <p className="text-studio-muted">No articles found in "{selectedCategory}".</p>
          </div>
        )}

      </div>
    </div>
  );
}
