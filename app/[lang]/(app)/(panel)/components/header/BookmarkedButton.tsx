'use client';
import { RiBookMarkedFill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { useBookmarkedContext } from '../../services/bookmarked/bookmarkedContext';
import { useShareDictionary } from '../../../services/share-dictionary/shareDictionaryContext';
import {
 Tooltip,
 TooltipTrigger,
 TooltipContent,
} from '@/components/ui/tooltip';

function BookmarkedButton() {
 const { toggle } = useBookmarkedContext();
 const {
  shareDictionary: {
   components: { bookmarked },
  },
 } = useShareDictionary();
 return (
  <Tooltip>
   <TooltipTrigger asChild>
    <Button
     type='button'
     variant='outline'
     size='icon-lg'
     className='hidden lg:flex rounded-full w-11 h-11 text-primary'
     onClick={() => toggle(true)}
    >
     <RiBookMarkedFill className='size-6' />
    </Button>
   </TooltipTrigger>
   <TooltipContent>
    <p>{bookmarked.title}</p>
   </TooltipContent>
  </Tooltip>
 );
}

export { BookmarkedButton };
