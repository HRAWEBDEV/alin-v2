'use client';
import {
 Drawer,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerFooter,
} from '@/components/ui/drawer';
import { useNavigationContext } from '../../../services/navigation/navigationContext';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { Button } from '@/components/ui/button';

export default function MobileNav() {
 const {
  shareDictionary: {
   components: { navigation: navigationDic },
  },
 } = useShareDictionary();
 const { localeInfo } = useBaseConfig();
 const { showNavigation, toggleNavigation } = useNavigationContext();
 return (
  <Drawer
   open={showNavigation}
   onOpenChange={() => toggleNavigation()}
   direction={localeInfo.contentDirection === 'rtl' ? 'right' : 'left'}
  >
   <DrawerContent className='w-[min(100%,40rem)]'>
    <DrawerHeader className='text-xl border-b border-input'>
     <DrawerTitle>{navigationDic.title}</DrawerTitle>
    </DrawerHeader>
    <div className='overflow-hidden overflow-y-auto p-4 grow'></div>
    <DrawerFooter className='p-0'>
     <Button
      className='h-12 rounded-none'
      variant='outline'
      onClick={() => toggleNavigation(false)}
     >
      {navigationDic.close}
     </Button>
    </DrawerFooter>
   </DrawerContent>
  </Drawer>
 );
}
