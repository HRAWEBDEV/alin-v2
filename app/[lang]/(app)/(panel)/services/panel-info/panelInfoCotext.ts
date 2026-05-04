import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";

interface PanelInfo {
  title: string;
}

const panelInfoContext = createContext<PanelInfo | null>(null);

function usePanelInfoContext(): PanelInfo {
  const value = use(panelInfoContext);
  if (!value) throw new OutOfContext("panelInfoContex");
  return value;
}

export type { PanelInfo };
export { panelInfoContext, usePanelInfoContext };
