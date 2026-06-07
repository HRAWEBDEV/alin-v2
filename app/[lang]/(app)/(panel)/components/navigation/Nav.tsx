'use client';
import { useState, useEffect, useMemo } from 'react';
import { type Menu } from '../../services/panel-info/services/panelInfoApiActions';
import { usePanelRouterContext } from '../../services/panel-router/panelRouterContext';
import { useNavigationContext } from '../../services/navigation/navigationContext';
import { getProgramIcons } from '../../../utils/ProgramIcons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
 Collapsible,
 CollapsibleContent,
 CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';
import { getMenusIcon } from '../../utils/MenuIcons';
import { useHotkey } from '@tanstack/react-hotkeys';
import { Field } from '@/components/ui/field';
import { FaSearch } from 'react-icons/fa';
import {
 InputGroup,
 InputGroupInput,
 InputGroupAddon,
} from '@/components/ui/input-group';
import { useShareDictionary } from '../../../services/share-dictionary/shareDictionaryContext';
import { createMenuLink } from '../../services/panel-router/utils/createMenuLink';
import Highlighter from 'react-highlight-words';
import { RiBookMarkedFill } from 'react-icons/ri';
import { useBookmarkedContext } from '../../services/bookmarked/bookmarkedContext';
import { useUserAccessContext } from '../../services/user-access/UserAccessContext';
import { Skeleton } from '@/components/ui/skeleton';

