'use client';
import { useEffect, useMemo } from 'react';
import AlinCloudShapeIcon from '../../../components/icons/AlinCloudShapeIcon';
import { useKeenSlider } from 'keen-slider/react';
import { getDepartmentIcon } from '../../../utils/getDepartmentIcon';
import { usePanelRouterContext } from '../../services/panel-router/panelRouterContext';
import {
 Tooltip,
 TooltipTrigger,
 TooltipContent,
} from '@/components/ui/tooltip';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { FaChevronDown } from 'react-icons/fa';

export default function DepartmentsSlider({
 showHomeContent,
 setShowHomeContent,
}: {
 showHomeContent: boolean;
 setShowHomeContent: (val: boolean) => unknown;
}) {
 const { localeInfo } = useBaseConfig();
 const { activeOwner, activeDepartment, changeActiveDepartment } =
  usePanelRouterContext();
 const [sliderRef, sliderRefInstance] = useKeenSlider({
  mode: 'snap',
  rtl: localeInfo.contentDirection === 'rtl',
  loop: true,
  breakpoints: {
   '(max-width:1200px)': {
    slides: {
     origin: 'center',
     perView: 5,
    },
   },
   '(max-width:980px)': {
    slides: {
     origin: 'center',
     perView: 3,
    },
   },
   '(max-width:700px)': {
    slides: {
     origin: 'center',
     perView: 1,
    },
   },
  },
  slides: {
   origin: 'center',
   perView: 7,
  },
  detailsChanged(s) {
   s.slides.forEach((slide) => slide.classList.remove('active'));
   const relIndex = s.track.details.rel;
   s.slides[relIndex].classList.add('active');
  },
 });
 const relIndex = sliderRefInstance.current?.track.details.rel;
 const ownerDepartments = useMemo(
  () => Object.values(activeOwner.departments),
  [activeOwner],
 );
 //
 useEffect(() => {
  if (!activeDepartment || showHomeContent) return;
  const findIndex = ownerDepartments.findIndex(
   (item) => item.departmentID === activeDepartment?.departmentID,
  );
  sliderRefInstance.current?.moveToIdx(findIndex + 1);
 }, [activeDepartment, ownerDepartments, sliderRefInstance, showHomeContent]);
 //
 useEffect(() => {
  sliderRefInstance.current?.on('animationEnded', (s) => {
   const relIndex = s.track.details.rel;
   if (relIndex === 0) {
    setShowHomeContent(true);
    return;
   }

   setShowHomeContent(false);
   changeActiveDepartment(ownerDepartments[relIndex - 1]);
  });
 }, [
  sliderRefInstance,
  changeActiveDepartment,
  ownerDepartments,
  setShowHomeContent,
 ]);

 return (
  <div className='p-4 [&]:[--box-size:8rem]'>
   <div className='bg-background relative border rounded-xl border-sky-700 dark:border-sky-700 mb-16'>
    <div className='grid place-content-center absolute w-10 h-10 -bottom-16 left-1/2 -translate-x-1/2 text-neutral-500'>
     <FaChevronDown fontSize='large' />
    </div>
    <div ref={sliderRef} className='keen-slider h-44 -my-6'>
     <div
      key={'logo'}
      className={`group keen-slider__slide number-slide0 grid place-content-center [&.active_>_button]:scale-[1.5] [&_>_button]:shadow-xl [&.active_>_button]:shadow-md [&.active_>_button]:transition-transform`}
     >
      <button
       className='h-24 w-24 rounded-full grid place-content-center bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900'
       onClick={() => {
        sliderRefInstance.current?.moveToIdx(0);
       }}
      >
       <AlinCloudShapeIcon className='w-14 h-14' />
      </button>
     </div>
     {ownerDepartments.map(({ departmentID, departmentName, active }, i) => {
      return (
       <div
        key={departmentID}
        className={`group keen-slider__slide number-slide${i + 1} grid place-content-center [&.active_>_*]:scale-[1.5] [&_>_*]:shadow-xl [&.active_>_*]:shadow-md [&.active_>_*]:transition-transform`}
       >
        <Tooltip>
         <TooltipTrigger asChild>
          <button
           className={`h-24 w-24 rounded-full grid place-content-center bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 ${active ? 'text-sky-800 dark:text-sky-300' : 'text-neutral-400 dark:text-neutral-700'}`}
           onClick={() => {
            if (!active) return;
            sliderRefInstance.current?.moveToIdx(i + 1);
           }}
          >
           {getDepartmentIcon({
            systemID: departmentID,
            attrs: {
             width: '3rem',
             height: '3rem',
             fill: relIndex === i + 1 && active ? '' : 'currentColor',
            },
           })}
          </button>
         </TooltipTrigger>
         <TooltipContent>
          <p>{departmentName}</p>
         </TooltipContent>
        </Tooltip>
       </div>
      );
     })}
    </div>
   </div>
  </div>
 );
}
