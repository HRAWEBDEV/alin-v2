import { OutOfContext } from '@/utils/OutOfContext';
import { createContext, use } from 'react';

interface SettingsContext {
 show: boolean;
 toggle: (state?: boolean) => unknown;
}

const settingsContext = createContext<SettingsContext | null>(null);

function useSettingsContext() {
 const val = use(settingsContext);
 if (!val) throw new OutOfContext('settings context');
 return val;
}

export type { SettingsContext };
export { settingsContext, useSettingsContext };
