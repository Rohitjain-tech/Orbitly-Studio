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

### `src/`

- **`app/`**
  - `layout.tsx` — Root layout, metadata, fonts, navbar and footer
  - `page.tsx` — Homepage with Hero, Services, Projects, Blog and Testimonials

- **`globals.css`**
  - Global styles, Tailwind directives and CSS variables

- **`projects/`**
  - `page.tsx` — Portfolio page with category filter
  - **`[slug]/`**
    - `page.tsx` — Dynamic project case study page

- **`blog/`**
  - `page.tsx` — Journal listing page with category filter
  - **`[slug]/`**
    - `page.tsx` — Dynamic blog article detail page

- **`components/`**
  - `Navbar.tsx` — Responsive sticky header and mobile drawer
  - `Hero.tsx` — Minimalist editorial hero section
  - `Services.tsx` — Four core studio services
  - `Projects.tsx` — Selected work showcase section
  - `ProjectCard.tsx` — Reusable case study card
  - `Blog.tsx` — Thought leadership article section
  - `BlogCard.tsx` — Reusable journal card
  - `Testimonials.tsx` — Client testimonials
  - `SectionHeading.tsx` — Reusable section title component
  - `Footer.tsx` — Contact CTA and location footer

- **`data/`**
  - `projects.ts` — Local dataset containing four projects
  - `blog.ts` — Local dataset containing four thought-leadership posts

- **`types/`**
  - `index.ts` — TypeScript interface definitions

### Root Files

- `next.config.ts` — Next.js configuration and Unsplash remote image settings
- `package.json` — Project dependencies and scripts
- `tsconfig.json` — TypeScript configuration
- `README.md` — Project documentation
---

