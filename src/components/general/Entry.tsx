import { useEffect, useRef, useState } from "react";

const BG_URL =
  "https://images.pexels.com/photos/3568360/pexels-photo-3568360.jpeg";

export default function Entry() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [bgReady, setBgReady] = useState(false);

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

      {/* Content */}
      <div className="relative">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Computer Engineer
        </h1>

        <p className="mb-8 max-w-xl text-sm text-neutral-200/80 sm:text-base">
          Final-year Computer Engineering student at Özyeğin University. I build
          production-ready backend systems, full-stack applications, and
          machine-learning driven projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/blackstonecan"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-200/30 bg-neutral-950/30 px-4 py-2 text-sm backdrop-blur transition hover:border-neutral-200/60"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/emrecankarataş/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-200/30 bg-neutral-950/30 px-4 py-2 text-sm backdrop-blur transition hover:border-neutral-200/60"
          >
            LinkedIn
          </a>

          <a
            href="/cv.pdf"
            download
            className="rounded-md border border-neutral-200/30 bg-neutral-950/30 px-4 py-2 text-sm backdrop-blur transition hover:border-neutral-200/60"
          >
            Download CV
          </a>

          <a
            href="mailto:can.karatas@ozu.edu.tr"
            className="rounded-md border border-neutral-200/30 bg-neutral-950/30 px-4 py-2 text-sm backdrop-blur transition hover:border-neutral-200/60"
          >
            Email
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
