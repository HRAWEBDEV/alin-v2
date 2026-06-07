'use client';
import { useState, ReactNode } from 'react';
import { type BookmarkedContext, bookmarkedContext } from './bookmarkedContext';
import {
 type StoreDepartment,
 type StoreProgram,
 type Menu,
 getProgramUID,
} from '../panel-info/services/panelInfoApiActions';
import {
 type BookmarkLocal,
 getBookmarkLocal,
 saveBookmarkLocal,
} from './utils/bookmarkLocalStorageManager';
import { usePanelRouterContext } from '../panel-router/panelRouterContext';

export default function BookmarkedProvider({
 children,
}: {
 children: ReactNode;
}) {
 const { activeOwner } = usePanelRouterContext();
 const [showProfile, setShowProfile] = useState(false);
 const [localBookmark, setLocalBookmark] = useState(() => {
  if (typeof window !== 'undefined') {
   return getBookmarkLocal();
  }
  return null;
 });

 function handleToggleProfile(state?: boolean) {
  setShowProfile((pre) => (state === undefined ? !pre : state));
 }

 function checkIsBookmarked({
  department,
  program,
  menu,
 }: {
  department: StoreDepartment;
  program: StoreProgram;
  menu: Omit<Menu, 'parents'>;
 }) {
  return localBookmark
   ? !!localBookmark[activeOwner.id.toString()]?.[
      `${department.departmentID}_${getProgramUID(program)}`
     ]?.[menu.id.toString()]
   : false;
 }

 function toggleBookmark({
  department,
  program,
  menu,
 }: {
  department: StoreDepartment;
  program: StoreProgram;
  menu: Omit<Menu, 'parents'>;
 }) {
  const isBookmarked = checkIsBookmarked({
   department,
   program,
   menu,
  });
  let newBookmark = {
   ...(localBookmark || {}),
  };

  if (isBookmarked) {
   delete newBookmark[activeOwner.id.toString()][
    `${department.departmentID}_${getProgramUID(program)}`
   ][menu.id.toString()];
  } else {
   let ownerBookmark = {} as BookmarkLocal[keyof BookmarkLocal];
   if (activeOwner.id.toString() in newBookmark) {
    ownerBookmark = newBookmark[activeOwner.id.toString()];
   }
   let departmentBookmark = {};
   if (
    `${department.departmentID}_${getProgramUID(program)}` in ownerBookmark
   ) {
    departmentBookmark =
     ownerBookmark[`${department.departmentID}_${getProgramUID(program)}`];
   }
   newBookmark = {
    ...newBookmark,
    [activeOwner.id.toString()]: {
     ...ownerBookmark,
     [`${department.departmentID}_${getProgramUID(program)}`]: {
      ...departmentBookmark,
      [menu.id.toString()]: menu,
     },
    },
   };
  }
  setLocalBookmark(newBookmark);
  saveBookmarkLocal(newBookmark);
 }

 const ctx: BookmarkedContext = {
  show: showProfile,
  toggle: handleToggleProfile,
  bookmarks: localBookmark ? localBookmark[activeOwner.id.toString()] : null,
  toggleBookmark,
  checkIsBookmarked,
 };

 return (
  <bookmarkedContext.Provider value={ctx}>
   {children}
  </bookmarkedContext.Provider>
 );
}
