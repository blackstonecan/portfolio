const navItems = [
  { label: "Me", href: "#me" },
  { label: "Backend", href: "#backend" },
  { label: "Frontend", href: "#frontend" },
  { label: "Mobile", href: "#mobile" },
  { label: "Machine Learning", href: "#ml" },
  { label: "Desktop", href: "#desktop" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6">
        <ul className="flex items-center gap-8 text-sm text-neutral-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
