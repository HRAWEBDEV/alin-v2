import { ModeControllerButton } from '../../../components/ModeController';
import { LocaleControllerButton } from '../../../components/LocaleController';
import HeaderProfile from './HeaderProfile';
import { BookmarkedButton } from './BookmarkedButton';

export default function HeaderTools() {
 return (
  <div className='flex gap-3 items-center'>
   <BookmarkedButton />
   <ModeControllerButton />
   <LocaleControllerButton />
   <HeaderProfile />
  </div>
 );
}
