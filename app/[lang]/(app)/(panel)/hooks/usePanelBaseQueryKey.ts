import { usePanelRouterContext } from '../services/panel-router/panelRouterContext';

export function usePanelBaseQueryKey() {
 const { routeDepartment, routeProgram } = usePanelRouterContext();
 return `${routeDepartment?.departmentID}/${routeProgram?.id}`;
}
