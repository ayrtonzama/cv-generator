import { z } from 'zod';

export const SkillIcon = z.enum(['bolt', 'bulb', 'code', 'wrench']);
export type SkillIconName = z.infer<typeof SkillIcon>;

export const Experience = z.object({
  role: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  bullets: z.array(z.string()),
});

export const Education = z.object({
  degree: z.string(),
  school: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export const SkillGroup = z.object({
  title: z.string(),
  icon: SkillIcon,
  items: z.array(z.string()),
});

export const TitledBlock = z.object({
  title: z.string(),
  body: z.string(),
});

export const CVData = z.object({
  personal: z.object({
    name: z.string(),
    headline: z.string(),
    phone: z.string(),
    email: z.string(),
    linkedin: z.string(),
    location: z.string(),
  }),
  summary: z.string(),
  experience: z.array(Experience),
  education: z.array(Education),
  skillGroups: z.array(SkillGroup),
  history: z.array(TitledBlock),
  projects: z.array(TitledBlock),
  notes: z.string(),
});

export type CVData = z.infer<typeof CVData>;
export type Experience = z.infer<typeof Experience>;
export type Education = z.infer<typeof Education>;
export type SkillGroup = z.infer<typeof SkillGroup>;
export type TitledBlock = z.infer<typeof TitledBlock>;
