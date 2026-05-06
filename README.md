# cv-gen

A React app that generates a CV in the timeline-style layout from the reference image (header → summary → experience timeline → education → skills → history → projects → notes). The CV is rendered with [`@react-pdf/renderer`](https://react-pdf.org/) — the same component tree powers the live preview and the PDF download, so what you see is what gets exported.


## Stack

- Vite + React 19 + TypeScript
- `@react-pdf/renderer` for the CV layout and PDF export
- `react-hook-form` + `zod` for the form
- Tailwind CSS v3 for the editor UI (the CV uses its own `StyleSheet`)
- `localStorage` for persistence — no backend

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173