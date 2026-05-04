import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { StoreOwnerInfo } from "./services/panelInfoApiActions";

interface PanelInfoStore {
  title: string;
  storeOwnerInfo: StoreOwnerInfo;
}

const panelInfoContext = createContext<PanelInfoStore | null>(null);

function usePanelInfoContext(): PanelInfoStore {
  const value = use(panelInfoContext);
  if (!value) throw new OutOfContext("panelInfoContex");
  return value;
}

export type { PanelInfoStore };
export { panelInfoContext, usePanelInfoContext };
