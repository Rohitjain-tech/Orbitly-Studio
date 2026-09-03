export interface Project {
  title: string;
  slug: string;
  thumbnail: string;
  shortDescription: string;
  tags: string[];
  year: string;
  client: string;
  industry: string;
  problem: string;
  approach: string;
  outcome: string;
  gallery?: string[];
  featured?: boolean;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'list';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: ContentBlock[];
  category: string;
  author: Author;
  date: string;
  readingTime: string;
  coverImage: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
