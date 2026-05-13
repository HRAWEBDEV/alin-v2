'use client';
import {
 Drawer,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerFooter,
} from '@/components/ui/drawer';
import { useProfileContext } from '../profileContext';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { Button } from '@/components/ui/button';
import { RiLogoutBoxRLine, RiSettings5Line } from 'react-icons/ri';
import { useLogout } from '@/app/[lang]/(app)/hooks/useLogoout';
import { log } from 'node:console';

export default function Profile() {
 const logout = useLogout();
 const {
  shareDictionary: {
   components: { profile: profileDic },
  },
 } = useShareDictionary();
 const { localeInfo } = useBaseConfig();
 const { show, toggle } = useProfileContext();
 return (
  <Drawer
   open={show}
   onOpenChange={() => toggle()}
   direction={localeInfo.contentDirection === 'rtl' ? 'left' : 'right'}
  >
   <DrawerContent>
    <DrawerHeader className='text-xl border-b border-input'>
     <DrawerTitle>{profileDic.title}</DrawerTitle>
    </DrawerHeader>
    <div className='overflow-hidden overflow-y-auto p-4 grow'>
     <div className='grid gap-4'>
      <Button
       className='w-full justify-start h-12 border-primary text-primary'
       variant='outline'
      >
       <RiSettings5Line className='size-8' />
       <span className='text-lg'>{profileDic.settings}</span>
      </Button>
      <Button
       className='w-full justify-start h-12 border-destructive text-destructive'
       variant='outline'
       onClick={() => {
        logout();
        toggle(false);
       }}
      >
       <RiLogoutBoxRLine className='size-8' />
       <span className='text-lg'>{profileDic.exit}</span>
      </Button>
     </div>
    </div>
    <DrawerFooter className='p-0'>
     <Button
      className='h-12 rounded-none'
      variant='outline'
      onClick={() => toggle(false)}
     >
      {profileDic.close}
     </Button>
    </DrawerFooter>
   </DrawerContent>
  </Drawer>
 );
}
