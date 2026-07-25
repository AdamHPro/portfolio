import { ArrowUpRight, Github, Linkedin, FileText, Copy, Check } from 'lucide-react';

const partnerLogos = [
  { src: '/portfolio/logos/cartier.svg', alt: 'Cartier' },
  { src: '/portfolio/logos/illuin.svg', alt: 'Illuin Technology' },
  { src: '/portfolio/logos/centralesupelec.svg', alt: 'CentraleSupélec' },
  { src: '/portfolio/logos/nus.svg', alt: 'National University of Singapore' }
];

export function Hero({ identity, onCopyEmail, emailCopied, className, reducedMotion }) {
  return (
    <section id="hero" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell grid items-center gap-12 pt-10 pb-16 md:grid-cols-[1.15fr_0.85fr] md:pt-12 md:pb-20">
        <div className="max-w-2xl space-y-8">
          <p className="eyebrow">Portfolio · Software engineer</p>
          <h1 className="font-display text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.02em] text-ink">
            {identity.name}
          </h1>
          <p className="max-w-xl text-lg text-ink-muted sm:text-xl">
            {identity.title}
          </p>
          <p className="max-w-xl text-base leading-7 text-ink/90">
            {identity.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-5 py-3 text-sm font-medium text-accent transition-colors duration-150 hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent-2 hover:text-accent-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/portfolio/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <FileText size={18} />
              CV PDF
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 rounded-full border border-line/70 bg-surface/70 px-4 py-3">
            <span className="eyebrow">Experiences</span>
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-8 items-center justify-center rounded-md border border-line/70 bg-white/90 px-3 py-2 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-surface/90"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-5 w-auto max-w-[6.5rem] object-contain opacity-90 transition duration-200 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-line pt-6 text-sm text-ink-muted">
            <span>{identity.location}</span>
            <span className="hidden h-1 w-1 rounded-full bg-accent-2 sm:block" />
            <button
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-ink-muted transition-colors duration-150 hover:border-accent-2 hover:text-accent-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {emailCopied ? <Check size={16} /> : <Copy size={16} />}
              {identity.email}
            </button>
          </div>
        </div>

        <div className="card-surface relative overflow-hidden p-4 sm:p-6">
          <div className="absolute inset-0 border border-accent/20" />
          <div className="relative space-y-5">
            <div className="space-y-4">
              <div className="flex items-end justify-between border-b border-line pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">Current focus</p>
                  <p className="mt-2 font-medium text-ink">Backend APIs · AI tooling</p>
                </div>
                <p className="font-mono text-sm text-accent">01</p>
              </div>
              <div className="flex items-end justify-between border-b border-line pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">Stack</p>
                  <p className="mt-2 font-medium text-ink">Python · TypeScript · Docker</p>
                </div>
                <p className="font-mono text-sm text-accent-2">02</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">Deployment</p>
                  <p className="mt-2 font-medium text-ink">Cloud Run · BigQuery · Cloud SQL</p>
                </div>
                <p className="font-mono text-sm text-accent">03</p>
              </div>
            </div>
            <div className="border-t border-line pt-5 text-sm leading-7 text-ink-muted">
              Precision-driven engineering, from data pipelines to agentic AI systems.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
