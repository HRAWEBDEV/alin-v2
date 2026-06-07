import { OutOfContext } from '@/utils/OutOfContext';
import { createContext, use } from 'react';
import {
 type StoreOwner,
 type StoreDepartment,
 type StoreProgram,
 type Menu,
} from '../panel-info/services/panelInfoApiActions';

interface PanelRouterContext {
 title: 'router';
 isHomePage: boolean;
 activeOwner: StoreOwner;
 activeDepartment: StoreDepartment;
 routeDepartment: StoreDepartment | null;
 changeActiveOwner: (owner: StoreOwner) => unknown;
 changeActiveDepartment: (dep: StoreDepartment | null) => unknown;
 handleFindDepartment: (depID: string) => StoreDepartment | null;
 activeProgram: StoreProgram | null;
 routeProgram: StoreProgram | null;
 changeActiveProgram: (program: StoreProgram | null) => unknown;
 handleFindProgram: (params: {
  programID: string;
  systemID: string;
  department?: StoreDepartment;
 }) => StoreProgram | null;
 setDefaultProgram: () => unknown;
 routeMenu: Menu | null;
 showOwnerController: boolean;
 onShowOwnerController: (state?: boolean) => unknown;
 showDepartmentController: boolean;
 onShowDepartmentController: (state?: boolean) => unknown;
 onPanelPathChanged: (path: string) => unknown;
}

const panelRouterContext = createContext<PanelRouterContext | null>(null);

function usePanelRouterContext() {
 const val = use(panelRouterContext);
 if (!val) throw new OutOfContext('panelRouterContext');
 return val;
}

export type { PanelRouterContext };
export { panelRouterContext, usePanelRouterContext };
