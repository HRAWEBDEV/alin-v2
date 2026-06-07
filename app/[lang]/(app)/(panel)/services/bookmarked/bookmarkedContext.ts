import { OutOfContext } from '@/utils/OutOfContext';
import { createContext, use } from 'react';
import {
 type Menu,
 type StoreDepartment,
 type StoreProgram,
} from '../panel-info/services/panelInfoApiActions';
import { type BookmarkLocal } from './utils/bookmarkLocalStorageManager';

interface BookmarkedContext {
 show: boolean;
 toggle: (state?: boolean) => unknown;
 bookmarks: BookmarkLocal[keyof BookmarkLocal] | null;
 toggleBookmark: (params: {
  department: StoreDepartment;
  program: StoreProgram;
  menu: Omit<Menu, 'parents'>;
 }) => unknown;
 checkIsBookmarked: (params: {
  department: StoreDepartment;
  program: StoreProgram;
  menu: Omit<Menu, 'parents'>;
 }) => boolean;
}

const bookmarkedContext = createContext<BookmarkedContext | null>(null);

function useBookmarkedContext() {
 const val = use(bookmarkedContext);
 if (!val) throw new OutOfContext('quick access context');
 return val;
}

export type { BookmarkedContext };
export { bookmarkedContext, useBookmarkedContext };
