import { type Menu } from '../../panel-info/services/panelInfoApiActions';

type BookmarkLocal = Record<
 string,
 Record<string, Record<string, Omit<Menu, 'parents'>>>
>;

const bookmarkLocalStorageName = 'panel-bookmark-menus';

function getBookmarkLocal() {
 const val = localStorage.getItem(bookmarkLocalStorageName);
 if (!val) return null;
 return JSON.parse(val) as BookmarkLocal;
}
function saveBookmarkLocal(newBookmark: BookmarkLocal) {
 localStorage.setItem(bookmarkLocalStorageName, JSON.stringify(newBookmark));
}
function clearBookmarkLocal() {
 localStorage.removeItem(bookmarkLocalStorageName);
}

export type { BookmarkLocal };
export {
 bookmarkLocalStorageName,
 getBookmarkLocal,
 saveBookmarkLocal,
 clearBookmarkLocal,
};
