'use client';
import { useState, ReactNode } from 'react';
import { type ProfileContext, profileContext } from './profileContext';

export default function ProfileProvider({ children }: { children: ReactNode }) {
 const [showProfile, setShowProfile] = useState(false);
 console.log(showProfile);

 function handleToggleProfile(state?: boolean) {
  setShowProfile((pre) => (state === undefined ? !pre : state));
 }

 const ctx: ProfileContext = {
  show: showProfile,
  toggle: handleToggleProfile,
 };

 return (
  <profileContext.Provider value={ctx}>{children}</profileContext.Provider>
 );
}
