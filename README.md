# Portfolio - Emre Can Karataş

A modern, responsive portfolio website showcasing my expertise in full-stack development, backend systems, mobile applications, and machine learning.

## About

This is my personal portfolio built with React and TypeScript, featuring a collection of my professional projects and technical work. The website demonstrates my skills across various domains including web development, backend engineering, mobile apps, and AI/ML.

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19
- **Icons**: Lucide React 0.561.0
- **Code Quality**: ESLint 9.39.1 with TypeScript support

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **SEO Optimized**: Includes structured data, meta tags, sitemap, and robots.txt
- **PWA Ready**: Progressive Web App manifest for enhanced mobile experience
- **Performance**: Optimized with lazy loading, efficient asset management, and fast build times
- **Smooth Animations**: Custom animations and transitions for enhanced user experience
- **Dark Theme**: Modern dark theme with gradient overlays and visual effects

## Projects Showcased

### Storytex
AI-powered memory and life tracking platform with features including:
- Memory preservation and dream interpretation
- Emotion analytics and social tracking
- Built with React, TypeScript, Node.js, PostgreSQL, AWS, and OpenAI

### Backend Development
- **Go Authentication Backend**: JWT authentication, multi-device sessions, rate limiting (85.3% test coverage)
- **TypeScript E-Commerce API**: Stripe integration, atomic stock management (94% test coverage)

### Web Development
- **AR Mimarlik**: Architecture firm website (React, TypeScript, Supabase)
- **BlackR New Media**: Digital marketing agency website (React, TypeScript, Supabase)

### Mobile Development
- **OneByOne**: React Native speed reading app with Bionic Reading technique, EPUB support, and offline-first architecture

### Machine Learning & AI
- **RL Snake Game**: Deep Q-Learning AI agents with neural networks and experience replay
- **Flappy Bird**: Neuroevolution using genetic algorithms for autonomous learning

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/blackstonecan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (includes TypeScript type checking)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## Building for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory, optimized and minified for deployment.

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer components
│   │   ├── projects/        # Project showcase components
│   │   └── general/         # Hero section and shared components
│   ├── assets/              # Images, videos, CV, and static files
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── public/                  # Public assets (manifest, robots.txt, sitemap)
├── index.html               # HTML template with SEO metadata
└── dist/                    # Production build output
```

## SEO & Performance

- Structured JSON-LD metadata (Schema.org)
- Open Graph and Twitter Card meta tags
- Sitemap and robots.txt for search engine crawling
- Lazy loading for images and assets
- Optimized bundle size with Vite

## Contact

- **GitHub**: [Your GitHub Profile](https://github.com/blackstonecan)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/emrecankaratas/)
- **Email**: emrecankkaratas@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, TypeScript, and Vite
