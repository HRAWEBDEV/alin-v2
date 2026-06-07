'use client';
import { ReactNode, useState, useMemo } from 'react';
import {
 type StoreOwner,
 type StoreDepartment,
 type StoreProgram,
 type Menu,
} from '../panel-info/services/panelInfoApiActions';
import {
 type PanelRouterContext,
 panelRouterContext,
} from './panelRouterContext';
import { usePanelInfoContext } from '../panel-info/panelInfoCotext';
import { usePathname } from 'next/navigation';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { useGoHome } from '../../../hooks/useGoHome';

export default function PanelRouterProvider({
 children,
}: {
 children: ReactNode;
}) {
 const goHome = useGoHome();
 const { locale } = useBaseConfig();
 const pathname = usePathname();
 const isHomePage = pathname == `/${locale}`;
 const { storeOwnerInfo } = usePanelInfoContext();
 const [activeOwner, setActiveOwner] = useState<StoreOwner | null>(
  Object.values(storeOwnerInfo.owners)[0] || null,
 );
 const [showOwnerController, setShowOwnerController] = useState(false);
 const [showDepartmentController, setShowDepartmentController] =
  useState(false);

 const pathnameSegments = useMemo(() => pathname.split('/'), [pathname]);
 const routeDepartment = useMemo(() => {
  if (isHomePage || !activeOwner) return null;
  const departmentRouteMap = pathnameSegments[2];
  if (!departmentRouteMap) return null;
  return (
   Object.values(activeOwner.departments).find(
    (dep) => dep.departmentRouteMap === departmentRouteMap,
   ) || null
  );
 }, [isHomePage, pathnameSegments, activeOwner]);

 const routeProgram = useMemo(() => {
  if (isHomePage || !routeDepartment) return null;
  const programID = pathnameSegments[3];
  if (!programID) return null;
  return (
   Object.values(routeDepartment.programs).find(
    (program) => program.id === Number(programID),
   ) || null
  );
 }, [isHomePage, pathnameSegments, routeDepartment]);

 const [activeDepartment, setActiveDepartment] =
  useState<StoreDepartment | null>(() => {
   if (routeDepartment) return routeDepartment;
   if (activeOwner) return Object.values(activeOwner.departments)[0];
   return null;
  });
 const [activeProgram, setActiveProgram] = useState<StoreProgram | null>(
  routeProgram,
 );

 function changeActiveOwner(owner: StoreOwner) {
  setActiveOwner(owner);
  setActiveDepartment(Object.values(owner.departments)[0]);
  goHome();
 }

 function changeActiveDepartment(dep: StoreDepartment | null) {
  setActiveDepartment(dep);
  if (dep?.programs) {
   setActiveProgram(Object.values(dep.programs)[0]);
  }
  goHome();
 }

 function handleFindDepartment(depID: string) {
  if (!activeOwner) return null;
  return activeOwner.departments[depID] || null;
 }

 function changeActiveProgram(program: StoreProgram | null) {
  setActiveProgram(program);
 }

 function handleFindProgram({
  programID,
  systemID,
  department = routeDepartment || undefined,
 }: {
  programID: string;
  systemID: string;
  department?: StoreDepartment;
 }) {
  if (!department) return null;
  return (
   department.programs[`${programID.toString()}_${systemID.toString()}`] || null
  );
 }

 function setDefaultProgram() {
  setActiveProgram((pre) => {
   if (pre) {
    return pre;
   }
   if (routeProgram) {
    return routeProgram;
   }
   if (activeDepartment) {
    return Object.values(activeDepartment.programs)[0];
   }
   return null;
  });
 }

 function onShowOwnerController(state?: boolean) {
  setShowOwnerController((pre) => (state === undefined ? !pre : state));
 }
 function onShowDepartmentController(state?: boolean) {
  setShowDepartmentController((pre) => (state === undefined ? !pre : state));
 }
 function handlePanelPathChanged(path: string) {}

 const routeMenu = useMemo(() => {
  if (isHomePage || !routeProgram) return null;
  const menuLink = pathnameSegments[5];
  if (!menuLink) return null;
  function findMenu(menus: Menu[]) {
   for (const menu of menus) {
    if (!!menu.childs.length) {
     return findMenu(menu.childs);
    }
    if (menu.routeMap === menuLink) return menu;
   }
   return null;
  }
  return findMenu(routeProgram.menus);
 }, [isHomePage, pathnameSegments, routeProgram]);

 const ctx: PanelRouterContext = {
  title: 'router',
  isHomePage,
  activeOwner: activeOwner!,
  activeDepartment: activeDepartment!,
  changeActiveOwner,
  changeActiveDepartment,
  handleFindDepartment,
  activeProgram,
  changeActiveProgram,
  handleFindProgram,
  setDefaultProgram,
  showOwnerController,
  showDepartmentController,
  onShowOwnerController,
  onShowDepartmentController,
  onPanelPathChanged: handlePanelPathChanged,
  routeDepartment,
  routeMenu,
  routeProgram,
 };

 return (
  <panelRouterContext.Provider value={ctx}>
   {activeOwner && activeDepartment && children}
  </panelRouterContext.Provider>
 );
}
