import type { CVData } from './schema';

export const defaultCV: CVData = {
  personal: {
    name: '',
    headline: '',
    phone: '',
    email: '',
    linkedin: '',
    location: '',
  },
  summary: '',
  experience: [],
  education: [],
  skillGroups: [],
  history: [],
  projects: [],
  notes: '',
};
