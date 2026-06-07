import { FC } from 'react';
import { type TProps } from '@/app/[lang]/(app)/utils/customIconsTypes';

const WaRemittancesIcon: FC<TProps> = (props) => {
 return (
  <svg
   id='Layer_2'
   data-name='Layer 2'
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 62 80'
   {...props}
  >
   <defs>
    <style>{`
      .cls-1 {
        fill-rule: evenodd;
      }
 `}</style>
   </defs>
   <g id='Layer_1-2' data-name='Layer 1'>
    <path
     className='cls-1'
     d='M56.77,4.89c.42-.07.85.02,1.22.25.67.32,1.1,1.03,1.11,1.81l.12,18.33h-3.59l-.1-14.66-11.56,7.81v27.2c-.96.72-1.95,1.37-2.99,1.95l-.74-1.18v-27.7l-15.07-2.04-.55,17.26-5.98-4.37-5.98,3.62,1.22-18.06-10.16-1.39v37l24.02,2.86-.72,3.91-25.25-2.99C.78,54.45,0,53.57,0,52.51V11.5c-.01-.8.43-1.54,1.11-1.86L21.16.18c.31-.15.65-.21.99-.16l34.62,4.88ZM29.62,74.4l4.98-27.09,5.05,8.14c10.87-4.67,16.98-12.37,17.89-24.23,8.93,16.72,3.51,31.7-7.81,40.47l5.15,8.31-25.26-5.6ZM39.29,6.45l-10.95,6.65,13.27,1.81,9.99-6.73-12.31-1.72ZM16.83,11.52l10.62-6.74-5.27-.74-13.52,6.39,8.17,1.11v-.03Z'
    />
   </g>
  </svg>
 );
};

export default WaRemittancesIcon;
