'use client';
import { ReactNode } from 'react';
import {
 type NewReservationContext,
 newReservationContext,
} from './newReservationContext';
import { useQuery } from '@tanstack/react-query';
import {
 getNewReserveInitDataApi,
 getNewReserveInitData,
} from './newReservationApiActions';
import { usePanelBaseQueryKey } from '@/app/[lang]/(app)/(panel)/hooks/usePanelBaseQueryKey';

export default function NewReservationProvider({
 children,
}: {
 children: ReactNode;
}) {
 const baseQueryKey = usePanelBaseQueryKey();

 // there are values inside init data that are not static and will change
 const {
  data: initData,
  isLoading: initiDataIsLoading,
  isSuccess: initiDataIsSuccess,
  isError: initiDataIsError,
  isFetching: initiDataIsFetching,
 } = useQuery({
  staleTime: 'static',
  gcTime: 0,
  queryKey: [baseQueryKey, getNewReserveInitDataApi],
  async queryFn({ signal }) {
   const res = await getNewReserveInitData({ signal });
   return res.data;
  },
 });

 const ctx: NewReservationContext = {
  title: 'new reservation',
  initialData: {
   data: initData,
   isLoading: initiDataIsLoading,
   isSuccess: initiDataIsSuccess,
   isError: initiDataIsError,
   isFetching: initiDataIsFetching,
  },
 };

 return (
  <newReservationContext.Provider value={ctx}>
   {children}
  </newReservationContext.Provider>
 );
}
