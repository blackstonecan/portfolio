import { ExternalLink, Github } from 'lucide-react';
import appIcon from '../../assets/one-by-one/app_icon.webp';
import homePage from '../../assets/one-by-one/home_page.webp';
import uploadPage from '../../assets/one-by-one/upload_page.webp';
import progressVideo from '../../assets/one-by-one/progress_video.webm';

const OneByOne = () => {
  return (
    <div id="mobile" className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Smooth gradient fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Warm gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      {/* Section Header */}
      <div className="relative z-30 text-center pt-20 sm:pt-24 pb-6 sm:pb-8 mb-12 sm:mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">
          Mobile
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400">
          Native mobile applications built with React Native
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pb-32">

        {/* App Header with Icon */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src={appIcon}
              alt="OneByOne App Icon"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl shadow-2xl shadow-orange-500/30 ring-2 ring-orange-500/50"
            />
            <div className="text-left">
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-1">
                OneByOne
              </h3>
              <p className="text-orange-400 text-lg font-medium">
                Speed Reading & Bionic Reading
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <span className="px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-mono rounded-full border border-orange-500/30">
              React Native • Expo
            </span>
            <span className="px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-mono rounded-full border border-orange-500/30">
              Android
            </span>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto">
            A React Native speed reading application that displays EPUB books one word at a time
            at customizable pace, utilizing the Bionic Reading technique for enhanced focus and comprehension.
          </p>
        </div>

        {/* Screenshots and Video Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-20 max-w-6xl mx-auto">

          {/* Home Page Screenshot */}
          <div className="w-full md:w-1/3 max-w-xs">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/20 ring-1 ring-orange-500/20 hover:ring-orange-500/40 transition-all duration-300 hover:scale-105">
              <img
                src={homePage}
                alt="OneByOne App Screenshot"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Reading Video - Center */}
          <div className="w-full md:w-1/3 max-w-xs">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/30 ring-2 ring-orange-500/30 hover:ring-orange-500/50 transition-all duration-300 hover:scale-105">
              <video
                src={progressVideo}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Upload Page Screenshot */}
          <div className="w-full md:w-1/3 max-w-xs">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/20 ring-1 ring-orange-500/20 hover:ring-orange-500/40 transition-all duration-300 hover:scale-105">
              <img
                src={uploadPage}
                alt="OneByOne App Screenshot"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h4 className="text-center text-2xl sm:text-3xl font-semibold mb-10 text-orange-400">
            How to Use
          </h4>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-500/50">
                1
              </div>
              <div className="flex-1 pt-2">
                <h5 className="text-xl font-semibold text-white mb-2">Upload Your EPUB Book or Use Quick Read</h5>
                <p className="text-neutral-400 leading-relaxed">
                  Select an EPUB file from your device storage for full books (supports EPUB 2 & 3), or use Quick Read mode to paste any text directly for instant speed reading without file uploads.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-500/50">
                2
              </div>
              <div className="flex-1 pt-2">
                <h5 className="text-xl font-semibold text-white mb-2">Choose Your Reading Speed</h5>
                <p className="text-neutral-400 leading-relaxed">
                  Adjust the words-per-minute (WPM) setting to match your comfort level. Start slow and gradually increase as you get comfortable with speed reading.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-500/50">
                3
              </div>
              <div className="flex-1 pt-2">
                <h5 className="text-xl font-semibold text-white mb-2">Start Reading with Bionic Technique</h5>
                <p className="text-neutral-400 leading-relaxed">
                  The app displays one word at a time using the Bionic Reading method, which bolds the first part of each word to help your brain process text faster and improve focus.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-500/50">
                4
              </div>
              <div className="flex-1 pt-2">
                <h5 className="text-xl font-semibold text-white mb-2">Auto-Save Your Progress</h5>
                <p className="text-neutral-400 leading-relaxed">
                  Your reading position is automatically bookmarked. Close the app anytime and resume exactly where you left off, even offline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <h4 className="text-center text-2xl sm:text-3xl font-semibold mb-8 text-orange-400">
            Core Features
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'EPUB 2 & EPUB 3 support',
              'Adjustable WPM speed control',
              'Bionic Reading technique',
              'Quick Read mode for text',
              'Auto-bookmark progress',
              'Offline-first architecture',
              'Light & Dark themes',
              'Cross-platform compatibility'
            ].map((feature, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-orange-500/10 text-orange-300 border border-orange-500/30 rounded-full text-sm transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/50 hover:scale-110 cursor-default"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h4 className="text-center text-sm font-semibold mb-4 text-neutral-500 uppercase tracking-wider">
            Technology Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'React Native 0.79',
              'Expo 53',
              'TypeScript',
              'React Navigation 7',
              'Expo SQLite',
              'JSZip',
              'AsyncStorage',
              'Expo File System'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-mono transition-all duration-300 hover:bg-neutral-800 hover:border-orange-500/30 hover:text-orange-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/blackstonecan/one-by-one"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-semibold text-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 rounded-lg"
          >
            <Github className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            <span>View Repository</span>
            <ExternalLink className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default OneByOne;
