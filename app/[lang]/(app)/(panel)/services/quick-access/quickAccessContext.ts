import { OutOfContext } from '@/utils/OutOfContext';
import { createContext, use } from 'react';

interface QuickAccessContext {
 show: boolean;
 toggle: (state?: boolean) => unknown;
}

const quickAccessContext = createContext<QuickAccessContext | null>(null);

function useQuickAccessContext() {
 const val = use(quickAccessContext);
 if (!val) throw new OutOfContext('quick access context');
 return val;
}

export type { QuickAccessContext };
export { quickAccessContext, useQuickAccessContext };
