import { useFieldArray, useFormContext } from 'react-hook-form';
import type { CVData } from '../schema';
import { TextField, TextArea, Section, Card, AddButton } from './fields';

export const Editor = ({ onReset }: { onReset: () => void }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold text-gray-800">CV Editor</h1>
        <button
          type="button"
          onClick={onReset}
          className="rounded border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
        >
          Reset to sample
        </button>
      </div>

      <PersonalSection />
      <SummarySection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <HistorySection />
      <ProjectsSection />
      <NotesSection />
    </div>
  );
};

const PersonalSection = () => (
  <Section title="Personal">
    <TextField name="personal.name" label="Name" />
    <TextField name="personal.headline" label="Headline" />
    <div className="grid grid-cols-2 gap-2">
      <TextField name="personal.phone" label="Phone" />
      <TextField name="personal.email" label="Email" />
      <TextField name="personal.linkedin" label="LinkedIn URL" />
      <TextField name="personal.location" label="Location" />
    </div>
  </Section>
);

const SummarySection = () => (
  <Section title="Summary">
    <TextArea name="summary" rows={5} />
  </Section>
);

const ExperienceSection = () => {
  const { control } = useFormContext<CVData>();
  const { fields, append, remove, move } = useFieldArray({ control, name: 'experience' });
  return (
    <Section
      title="Experience"
      action={
        <AddButton
          label="Add"
          onClick={() =>
            append({ role: '', company: '', location: '', startDate: '', endDate: '', bullets: [] })
          }
        />
      }
    >
      {fields.map((f, i) => (
        <Card
          key={f.id}
          onRemove={() => remove(i)}
          onUp={i > 0 ? () => move(i, i - 1) : undefined}
          onDown={i < fields.length - 1 ? () => move(i, i + 1) : undefined}
        >
          <TextField name={`experience.${i}.role`} label="Role" />
          <TextField name={`experience.${i}.company`} label="Company" />
          <div className="grid grid-cols-3 gap-2">
            <TextField name={`experience.${i}.startDate`} label="Start (MM/YYYY)" />
            <TextField name={`experience.${i}.endDate`} label="End (blank = Present)" />
            <TextField name={`experience.${i}.location`} label="Location" />
          </div>
          <BulletsEditor name={`experience.${i}.bullets`} />
        </Card>
      ))}
    </Section>
  );
};

const BulletsEditor = ({ name }: { name: `experience.${number}.bullets` }) => {
  const { control } = useFormContext<CVData>();
  const { fields, append, remove } = useFieldArray({ control, name: name as never });
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-600">Bullets</span>
        <button
          type="button"
          onClick={() => append('' as never)}
          className="text-xs text-blue-600 hover:underline"
        >
          + add bullet
        </button>
      </div>
      <div className="space-y-1">
        {fields.map((f, i) => (
          <div key={f.id} className="flex gap-1">
            <TextField name={`${name}.${i}` as never} />
            <button
              type="button"
              onClick={() => remove(i)}
              className="rounded px-2 text-xs text-red-600 hover:bg-red-100"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationSection = () => {
  const { control } = useFormContext<CVData>();
  const { fields, append, remove, move } = useFieldArray({ control, name: 'education' });
  return (
    <Section
      title="Education"
      action={
        <AddButton
          label="Add"
          onClick={() =>
            append({ degree: '', school: '', location: '', startDate: '', endDate: '' })
          }
        />
      }
    >
      {fields.map((f, i) => (
        <Card
          key={f.id}
          onRemove={() => remove(i)}
          onUp={i > 0 ? () => move(i, i - 1) : undefined}
          onDown={i < fields.length - 1 ? () => move(i, i + 1) : undefined}
        >
          <TextField name={`education.${i}.degree`} label="Degree" />
          <TextField name={`education.${i}.school`} label="School" />
          <div className="grid grid-cols-3 gap-2">
            <TextField name={`education.${i}.startDate`} label="Start (MM/YYYY)" />
            <TextField name={`education.${i}.endDate`} label="End" />
            <TextField name={`education.${i}.location`} label="Location" />
          </div>
        </Card>
      ))}
    </Section>
  );
};

const SkillsSection = () => {
  const { control, register } = useFormContext<CVData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'skillGroups' });
  return (
    <Section
      title="Skills"
      action={
        <AddButton
          label="Group"
          onClick={() => append({ title: '', icon: 'bolt', items: [] })}
        />
      }
    >
      {fields.map((f, i) => (
        <Card key={f.id} onRemove={() => remove(i)}>
          <div className="grid grid-cols-2 gap-2">
            <TextField name={`skillGroups.${i}.title`} label="Title" />
            <label className="block">
              <span className="block text-xs font-medium text-gray-600 mb-1">Icon</span>
              <select
                {...register(`skillGroups.${i}.icon` as const)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              >
                <option value="bolt">⚡ Bolt</option>
                <option value="bulb">💡 Bulb</option>
                <option value="code">{'</> Code'}</option>
                <option value="wrench">🔧 Wrench</option>
              </select>
            </label>
          </div>
          <SkillItemsEditor name={`skillGroups.${i}.items`} />
        </Card>
      ))}
    </Section>
  );
};

const SkillItemsEditor = ({ name }: { name: `skillGroups.${number}.items` }) => {
  const { control } = useFormContext<CVData>();
  const { fields, append, remove } = useFieldArray({ control, name: name as never });
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-600">Items</span>
        <button
          type="button"
          onClick={() => append('' as never)}
          className="text-xs text-blue-600 hover:underline"
        >
          + add
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {fields.map((f, i) => (
          <div key={f.id} className="flex gap-1">
            <TextField name={`${name}.${i}` as never} />
            <button
              type="button"
              onClick={() => remove(i)}
              className="rounded px-2 text-xs text-red-600 hover:bg-red-100"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const HistorySection = () => {
  const { control } = useFormContext<CVData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'history' });
  return (
    <Section
      title="History"
      action={<AddButton label="Add" onClick={() => append({ title: '', body: '' })} />}
    >
      {fields.map((f, i) => (
        <Card key={f.id} onRemove={() => remove(i)}>
          <TextField name={`history.${i}.title`} label="Title" />
          <TextArea name={`history.${i}.body`} label="Body" rows={2} />
        </Card>
      ))}
    </Section>
  );
};

const ProjectsSection = () => {
  const { control } = useFormContext<CVData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'projects' });
  return (
    <Section
      title="Projects"
      action={<AddButton label="Add" onClick={() => append({ title: '', body: '' })} />}
    >
      {fields.map((f, i) => (
        <Card key={f.id} onRemove={() => remove(i)}>
          <TextField name={`projects.${i}.title`} label="Title" />
          <TextArea name={`projects.${i}.body`} label="Body" rows={2} />
        </Card>
      ))}
    </Section>
  );
};

const NotesSection = () => (
  <Section title="Notes">
    <TextArea name="notes" rows={3} />
  </Section>
);
