export function Education({ education, certifications, className, reducedMotion }) {
  return (
    <section id="education" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Education</p>
            <h2 className="mt-2 font-display text-2xl text-ink sm:text-[2rem]">Study, research, and applied technical depth.</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <div key={item.school} className="card-surface p-6">
              <p className="eyebrow">Academic path</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{item.school}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-muted">{item.location}</p>
              <p className="mt-4 text-sm leading-7 text-ink/90">{item.program}</p>
              <p className="mt-3 font-mono text-sm text-accent-2">{item.period}</p>
              {item.coursework ? (
                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.16em] text-ink-muted">Coursework</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span key={course} className="chip">{course}</span>
                    ))}
                  </div>
                </div>
              ) : null}
              {item.exchange ? <p className="mt-6 text-sm leading-7 text-ink-muted">{item.exchange}</p> : null}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((certificate) => (
            <article key={certificate.name} className="card-surface flex h-full flex-col justify-between gap-4 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent">Certification</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{certificate.name}</h3>
                </div>
                {certificate.logo ? (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line/70 bg-white/90 p-2 shadow-sm sm:h-16 sm:w-16 dark:bg-surface/90">
                    <img src={certificate.logo} alt={`${certificate.issuer} logo`} className="h-full w-full object-contain" loading="lazy" />
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
                <span className="font-medium text-ink">{certificate.issuer}</span>
                <span className="h-1 w-1 rounded-full bg-accent-2" />
                <span>{certificate.issued}</span>
              </div>

              {certificate.skills ? (
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
