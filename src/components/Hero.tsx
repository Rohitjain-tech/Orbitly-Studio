'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Award, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-card border border-studio-border text-xs sm:text-sm font-medium text-studio-dark mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Q3/Q4 Digital Product Partnerships</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-studio-dark leading-[1.08]">
            Digital products designed to move businesses forward.
          </h1>
        </motion.div>

        {/* Supporting Paragraph & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-lg sm:text-xl text-studio-muted leading-relaxed font-normal">
            Orbitly Studio partners with ambitious startups to turn ideas into thoughtful brands, intuitive products, and experiences built to scale.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-4 bg-studio-dark text-[#FAF9F5] font-medium text-base rounded-full hover:bg-black transition-all hover:gap-3 focus:outline-none focus:ring-2 focus:ring-studio-dark focus:ring-offset-2"
          >
            View our work
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-studio-surface border border-studio-border text-studio-dark font-medium text-base rounded-full hover:bg-studio-card transition-colors focus:outline-none focus:ring-2 focus:ring-studio-dark/20"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4 text-studio-muted" />
          </Link>
        </motion.div>

        {/* Hero Visual Studio Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-24 relative rounded-2xl overflow-hidden border border-studio-border bg-studio-card shadow-sm"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1800"
              alt="Orbitly Studio product showcase interface"
              fill
              priority
              className="object-cover object-center filter brightness-[0.98]"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-studio-dark/40 via-transparent to-transparent" />
            
            {/* Embedded Floating Metrics */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-wrap items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-6 bg-studio-dark/80 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Impact delivered</p>
                  <p className="text-sm font-medium text-white">₹1,000 Cr+ Client Valuation Growth</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-6 bg-studio-dark/80 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-neutral-200">Red Dot & Awwwards Featured Studio</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
