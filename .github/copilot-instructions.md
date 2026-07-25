# Instructions pour GitHub Copilot — Portfolio Adam Hachicha

Ce fichier est chargé automatiquement par Copilot Chat / Agent mode dans VS Code à chaque
session sur ce dépôt (vérifiable dans la liste "References" d'une réponse).

## Projet

Portfolio personnel one-page, en React + Vite + Tailwind CSS, hébergé gratuitement sur
GitHub Pages. Le site présente les projets, compétences et expériences d'Adam Hachicha,
Software Engineer / Data Engineer.

## Documents de référence — les lire avant de générer du code

- `content/profile.md` : **source de vérité unique** pour tout le texte du site (identité,
  expériences, projets, formation, compétences). Ne jamais inventer une info absente de ce
  fichier ; si une info manque, poser la question plutôt que d'improviser.
- `docs/site-structure.md` : liste des sections, onglets de navigation, et ce que doit contenir
  chacune.
- `docs/design-system.md` : palette, typographie, espacement, composants, animations —
  respecter ces tokens partout au lieu d'improviser des couleurs ou polices.

## Stack & conventions techniques

- React 18 (function components + hooks uniquement, pas de classes).
- Vite comme bundler.
- Tailwind CSS pour tout le style — étendre `tailwind.config.js` avec les tokens de
  `docs/design-system.md` (couleurs, familles de police, échelle) plutôt que d'utiliser des
  valeurs arbitraires `[#hex]` dispersées dans le code.
- Un composant par section, dans `src/components/` : `Nav`, `Hero`, `About`, `Experience`,
  `Projects`, `Skills`, `Education`, `Contact`, `Footer`.
- Les composants lisent leur contenu depuis un fichier `src/data/profile.js` (ou `.ts`) —
  transformer `content/profile.md` en objets JS structurés une bonne fois, plutôt que de coder
  le texte en dur dans le JSX. Ça permet de mettre à jour le contenu sans toucher au design.
- Icônes : `lucide-react`.
- Pas de dépendance supplémentaire non listée ici sans le demander d'abord.

## Contenu

- Toujours utiliser les données réelles de `content/profile.md` — jamais de Lorem Ipsum, jamais
  de faux chiffres ou pourcentages de compétence inventés.
- Ne jamais afficher le numéro de téléphone publiquement (voir la note dans
  `content/profile.md` et `docs/site-structure.md`).

## Accessibilité & responsive

- Site utilisable au clavier, focus visible partout, contraste conforme (voir
  `docs/design-system.md`).
- Respecter `prefers-reduced-motion`.
- Responsive mobile-first, breakpoint principal à `768px`.

## Déploiement — GitHub Pages

- Build statique via `npm run build` (sortie dans `dist/`).
- `vite.config.js` doit définir `base: '/nom-du-repo/'` si le dépôt n'est pas
  `adamhpro.github.io` (sinon `base: '/'`).
- Déploiement automatisé via GitHub Actions (`.github/workflows/deploy.yml`) vers GitHub Pages
  à chaque push sur `main`. Si ce workflow n'existe pas encore, le créer.

## Ordre de construction suggéré

1. Config Tailwind avec les tokens du design system + polices (Fraunces, IBM Plex Sans, IBM
   Plex Mono via Google Fonts ou fontsource).
2. `src/data/profile.js` généré depuis `content/profile.md`.
3. `Nav` + `Hero`.
4. `About`, `Experience` (timeline), `Projects`, `Skills`, `Education`, `Contact`, `Footer`.
5. Animations au scroll (`IntersectionObserver`) et toggle clair/sombre.
6. Passe responsive complète (mobile, tablette).
7. Workflow GitHub Actions de déploiement.

Construire section par section et s'arrêter pour vérifier le rendu plutôt que de tout générer
en un seul gros diff.
