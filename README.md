# alvinliju.me

The source for
[alvinliju.github.io/alvinliju.me](https://alvinliju.github.io/alvinliju.me/),
my personal corner of the internet.

This is intentionally a small, text-first website. It contains an about page
and a writings index without a CMS, component library, analytics layer, or
unnecessary application machinery. The design is plain on purpose: readable
type, ordinary links, plenty of whitespace, and the writing itself.

## Stack

- [Vite](https://vite.dev/) for development and production builds
- [React](https://react.dev/) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Plain HTML entry points for each top-level page

## Pages

| URL | Purpose | Entry point |
| --- | --- | --- |
| `/` | About and personal notes | `index.html` |
| `/writings/` | Index of published writing | `writings/index.html` |

The site is built as a multi-page Vite project. There is no client-side router:
each page has its own HTML document and React entry point.

## Local development

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).
Changes to the React components and Tailwind classes are reflected immediately.

## Production build

```bash
npm run build
```

This runs the TypeScript compiler and creates the production site in `dist/`.
To preview that build locally:

```bash
npm run preview
```

## Project structure

```text
.
├── index.html                 # About-page HTML entry
├── public/
│   └── blackhole.png          # Static image used on the about page
├── src/
│   ├── App.tsx                # About page
│   ├── Writings.tsx           # Writing-title index
│   ├── index.css              # Tailwind import
│   ├── main.tsx               # About-page React entry
│   └── writings-main.tsx      # Writings-page React entry
├── writings/
│   └── index.html             # Writings HTML entry
├── vite.config.ts             # Plugins and multi-page build inputs
└── package.json
```

## Adding a writing

Every piece of writing should be its own HTML page at
`/writings/<slug>/`. To add one:

1. Create its React component in `src/`.
2. Create a small React entry file for that component.
3. Add `writings/<slug>/index.html` and load the new entry file from it.
4. Register that HTML file under `build.rollupOptions.input` in
   `vite.config.ts`.
5. Add its title and slug to the `writings` array in `src/Writings.tsx`.

The writings index deliberately displays only linked titles. Dates, excerpts,
tags, cards, and embedded article bodies should stay out of the index unless
the direction of the site changes later.

## Editing the site

- Personal copy and interests live in `src/App.tsx`.
- Writing links live in `src/Writings.tsx`.
- Styling is expressed directly with Tailwind utility classes.
- Shared Tailwind setup lives in `src/index.css`.
- Static files belong in `public/`.

Keep additions simple. If a feature can be expressed as a link, paragraph, or
standalone document, it probably does not need a new dependency.

## Deployment

Pushes to `main` are deployed automatically to GitHub Pages at
[alvinliju.github.io/alvinliju.me](https://alvinliju.github.io/alvinliju.me/).
The deployment workflow builds the Vite project with the repository subpath as
its production base and publishes the contents of `dist/`.