export default function Nav({
 navType = 'desktop',
}: {
 navType?: 'desktop' | 'mobile';
}) {
 const { activeAction: activeActionsAccess } = useUserAccessContext();
 const [activeVisibleBookmark, setActiveVisibleBookmark] = useState(false);
 const [searchedText, setSearchedText] = useState('');
 const {
  shareDictionary: {
   components: { navigation: navDictionary, noItemFound },
  },
 } = useShareDictionary();
 const {
  activeDepartment,
  activeProgram,
  routeProgram,
  routeMenu,
  changeActiveProgram,
 } = usePanelRouterContext();
 const { showMenus, toggleMenus, toggleNavigation } = useNavigationContext();
 const { toggleBookmark, checkIsBookmarked } = useBookmarkedContext();
 const [expandedMenus, setExpandedMenus] = useState<number[]>([]);

 const visibleMenusPanel = showMenus || navType === 'mobile';
 const menus = useMemo(() => {
  return activeProgram ? activeProgram.menus : [];
 }, [activeProgram]);

 // filter menus
 const visibleMenus = useMemo(() => {
  if (!menus.length || !activeActionsAccess.isSuccess) return [];
  // only support search in two level
  function filterMenuCodition(menu: Menu) {
   if (
    activeActionsAccess.getActionAccess(menu.routeMapID).read &&
    menu.visible
   ) {
    return searchedText ? menu.name.includes(searchedText) : true;
   }
   return false;
  }
  const visibleMenusList = [];
  for (const menu of menus) {
   if (!!menu.childs.length) {
    const filterChilds = menu.childs.filter((item) => {
     if (filterMenuCodition(item)) {
      return activeVisibleBookmark
       ? checkIsBookmarked({
          menu: item,
          department: activeDepartment,
          program: activeProgram!,
         })
       : true;
     }
    });
    if (!!filterChilds.length) {
     const copyMenu = { ...menu };
     copyMenu.childs = filterChilds;
     visibleMenusList.push(copyMenu);
    }
    continue;
   }
   if (filterMenuCodition(menu)) visibleMenusList.push(menu);
  }
  return visibleMenusList;
 }, [
  searchedText,
  menus,
  activeVisibleBookmark,
  activeActionsAccess,
  activeDepartment,
  activeProgram,
  checkIsBookmarked,
 ]);

 function handleCloseMenus() {
  toggleMenus(false);
  toggleNavigation(false);
 }

 useHotkey('Escape', () => {
  handleCloseMenus();
 });

 useEffect(() => {
  if (showMenus) return;
  setExpandedMenus([]);
 }, [showMenus]);

 function renderMenus(menus: Menu[], level: number = 1) {
  return menus.map((menu) => {
   const isActiveMenu =
    routeMenu?.routeMap === menu.routeMap &&
    routeProgram?.id === activeProgram?.id;
   const isBookmarked = checkIsBookmarked({
    menu,
    department: activeDepartment,
    program: activeProgram!,
   });
   if (menu.childs.length) {
    const menuIsExpanded = expandedMenus.includes(menu.id);
    return (
     <Collapsible
      open={menuIsExpanded}
      onOpenChange={(value) => {
       if (value) {
        setExpandedMenus((pre) => [...pre, menu.id]);
       } else {
        setExpandedMenus((pre) => pre.filter((item) => item !== menu.id));
       }
      }}
      key={menu.id}
     >
      <CollapsibleTrigger className='px-5!' asChild>
       <Button
        variant='outline'
        className='w-full rounded-none justify-between border-0 whitespace-normal h-11 lg:h-10 text-neutral-700 dark:text-neutral-400 text-sm font-medium shadow-none'
       >
        <div className='flex gap-2 items-center'>
         <div className='text-primary'>
          {level === 1 &&
           getMenusIcon({
            menuID: menu.id,
            attrs: {
             style: {
              fill: 'currentcolor',
              width: '1.2rem',
              height: '1.2rem',
             },
            },
           })}
         </div>
         <div>{menu.name}</div>
        </div>
        {menuIsExpanded ? (
         <FaChevronUp className='size-3' />
        ) : (
         <FaChevronDown className='size-3' />
        )}
       </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
       <div className='flex flex-col mb-4 relative before:content-[""] before:top-0 before:bottom-0 before:w-px before:bg-input before:absolute before:inset-s-10'>
        {renderMenus(menu.childs, level + 1)}
       </div>
      </CollapsibleContent>
     </Collapsible>
    );
   }
   return (
    <Button
     data-active-menu={isActiveMenu}
     variant='outline'
     key={menu.id}
     className={`rounded-none justify-start border-0 whitespace-normal h-11 lg:h-10 text-neutral-700 dark:text-neutral-400 text-sm font-medium px-5! ${level > 1 && 'ps-12!'} shadow-none data-[active-menu="true"]:bg-neutral-200 dark:data-[active-menu="true"]:bg-neutral-800`}
     asChild
    >
     <Link
      onClick={() => {
       handleCloseMenus();
      }}
      href={
       !isActiveMenu
        ? createMenuLink({
           departmentRouteMap: activeDepartment.departmentRouteMap,
           menuLink: menu.routeMap,
           programID: activeProgram!.id,
           programRouteMap: activeProgram!.systemRouteMap,
          })
        : '#'
      }
     >
      <div className='flex items-center gap-2 justify-between grow'>
       <div className='flex items-center gap-2 grow'>
        <div className='text-primary'>
         {level === 1 &&
          getMenusIcon({
           menuID: menu.id,
           attrs: {
            style: { fill: 'currentcolor', width: '1.2rem', height: '1.2rem' },
           },
          })}
        </div>
        <div>
         <Highlighter
          searchWords={[searchedText]}
          textToHighlight={menu.name}
         />
        </div>
       </div>
       <div className='-me-3'>
        <Button
         data-active-bookmark={isBookmarked}
         variant='ghost'
         size='sm'
         className='text-neutral-300 dark:text-neutral-700 data-[active-bookmark="true"]:text-primary'
         onClick={(e) => {
          const { parents, ...other } = menu;
          e.stopPropagation();
          e.preventDefault();
          toggleBookmark({
           department: activeDepartment,
           program: activeProgram!,
           menu: other,
          });
         }}
        >
         <RiBookMarkedFill className='size-5' />
        </Button>
       </div>
      </div>
     </Link>
    </Button>
   );
  });
 }

 return (
  <nav className='flex grow isolate relative z-(--panel-nav-zindex)'>
   <div className='flex flex-col border-e border-input basis-(--panel-nav-programs-width) shrink-0 bg-background overflow-auto'>
    {Object.values(activeDepartment.programs).map((program) => {
     const isRouteProgram = program.id === routeProgram?.id;
     return (
      <Button
       data-active-program={program.id === activeProgram?.id}
       data-route-program={isRouteProgram}
       key={program.id}
       variant='outline'
       className='flex-col max-h-none h-auto p-1 rounded-none border-t-0 py-2 border-x-0 whitespace-normal data-[active-program=true]:bg-neutral-200! dark:data-[active-program=true]:bg-neutral-800! data-[route-program=true]:bg-primary! dark:data-[route-program=true]:bg-primary! data-[route-program=true]:text-primary-foreground!'
       onClick={() => {
        changeActiveProgram(program);
        toggleMenus(true);
       }}
      >
       <div className='dark:brightness-125'>
        {getProgramIcons({
         systemID: program.systemID,
         systemTypeID: program.systemTypeID,
         attrs: {
          fill: isRouteProgram ? 'currentColor' : '',
          style: {
           width: '2.5rem',
           height: '2.5rem',
          },
         },
        })}
       </div>
       <div className='text-[0.8rem] font-medium'>{program.name}</div>
      </Button>
     );
    })}
   </div>
   <AnimatePresence>
    {visibleMenusPanel && (
     <motion.div
      className='bg-background h-full grow lg:grow-0 lg:absolute lg:w-(--panel-nav-menus-width) border-e border-input overflow-auto z-[-1]'
      initial={{
       insetInlineStart: '-17rem',
       opacity: 0,
      }}
      animate={{
       insetInlineStart: 'var(--panel-nav-programs-width)',
       opacity: 1,
      }}
      exit={{
       insetInlineStart: '-17rem',
       opacity: 0,
      }}
      transition={{
       duration: 0.2,
       ease: 'easeInOut',
      }}
     >
      <div className='p-4 bg-background sticky top-0 pb-3 z-[1]'>
       <Field>
        <InputGroup>
         <InputGroupInput
          type='search'
          value={searchedText}
          onChange={(e) => {
           const value = e.target.value;
           setSearchedText(value);
           if (value !== '') {
            console.log('here');
            setExpandedMenus(menus.map((item) => item.id));
           } else {
            setExpandedMenus([]);
           }
          }}
          placeholder={navDictionary.search}
         />
         <InputGroupAddon align='inline-end' className='text-primary'>
          <Button
           data-active={activeVisibleBookmark}
           variant='ghost'
           size='sm'
           className='text-neutral-500 data-[active="true"]:text-primary'
           onClick={(e) => {
            e.stopPropagation();
            setActiveVisibleBookmark((pre) => !pre);
           }}
          >
           <RiBookMarkedFill className='size-5' />
          </Button>
          <div className='pe-2'>
           <FaSearch className='size-4' />
          </div>
         </InputGroupAddon>
        </InputGroup>
       </Field>
      </div>
      {activeProgram && (
       <div className='flex flex-col'>{renderMenus(visibleMenus)}</div>
      )}
      {activeActionsAccess.isFetching && (
       <div className='grid gap-4 px-4'>
        {[1, 2, 3].map((item) => (
         <Skeleton
          key={item}
          className='w-full h-10 bg-neutral-200 dark:bg-neutral-800'
         />
        ))}
       </div>
      )}
      {!visibleMenus.length && !activeActionsAccess.isFetching && (
       <div className='text-center'>
        <p>{noItemFound.title}</p>
        <p>{searchedText}</p>
       </div>
      )}
     </motion.div>
    )}
   </AnimatePresence>
  </nav>
 );
}
