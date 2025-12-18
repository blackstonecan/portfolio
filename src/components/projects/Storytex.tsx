import {
    Heart,
    Users,
    Camera,
    ExternalLink
} from 'lucide-react';
import storytexLogo from '../../assets/storytex_logo.webp';

const Storytex = () => {
    const features = [
        {
            icon: Camera,
            title: "Memory & Dreams",
            description: "Preserve life moments with AI-powered dream interpretation and rich media support",
            color: "from-purple-400 to-pink-400"
        },
        {
            icon: Heart,
            title: "Emotion Analytics",
            description: "Track and visualize emotional patterns with comprehensive data insights",
            color: "from-pink-400 to-rose-400"
        },
        {
            icon: Users,
            title: "Social Tracking",
            description: "Analyze relationships, encounters, and social patterns over time",
            color: "from-violet-400 to-purple-400"
        }
    ];

    const techStack = [
        "React", "TypeScript", "Node.js", "PostgreSQL",
        "AWS (EC2/RDS/S3)", "OpenAI"
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 via-purple-950/20 to-neutral-950">
            {/* Animated cosmic background */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[150px]"
                    style={{ animation: 'pulse-slow 8s ease-in-out infinite' }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px]"
                    style={{ animation: 'pulse-slow 10s ease-in-out infinite' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px]"
                    style={{ animation: 'pulse-slow 12s ease-in-out infinite' }}
                />

                {/* Stars */}
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 3}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <img
                            src={storytexLogo}
                            alt="Storytex"
                            className="h-24 md:h-32 w-auto object-contain"
                        />
                    </div>

                    <p className="text-xl md:text-2xl text-purple-100/90 font-light mb-6">
                        AI-Powered Memory & Life Tracking Platform
                    </p>

                    <p className="text-base text-purple-200/70 max-w-2xl mx-auto mb-8">
                        Transform life experiences into meaningful narratives with memory preservation,
                        dream analysis, and emotional tracking powered by AI
                    </p>

                    {/* CTA Button */}
                    <a
                        href="https://storytex.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-xl text-white font-semibold shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:shadow-[0_0_80px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Visit Storytex</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>

                {/* Features Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                        Core Features
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl 
                                        bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5 
                                        border border-purple-400/20 backdrop-blur-xl p-8 
                                        transition-all duration-500 cursor-pointer
                                        hover:border-purple-400/60 
                                        hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] 
                                        hover:scale-105"
                                >
                                    {/* Hover glow overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} 
                                            opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    <div className="relative">
                                        {/* Icon */}
                                        <div
                                            className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} 
                                                mb-6 transform transition-transform duration-300 
                                                group-hover:scale-110`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-purple-100 mb-3 
                                                transition-colors group-hover:text-white">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-purple-200/70 leading-relaxed 
                                            transition-colors group-hover:text-purple-200/90">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Tech Stack */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                        Built With
                    </h3>

                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="px-5 py-2.5 rounded-xl bg-purple-500/10 border border-purple-400/30 backdrop-blur-xl hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                            >
                                <span className="text-purple-100 font-medium text-sm">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            {/* Smooth gradient fade to next section */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-neutral-950 z-20" />

            <style>{`
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                50% {
                    transform: translateY(-100vh) translateX(50px);
                    opacity: 0.5;
                }
                }
                
                @keyframes pulse-slow {
                0%, 100% {
                    transform: scale(1);
                    opacity: 0.3;
                }
                50% {
                    transform: scale(1.1);
                    opacity: 0.5;
                }
                }
                
                @keyframes twinkle {
                0%, 100% {
                    opacity: 0.3;
                }
                50% {
                    opacity: 1;
                }
            }
            
            .animate-float {
                animation: float linear infinite;
            }
      `}</style>
        </div>
    );
};

export default Storytex;