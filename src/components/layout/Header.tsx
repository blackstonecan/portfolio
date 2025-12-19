import { useState, useEffect } from 'react';
import icon from '../../assets/icon.png';

const navItems = [
  { label: "Me", href: "#me" },
  { label: "Projects", href: "#projects" },
  { label: "Backend", href: "#backend" },
  { label: "Frontend", href: "#frontend" },
  { label: "Mobile", href: "#mobile" },
  { label: "Machine Learning", href: "#ml" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Get the target element
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo on the left */}
          <a href="#me" className="flex items-center relative z-50" onClick={(e) => handleNavClick(e, "#me")}>
            <img src={icon} alt="Logo" className="h-10 w-10" />
          </a>

          {/* Desktop Navigation - hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-white"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button - visible on mobile only */}
          <button
            className="md:hidden relative z-50 flex flex-col gap-1.5 p-2 text-neutral-300 hover:text-white transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-950 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-3xl text-neutral-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition hover:text-white hover:scale-105 duration-300"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}