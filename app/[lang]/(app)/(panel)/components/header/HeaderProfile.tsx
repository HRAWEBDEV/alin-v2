'use client';
import { Button } from '@/components/ui/button';
import { IoPersonCircle } from 'react-icons/io5';
import { useProfileContext } from '../../services/profile/profileContext';

export default function HeaderProfile() {
 const { toggle } = useProfileContext();
 return (
  <Button
   type='button'
   variant='ghost'
   size='icon-lg'
   className='rounded-full w-11 h-11 text-primary'
   onClick={() => toggle()}
  >
   <IoPersonCircle className='size-11' />
  </Button>
 );
}
