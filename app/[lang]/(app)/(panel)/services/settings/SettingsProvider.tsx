'use client';
import { useState, ReactNode } from 'react';
import { type SettingsContext, settingsContext } from './settingsContext';

export default function SettingsProvider({
 children,
}: {
 children: ReactNode;
}) {
 const [showSettings, setShowSettings] = useState(false);

 function handleToggleSettings(state?: boolean) {
  setShowSettings((pre) => (state === undefined ? !pre : state));
 }

 const ctx: SettingsContext = {
  show: showSettings,
  toggle: handleToggleSettings,
 };

 return (
  <settingsContext.Provider value={ctx}>{children}</settingsContext.Provider>
 );
}
