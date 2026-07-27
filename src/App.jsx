import { useEffect, useMemo, useState } from 'react';
import { profile } from './data/profile';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.set(id, {
              top: entry.boundingClientRect.top,
              ratio: entry.intersectionRatio
            });
            entry.target.classList.add('is-visible');
          } else {
            visibleSections.delete(id);
          }
        });

        if (visibleSections.size > 0) {
          const nextActiveSection = Array.from(visibleSections.entries())
            .sort(([, a], [, b]) => {
              const aDistance = Math.abs(a.top - 120);
              const bDistance = Math.abs(b.top - 120);
              if (aDistance === bDistance) {
                return b.ratio - a.ratio;
              }
              return aDistance - bDistance;
            })[0][0];
          setActiveSection(nextActiveSection);
        }
      },
      { threshold: [0, 0.16, 0.35, 0.6] }
    );

    const nodes = Array.from(document.querySelectorAll('[data-section]'));
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emailCopied) return;
    const timer = window.setTimeout(() => setEmailCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [emailCopied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.identity.email);
      setEmailCopied(true);
    } catch (error) {
      console.error('Failed to copy email', error);
    }
  };

  const sectionClassName = useMemo(
    () => (reducedMotion ? 'section-observer is-visible' : 'section-observer'),
    [reducedMotion]
  );

  return (
    <div className="min-h-screen">
      <Nav
        sections={sections}
        activeSection={activeSection}
        mobileNavOpen={mobileNavOpen}
        onToggleMobile={() => setMobileNavOpen((value) => !value)}
        onSelectSection={() => setMobileNavOpen(false)}
        theme={theme}
        onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero
          identity={profile.identity}
          onCopyEmail={handleCopyEmail}
          emailCopied={emailCopied}
          className={sectionClassName}
          reducedMotion={reducedMotion}
        />

        <About
          about={profile.about}
          leadership={profile.leadership}
          className={sectionClassName}
          reducedMotion={reducedMotion}
        />
        <Experience
          experiences={profile.experience}
          className={sectionClassName}
          reducedMotion={reducedMotion}
        />
        <Projects
          projects={profile.projects}
          className={sectionClassName}
          reducedMotion={reducedMotion}
        />
        <Skills
          skills={profile.skills}
          className={sectionClassName}
          reducedMotion={reducedMotion}
        />
        <Education
          education={profile.education}
          certifications={profile.certifications}
          className={sectionClassName}
          reducedMotion={reducedMotion}
        />
        <Contact
          identity={profile.identity}
          className={sectionClassName}
          reducedMotion={reducedMotion}
          emailCopied={emailCopied}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      <Footer identity={profile.identity} />
    </div>
  );
}

export default App;
