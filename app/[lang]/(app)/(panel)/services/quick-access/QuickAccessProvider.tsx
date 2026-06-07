'use client';
import { useState, ReactNode } from 'react';
import {
 type QuickAccessContext,
 quickAccessContext,
} from './quickAccessContext';

export default function QuickAccessProvider({
 children,
}: {
 children: ReactNode;
}) {
 const [showProfile, setShowProfile] = useState(false);

 function handleToggleProfile(state?: boolean) {
  setShowProfile((pre) => (state === undefined ? !pre : state));
 }

 const ctx: QuickAccessContext = {
  show: showProfile,
  toggle: handleToggleProfile,
 };

 return (
  <quickAccessContext.Provider value={ctx}>
   {children}
  </quickAccessContext.Provider>
 );
}
