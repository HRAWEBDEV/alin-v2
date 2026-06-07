'use client';
import { useMemo } from 'react';
import { getProgramIcons } from '../../../utils/ProgramIcons';
import { usePanelRouterContext } from '../../services/panel-router/panelRouterContext';
import { useTheme } from 'next-themes';
import { useNavigationContext } from '../../services/navigation/navigationContext';

export default function DepartmentPrograms() {
 const { activeDepartment, changeActiveProgram } = usePanelRouterContext();
 const { toggleNavigation, toggleMenus } = useNavigationContext();
 const { resolvedTheme } = useTheme();
 const departmentPrograms = useMemo(
  () => Object.values(activeDepartment.programs),
  [activeDepartment],
 );
 return (
  <div className='flex gap-4 flex-wrap justify-center w-[min(100%,18rem)] sm:w-[min(100%,35rem)] md:w-[min(100%,44rem)] mx-auto'>
   {Array.from({ length: 15 }, (_, i) => i).map((item) => {
    return (
     <div
      style={{
       minHeight: 'var(--box-size)',
       width: 'var(--box-size)',
      }}
      key={item}
      className='bg-background bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 border border-input shadow-xl font-medium relative transition-all isolate rounded-xl overflow-hidden hover:to-sky-100 dark:hover:to-sky-950'
     >
      {(() => {
       const program = departmentPrograms[item];
       if (!program) return null;
       return (
        <div
         style={{
          minHeight: 'var(--box-size)',
          width: 'var(--box-size)',
         }}
         onClick={() => {
          changeActiveProgram(program);
          toggleMenus(true);
          // if (program.defaultPage) {
          //  const menuUrl = createMenuUrl({
          //   department: currentDepartment,
          //   program,
          //   routeMap: program.defaultPage,
          //  });
          //  router.push(menuUrl);
          // }
         }}
         role='button'
         className='h-full w-full flex flex-col gap-4 justify-center items-center p-1'
        >
         <div>
          {getProgramIcons({
           systemID: program.systemID,
           systemTypeID: program.systemTypeID,
           attrs: {
            style: {
             width: '3.5rem',
             height: '3.5rem',
             filter: resolvedTheme == 'light' ? 'none' : 'brightness(2)',
            },
            width: '3.5rem',
            height: '3.5rem',
            filter: resolvedTheme == 'light' ? 'none' : 'brightness(2)',
           },
          })}
         </div>
         <div className='text-center text-sm'>{program.name}</div>
        </div>
       );
      })()}
     </div>
    );
   })}
  </div>
 );
}
