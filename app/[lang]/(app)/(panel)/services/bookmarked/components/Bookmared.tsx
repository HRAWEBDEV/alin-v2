'use client';
import {
 Drawer,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerFooter,
} from '@/components/ui/drawer';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';
import { useBookmarkedContext } from '../bookmarkedContext';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { Button } from '@/components/ui/button';
import { createMenuLink } from '../../panel-router/utils/createMenuLink';
import { usePanelRouterContext } from '../../panel-router/panelRouterContext';
import {
 Breadcrumb,
 BreadcrumbList,
 BreadcrumbItem,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

export default function Bookmared() {
 const {
  shareDictionary: {
   components: { bookmarked: bookmarkedDic, noItemFound },
  },
 } = useShareDictionary();
 const { handleFindDepartment, handleFindProgram } = usePanelRouterContext();
 const { show, toggle, bookmarks, toggleBookmark } = useBookmarkedContext();
 const { localeInfo } = useBaseConfig();
 return (
  <Drawer
   open={show}
   onOpenChange={() => toggle()}
   direction={localeInfo.contentDirection === 'rtl' ? 'left' : 'right'}
  >
   <DrawerContent>
    <DrawerHeader className='text-xl border-b border-input'>
     <DrawerTitle>{bookmarkedDic.title}</DrawerTitle>
    </DrawerHeader>
    <div className='overflow-hidden overflow-y-auto p-4 grow'>
     {bookmarks ? (
      <>
       {Object.entries(bookmarks).map(([key, value]) => {
        const [depID, programID, systemID] = key.split('_');
        const department = handleFindDepartment(depID.toString());
        if (!department) return null;
        const program = handleFindProgram({
         programID,
         systemID,
         department,
        });
        const menus = Object.values(value);
        if (!program || !menus.length) return null;
        return (
         <div key={depID} className='mb-2'>
          <div className='grid gap-2'>
           {menus.map((menu) => {
            return (
             <Button
              variant='outline'
              key={menu.id}
              className='h-auto max-h-[unset] justify-start items-stretch text-start flex-col gap-1 pb-2'
              asChild
             >
              <Link
               href={createMenuLink({
                menuLink: menu.routeMap,
                departmentRouteMap: department.departmentRouteMap,
                programID: program.id,
                programRouteMap: program.systemRouteMap,
               })}
               onClick={() => toggle(false)}
              >
               <div className='flex gap-4 justify-between items-center'>
                <h3 className='text-lg'>{menu.name}</h3>
                <Button
                 variant='ghost'
                 size='icon-lg'
                 className='text-destructive -me-4'
                 onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleBookmark({
                   department: department,
                   program: program,
                   menu: menu,
                  });
                 }}
                >
                 <FaTimes className='size-5' />
                </Button>
               </div>
               <div>
                <Breadcrumb>
                 <BreadcrumbList>
                  <BreadcrumbItem>
                   <BreadcrumbPage>{department.departmentName}</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className='rtl:rotate-180' />
                  <BreadcrumbItem>
                   <BreadcrumbPage>{program.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                 </BreadcrumbList>
                </Breadcrumb>
               </div>
              </Link>
             </Button>
            );
           })}
          </div>
         </div>
        );
       })}
      </>
     ) : (
      <div className='font-medium text-center'>{noItemFound.title}</div>
     )}
    </div>
    <DrawerFooter className='p-0'>
     <Button
      className='h-12 rounded-none'
      variant='outline'
      onClick={() => toggle(false)}
     >
      {bookmarkedDic.close}
     </Button>
    </DrawerFooter>
   </DrawerContent>
  </Drawer>
 );
}
