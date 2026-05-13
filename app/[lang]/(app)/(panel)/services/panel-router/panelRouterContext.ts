import { OutOfContext } from '@/utils/OutOfContext';
import { createContext, use } from 'react';

interface PanelRouterContext {
 title: 'router';
}

const panelRouterContext = createContext<PanelRouterContext | null>(null);

function usePanelRouterContext() {
 const val = use(panelRouterContext);
 if (!val) throw new OutOfContext('panelRouterContext');
 return val;
}

export type { PanelRouterContext };
export { panelRouterContext, usePanelRouterContext };
