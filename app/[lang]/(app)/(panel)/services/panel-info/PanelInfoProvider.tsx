'use client';
import { ReactNode, useState, useEffect } from 'react';
import { type PanelInfoStore, panelInfoContext } from './panelInfoCotext';
import { useQuery } from '@tanstack/react-query';
import {
 type StoreOwnerInfo,
 getOwnerInfoApi,
 getOwnerInfo,
 getStoreOwnerInfo,
} from './services/panelInfoApiActions';
import SystemLoading from '../../../components/SystemLoading';

export default function PanelInfoProvider({
 children,
}: {
 children: ReactNode;
}) {
 const [storeOwnerInfo, setStoreOwnerInfo] = useState<StoreOwnerInfo | null>(
  null,
 );
 const {
  data: ownerInfo,
  isSuccess: ownerInfoIsSuccess,
  isError: ownerInfoIsError,
  isFetching: ownerInfoIsFetching,
 } = useQuery({
  staleTime: 'static',
  queryKey: [getOwnerInfoApi],
  async queryFn({ signal }) {
   const res = await getOwnerInfo({ signal });
   return res.data.value;
  },
 });

 const ctx: PanelInfoStore = {
  title: 'panel info',
  storeOwnerInfo: storeOwnerInfo!,
 };

 useEffect(() => {
  if (!ownerInfoIsSuccess) return;
  setStoreOwnerInfo(getStoreOwnerInfo(ownerInfo));
 }, [ownerInfo, ownerInfoIsSuccess]);

 if (ownerInfoIsFetching) {
  return (
   <>
    <SystemLoading />
   </>
  );
 }

 return (
  <panelInfoContext.Provider value={ctx}>
   {ownerInfoIsSuccess && !!storeOwnerInfo && children}
  </panelInfoContext.Provider>
 );
}
