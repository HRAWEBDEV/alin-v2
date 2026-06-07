'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePanelRouterContext } from './panelRouterContext';

export default function PanelPathInterceptor() {
 const pathname = usePathname();
 const { onPanelPathChanged } = usePanelRouterContext();

 useEffect(() => {
  onPanelPathChanged(pathname);
 }, [pathname, onPanelPathChanged]);
 return <></>;
}
