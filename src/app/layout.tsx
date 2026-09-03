import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Orbitly Studio | Digital Product & Design Studio',
    template: '%s | Orbitly Studio',
  },
  description:
    'Orbitly Studio partners with ambitious tech startups to turn ideas into thoughtful brands, intuitive products, and experiences built to scale.',
  keywords: [
    'Digital Product Studio',
    'UI UX Design Agency',
    'Next.js Web Development',
    'Brand Identity',
    'Product Strategy',
  ],
  authors: [{ name: 'Orbitly Studio Team' }],
  openGraph: {
    title: 'Orbitly Studio | Digital Product & Design Studio',
    description:
      'Digital products designed to move businesses forward. Minimalist craft-driven agency.',
    url: 'https://orbitly.studio',
    siteName: 'Orbitly Studio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-studio-bg text-studio-dark min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
