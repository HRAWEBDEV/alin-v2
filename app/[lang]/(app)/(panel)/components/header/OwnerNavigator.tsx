'use client';
import { Button } from '@/components/ui/button';
import { usePanelRouterContext } from '../../services/panel-router/panelRouterContext';
import HotelIcon from '../../../components/icons/HotelIcon';
import {
 Tooltip,
 TooltipContent,
 TooltipTrigger,
} from '@/components/ui/tooltip';
import { useShareDictionary } from '../../../services/share-dictionary/shareDictionaryContext';

export default function OwnerNavigator({
 larger = false,
}: {
 larger?: boolean;
}) {
 const { activeOwner, onShowOwnerController } = usePanelRouterContext();
 const {
  shareDictionary: {
   components: { ownerController },
  },
 } = useShareDictionary();
 return (
  <Tooltip>
   <TooltipTrigger asChild>
    <Button
     variant='secondary'
     className={`w-full justify-start text-start ${larger && 'h-12'}`}
     onClick={() => onShowOwnerController(true)}
    >
     <HotelIcon className='size-6' fill='currentColor' />
     <div className='truncate grow'>{activeOwner.name}</div>
    </Button>
   </TooltipTrigger>
   <TooltipContent>
    <div>
     <span>{ownerController.owner}: </span>
     <span>{activeOwner.name}</span>
    </div>
   </TooltipContent>
  </Tooltip>
 );
}
