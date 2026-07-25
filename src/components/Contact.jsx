import { ArrowUpRight, Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

export function Contact({ identity, className, reducedMotion, emailCopied, onCopyEmail }) {
  return (
    <section id="contact" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-2 font-display text-2xl text-ink sm:text-[2rem]">Open to engineering roles in data, AI, and reliable platforms.</h2>
          </div>
        </div>

        <div className="card-surface p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-lg leading-8 text-ink/90">
                Reach out for conversations around backend systems, data pipelines, AI-powered products, and production deployment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-5 py-3 text-sm font-medium text-accent transition-colors duration-150 hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {emailCopied ? <Check size={18} /> : <Copy size={18} />}
                  Copy email
                </button>
                <a
                  href={`mailto:${identity.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent-2 hover:text-accent-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <Mail size={18} />
                  Email
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <a href={identity.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-md border border-line px-4 py-4 text-sm text-ink-muted transition-colors duration-150 hover:border-accent-2 hover:text-accent-2">
                <span className="inline-flex items-center gap-3">
                  <Linkedin size={18} />
                  LinkedIn
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a href={identity.github} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-md border border-line px-4 py-4 text-sm text-ink-muted transition-colors duration-150 hover:border-accent-2 hover:text-accent-2">
                <span className="inline-flex items-center gap-3">
                  <Github size={18} />
                  GitHub
                </span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
