import { ArrowUpRight, Github, Linkedin, FileText, Copy, Check } from 'lucide-react';

export function Hero({ identity, onCopyEmail, emailCopied, className, reducedMotion }) {
  return (
    <section id="hero" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell grid items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
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

        <div className="card-surface relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-0 border border-accent/20" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Signal</p>
              <span className="chip">Production</span>
            </div>
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
