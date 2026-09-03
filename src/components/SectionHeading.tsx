import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  alignment = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-studio-muted mb-3 px-3 py-1 bg-studio-card rounded-full border border-studio-border">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-studio-dark leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
