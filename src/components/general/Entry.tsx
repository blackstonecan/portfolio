import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Download, Mail, Code2 } from "lucide-react";
import CV from "../../assets/CV.pdf";

const BG_URL =
  "https://images.pexels.com/photos/3568360/pexels-photo-3568360.jpeg";

export default function Entry() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [bgReady, setBgReady] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting;
        if (!isVisible) return;

        // Preload image, then mark ready
        const img = new Image();
        img.src = BG_URL;
        img.onload = () => setBgReady(true);

        io.disconnect();
      },
      { root: null, rootMargin: "200px 0px", threshold: 0.01 } // start loading a bit early
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef as any}
      id="me"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={
        bgReady
          ? {
              backgroundImage: `url(${BG_URL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-neutral-950/80" />

      {/* Smooth gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-neutral-950" />

      {/* Subtle grid pattern with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-0 animate-fade-in" />

      {/* Content */}
      <div
        className="relative transition-transform duration-[1000ms] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      >
        {/* Minimal badge with staggered animation */}
        <div className="mb-8 flex items-center justify-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
          <div className="flex items-center gap-2.5 border-b border-neutral-400/20 pb-1 transition-all duration-500 hover:border-neutral-300/40">
            <Code2 className="h-3.5 w-3.5 text-neutral-400 transition-all duration-500" />
            <span className="text-xs font-medium tracking-wide text-neutral-400 uppercase transition-all duration-500">Software Engineer</span>
          </div>
        </div>

        {/* Clean name typography with smooth entrance */}
        <h1 className="mb-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-neutral-50 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] transition-all duration-700 hover:tracking-wide">
          Emre Can Karataş
        </h1>

        {/* Description with subtle emphasis and animation */}
        <p className="mb-12 max-w-2xl text-base text-neutral-300 sm:text-lg leading-relaxed font-light opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
          Computer Engineering student at{" "}
          <span className="font-normal text-neutral-200 transition-all duration-300">Özyeğin University</span>.
          I build full-stack web applications, high-performance backend systems, and AI-driven
          projects. Focused on clean code, security, and scalability.
        </p>

        {/* Minimal CTA buttons with staggered entrance */}
        <div className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
          <a
            href="https://www.github.com/blackstonecan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-md border border-neutral-700 bg-neutral-900/50 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-out hover:border-neutral-500 hover:bg-neutral-800/50 hover:scale-105 hover:shadow-lg hover:shadow-neutral-900/50"
          >
            <Github className="h-4 w-4 transition-all duration-500 ease-out group-hover:scale-125" />
            <span className="transition-all duration-500">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/emrecankaratas/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-md border border-neutral-700 bg-neutral-900/50 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-out hover:border-neutral-500 hover:bg-neutral-800/50 hover:scale-105 hover:shadow-lg hover:shadow-neutral-900/50"
          >
            <Linkedin className="h-4 w-4 transition-all duration-500 ease-out group-hover:scale-125" />
            <span className="transition-all duration-500">LinkedIn</span>
          </a>

          <a
            href={CV}
            download
            className="group flex items-center gap-2.5 rounded-md border border-neutral-200 bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all duration-500 ease-out hover:bg-neutral-200 hover:scale-105 hover:shadow-lg hover:shadow-neutral-900/50"
          >
            <Download className="h-4 w-4 transition-all duration-500 ease-out group-hover:scale-125" />
            <span className="transition-all duration-500">Download CV</span>
          </a>

          <a
            href="mailto:emrecankkaratas@gmail.com"
            className="group flex items-center gap-2.5 rounded-md border border-neutral-700 bg-neutral-900/50 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-out hover:border-neutral-500 hover:bg-neutral-800/50 hover:scale-105 hover:shadow-lg hover:shadow-neutral-900/50"
          >
            <Mail className="h-4 w-4 transition-all duration-500 ease-out group-hover:scale-125" />
            <span className="transition-all duration-500">Email</span>
          </a>
        </div>
      </div>

      {/* Optional: subtle fallback while loading */}
      {!bgReady && (
        <div className="absolute inset-0 -z-10 bg-neutral-900" />
      )}
    </section>
  );
}
