# Orbitly Studio — Frontend Application

**Orbitly Studio** is a fictional digital design and product studio website built with an editorial, craft-driven design system. The project showcases a high-performing, accessible, and clean frontend codebase developed using Next.js (App Router), TypeScript, and Tailwind CSS.

---

## Key Highlights & Interview Talking Points

1. **Frontend-Focused & Zero Over-Engineering**: Pure frontend application with clean component boundaries, local TypeScript data structures, zero backend or database complexity, and simple data flow.
2. **Static Site Generation (SSG)**: Pre-renders dynamic routes (`/projects/[slug]` and `/blog/[slug]`) at build time using `generateStaticParams` for instantaneous page loads and SEO optimization.
3. **Editorial Design System**: Crafted with off-white tones (`#FAF9F5`), deep dark typography (`#111111`), generous whitespace, rounded borders, and subtle hover interactions.
4. **Accessible & Responsive**: Fully responsive across mobile (375px), tablet (768px), and desktop (1440px) viewports with accessible mobile navigation and semantic HTML5 tags.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (with custom `@theme` tokens)
- **Icons**: Lucide React
- **Animations**: Framer Motion (subtle entrance transitions)
- **Deployment & Static Output**: Static HTML Export ready

---

## 📁 Folder Structure

```
Orbitly Studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (Metadata, Fonts, Navbar, Footer)
│   │   ├── page.tsx           # Homepage (Hero, Services, Projects, Blog, Testimonials)
│   │   ├── globals.css        # Tailwind directives & CSS variable tokens
│   │   ├── projects/
│   │   │   ├── page.tsx       # Portfolio page with category filter
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Dynamic project case study page (SSG)
│   │   └── blog/
│   │       ├── page.tsx       # Journal listing page with category filter
│   │       └── [slug]/
│   │           └── page.tsx   # Dynamic blog article detail page (SSG)
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive sticky header & mobile drawer
│   │   ├── Hero.tsx           # Minimalist editorial hero section
│   │   ├── Services.tsx       # 4 core studio services
│   │   ├── Projects.tsx       # Selected work showcase section
│   │   ├── ProjectCard.tsx    # Reusable case study card
│   │   ├── Blog.tsx           # Thought leadership article section
│   │   ├── BlogCard.tsx       # Reusable journal card
│   │   ├── Testimonials.tsx   # Client endorsements
│   │   ├── SectionHeading.tsx # Reusable section title component
│   │   └── Footer.tsx         # Contact CTA & quick navigation footer
│   ├── data/
│   │   ├── projects.ts        # Local dataset of 4 fictional projects
│   │   └── blog.ts            # Local dataset of 4 thought-leadership posts
│   └── types/
│       └── index.ts           # Strict TypeScript interface definitions
├── next.config.ts             # Unsplash remote image pattern configuration
├── package.json
└── tsconfig.json
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js (v18.17+)** installed on your system.

### 2. Installation
Install project dependencies using `npm`:
```bash
npm install
```

### 3. Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Production Build Verification
To test TypeScript type safety and build static pages:
```bash
npm run build
```
To run the production build locally:
```bash
npm run start
```

---

## 🌟 Main Features

- **Homepage (`/`)**: Features an editorial hero banner, studio philosophy overview, 4 core services, selected work preview, thought leadership articles, and client testimonials.
- **Case Studies (`/projects`)**: Filter projects by category tags (`Product Strategy`, `UI/UX Design`, `Brand Identity`, `Web Development`, `Design System`).
- **Dynamic Case Study Detail (`/projects/[slug]`)**: In-depth breakdown including client specs, problem challenge, solution approach, business outcomes, image gallery, and next project navigation.
- **Journal / Blog (`/blog`)**: Article listing with category filter pills (`Product Design`, `Engineering & Design`, `Product Strategy`, `Design Systems`).
- **Dynamic Article Detail (`/blog/[slug]`)**: Full reading experience featuring author avatar/bio, reading time calculation, structured block typography (paragraphs, headings, blockquotes, lists), and cover imagery.

---

## 💡 How Dynamic Routing Works (Interview Guide)

In Next.js App Router, dynamic routing uses folder structures enclosed in square brackets, such as `[slug]`.

### 1. File Structure
The file path `src/app/projects/[slug]/page.tsx` catches any URL parameter matched against `/projects/xyz`.

### 2. Static Pre-Rendering (`generateStaticParams`)
Because our dataset is stored in local TypeScript files (`src/data/projects.ts` & `src/data/blog.ts`), we use `generateStaticParams()` to tell Next.js which paths exist at build time:

```typescript
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
```
During `npm run build`, Next.js executes this function, loops over `projectsData`, and pre-renders static HTML pages for `/projects/finora`, `/projects/noma`, `/projects/aether`, and `/projects/luma-health`.

### 3. Parameter Access & SEO Metadata
In the page component, `params` is accessed asynchronously:
```typescript
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <article>{/* Render project case study */}</article>;
}
```
Similarly, `generateMetadata()` generates custom `<title>`, `<meta name="description">`, and OpenGraph meta tags dynamically per route for optimal SEO performance.
