'use client';
import { useState, useEffect } from 'react';

export default function AnalogClock() {
 const [time, setTime] = useState(new Date());

 useEffect(() => {
  const intervalID = setInterval(() => setTime(new Date()), 1000);
  return () => clearInterval(intervalID);
 }, []);

 const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
 const minDeg = time.getMinutes() * 6;
 const secDeg = time.getSeconds() * 6;

 // Generate hour numbers (1-12) positioned around the clock
 const hourNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

 return (
  <div className='flex flex-col gap-2'>
   <div className='w-40 border border-neutral-300 dark:border-neutral-700 relative rounded-full aspect-square max-w-100 mx-auto'>
    {/* Hour numbers */}
    {hourNumbers.map((hour) => {
     const angle = (hour * 30 - 90) * (Math.PI / 180); // Convert to radians, offset by -90deg (12 o'clock)
     const radius = 42; // Percentage from center (adjust as needed)
     const x = 50 + radius * Math.cos(angle);
     const y = 50 + radius * Math.sin(angle);

     return (
      <div
       key={hour}
       className='absolute text-neutral-800 dark:text-neutral-300 font-semibold select-none pointer-events-none'
       style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
       }}
      >
       {hour}
      </div>
     );
    })}

    {/* Center dot */}
    <div className='absolute w-[4%] h-[4%] bg-neutral-700 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20' />

    {/* Hour hand */}
    <div
     className='absolute bg-neutral-800 dark:bg-neutral-300 w-[3%] h-[25%] left-1/2 top-[25%] origin-bottom rounded-md z-10'
     style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
    />

    {/* Minute hand */}
    <div
     className='absolute bg-neutral-600 dark:bg-neutral-500 w-[2.2%] h-[35%] left-1/2 top-[15%] origin-bottom rounded-md z-10'
     style={{ transform: `translateX(-50%) rotate(${minDeg}deg)` }}
    />

    {/* Second hand */}
    <div
     className='absolute bg-red-500 w-[1.5%] h-[45%] left-1/2 top-[5%] origin-bottom rounded-md z-10'
     style={{ transform: `translateX(-50%) rotate(${secDeg}deg)` }}
    />
   </div>
   <div className='text-center w-full'>
    <p
     style={{ direction: 'ltr' }}
     className='font-medium text-xl font-en-roboto'
    >
     <span className='inline-block w-10 text-center'>
      {time.toLocaleTimeString('en', {
       hour: '2-digit',
       hour12: false,
      })}
     </span>
     :
     <span className='inline-block w-10 text-center'>
      {time
       .toLocaleTimeString('en', {
        minute: '2-digit',
        hour12: false,
       })
       .padStart(2, '0')}
     </span>
     :
     <span className='inline-block w-10 text-center'>
      {time
       .toLocaleTimeString('en', {
        second: '2-digit',
        hour12: false,
       })
       .padStart(2, '0')}
     </span>
    </p>
   </div>
  </div>
 );
}
