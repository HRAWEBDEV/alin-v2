import { OutOfContext } from "@/utils/OutOfContext";
import { createContext, use } from "react";

interface Navigation {
  showNavigation: boolean;
  toggleNavigation: (show?: boolean) => unknown;
  showMenus: boolean;
  toggleMenus: (show?: boolean) => unknown;
}

const navigationContext = createContext<Navigation | null>(null);

function useNavigationContext() {
  const val = use(navigationContext);
  if (!val) throw new OutOfContext("navigation context");
  return val;
}

export type { Navigation };
export { navigationContext, useNavigationContext };
