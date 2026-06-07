'use client';
import { Fragment } from 'react';
import {
 Dialog,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogContent,
} from '@/components/ui/dialog';
import { usePanelInfoContext } from '../../panel-info/panelInfoCotext';
import { usePanelRouterContext } from '../panelRouterContext';
import { useShareDictionary } from '@/app/[lang]/(app)/services/share-dictionary/shareDictionaryContext';
// import { MdTouchApp } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import HotelIcon from '@/app/[lang]/(app)/components/icons/HotelIcon';

export default function OwnerController() {
 const { storeOwnerInfo } = usePanelInfoContext();
 const {
  activeOwner,
  showOwnerController,
  changeActiveOwner,
  onShowOwnerController,
  onShowDepartmentController,
 } = usePanelRouterContext();
 const {
  shareDictionary: {
   components: { ownerController },
  },
 } = useShareDictionary();
 return (
  <Dialog
   open={showOwnerController}
   onOpenChange={() => {
    onShowOwnerController(false);
   }}
  >
   <DialogContent className='flex flex-col max-h-[95dvh] w-[min(95%,40rem)] max-w-none! p-0 overflow-hidden'>
    <DialogHeader className='p-4 border-b border-input'>
     <DialogTitle className='text-xl'>{ownerController.title}</DialogTitle>
     <DialogDescription className='hidden'></DialogDescription>
    </DialogHeader>
    <div className='grow overflow-auto p-4 pt-0 scroll-smooth'>
     <div className='flex gap-4 justify-center flex-wrap'>
      {Object.values(storeOwnerInfo.owners).map((owner) => {
       const isOwnerActive = activeOwner.id === owner.id;
       return (
        <Fragment key={owner.id}>
         <Button
          data-active-department={isOwnerActive}
          key={owner.id}
          variant='outline'
          className='group relative h-auto w-auto flex-col size-44 max-h-none [&_svg:not([class*="size-"])]:size-[unset]! data-[active-department="true"]:bg-secondary/10 whitespace-normal shadow-lg'
          onClick={() => {
           if (isOwnerActive) return;
           changeActiveOwner(owner);
           onShowOwnerController(false);
           onShowDepartmentController(true);
          }}
         >
          {/*<div className='absolute bottom-0 end-0 z-0'>
           <MdTouchApp className='size-24 text-neutral-200 dark:text-neutral-800' />
          </div>*/}
          <div className={`flex flex-col items-center z-1 gap-2`}>
           <div dir='ltr'>
            <HotelIcon
             className='size-14 text-primary group-data-[active-department="true"]:text-secondary'
             fill='currentColor'
            />
           </div>
           <span className='font-medium group-data-[active-department="true"]:text-secondary'>
            {owner.name}
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
