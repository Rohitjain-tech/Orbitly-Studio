'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Work', href: '/projects' },
    { label: 'Services', href: '/#services' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-studio-border/60 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-studio-dark/20 rounded-md p-1"
        >
          <div className="w-8 h-8 rounded-full bg-studio-dark flex items-center justify-center text-studio-bg group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-[#FAF9F5]" />
          </div>
          <span className="text-xl font-medium tracking-tight text-studio-dark">
            Orbitly<span className="font-light text-studio-muted"> Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-studio-dark/80 hover:text-studio-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-studio-dark hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-medium bg-studio-dark text-[#FAF9F5] px-5 py-2.5 rounded-full hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-studio-dark focus:ring-offset-2"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 rounded-md text-studio-dark hover:bg-studio-card focus:outline-none focus:ring-2 focus:ring-studio-dark/20"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-studio-border px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-studio-dark hover:text-studio-muted py-2 border-b border-studio-border/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium bg-studio-dark text-[#FAF9F5] px-5 py-3 rounded-full hover:bg-black transition-colors"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
