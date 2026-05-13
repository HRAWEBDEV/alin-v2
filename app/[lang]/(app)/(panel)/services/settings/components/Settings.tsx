'use client';
import {
 Dialog,
 DialogDescription,
 DialogHeader,
 DialogContent,
 DialogTitle,
} from '@/components/ui/dialog';
import { useSettingsContext } from '../settingsContext';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';

export default function Settings() {
 const {
  shareDictionary: {
   components: { settings: settingsDic },
  },
 } = useShareDictionary();
 const { show, toggle } = useSettingsContext();
 return (
  <Dialog open={show} onOpenChange={() => toggle(false)}>
   <DialogContent className='flex flex-col w-full h-[80dvh] sm:w-[min(95%,40rem)] max-w-none! p-0 overflow-hidden'>
    <DialogHeader className='p-4 border-b border-input'>
     <DialogTitle className='text-xl'>{settingsDic.title}</DialogTitle>
     <DialogDescription className='hidden'></DialogDescription>
    </DialogHeader>
    <div className='grow overflow-auto p-4 pt-0 scroll-smooth'></div>
   </DialogContent>
  </Dialog>
 );
}
