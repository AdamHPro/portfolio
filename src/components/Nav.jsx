import { MoonStar, SunMedium, Menu, X } from 'lucide-react';

export function Nav({ sections, activeSection, mobileNavOpen, onToggleMobile, onSelectSection, theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.24em] text-ink" onClick={() => onSelectSection()}>
          Adam Hachicha
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => onSelectSection()}
                className={`nav-link text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors duration-150 ${
                  isActive ? 'text-accent' : 'hover:text-ink'
                }`}
              >
                <span className="relative inline-flex items-center">
                  {section.label}
                  <span className={`ml-2 h-px w-6 bg-accent transition-transform duration-200 ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors duration-150 hover:border-accent-2 hover:text-accent-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label="Toggle color theme"
          >
            {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>

          <button
            type="button"
            onClick={onToggleMobile}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors duration-150 hover:border-accent-2 hover:text-accent-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileNavOpen}
          >
            {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileNavOpen ? (
        <div className="border-t border-line bg-bg/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => onSelectSection()}
                  className={`text-[0.8125rem] font-medium uppercase tracking-[0.1em] ${
                    isActive ? 'text-accent' : 'text-ink-muted'
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
