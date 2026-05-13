"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigationContext } from "../../../services/navigation/navigationContext";
import { useShareDictionary } from "@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext";

export default function MobileNav() {
  const {
    shareDictionary: {
      components: { navigation: navigationDic },
    },
  } = useShareDictionary();
  const { showNavigation, toggleNavigation } = useNavigationContext();
  return (
    <Dialog open={showNavigation} onOpenChange={() => toggleNavigation(false)}>
      <DialogContent className="flex flex-col w-full max-h-dvh md:w-[min(95%,45rem)] max-w-none! p-0 overflow-hidden">
        <DialogHeader className="p-4 border-b border-input">
          <DialogTitle className="text-xl">{navigationDic.title}</DialogTitle>
        </DialogHeader>
        <div className="grow overflow-auto p-4 pt-0 scroll-smooth"></div>
      </DialogContent>
    </Dialog>
  );
}
