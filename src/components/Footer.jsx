export function Footer({ identity }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {identity.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={identity.github} target="_blank" rel="noreferrer" className="link-underline">
            GitHub
          </a>
          <a href={identity.linkedin} target="_blank" rel="noreferrer" className="link-underline">
            LinkedIn
          </a>
          <span>Built with React & Tailwind, hosted on GitHub Pages.</span>
        </div>
      </div>
    </footer>
  );
}
