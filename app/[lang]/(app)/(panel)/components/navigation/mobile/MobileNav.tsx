'use client';
import {
 Drawer,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerFooter,
} from '@/components/ui/drawer';
import { useNavigationContext } from '../../../services/navigation/navigationContext';
import { usePanelRouterContext } from '../../../services/panel-router/panelRouterContext';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { Button } from '@/components/ui/button';
import Nav from '../Nav';
import OwnerNavigator from '../../header/OwnerNavigator';
import DepartmentNavigator from '../../header/DepartmentNavigator';

export default function MobileNav() {
 const {
  shareDictionary: {
   components: { navigation: navigationDic },
  },
 } = useShareDictionary();
 const { localeInfo } = useBaseConfig();
 const { changeActiveProgram } = usePanelRouterContext();
 const { showNavigation, toggleNavigation, toggleMenus } =
  useNavigationContext();
 return (
  <Drawer
   open={showNavigation}
   onOpenChange={() => {
    changeActiveProgram(null);
    toggleNavigation(false);
    toggleMenus(false);
   }}
   direction={localeInfo.contentDirection === 'rtl' ? 'right' : 'left'}
  >
   <DrawerContent className='w-[min(95%,50rem)]!'>
    <DrawerHeader className='text-xl border-b border-input'>
     <DrawerTitle>{navigationDic.title}</DrawerTitle>
    </DrawerHeader>
    <div className='overflow-hidden overflow-y-auto grow flex'>
     <Nav navType='mobile' />
    </div>
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
