import { useEffect, useState } from 'react';

interface HeaderProps {
  currentPath: string;
}

export function Header({ currentPath }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/what-we-do', label: 'What We Do' },
    { path: '/how-we-work', label: 'How We Work' },
    { path: '/proof', label: 'Proof' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-stone-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-stone-200' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a href="#/" className="text-stone-900 tracking-tight">
            AutoDrive Systems
          </a>

          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className={`text-sm transition-colors ${
                  currentPath === item.path
                    ? 'text-stone-900'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
