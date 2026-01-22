export function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { path: '/what-we-do', label: 'What We Do' },
    { path: '/how-we-work', label: 'How We Work' },
    { path: '/proof', label: 'Proof' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="tracking-tight mb-4">AutoDrive Systems</div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Reliable systems for demanding operations
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-sm text-stone-400 mb-4">Navigation</div>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={`#${item.path}`}
                  className="block text-sm text-stone-300 hover:text-stone-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm text-stone-400 mb-4">Contact</div>
            <a
              href="#/contact"
              className="inline-block text-sm text-stone-300 hover:text-stone-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-800 pt-8">
          <p className="text-xs text-stone-500">
            © {currentYear} AutoDrive Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
