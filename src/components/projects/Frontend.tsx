import { ExternalLink } from 'lucide-react';

const Frontend = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Smooth gradient fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent z-30" />

      {/* Section Header */}
      <div className="relative z-30 text-center pt-8 sm:pt-12 pb-6 sm:pb-8 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">
          Web Development
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400">
          Production websites I've built with modern stack
        </p>
      </div>

      {/* Split Screen Container */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* LEFT SIDE - AR MİMARLIK */}
        <div
          className="group relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden transition-all duration-700 hover:flex-[1.1]"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/17673694/pexels-photo-17673694.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Smooth transition from header */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-20" />

          {/* Smooth transition to bottom */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-20" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1511]/55 via-neutral-950/50 to-neutral-950/55 lg:from-[#1a1511]/90 lg:via-neutral-950/85 lg:to-neutral-950/90 group-hover:from-[#1a1511]/45 group-hover:via-neutral-950/40 group-hover:to-neutral-950/45 lg:group-hover:from-[#1a1511]/85 lg:group-hover:via-neutral-950/80 lg:group-hover:to-neutral-950/85 transition-all duration-700" />

          {/* Accent glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Content */}
          <div className="relative z-30 flex flex-col justify-center items-center text-center px-6 py-32 sm:px-10 sm:py-36 md:p-12 lg:p-16 xl:p-20 h-full">

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white lg:text-neutral-200 tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] mb-4 uppercase transform group-hover:scale-105 transition-transform duration-500">
              AR MİMARLIK
            </h2>

            {/* Tagline */}
            <p className="text-neutral-100 lg:text-neutral-400 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] uppercase mb-6 sm:mb-8 transform group-hover:scale-105 transition-transform duration-500 delay-75">
              Architecture & Design Studio
            </p>

            {/* Description */}
            <p className="text-neutral-100 lg:text-neutral-300/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 font-light transform group-hover:scale-105 transition-transform duration-500 delay-100 px-4 sm:px-0">
              Professional architecture firm website showcasing residential and commercial projects with elegant presentation.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 transform group-hover:scale-105 transition-transform duration-500 delay-150 px-4">
              {['React', 'TypeScript', 'Supabase'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white lg:text-[#A0826D] border border-[#8B7355] lg:border-[#8B7355]/30 bg-[#8B7355]/40 lg:bg-transparent rounded backdrop-blur-md font-medium lg:font-light tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Visit Link */}
            <a
              href="https://armimarlik.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 lg:px-0 lg:py-0 text-white lg:text-[#A0826D]/70 bg-[#8B7355]/50 lg:bg-transparent border border-[#8B7355] lg:border-transparent hover:bg-[#8B7355]/70 lg:hover:bg-transparent hover:text-white lg:hover:text-[#A0826D] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg lg:rounded-none backdrop-blur-md lg:backdrop-blur-none"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs sm:text-sm font-medium lg:font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase">Visit Website</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Live indicator */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 z-40 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-[#8B7355]/50 lg:bg-[#8B7355]/15 border border-[#8B7355] lg:border-[#8B7355]/30 backdrop-blur-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white lg:bg-[#A0826D]/70 rounded-full animate-pulse" />
              <span className="text-white lg:text-[#A0826D]/70 text-[10px] sm:text-xs font-medium lg:font-light tracking-wide">Live</span>
            </div>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B7355]/40 to-transparent lg:hidden" />
        </div>

        {/* RIGHT SIDE - BLACKR NEW MEDIA */}
        <div
          className="group relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden transition-all duration-700 hover:flex-[1.1]"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2863546/pexels-photo-2863546.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Smooth transition from header */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-20" />

          {/* Smooth transition to bottom */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-20" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0000]/55 via-neutral-950/50 to-neutral-950/55 lg:from-[#0a0000]/90 lg:via-neutral-950/85 lg:to-neutral-950/90 group-hover:from-[#0a0000]/45 group-hover:via-neutral-950/40 group-hover:to-neutral-950/45 lg:group-hover:from-[#0a0000]/85 lg:group-hover:via-neutral-950/80 lg:group-hover:to-neutral-950/85 transition-all duration-700" />

          {/* Red accent glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Content */}
          <div className="relative z-30 flex flex-col justify-center items-center text-center px-6 py-32 sm:px-10 sm:py-36 md:p-12 lg:p-16 xl:p-20 h-full">

            {/* Title */}
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-500">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                BlackR
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-600 tracking-tight ml-1 sm:ml-2">
                NEW MEDIA
              </span>
            </div>

            {/* Tagline */}
            <p className="text-red-200 lg:text-red-400/80 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide mb-6 sm:mb-8 transform group-hover:scale-105 transition-transform duration-500 delay-75">
              Digital Marketing Agency
            </p>

            {/* Description */}
            <p className="text-neutral-100 lg:text-neutral-300/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 transform group-hover:scale-105 transition-transform duration-500 delay-100 px-4 sm:px-0">
              Modern digital marketing agency delivering content production, advertising, and brand strategy solutions.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 transform group-hover:scale-105 transition-transform duration-500 delay-150 px-4">
              {['React', 'TypeScript', 'Supabase'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-neutral-100 lg:text-neutral-300 border border-red-800/50 lg:border-red-800/30 rounded backdrop-blur-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Visit Link */}
            <a
              href="https://blackrnewmedia.arkidish.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transform hover:scale-110 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Visit Website</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Live indicator */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 z-40 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-red-900/60 lg:bg-red-950/30 border border-red-700 lg:border-red-800/30 backdrop-blur-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-300 lg:bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-200 lg:text-red-400 text-[10px] sm:text-xs font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;