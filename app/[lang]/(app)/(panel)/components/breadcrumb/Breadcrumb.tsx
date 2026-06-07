'use client';
import { Fragment } from 'react';
import { FaHouse, FaArrowLeft } from 'react-icons/fa6';
import { FaBolt } from 'react-icons/fa';
import { useGoHome } from '../../../hooks/useGoHome';
import { Button } from '@/components/ui/button';
import { usePanelRouterContext } from '../../services/panel-router/panelRouterContext';
import {
 Breadcrumb,
 BreadcrumbList,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbPage,
 BreadcrumbSeparator,
 BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuTrigger,
 DropdownMenuGroup,
 DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { RiBookMarkedFill } from 'react-icons/ri';
import { useBookmarkedContext } from '../../services/bookmarked/bookmarkedContext';
import {
 Tooltip,
 TooltipTrigger,
 TooltipContent,
} from '@/components/ui/tooltip';
import { useShareDictionary } from '../../../services/share-dictionary/shareDictionaryContext';
import { useNavigationContext } from '../../services/navigation/navigationContext';

export default function BreadcrumbWrapper() {
 const {
  shareDictionary: {
   components: { bookmarked: bookmarkedDictionary },
  },
 } = useShareDictionary();
 const { localeInfo } = useBaseConfig();
 const { toggleBookmark, checkIsBookmarked } = useBookmarkedContext();
 const { toggleMenus, toggleNavigation } = useNavigationContext();
 const {
  isHomePage,
  routeDepartment,
  routeProgram,
  routeMenu,
  onShowDepartmentController,
 } = usePanelRouterContext();
 const goHome = useGoHome();

 let isBookmarked = false;
 if (routeDepartment && routeProgram && routeMenu) {
  isBookmarked = checkIsBookmarked({
   department: routeDepartment,
   menu: routeMenu,
   program: routeProgram,
  });
 }

 return (
  <>
   {isHomePage ? null : (
    <div className='p-1 px-4 pe-5 bg-neutral-300 dark:bg-neutral-700 border-b border-input flex items-center justify-between'>
     <div className='flex items-center gap-4'>
      <Tooltip>
       <TooltipTrigger asChild>
        <Button
         data-active-bookmark={isBookmarked}
         variant='outline'
         size='sm'
         className='rounded-full size-9 text-neutral-700 dark:text-neutral-300 data-[active-bookmark="true"]:text-primary'
         onClick={() => {
          const { parents, ...restMenu } = routeMenu!;
          toggleBookmark({
           department: routeDepartment!,
           program: routeProgram!,
           menu: restMenu!,
          });
         }}
        >
         <RiBookMarkedFill className='size-6' />
        </Button>
       </TooltipTrigger>
       <TooltipContent>
        <p>{bookmarkedDictionary.bookmark}</p>
       </TooltipContent>
      </Tooltip>
      <Breadcrumb>
       <BreadcrumbList>
        {routeDepartment && routeProgram && (
         <Fragment>
          <BreadcrumbItem
           className='font-medium hidden lg:block'
           onClick={() => onShowDepartmentController()}
          >
           {routeDepartment.departmentName}
          </BreadcrumbItem>
          <BreadcrumbSeparator className='rtl:rotate-180 hidden lg:block' />
          <BreadcrumbItem
           className='font-medium hidden lg:block'
           onClick={() => toggleMenus()}
          >
           {routeProgram.name}
          </BreadcrumbItem>
          <BreadcrumbItem className='font-medium block lg:hidden'>
           <BreadcrumbLink asChild>
            <DropdownMenu dir={localeInfo.contentDirection}>
             <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon'>
               <BreadcrumbEllipsis />
              </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent align='center'>
              <DropdownMenuGroup>
               <DropdownMenuItem onClick={() => onShowDepartmentController()}>
                {routeDepartment.departmentName}
               </DropdownMenuItem>
               <DropdownMenuItem onClick={() => toggleNavigation()}>
                {routeProgram.name}
               </DropdownMenuItem>
              </DropdownMenuGroup>
             </DropdownMenuContent>
            </DropdownMenu>
           </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className='rtl:rotate-180' />
         </Fragment>
        )}
        {routeMenu && (
         <>
          {routeMenu.parents?.map((pr) => (
           <Fragment key={pr.id}>
            <BreadcrumbItem>{pr.name}</BreadcrumbItem>
            <BreadcrumbSeparator className='rtl:rotate-180' />
           </Fragment>
          ))}
          <BreadcrumbItem>
           <BreadcrumbPage className='font-medium'>
            {routeMenu.name}
           </BreadcrumbPage>
          </BreadcrumbItem>
         </>
        )}
       </BreadcrumbList>
      </Breadcrumb>
     </div>
     <div className='flex gap-2 items-center'>
      <Button
       variant='outline'
       size='sm'
       className='rounded-full size-9 text-red-700 dark:text-red-400'
      >
       <FaBolt />
      </Button>
      <Button
       variant='outline'
       size='sm'
       className='hidden lg:flex rounded-full size-9 text-secondary'
       onClick={goHome}
      >
       <FaHouse />
      </Button>
      <Button
       variant='outline'
       size='sm'
       className='rounded-full size-9 text-orange-700 dark:text-orange-400'
      >
       <FaArrowLeft className='ltr:rotate-180' />
      </Button>
     </div>
    </div>
   )}
  </>
 );
}
