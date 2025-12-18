import { ExternalLink, Github } from 'lucide-react';

const Backend = () => {
  return (
    <div
      className="relative text-white py-20 sm:py-24"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/46224/harley-davidson-motorcycles-chrome-shiny-46224.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* Smooth gradient fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-20" />

      {/* Section Header */}
      <div className="relative z-30 text-center pt-8 sm:pt-12 pb-6 sm:pb-8  mb-20 sm:mb-28 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">
          Backend Development
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400">
          Production-ready backend systems showcasing security, scalability, and architectural excellence
        </p>
      </div>

      {/* Go Auth Backend */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 mb-32 sm:mb-40">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Go Authentication Backend
            </h3>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 text-sm font-mono rounded-full border border-emerald-500/30">
              Go • Gin • GORM
            </span>
            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 text-sm font-mono rounded-full border border-emerald-500/30">
              85.3% Coverage
            </span>
          </div>
          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Production-ready authentication system featuring JWT tokens with refresh token rotation,
            multi-device session management, and comprehensive security measures including rate limiting
            and brute force protection.
          </p>
        </div>

        {/* Architecture & Security */}
        <div className="mb-10">
          <h4 className="text-center text-xl sm:text-2xl font-semibold mb-6 text-emerald-400">
            Architecture & Security
          </h4>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-emerald-500/30 hover:scale-105">
              <p className="text-neutral-300">JWT access tokens (15min) with TokenKey invalidation</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-emerald-500/30 hover:scale-105">
              <p className="text-neutral-300">Refresh tokens (30 days) hashed with Argon2ID</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-emerald-500/30 hover:scale-105">
              <p className="text-neutral-300">Bcrypt password hashing (cost factor 10)</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-emerald-500/30 hover:scale-105">
              <p className="text-neutral-300">Rate limiting: 10 requests/minute per IP</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-emerald-500/30 hover:scale-105">
              <p className="text-neutral-300">Brute force protection: 5 attempts, 5min lockout</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-emerald-500/30 hover:scale-105">
              <p className="text-neutral-300">Multi-device session tracking with IP/user-agent</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h4 className="text-center text-xl sm:text-2xl font-semibold mb-6 text-emerald-400">
            Key Features
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Email verification with 6-digit codes',
              'Individual and bulk session revocation',
              'Password reset with Mailgun integration',
              'Clean architecture with 100% utils coverage',
              'HMAC-SHA256 for JWT signing',
              'UUID v4 for unique identifiers'
            ].map((feature, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded text-sm transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:scale-110 cursor-default"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-center text-sm font-semibold mb-4 text-neutral-500 uppercase tracking-wider">
            Technology Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {['Go 1.x', 'Gin Framework', 'GORM', 'SQLite', 'JWT', 'Bcrypt', 'Argon2ID', 'Mailgun API', 'Testify'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-mono transition-all duration-300 hover:bg-neutral-800 hover:border-emerald-500/30 hover:text-emerald-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/blackstonecan/go-auth-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-emerald-500 hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
          >
            <Github className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            <span>View Repository</span>
            <ExternalLink className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* TypeScript E-Commerce Backend */}
      <div className="relative z-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              TypeScript E-Commerce API
            </h3>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-mono rounded-full border border-blue-500/30">
              TypeScript • Express • PostgreSQL
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-mono rounded-full border border-blue-500/30">
              94% Coverage
            </span>
          </div>
          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto">
            RESTful API for e-commerce platforms with atomic stock management, Stripe payment processing,
            and comprehensive test coverage. Implements idempotent webhook handling and automatic order
            expiration with stock release.
          </p>
        </div>

        {/* Core Architecture */}
        <div className="mb-10">
          <h4 className="text-center text-xl sm:text-2xl font-semibold mb-6 text-blue-400">
            Core Architecture
          </h4>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-blue-500/30 hover:scale-105">
              <p className="text-neutral-300">Atomic stock reservation preventing race conditions</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-blue-500/30 hover:scale-105">
              <p className="text-neutral-300">Idempotent Stripe webhook handling for safe retries</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-blue-500/30 hover:scale-105">
              <p className="text-neutral-300">Payment amount validation against cart modifications</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-blue-500/30 hover:scale-105">
              <p className="text-neutral-300">Auto-expiration of pending orders (30min timeout)</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-blue-500/30 hover:scale-105">
              <p className="text-neutral-300">Address snapshots for historical order records</p>
            </div>
            <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900/70 hover:border-blue-500/30 hover:scale-105">
              <p className="text-neutral-300">Order audit trail with OrderUpdate tracking</p>
            </div>
          </div>
        </div>

        {/* Features & Testing */}
        <div className="mb-10">
          <h4 className="text-center text-xl sm:text-2xl font-semibold mb-6 text-blue-400">
            Features & Testing
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'JWT authentication with RBAC',
              'Full CRUD with Zod validation',
              'AWS S3 for image storage',
              '60+ tests with Jest',
              'Prisma ORM for PostgreSQL',
              'PCI compliance with error sanitization'
            ].map((feature, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded text-sm transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-110 cursor-default"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-center text-sm font-semibold mb-4 text-neutral-500 uppercase tracking-wider">
            Technology Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {['TypeScript 5.9', 'Express 5.2', 'Prisma 7.1', 'PostgreSQL 14+', 'Stripe API', 'AWS S3', 'Zod', 'Jest', 'ts-jest'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-mono transition-all duration-300 hover:bg-neutral-800 hover:border-blue-500/30 hover:text-blue-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/blackstonecan/ts-ecommerce-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            <Github className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            <span>View Repository</span>
            <ExternalLink className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Backend;
