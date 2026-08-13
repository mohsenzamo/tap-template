# tap-template

A Vue 3 starter template, pre-wired with Vue Router, Tailwind CSS and the Inter
typeface, built on Vite.

## What you get

| | |
|---|---|
| **Vue 3** | `<script setup>` single-file components |
| **Vue Router 4** | history mode, lazy-loaded route components |
| **Tailwind CSS 3** | configured through PostCSS with Autoprefixer |
| **Vite 5** | dev server with HMR, production build |
| **Inter** | bundled locally as a `@font-face`, no external request |

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually <http://localhost:5173>.

| script | what it does |
|---|---|
| `npm run dev` | start the dev server with hot module replacement |
| `npm run build` | build for production into `dist/` |
| `npm run preview` | serve the production build locally to check it |

## Project layout

```
src/
├── assets/          static files, including the Inter font
├── components/      reusable components
├── router/
│   └── index.js     route table
├── views/           one component per route
│   ├── index.vue
│   ├── task.vue
│   └── account.vue
├── App.vue          root component
├── main.js          entry point
└── style.css        Tailwind directives, @font-face, base styles
```

## Routes

Routes live in `src/router/index.js` and are lazy-loaded, so each view ships as
its own chunk:

| path | view |
|---|---|
| `/` | `views/index.vue` |
| `/task` | `views/task.vue` |
| `/account` | `views/account.vue` |

To add one, drop a component in `src/views/` and add an entry:

```js
{ path: '/settings', component: () => import('../views/settings.vue') },
```

## Styling

Tailwind is set up in `tailwind.config.js` and pulled in at the top of
`src/style.css`. Base styles — the gradient background and the Inter font — live
in the same file.

## IDE setup

[VS Code](https://code.visualstudio.com/) with
[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
gives you type checking and template IntelliSense. Disable Vetur if you have it
installed; the two conflict.

See the [Vite config reference](https://vite.dev/config/) for build options.
