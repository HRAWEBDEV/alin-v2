import { useTheme } from 'next-themes';
import AlinCloudLoading from './icons/AlinCloudLoading';

export default function SystemLoading() {
 const { resolvedTheme } = useTheme();
 return (
  <div className='fixed inset-0 z-(--panel-system-loading-zindex)'>
   <div className='flex items-center justify-center h-full bg-white/50 dark:bg-black/50 p-10'>
    <AlinCloudLoading
     width='20rem'
     className={`${resolvedTheme === 'dark' ? 'brightness-75' : ''}`}
    />
   </div>
  </div>
 );
}
