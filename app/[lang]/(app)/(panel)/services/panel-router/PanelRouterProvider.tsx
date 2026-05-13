'use client';
import { ReactNode, useState } from 'react';
import { type StoreOwner } from '../panel-info/services/panelInfoApiActions';
import {
 type PanelRouterContext,
 panelRouterContext,
} from './panelRouterContext';
import { usePanelInfoContext } from '../panel-info/panelInfoCotext';

export default function PanelRouterProvider({
 children,
}: {
 children: ReactNode;
}) {
 const { storeOwnerInfo } = usePanelInfoContext();

 const ctx: PanelRouterContext = {
  title: 'router',
 };

 return (
  <panelRouterContext.Provider value={ctx}>
   {children}
  </panelRouterContext.Provider>
 );
}
