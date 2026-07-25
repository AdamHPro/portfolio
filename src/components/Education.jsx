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

        <div className="mt-8 flex flex-wrap gap-4">
          {certifications.map((certificate) => (
            <div key={certificate.name} className="card-surface px-5 py-4">
              <p className="text-sm font-medium text-ink">{certificate.name}</p>
              <p className="mt-2 text-sm text-ink-muted">{certificate.issuer} · {certificate.issued}</p>
              {certificate.skills ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
