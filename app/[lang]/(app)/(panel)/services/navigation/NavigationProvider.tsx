"use client";
import { useState, ReactNode } from "react";
import { Navigation, navigationContext } from "./navigationContext";

export default function NavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showMenus, setShowMenus] = useState(false);

  function handleToggleNavigation(show?: boolean) {
    setShowNavigation((pre) => (show === undefined ? !pre : show));
  }
  function handleToggleMenus(show?: boolean) {
    setShowMenus((pre) => (show === undefined ? !pre : show));
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
