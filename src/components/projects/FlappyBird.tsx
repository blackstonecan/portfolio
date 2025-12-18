import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import gameplayVideo from "../../assets/flappy-bird/gameplay_video.webm";

export default function FlappyBird() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="flappy-bird" className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0e1a 0%, #111827 30%, #0f172a 70%, #0a0e1a 100%)'
      }}>

      {/* Smooth gradient fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-30" />

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Larger stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full blur-[0.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse-star ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Subtle nebula glow */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Flappy Bird
            </h3>
            <p className="text-xl text-blue-300 mb-3 tracking-[0.2em] font-light">
              NEUROEVOLUTION
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-10" />

            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              An evolutionary AI system where neural networks learn to master Flappy Bird through
              genetic algorithms, evolving from random behavior to expert gameplay without human training data.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {["JavaScript", "Neural Networks", "Genetic Algorithm", "React", "Canvas API"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-500/5 text-blue-300 text-sm border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="mb-24 group/video">
            <div className="hidden md:block fixed inset-0 bg-black/0 group-hover/video:bg-black/70 transition-all duration-700 ease-in-out pointer-events-none z-10" />

            <div className="max-w-5xl mx-auto relative z-30">
              <div className="relative transition-transform duration-700 ease-in-out group-hover/video:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-lg opacity-0 group-hover/video:opacity-100 transition-opacity duration-700" />
                <div className="relative border border-blue-500/20 overflow-hidden">
                  <video
                    ref={videoRef}
                    src={gameplayVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full bg-black"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-24 max-w-6xl mx-auto">
            <h4 className="text-3xl font-bold text-white mb-12 text-center">
              How It Works
            </h4>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Neural Network */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">1</span>
                  </div>
                  <h5 className="text-2xl font-bold text-white">
                    Neural Networks
                  </h5>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Each bird has a neural network that processes game state inputs (bird position, velocity, pipe distance)
                  and decides when to flap. The network consists of input, hidden, and output layers with weighted connections.
                </p>
                <div className="flex gap-4 text-sm pt-2">
                  <div className="text-slate-500">
                    <span className="text-blue-400">Input:</span> Game State
                  </div>
                  <div className="text-slate-500">
                    <span className="text-cyan-400">Output:</span> Flap Decision
                  </div>
                </div>
              </div>

              {/* Genetic Algorithm */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-cyan-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-cyan-400">2</span>
                  </div>
                  <h5 className="text-2xl font-bold text-white">
                    Genetic Evolution
                  </h5>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  After each generation dies, the best-performing birds' neural networks are selected based on fitness scores.
                  These networks are mutated and crossed over to create the next generation, inheriting successful strategies.
                </p>
                <div className="flex gap-4 text-sm pt-2">
                  <div className="text-slate-500">
                    <span className="text-cyan-400">Selection:</span> Top Performers
                  </div>
                  <div className="text-slate-500">
                    <span className="text-blue-400">Mutation:</span> Weight Changes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Evolution Process */}
          <div className="mb-24 max-w-6xl mx-auto">
            <div className="bg-slate-900/30 border border-blue-500/10 p-10">
              <h5 className="text-2xl font-bold text-white mb-8">
                Evolution Cycle
              </h5>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">01</div>
                  <h6 className="text-lg font-semibold text-white mb-3">Initialize</h6>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Population of birds spawns with random neural network weights. No prior knowledge exists.
                  </p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">02</div>
                  <h6 className="text-lg font-semibold text-white mb-3">Selection</h6>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Birds with higher survival time and more pipes passed receive higher fitness scores.
                  </p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">03</div>
                  <h6 className="text-lg font-semibold text-white mb-3">Evolve</h6>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Best networks breed through mutation and crossover. Cycle repeats with improved population.
                  </p>
                </div>
              </div>

              <div className="border-t border-blue-500/10 pt-6">
                <p className="text-slate-400 leading-relaxed">
                  <span className="text-blue-300 font-semibold">Result:</span> Over generations, birds evolve
                  from chaotic random flapping to sophisticated flight patterns with precise timing, demonstrating
                  emergent intelligence through evolutionary pressure.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://github.com/blackstonecan/flappy-bird-nn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 border border-blue-500/30 text-blue-300 font-semibold hover:border-blue-400 hover:bg-blue-500/5 transition-all"
            >
              <span className="pointer-events-none">View on GitHub</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform pointer-events-none" />
            </a>
          </div>
        </div>
      </div>

      {/* Smooth gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-neutral-950 z-20 pointer-events-none" />

      {/* Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes pulse-star {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}
