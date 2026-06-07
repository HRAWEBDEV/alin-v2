'use client';
import { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePanelRouterContext } from '../panel-router/panelRouterContext';
import {
 accessibilitiesApi,
 defaultAccess,
 getUserAccess,
} from './services/userAccessApiActions';
import { type UserAccessContext, userAccessContext } from './UserAccessContext';

export default function UserAccessProvider({
 children,
}: {
 children: ReactNode;
}) {
 const { routeProgram, activeProgram } = usePanelRouterContext();

 const {
  data: routeActionData,
  isFetching: routeActionIsFetching,
  isSuccess: routeActionIsSuccess,
  isError: routeActionIsError,
  isLoading: routeActionIsLoading,
 } = useQuery({
  staleTime: 'static',
  enabled: !!routeProgram,
  queryKey: [accessibilitiesApi, routeProgram?.systemID.toString()],
  async queryFn({ signal }) {
   const res = getUserAccess({ signal, systemID: routeProgram!.systemID });
   return res;
  },
 });

 // get program user access and cache
 const {
  data: activeActionData,
  isFetching: activeActionIsFetching,
  isSuccess: activeActionIsSuccess,
  isError: activeActionIsError,
  isLoading: activeActionIsLoading,
 } = useQuery({
  staleTime: 'static',
  enabled: !!activeProgram && activeProgram.id !== routeProgram?.id,
  queryKey: [accessibilitiesApi, activeProgram?.systemID.toString()],
  async queryFn({ signal }) {
   const res = getUserAccess({ signal, systemID: activeProgram!.systemID });
   return res;
  },
 });

 function getRouteActionAccess(routeMapID: number | string) {
  if (!routeActionData) return defaultAccess;
  return routeActionData[routeMapID.toString()] || defaultAccess;
 }

 function getActiveActionAccess(routeMapID: number | string) {
  if (!activeActionData) return defaultAccess;
  return activeActionData[routeMapID.toString()] || defaultAccess;
 }

 const ctx: UserAccessContext = {
  routeAction: {
   data: routeActionData,
   isFetching: routeActionIsFetching,
   isSuccess: routeActionIsSuccess,
   isError: routeActionIsError,
   isLoading: routeActionIsLoading,
   getActionAccess: getRouteActionAccess,
  },
  activeAction: {
   data: activeActionData,
   isFetching: activeActionIsFetching,
   isSuccess: activeActionIsSuccess,
   isError: activeActionIsError,
   isLoading: activeActionIsLoading,
   getActionAccess: getActiveActionAccess,
  },
 };

 return (
  <userAccessContext.Provider value={ctx}>
   {children}
  </userAccessContext.Provider>
 );
}
