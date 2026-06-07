'use client';
import { Fragment } from 'react';
import {
 Dialog,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogContent,
} from '@/components/ui/dialog';
import { usePanelRouterContext } from '../panelRouterContext';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';
// import { MdTouchApp } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { getDepartmentIcon } from '@/app/[lang]/(app)/utils/getDepartmentIcon';

export default function DepartmentController() {
 const {
  activeOwner,
  showDepartmentController,
  onShowDepartmentController,
  activeDepartment,
  changeActiveDepartment,
 } = usePanelRouterContext();
 const {
  shareDictionary: {
   components: { departmentController },
  },
 } = useShareDictionary();

 return (
  <Dialog
   open={showDepartmentController}
   onOpenChange={() => {
    onShowDepartmentController(false);
   }}
  >
   <DialogContent className='flex flex-col max-h-[95dvh] w-[min(95%,40rem)] max-w-none! p-0 overflow-hidden'>
    <DialogHeader className='p-4 border-b border-input'>
     <DialogTitle className='text-xl'>
      {departmentController.title}
      <span className='text-base text-neutral-700 dark:text-neutral-400'>
       {' '}
       ({activeOwner.name})
      </span>
     </DialogTitle>
     <DialogDescription className='hidden'></DialogDescription>
    </DialogHeader>
    <div className='grow overflow-auto p-4 pt-0 scroll-smooth'>
     <div className='flex gap-4 justify-center flex-wrap'>
      {Object.values(activeOwner.departments).map((dep) => {
       const isDepartmentActive =
        dep.departmentID === activeDepartment.departmentID;
       return (
        <Fragment key={dep.departmentID}>
         <Button
          data-active-department={isDepartmentActive}
          disabled={!dep.active}
          variant='outline'
          className='group relative h-auto w-auto flex-col size-44 max-h-none [&_svg:not([class*="size-"])]:size-[unset]! data-[active-department="true"]:bg-secondary/10 whitespace-normal shadow-lg'
          onClick={() => {
           onShowDepartmentController(false);
           if (!isDepartmentActive || !dep.active) {
            changeActiveDepartment(dep);
           }
          }}
         >
          {/*<div className='absolute bottom-0 end-0 z-0'>
           <MdTouchApp className='size-24 text-neutral-200 dark:text-neutral-800' />
          </div>*/}
          <div className={`flex flex-col items-center z-1 gap-4`}>
           <div
            dir='ltr'
            className='group-data-[active-department="true"]:text-secondary'
           >
            {getDepartmentIcon({
             systemID: dep.departmentID,
             attrs: {
              width: '3.2rem',
              height: '3.2rem',
              fill: isDepartmentActive ? 'currentColor' : undefined,
             },
            })}
           </div>
           <span className='font-medium group-data-[active-department="true"]:text-secondary'>
            {dep.departmentName}
           </span>
          </div>
         </Button>
        </Fragment>
       );
      })}
     </div>
    </div>
   </DialogContent>
  </Dialog>
 );
}
