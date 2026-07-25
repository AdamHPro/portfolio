# Structure du site — sections & navigation

## Type de site

**Single-page application** (une seule route `/`) avec une nav sticky en haut dont chaque onglet
fait un scroll fluide (`scroll-behavior: smooth`) vers une ancre `id="..."`. Pas de routing
côté serveur : c'est le plus simple à déployer sur GitHub Pages, le plus rapide à charger, et
un recruteur voit tout le profil en scrollant sans avoir à cliquer entre des pages.

## Navigation (onglets)

Barre de nav sticky, fond qui devient flou (`backdrop-filter: blur`) au scroll, liste de liens
d'ancrage. Sur mobile, elle se replie en menu hamburger.

| # | Onglet | Ancre |
|---|--------|-------|
| 1 | À propos | `#about` |
| 2 | Expériences | `#experience` |
| 3 | Projets | `#projects` |
| 4 | Compétences | `#skills` |
| 5 | Formation | `#education` |
| 6 | Contact | `#contact` |

Le nom / logo à gauche de la nav ramène en haut de page (`#hero`), donc **Accueil n'a pas besoin
d'être un onglet séparé**.

## Détail des sections

### 0. Hero (`#hero`)
- Pas dans la nav — c'est la première chose vue au chargement.
- Contenu : nom, titre actuel (`Identity.title` dans `content/profile.md`), tagline, et 2-3
  boutons d'action : LinkedIn, GitHub, CV (PDF téléchargeable placé dans `public/cv.pdf`).
- Doit poser le ton du site en une lecture de 3 secondes : qui, quoi, où.

### 1. À propos (`#about`)
- Source : `About / Summary` dans `content/profile.md`.
- Paragraphe de bio (2-4 phrases) + langues parlées.
- Bloc compact "Engagement" en fin de section reprenant `Leadership & Volunteering` (3 lignes
  max, ce n'est pas le cœur du profil professionnel mais ça ajoute du relief humain).

### 2. Expériences (`#experience`)
- Source : `Experience` dans `content/profile.md`.
- **Timeline verticale chronologique** (du plus récent en haut) : c'est justifié ici, les
  expériences sont réellement une séquence dans le temps, contrairement à une numérotation
  01/02/03 artificielle.
- Chaque entrée : poste, entreprise, dates, lieu, 2-4 points clés, tags de stack technique.
- La mission "Caisse des Dépôts" est imbriquée sous Illuin/Paris Digital Lab (c'est une mission
  au sein de cette expérience, pas une ligne séparée dans la timeline).

### 3. Projets (`#projects`)
- Source : `Projects` dans `content/profile.md` (les 3 mêmes missions, reformulées en format
  "étude de cas" plus visuel que la timeline : carte avec titre accrocheur, résumé en 2 phrases,
  tags de stack, éventuellement un lien si le code est public sur GitHub).
- 3 cartes : Agentic Invoice Extraction Platform (Cartier), Agentic RAG Event-Matching Agent
  (Caisse des Dépôts), Singapore Transit Analytics Dashboard (NUS).

### 4. Compétences (`#skills`)
- Source : `Skills` dans `content/profile.md`.
- Regroupées par catégorie (Programming, Cloud & Deployment, AI, Data Engineering), affichées en
  tags/pills plutôt qu'en barres de progression avec un pourcentage inventé — on n'a pas de
  données réelles de niveau, une pill est honnête, une barre à 87 % ne l'est pas.

### 5. Formation (`#education`)
- Source : `Education` + `Certifications` dans `content/profile.md`.
- Deux cartes : CentraleSupélec (avec mention de l'échange à NUS) et Lycée Saint-Louis (prépa).
- La certification Snowflake apparaît en petit badge sous la carte CentraleSupélec.

### 6. Contact (`#contact`)
- Source : `Identity` dans `content/profile.md`.
- Affiche : email (avec bouton "copier" ou lien `mailto:`), LinkedIn, GitHub.
- **Ne pas afficher le numéro de téléphone publiquement.** C'est une donnée personnelle exposée
  sur un site public indexé par les moteurs de recherche ; l'email + LinkedIn suffisent pour
  qu'un recruteur prenne contact.

### Footer
- Copyright + année courante générée dynamiquement, liens rapides (GitHub, LinkedIn), mention
  discrète "Construit avec React & Tailwind, hébergé sur GitHub Pages".

## Responsive

- Desktop : nav horizontale, timeline avec règle verticale à gauche, grille 2-3 colonnes pour
  Projets et Compétences.
- Mobile (< 768px) : nav en hamburger, timeline empilée en une colonne (la règle verticale devient
  une simple bordure supérieure sur chaque carte), grilles en une colonne.
