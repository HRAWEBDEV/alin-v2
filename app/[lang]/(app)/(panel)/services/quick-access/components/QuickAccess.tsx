'use client';
import {
 Drawer,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerFooter,
} from '@/components/ui/drawer';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';
import { useQuickAccessContext } from '../quickAccessContext';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { Button } from '@/components/ui/button';

export default function QuickAccess() {
 const {
  shareDictionary: {
   components: { quickAccess: quickAccessDic },
  },
 } = useShareDictionary();
 const { show, toggle } = useQuickAccessContext();
 const { localeInfo } = useBaseConfig();
 return (
  <Drawer
   open={show}
   onOpenChange={() => toggle()}
   direction={localeInfo.contentDirection === 'rtl' ? 'left' : 'right'}
  >
   <DrawerContent>
    <DrawerHeader className='text-xl border-b border-input'>
     <DrawerTitle>{quickAccessDic.title}</DrawerTitle>
    </DrawerHeader>
    <div className='overflow-hidden overflow-y-auto p-4 grow'></div>
    <DrawerFooter className='p-0'>
     <Button
      className='h-12 rounded-none'
      variant='outline'
      onClick={() => toggle(false)}
     >
      {quickAccessDic.close}
     </Button>
    </DrawerFooter>
   </DrawerContent>
  </Drawer>
 );
}
