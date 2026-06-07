'use client';
import { useState, ReactNode } from 'react';
import { Navigation, navigationContext } from './navigationContext';
import { usePanelRouterContext } from '../panel-router/panelRouterContext';

export default function NavigationProvider({
 children,
}: {
 children: ReactNode;
}) {
 const [showNavigation, setShowNavigation] = useState(false);
 const [showMenus, setShowMenus] = useState(false);
 const { changeActiveProgram, setDefaultProgram } = usePanelRouterContext();

 function handleToggleNavigation(show?: boolean) {
  const newState = show === undefined ? !showNavigation : show;
  setShowNavigation(newState);
  if (newState) {
   setDefaultProgram();
  } else {
   changeActiveProgram(null);
  }
 }

 function handleToggleMenus(show?: boolean) {
  const newState = show === undefined ? !showMenus : show;
  setShowMenus(newState);
  if (newState) {
   setDefaultProgram();
  } else {
   changeActiveProgram(null);
  }
 }

 const ctx: Navigation = {
  showMenus,
  showNavigation,
  toggleMenus: handleToggleMenus,
  toggleNavigation: handleToggleNavigation,
 };

 return (
  <navigationContext.Provider value={ctx}>
   {children}
  </navigationContext.Provider>
 );
}
