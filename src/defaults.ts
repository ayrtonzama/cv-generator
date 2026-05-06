import type { CVData } from './schema';
import exampleData from './cv-data.example.json';

// Optionally load src/cv-data.json (gitignored — contains real personal data).
// Falls back to the committed example if the file is absent (e.g. fresh clone).
const realModules = import.meta.glob<{ default: CVData }>('./cv-data.json', {
  eager: true,
});
const realData = Object.values(realModules)[0]?.default;

export const defaultCV: CVData = (realData ?? exampleData) as CVData;
