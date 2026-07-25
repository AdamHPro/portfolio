import { TagPill } from './TagPill';

export function Skills({ skills, className, reducedMotion }) {
  return (
    <section id="skills" data-section className={`${className} ${reducedMotion ? 'is-visible' : ''}`}>
      <div className="container-shell section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 className="mt-2 font-display text-2xl text-ink sm:text-[2rem]">Capabilities organized by domain.</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="card-surface p-6">
              <p className="eyebrow">{group.category}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TagPill key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
