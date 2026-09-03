# Orbitly Studio — Digital Product & Design Studio

[![Live Demo](https://img.shields.io/badge/Live_Demo-orbitly--studio.vercel.app-2563EB?style=for-the-badge&logo=vercel)](https://orbitly-studio.vercel.app/)

**Orbitly Studio** is a digital design and product studio website built with an editorial, craft-driven design system. The application showcases a high-performing, accessible, and clean frontend codebase built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌐 Live Website

- **Live Production URL**: [https://orbitly-studio.vercel.app/](https://orbitly-studio.vercel.app/)

---

## 🚀 Key Highlights & Interview Architecture

1. **Frontend-Focused & Clean Architecture**: Pure frontend application with modular React component boundaries, local TypeScript data structures, zero backend or database complexity, and simple data flow.
2. **Static Site Generation (SSG)**: Pre-renders dynamic routes (`/projects/[slug]` and `/blog/[slug]`) at build time using `generateStaticParams` for instantaneous page loads and SEO optimization.
3. **Editorial Design System**: Built with off-white background tones (`#FAF9F5`), deep dark typography (`#111111`), generous whitespace, rounded card boundaries, and subtle hover interactions.
4. **Accessible & Responsive**: Fully responsive across mobile (375px), tablet (768px), and desktop (1440px) viewports with accessible mobile navigation and semantic HTML5 tags.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (with custom `@theme` tokens)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

---

## 📁 Folder Structure

Orbitly Studio/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── globals.css
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogCard.tsx
│   │   ├── Testimonials.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   └── blog.ts
│   │
│   └── types/
│       └── index.ts
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
---

