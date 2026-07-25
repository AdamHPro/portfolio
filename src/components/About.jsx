export function About({ about, leadership, className, reducedMotion }) {
  return (
    <section id="about" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-2 font-display text-2xl text-ink sm:text-[2rem]">About Adam</h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="max-w-2xl text-lg leading-8 text-ink/90">{about.summary}</p>
            <div className="card-surface p-6">
              <p className="eyebrow">Languages</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {about.languages.map((language) => (
                  <div key={language.name} className="chip">
                    <span className="font-mono text-[0.7rem] text-accent-2">{language.name}</span>
                    <span className="ml-2 text-ink-muted">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-surface p-6">
            <p className="eyebrow">Engagement</p>
            <div className="mt-5 space-y-5">
              {leadership.map((item) => (
                <div key={item.title} className="border-l border-accent-2/50 pl-4">
                  <p className="font-medium text-ink">{item.title}</p>
                  {item.period ? <p className="mt-1 font-mono text-sm text-accent-2">{item.period}</p> : null}
                  <p className="mt-2 text-sm leading-7 text-ink-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
