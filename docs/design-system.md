# Charte graphique — Design System React

## Direction créative

Le sujet réel : un ingénieur qui construit des pipelines de données et des agents IA avec une
précision d'horloger — il travaille littéralement chez un horloger. Plutôt que de plaquer une
esthétique "montre de luxe" au premier degré (ce serait too much / hors-sujet pour un portfolio
de recruteur), on prend cette précision comme **principe structurant** : lignes fines, grille
réglée, repères millimétrés, chiffres monospace — l'esthétique d'un plan technique / d'une fiche
de spécifications, pas d'un dial de montre. On évite volontiers les trois pièges des designs
génériques IA : (1) fond crème + serif + accent terracotta, (2) fond quasi-noir + un seul accent
fluo, (3) style "broadsheet" journal. La palette ci-dessous est volontairement bicolore (laiton +
bleu-acier) sur un fond ardoise-bleuté, jamais noir pur.

**Signature du site :** la timeline d'expériences est une **règle graduée** — un trait vertical
avec des graduations fines à chaque date (comme un pied à coulisse), et les cartes de projets ont
des repères de référence en chiffres monospace reliés par un fin trait, comme des annotations sur
un plan technique. C'est l'unique "risque" visuel du site ; tout le reste reste sobre et discipliné.

## Palette

### Mode sombre (par défaut)

| Rôle | Variable CSS | Hex |
|---|---|---|
| Fond | `--bg` | `#12161C` |
| Surface (cartes) | `--surface` | `#1A2029` |
| Texte principal | `--ink` | `#E9E6DD` |
| Texte atténué | `--ink-muted` | `#8791A0` |
| Accent primaire (laiton) | `--accent` | `#C6A15B` |
| Accent secondaire (acier) | `--accent-2` | `#6E93AC` |
| Traits / séparateurs | `--line` | `#262D38` |

### Mode clair (toggle optionnel)

| Rôle | Variable CSS | Hex |
|---|---|---|
| Fond | `--bg` | `#EEF1F3` |
| Surface (cartes) | `--surface` | `#FFFFFF` |
| Texte principal | `--ink` | `#1B2129` |
| Texte atténué | `--ink-muted` | `#5B6675` |
| Accent primaire (laiton) | `--accent` | `#A6813F` |
| Accent secondaire (acier) | `--accent-2` | `#3F6E8C` |
| Traits / séparateurs | `--line` | `#D7DCE1` |

Règle d'usage : l'accent laiton est réservé aux éléments qui comptent vraiment (liens actifs,
CTA, titres de poste) — jamais en fond plein sur de grandes surfaces. L'accent acier sert au
trait technique (lignes de timeline, bordures de focus, petites icônes).

## Typographie

Une seule famille superfamille cohérente + un display en rupture, plutôt qu'un mélange aléatoire :

- **Display (nom, titres de section) :** `Fraunces` (serif variable, optical sizing) — utilisé
  avec parcimonie, uniquement pour le nom en hero et les `h2` de section. Poids 500, letter-spacing
  légèrement resserré.
- **Corps de texte / UI :** `IBM Plex Sans` — lisible, neutre, à vocation technique.
- **Chiffres, dates, tags, labels de nav :** `IBM Plex Mono` — utilisé pour tout ce qui est
  donnée : dates de la timeline, tags de stack technique, labels de nav en majuscules trackées.
  Ce choix fait le lien visuel entre "code" et "précision instrumentale".

Échelle type (desktop) :
```
h1 (hero name)   clamp(2.75rem, 5vw, 4.5rem) — Fraunces 500
h2 (section)     clamp(1.75rem, 3vw, 2.5rem) — Fraunces 500
eyebrow (label)  0.75rem, uppercase, tracking 0.15em — Plex Mono 500, couleur --ink-muted
body             1rem / line-height 1.6 — Plex Sans 400
nav link         0.8125rem, uppercase, tracking 0.1em — Plex Mono 500
date / tag       0.8125rem — Plex Mono 400
```

## Layout & espacement

- Grille 4px/8px. Conteneur `max-width: 1100px`, marges latérales `24px` mobile / `64px+` desktop.
- Rythme vertical entre sections : `96–140px` desktop, `56px` mobile.
- Hero en deux colonnes asymétriques sur desktop (texte à gauche, espace négatif ou fine
  illustration linéaire à droite) ; une colonne sur mobile.

## Composants

- **Nav** : sticky, fond flouté au scroll (`backdrop-filter: blur(12px)`), fine bordure basse
  `1px solid var(--line)`. Lien actif souligné par un trait animé qui se déploie de gauche à
  droite (`transform: scaleX`), pas de fond plein.
- **Boutons primaires** : contour laiton, texte laiton, se remplissent doucement au survol
  (`transition: 150ms ease`). Pas de bouton plein par défaut — on garde l'accent rare.
- **Boutons secondaires / liens** : texte simple avec soulignement au survol.
- **Cartes (projets, formation)** : fond `--surface`, bordure `1px solid var(--line)`, coins
  légèrement arrondis (`rounded-md`, pas trop — ça reste un plan technique, pas un bento ludique).
  Au survol : un fin repère d'angle (coin bracket, comme un cadre de mise au point photo) apparaît
  plutôt qu'un `scale-up` générique.
- **Timeline (Expériences)** : trait vertical `--accent-2` à gauche sur desktop, graduation
  (petit tiret horizontal) à chaque date, date affichée en Plex Mono juste à côté de la
  graduation. Sur mobile, le trait devient une bordure supérieure sur chaque carte empilée.
- **Tags de stack technique** : pills fines à bordure (pas de fond plein coloré), texte Plex Mono,
  petites majuscules.
- **Icônes** : `lucide-react` — cohérent avec l'esthétique de trait fin déjà utilisée partout.

## Mouvement

Discret et intentionnel, pas décoratif :
- Au chargement du hero : léger fade + tracé progressif d'un trait fin (comme un plan qu'on
  dessine), une seule fois.
- Au scroll : chaque section apparaît en `fade + translateY(12px)`, déclenché une seule fois via
  `IntersectionObserver` — jamais d'animation qui se répète à chaque passage.
- Survol carte : apparition du repère d'angle décrit plus haut, `150–200ms`.
- Respecter `prefers-reduced-motion: reduce` (désactiver toutes les transitions/animations).

## Accessibilité

- Contraste texte/fond ≥ 4.5:1 en mode sombre et clair (vérifier `--ink-muted` sur `--bg`).
- États de focus clavier visibles : anneau `2px solid var(--accent-2)` avec offset, jamais
  supprimé via `outline: none` sans remplacement.
- Cibles tactiles ≥ 44px sur mobile pour la nav et les boutons.
