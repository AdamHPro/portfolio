export function Projects({ projects, className, reducedMotion }) {
  return (
    <section id="projects" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="mt-2 font-display text-2xl text-ink sm:text-[2rem]">Three case studies that reflect the same engineering discipline.</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card-surface group relative overflow-hidden p-6 transition-colors duration-200 hover:border-accent/40">
              <div className="absolute right-4 top-4 h-10 w-10 rounded-sm border border-line group-hover:border-accent-2" />
              <div className="space-y-4">
                <p className="eyebrow">Case study</p>
                <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                <p className="text-sm leading-7 text-ink-muted">{project.summary}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
