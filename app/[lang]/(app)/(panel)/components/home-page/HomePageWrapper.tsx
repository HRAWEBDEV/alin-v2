'use client';
import { useState } from 'react';
import DepartmentsSlider from './DepartmentsSlider';
import DepartmentPrograms from './DepartmentPrograms';

export default function HomePageWrapper() {
 const [showHomeContent, setShowHomeContent] = useState(true);
 return (
  <div className='mx-auto w-[min(100%,80rem)] pt-8 [&]:[--box-size:8rem]'>
   <DepartmentsSlider
    showHomeContent={showHomeContent}
    setShowHomeContent={setShowHomeContent}
   />
   {!showHomeContent && <DepartmentPrograms />}
  </div>
 );
}
