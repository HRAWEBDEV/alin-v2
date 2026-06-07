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
import { useBookmarkedContext } from '../../bookmarked/bookmarkedContext';
import { Button } from '@/components/ui/button';
import {
 RiLogoutBoxRLine,
 RiSettings5Line,
 RiBookMarkedFill,
} from 'react-icons/ri';
import { useLogout } from '@/app/[lang]/(app)/hooks/useLogoout';
import { useSettingsContext } from '../../settings/settingsContext';
import { IoPersonCircle } from 'react-icons/io5';
import OwnerNavigator from '../../../components/header/OwnerNavigator';
import DepartmentNavigator from '../../../components/header/DepartmentNavigator';
import ProfileDate from './ProfileDate';
import { appVersion } from '@/services/base-config/baseConfigContext';

export default function Profile() {
 const logout = useLogout();
 const {
  shareDictionary: {
   components: { profile: profileDic, bookmarked: bookmarkedDic },
  },
 } = useShareDictionary();
 const { localeInfo, userActiveTimeZone } = useBaseConfig();
 const { show, toggle } = useProfileContext();
 const { toggle: toggleSettings } = useSettingsContext();
 const { toggle: toggleBookmarked } = useBookmarkedContext();
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
     <div className='mb-4'>
      <div className='flex flex-col sm:flex-row gap-2 items-center'>
       <div>
        <IoPersonCircle className='size-28 sm:size-18 text-neutral-700 dark:text-neutral-400' />
       </div>
       <div className='w-full sm:w-auto'>
        <h3 className='text-lg font-medium'>حمیدرضا اکبری</h3>
        <p className='text-base text-primary font-medium mb-1'>مدیر کل</p>
        <div className='mb-1'>
         <ProfileDate />
        </div>
        <div className='flex flex-wrap gap-1 text-sm text-neutral-700 dark:text-neutral-400'>
         <p>v({appVersion})</p>-<p>{userActiveTimeZone}</p>
        </div>
       </div>
      </div>
     </div>
     <div className='grid gap-2'>
      <div
       onClick={() => {
        toggle(false);
       }}
      >
       <OwnerNavigator larger />
      </div>
      <div
       onClick={() => {
        toggle(false);
       }}
      >
       <DepartmentNavigator larger />
      </div>
      <Button
       className='w-full justify-start h-12 border-primary text-primary'
       variant='outline'
       onClick={() => {
        toggleBookmarked(true);
        toggle(false);
       }}
      >
       <RiBookMarkedFill className='size-6' />
       <span className='text-base'>{bookmarkedDic.title}</span>
      </Button>
      <Button
       className='w-full justify-start h-12 border-primary text-primary'
       variant='outline'
       onClick={() => {
        toggleSettings(true);
        toggle(false);
       }}
      >
       <RiSettings5Line className='size-6' />
       <span className='text-base'>{profileDic.settings}</span>
      </Button>
      <Button
       className='w-full justify-start h-12 border-destructive text-destructive'
       variant='outline'
       onClick={() => {
        logout();
        toggle(false);
       }}
      >
       <RiLogoutBoxRLine className='size-6' />
       <span className='text-base'>{profileDic.exit}</span>
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
