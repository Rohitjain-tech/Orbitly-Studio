import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogData, getBlogPostBySlug } from '@/data/blog';
import { ArrowLeft, Clock, Calendar, Quote, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Next.js static site generation for dynamic blog routes
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Orbitly Studio',
    };
  }

  return {
    title: `${post.title} | Orbitly Studio Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-20 bg-studio-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-studio-muted hover:text-studio-dark transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>

        {/* Category Badge & Metadata */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-studio-dark bg-studio-card px-3 py-1 rounded-full border border-studio-border">
            {post.category}
          </span>
          <span className="text-xs text-studio-muted flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        {/* Article Headline */}
        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-studio-dark leading-[1.15] mb-8">
          {post.title}
        </h1>

        {/* Author Bio Header Row */}
        <div className="flex items-center justify-between py-6 border-t border-b border-studio-border/60 mb-10">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-studio-border bg-studio-card">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-studio-dark">{post.author.name}</h2>
              <p className="text-xs text-studio-muted">{post.author.role}</p>
            </div>
          </div>
          <div className="text-xs text-studio-muted font-mono flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
        </div>

        {/* Article Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-studio-border bg-studio-card mb-12 shadow-sm">
          <Image
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Excerpt Callout */}
        <div className="p-6 sm:p-8 rounded-xl bg-studio-surface border border-studio-border mb-10 text-lg font-medium text-studio-dark/90 leading-relaxed italic">
          "{post.excerpt}"
        </div>

        {/* Article Body Content */}
        <div className="space-y-8 text-base sm:text-lg text-studio-dark/85 leading-relaxed font-normal">
          {post.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index}>{block.text}</p>;
            }

            if (block.type === 'heading') {
              return (
                <h3 key={index} className="text-2xl font-medium text-studio-dark tracking-tight pt-4">
                  {block.text}
                </h3>
              );
            }

            if (block.type === 'quote') {
              return (
                <blockquote
                  key={index}
                  className="my-8 p-6 border-l-4 border-studio-dark bg-studio-card rounded-r-xl italic text-studio-dark font-medium text-lg flex gap-3"
                >
                  <Quote className="w-6 h-6 text-studio-dark/40 flex-shrink-0" />
                  <span>{block.text}</span>
                </blockquote>
              );
            }

            if (block.type === 'list' && block.items) {
              return (
                <ul key={index} className="space-y-3 my-6 pl-4 list-disc marker:text-studio-dark">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>

        {/* Author Bio Footer Box */}
        <div className="mt-16 pt-10 border-t border-studio-border flex items-center justify-between gap-6 bg-studio-surface p-8 rounded-2xl border">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-studio-border bg-studio-card">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-studio-muted block">Written By</span>
              <h4 className="text-base font-semibold text-studio-dark">{post.author.name}</h4>
              <p className="text-xs text-studio-muted">{post.author.role} at Orbitly Studio</p>
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-studio-card text-studio-dark border border-studio-border rounded-full text-xs font-medium hover:bg-studio-surface transition-colors"
          >
            More articles
          </Link>
        </div>

      </div>
    </article>
  );
}
