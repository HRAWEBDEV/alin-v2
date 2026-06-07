'use client';
import { ReactNode, useEffect, useState, useRef } from 'react';
import {
 type MainWrapperSetup,
 type ScrollDirection,
 mainWrapperSetupContext,
} from './mainWrapperSetupContext';
import { useThrottledCallback } from '@tanstack/react-pacer';
import { useNavigationContext } from '../navigation/navigationContext';
import { AnimatePresence, motion } from 'motion/react';
// import { FaArrowAltCircleUp } from "react-icons/fa";
// import { Button } from "@/components/ui/button";

export default function MainWrapperSetupProvider({
 children,
}: {
 children: ReactNode;
}) {
 const mainWrapperRef = useRef<HTMLDivElement>(null);
 const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
 const [scrollTop, setScrollTop] = useState<number>(0);
 const { showMenus, toggleMenus } = useNavigationContext();

 const debouncer = useThrottledCallback(
  () => {
   if (!mainWrapperRef.current) return;
   const newScrollTop = mainWrapperRef.current.scrollTop;
   const scrollOffset = newScrollTop - scrollTop;
   let newScrollDirection: ScrollDirection = 'up';
   if (newScrollTop && Math.abs(scrollOffset) < 120) {
    return;
   }
   if (newScrollTop === 0 || scrollOffset < 0) {
    newScrollDirection = 'up';
   } else {
    newScrollDirection = 'down';
   }
   document.documentElement.setAttribute(
    'data-scroll-dicretion',
    newScrollDirection,
   );
   setScrollDirection(newScrollDirection);
   setScrollTop(newScrollTop);
  },
  {
   wait: 500,
  },
 );

 function scrollToTop() {
  if (!mainWrapperRef.current) return;
  mainWrapperRef.current.scrollTop = 0;
 }

 const ctx: MainWrapperSetup = {
  scrollTop,
  scrollDirection,
  scrollToTop,
 };

 useEffect(() => {
  if (!mainWrapperRef.current) return;
  const abortController = new AbortController();
  document.documentElement.setAttribute('data-scroll-dicretion', 'up');
  mainWrapperRef.current!.addEventListener(
   'scroll',
   () => {
    debouncer();
   },
   {
    signal: abortController.signal,
   },
  );
  return () => {
   abortController.abort();
  };
 }, [mainWrapperRef, debouncer]);

 return (
  <mainWrapperSetupContext.Provider value={ctx}>
   <main
    ref={mainWrapperRef}
    data-main-container
    className={`scroll-smooth grow pb-(--panel-tabs-height) in-data-[scroll-dicretion="down"]:pb-4 overflow-auto relative`}
   >
    <AnimatePresence>
     {showMenus && (
      <motion.div
       className='fixed inset-0 bg-black/50 dark:bg-white/20 z-(--panel-nav-backdrop-zindex) top-(--panel-header-height)'
       onClick={() => toggleMenus(false)}
       initial={{
        opacity: 0,
       }}
       exit={{
        opacity: 0,
       }}
       animate={{
        opacity: 1,
       }}
       transition={{
        duration: 0.2,
        ease: 'easeInOut',
       }}
      ></motion.div>
     )}
    </AnimatePresence>
    {children}
    {/*{scrollTop > 200 && (
          <div className='fixed z-(--app-restaurant-tabs-zindex) end-4 bottom-(--app-restaurant-tabs-height) lg:bottom-2 in-data-[scroll-dicretion="down"]:bottom-2'>
            <Button
              variant="ghost"
              size="icon-lg"
              onClick={() => {
                if (!mainWrapperRef.current) return;
                mainWrapperRef.current.scrollTop = 0;
              }}
            >
              <FaArrowAltCircleUp className="size-10 text-neutral-700 dark:text-neutral-400" />
            </Button>
          </div>
        )}*/}
   </main>
  </mainWrapperSetupContext.Provider>
 );
}
