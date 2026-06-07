import { FC } from 'react';
import { type TProps } from '@/app/[lang]/(app)/utils/customIconsTypes';

const BankAccountsIcon: FC<TProps> = (props) => {
 return (
  <svg
   id='Layer_2'
   data-name='Layer 2'
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 80 80'
   {...props}
  >
   <g id='Layer_1-2' data-name='Layer 1'>
    <path d='M75,0H5C1.84,0,0,4.14,0,8.52v63.54c0,4.38,2.56,7.93,5.71,7.93h68.57c3.15,0,5.71-3.55,5.71-7.93V8.52c0-4.38-1.85-8.52-5-8.52ZM23.75,21.79c3.45,0,6.25,4.82,6.25,10.76s-2.8,10.76-6.25,10.76-6.25-4.82-6.25-10.76,2.8-10.76,6.25-10.76ZM12.5,57.65s.62-7.16,2.03-8.51c1.41-1.35,5.46-2.25,5.46-2.25,0,0,2.63,4.05,3.74,4.05s3.74-4.05,3.74-4.05c0,0,4.05.9,5.46,2.25,1.65,1.59,2.07,8.51,2.07,8.51H12.5ZM67.5,54.07h-25v-3.59h25v3.59ZM67.5,43.31h-25v-3.59h25v3.59ZM67.5,32.55h-25v-3.59h25v3.59Z' />
   </g>
  </svg>
 );
};

export default BankAccountsIcon;
