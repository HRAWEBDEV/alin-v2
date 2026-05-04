"use client";
import { ReactNode } from "react";
import { type PanelInfo, panelInfoContext } from "./panelInfoCotext";

export default function PanelInfoProvider({
  children,
}: {
  children: ReactNode;
}) {
  const ctx: PanelInfo = {
    title: "panel info",
  };

  return (
    <panelInfoContext.Provider value={ctx}>
      {children}
    </panelInfoContext.Provider>
  );
}
