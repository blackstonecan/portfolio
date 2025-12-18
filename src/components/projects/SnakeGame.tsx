import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import gameplayVideo from "../../assets/snake-game/gameplay_video.webm";

export default function SnakeGame() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="ml" className="relative min-h-screen bg-neutral-950 py-20 overflow-hidden">
      {/* Gradient fade at top - placed first for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-30" />

      {/* Retro Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#00ff41 1px, transparent 1px),
              linear-gradient(90deg, #00ff41 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      {/* Animated Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 255, 65, 0.1) 0px, transparent 2px, transparent 4px)',
          animation: 'scanline 8s linear infinite',
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slower" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative z-30 text-center pt-8 sm:pt-12 pb-6 sm:pb-8 mb-20 sm:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">
            Machine Learning
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400">
            AI and machine learning projects showcasing deep learning and evolutionary algorithms
          </p>
        </div>

        {/* Project Container */}
        <div className="max-w-6xl mx-auto">
          {/* Header with Arcade Style */}
          <div className="mb-12 text-center">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-lg" />
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold relative px-8 py-4 border-4 border-green-500 bg-neutral-950/80 backdrop-blur"
                style={{
                  fontFamily: 'monospace',
                  textShadow: '0 0 20px rgba(0, 255, 65, 0.8), 0 0 40px rgba(0, 255, 65, 0.4)'
                }}>
                <span className="text-green-400">RL</span>
                <span className="text-cyan-400"> SNAKE </span>
                <span className="text-green-400">GAME</span>
              </h3>
            </div>

            <p className="text-xl sm:text-2xl text-green-300/90 font-mono mb-4">
              Deep Q-Learning AI Battle Arena
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {["Python", "PyTorch", "Deep Q-Learning", "PyQt5", "NumPy"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded border-2 border-green-500/50 bg-green-500/10 text-green-400 text-sm font-mono hover:border-green-400 hover:bg-green-500/20 transition-all hover:scale-110"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Introduction */}
          <div className="mb-16 bg-neutral-900/50 backdrop-blur-xl rounded-2xl border-2 border-green-500/30 p-8 sm:p-12 shadow-2xl shadow-green-500/20">
            <div className="space-y-6 text-neutral-300">
              <p className="text-lg leading-relaxed">
                Welcome to the <span className="text-green-400 font-mono font-bold">RL Snake Game</span> -
                a competitive multiplayer AI battleground where deep reinforcement learning agents fight for survival.
                This project implements <span className="text-cyan-400 font-semibold">Deep Q-Learning (DQN)</span> with
                experience replay, enabling AI agents to learn complex strategies and battle in real-time.
              </p>
              <p className="text-lg leading-relaxed">
                Watch AI agents compete for apples while avoiding collisions, or train your own custom agents with
                specialized behaviors through configurable reward functions. Each agent develops unique playstyles -
                from aggressive "Killer" strategies to defensive "Survivor" tactics.
              </p>
            </div>
          </div>

          {/* Gameplay Video */}
          <div className="mb-16 group/container peer relative">
            {/* Darkening overlay - only on desktop */}
            <div className="hidden md:block fixed inset-0 bg-black/0 group-hover/container:bg-black/60 transition-all duration-700 ease-in-out pointer-events-none z-10" />

            <h4 className="text-3xl font-bold text-green-400 mb-6 text-center font-mono transition-transform duration-700 ease-in-out group-hover/container:-translate-y-8 relative z-20"
              style={{ textShadow: '0 0 10px rgba(0, 255, 65, 0.6)' }}>
              {'>'} AI BATTLE IN ACTION {'<'}
            </h4>
            <div className="flex justify-center">
              <div className="relative max-w-[600px] transition-transform duration-700 ease-in-out group-hover/container:scale-110 z-30">
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-green-500 via-cyan-500 to-green-500
             rounded-2xl blur-xl opacity-40 group-hover/container:opacity-80
             transition-opacity duration-700 ease-in-out"
                />
                <div className="relative rounded-2xl overflow-hidden border-4 border-green-500/50 shadow-2xl shadow-green-500/30">
                  <video
                    ref={videoRef}
                    src={gameplayVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-xl bg-black"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h4 className="text-3xl font-bold text-cyan-400 mb-8 text-center font-mono border-b-2 border-cyan-500/50 pb-4 transition-transform duration-700 ease-in-out peer-hover:translate-y-8"
              style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}>
              TECHNICAL ARCHITECTURE
            </h4>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Neural Network Card */}
              <div className="bg-neutral-900/70 backdrop-blur-xl rounded-xl border-2 border-green-500/30 p-6 hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20">
                <h5 className="text-xl font-bold text-green-400 mb-4 font-mono flex items-center gap-2">
                  <span className="text-cyan-400">[01]</span> Neural Network
                </h5>
                <div className="space-y-3 text-neutral-300 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-green-500/20 pb-2">
                    <span className="text-green-300">Input Layer:</span>
                    <span className="text-cyan-300">57 neurons</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-green-500/20 pb-2">
                    <span className="text-green-300">Hidden Layers:</span>
                    <span className="text-cyan-300">2 × 128 (ReLU)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-green-500/20 pb-2">
                    <span className="text-green-300">Output Layer:</span>
                    <span className="text-cyan-300">3 Q-values</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-300">Framework:</span>
                    <span className="text-cyan-300">PyTorch 2.0+</span>
                  </div>
                </div>
              </div>

              {/* State Representation Card */}
              <div className="bg-neutral-900/70 backdrop-blur-xl rounded-xl border-2 border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <h5 className="text-xl font-bold text-cyan-400 mb-4 font-mono flex items-center gap-2">
                  <span className="text-green-400">[02]</span> State Space (57D)
                </h5>
                <div className="space-y-3 text-neutral-300 font-mono text-sm">
                  <div className="border-b border-cyan-500/20 pb-2">
                    <span className="text-cyan-300">7×7 Rotated Grid:</span>
                    <span className="text-green-300 block mt-1">49 values - rotation invariant</span>
                  </div>
                  <div className="border-b border-cyan-500/20 pb-2">
                    <span className="text-cyan-300">Apple Directions:</span>
                    <span className="text-green-300 block mt-1">6 values - 3 nearest apples</span>
                  </div>
                  <div>
                    <span className="text-cyan-300">Opponent Position:</span>
                    <span className="text-green-300 block mt-1">2 values - normalized vector</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DQN Algorithm Explanation */}
            <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl rounded-2xl border-2 border-green-500/40 p-8 shadow-2xl shadow-green-500/10">
              <h5 className="text-2xl font-bold text-green-400 mb-6 font-mono flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                DEEP Q-LEARNING SYSTEM
              </h5>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column: Algorithm Details */}
                <div className="space-y-6">
                  <div>
                    <h6 className="text-cyan-400 font-mono font-semibold mb-3">Core Algorithm:</h6>
                    <p className="text-neutral-300 leading-relaxed">
                      Implements <span className="text-green-400 font-mono">DQN with experience replay</span> and
                      epsilon-greedy exploration. Experience replay breaks temporal correlations by storing transitions
                      in a buffer and sampling randomly during training, reducing variance in gradient updates.
                    </p>
                  </div>

                  <div>
                    <h6 className="text-cyan-400 font-mono font-semibold mb-3">Rotation Invariance:</h6>
                    <p className="text-neutral-300 leading-relaxed">
                      The agent learns <span className="text-green-400 font-mono">relative actions</span> (forward, turn left, turn right)
                      rather than absolute directions, enabling transfer across different orientations.
                    </p>
                  </div>
                </div>

                {/* Right Column: Hyperparameters */}
                <div className="bg-neutral-950/50 rounded-xl border border-cyan-500/30 p-6">
                  <h6 className="text-cyan-400 font-mono font-semibold mb-4">Hyperparameters:</h6>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between items-center py-2 border-b border-green-500/10">
                      <span className="text-neutral-400">Learning Rate:</span>
                      <span className="text-green-300">0.001</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-500/10">
                      <span className="text-neutral-400">Discount (γ):</span>
                      <span className="text-green-300">0.95</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-500/10">
                      <span className="text-neutral-400">Replay Buffer:</span>
                      <span className="text-green-300">10,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-500/10">
                      <span className="text-neutral-400">Batch Size:</span>
                      <span className="text-green-300">64</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-neutral-400">ε Decay:</span>
                      <span className="text-green-300">0.995/episode</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://github.com/blackstonecan/rl-snake-game"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-cyan-600 text-white text-lg font-bold rounded-xl hover:from-green-500 hover:to-cyan-500 transition-all duration-300 ease-in-out hover:scale-105 shadow-2xl shadow-green-500/50 hover:shadow-green-400/70 hover:shadow-2xl"
            >
              <span className="font-mono pointer-events-none">VIEW ON GITHUB</span>
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out pointer-events-none" />
            </a>
          </div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-neutral-950 z-20 pointer-events-none" />

      {/* Custom Animations */}
      <style>{`
        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  );
}
