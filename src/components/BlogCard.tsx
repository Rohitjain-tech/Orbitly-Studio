import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-studio-surface rounded-2xl overflow-hidden border border-studio-border hover:border-studio-dark/30 transition-all flex flex-col h-full">
      {/* Cover Image Container */}
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] w-full overflow-hidden bg-studio-card block">
        <Image
          src={post.coverImage}
          alt={`Cover image for ${post.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-4 left-4 bg-studio-dark/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10">
          {post.category}
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-studio-muted mb-3 font-mono">
            <span>{post.date}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-medium text-studio-dark tracking-tight mb-3 group-hover:text-studio-accentBlue transition-colors leading-snug">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-studio-muted text-sm sm:text-base leading-relaxed mb-6 font-normal line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Author & Action */}
        <div className="pt-4 border-t border-studio-border/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-studio-border bg-studio-card">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium text-studio-dark">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-studio-dark group-hover:translate-x-0.5 transition-transform"
          >
            Read article
            <ArrowUpRight className="w-4 h-4 text-studio-dark group-hover:text-studio-accentBlue transition-colors" />
          </Link>
        </div>
      </div>
    </article>
  );
}
