import AlinCloudShapeIcon from '../../../components/icons/AlinCloudShapeIcon';
import HeaderTools from './HeaderTools';
import OwnerNavigator from './OwnerNavigator';
import DepartmentNavigator from './DepartmentNavigator';

export default function Header() {
 return (
  <header className='h-(--panel-header-height) z-(--panel-header-zindex) border-b border-input shadow-lg'>
   <div className='h-full flex items-center justify-between px-4 lg:ps-0'>
    <div className='flex grow items-center'>
     <div className='lg:basis-(--panel-nav-programs-width) flex justify-center'>
      <AlinCloudShapeIcon width='4rem' height='4rem' />
     </div>
     <div className='hidden lg:grid gap-4 grid-cols-[repeat(2,minmax(10rem,var(--panel-nav-menus-width)))] pe-4'>
      <div>
       <OwnerNavigator />
      </div>
      <div>
       <DepartmentNavigator />
      </div>
     </div>
    </div>
    <div>
     <HeaderTools />
    </div>
   </div>
  </header>
 );
}
