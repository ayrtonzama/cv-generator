import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import { CVData } from './schema';
import { defaultCV } from './defaults';
import { CVDocument } from './cv/CVDocument';
import { Editor } from './editor/Editor';
import { loadFromStorage, saveToStorage, clearStorage } from './storage';

function useDebounced<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function App() {
  const initial = useMemo(() => loadFromStorage() ?? defaultCV, []);
  const methods = useForm<CVData>({
    resolver: zodResolver(CVData),
    defaultValues: initial,
    mode: 'onChange',
  });

  const watched = useWatch({ control: methods.control }) as CVData;
  const live = (watched ?? initial) as CVData;
  const debounced = useDebounced(live, 350);

  useEffect(() => {
    saveToStorage(debounced);
  }, [debounced]);

  const handleReset = () => {
    clearStorage();
    methods.reset(defaultCV);
  };

  const fileName = `${(live.personal?.name || 'cv').replace(/\s+/g, '-')}.pdf`;

  return (
    <FormProvider {...methods}>
      <div className="flex h-screen w-screen bg-gray-100">
        <aside className="w-[44%] min-w-[420px] overflow-y-auto border-r border-gray-200 p-4">
          <Editor onReset={handleReset} />
          <div className="sticky bottom-0 mt-4 -mx-4 border-t border-gray-200 bg-white p-3">
            <PDFDownloadLink
              document={<CVDocument data={debounced} />}
              fileName={fileName}
              className="block w-full rounded bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-black"
            >
              {({ loading }) => (loading ? 'Preparing PDF…' : 'Download PDF')}
            </PDFDownloadLink>
          </div>
        </aside>
        <main className="flex-1">
          <PDFViewer style={{ width: '100%', height: '100%', border: 'none' }} showToolbar>
            <CVDocument data={debounced} />
          </PDFViewer>
        </main>
      </div>
    </FormProvider>
  );
}
