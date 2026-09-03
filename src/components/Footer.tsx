import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-studio-dark text-[#FAF9F5] pt-20 pb-12 border-t border-studio-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner CTA */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3 px-3 py-1 bg-white/10 rounded-full border border-white/10">
              Start a Conversation
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mt-2">
              Have a project in mind? Let's build something exceptional together.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end lg:pt-8">
            <a
              href="mailto:hello@orbitly.studio"
              className="inline-flex items-center gap-3 bg-[#FAF9F5] text-studio-dark px-8 py-4 rounded-full font-medium text-base hover:bg-white transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Mail className="w-5 h-5 text-studio-dark" />
              hello@orbitly.studio
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation & Links */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F5] flex items-center justify-center text-studio-dark">
                <Sparkles className="w-4 h-4 text-studio-dark" />
              </div>
              <span className="text-2xl font-medium tracking-tight text-white">
                Orbitly<span className="font-light text-neutral-400"> Studio</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-normal">
              Fictional digital design and product studio partnering with ambitious tech startups to turn complex ideas into refined experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2 font-mono">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nandanvan, Nagpur</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-300">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Work / Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Journal / Thought Leadership
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Orbitly
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-300">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  X / Twitter
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  Figma Community
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} Orbitly Studio.</p>
        </div>

      </div>
    </footer>
  );
}
