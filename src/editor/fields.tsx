import { useFormContext } from 'react-hook-form';
import type { CVData } from '../schema';

type Path = string;

const inputClass =
  'w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';
const labelClass = 'block text-xs font-medium text-gray-600 mb-1';

export function TextField({ name, label, placeholder }: { name: Path; label?: string; placeholder?: string }) {
  const { register } = useFormContext<CVData>();
  return (
    <label className="block">
      {label ? <span className={labelClass}>{label}</span> : null}
      <input {...register(name as never)} placeholder={placeholder} className={inputClass} />
    </label>
  );
}

export function TextArea({ name, label, rows = 3, placeholder }: { name: Path; label?: string; rows?: number; placeholder?: string }) {
  const { register } = useFormContext<CVData>();
  return (
    <label className="block">
      {label ? <span className={labelClass}>{label}</span> : null}
      <textarea {...register(name as never)} rows={rows} placeholder={placeholder} className={inputClass} />
    </label>
  );
}

export const Section = ({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) => (
  <section className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-700">{title}</h2>
      {action}
    </div>
    <div className="space-y-3">{children}</div>
  </section>
);

export const Card = ({ children, onRemove, onUp, onDown }: { children: React.ReactNode; onRemove?: () => void; onUp?: () => void; onDown?: () => void }) => (
  <div className="rounded border border-gray-200 bg-gray-50 p-3">
    <div className="mb-2 flex justify-end gap-1">
      {onUp ? <button type="button" onClick={onUp} className="rounded px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-200">↑</button> : null}
      {onDown ? <button type="button" onClick={onDown} className="rounded px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-200">↓</button> : null}
      {onRemove ? <button type="button" onClick={onRemove} className="rounded px-2 py-0.5 text-xs text-red-600 hover:bg-red-100">Remove</button> : null}
    </div>
    <div className="space-y-2">{children}</div>
  </div>
);

export const AddButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded bg-blue-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-blue-700"
  >
    + {label}
  </button>
);
