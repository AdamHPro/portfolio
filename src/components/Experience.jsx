export function Experience({ experiences, className, reducedMotion }) {
  return (
    <section id="experience" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="mt-2 font-display text-2xl text-ink sm:text-[2rem]">A chronology of applied engineering.</h2>
          </div>
        </div>

        <div className="relative space-y-8 border-l border-accent-2/60 pl-6 md:pl-12">
          {experiences.map((experience, index) => {
            const isFeaturedMission = experience.company === 'Caisse des Dépôts';
            return (
              <div key={`${experience.company}-${index}`} className="relative">
                <span className="absolute -left-[1.65rem] top-2 h-3 w-3 rounded-full border border-accent-2 bg-bg md:-left-[1.84rem]" />
                <div className="card-surface p-6 sm:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">{experience.role}</p>
                      <h3 className="mt-2 text-xl font-semibold text-ink">{experience.company}</h3>
                    </div>
                    <div className="md:text-right">
                      <p className="font-mono text-sm text-accent-2">{experience.period}</p>
                      {experience.location ? <p className="mt-2 text-sm text-ink-muted">{experience.location}</p> : null}
                      {experience.contract ? <p className="mt-1 text-sm text-ink-muted">{experience.contract}</p> : null}
                      {experience.context ? <p className="mt-2 text-sm text-ink-muted">{experience.context}</p> : null}
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <p className="text-sm leading-7 text-ink/90">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>

                {isFeaturedMission ? (
                  <div className="mt-4 ml-3 rounded-md border border-line bg-surface/70 p-4 sm:ml-6">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-ink-muted">Embedded mission</p>
                    <p className="mt-2 text-sm leading-7 text-ink-muted">This mission is presented within the Illuin / Paris Digital Lab experience, as described in the source profile.</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
