'use client';
import { useEffect } from 'react';
import { axios } from '../../../services/axios/axiosConfig';
import { useBaseConfig } from '@/services/base-config/baseConfigContext';
import { usePanelRouterContext } from '../panel-router/panelRouterContext';

export default function AxiosPanelRoutesInterceptor() {
 const { activeOwner, routeDepartment, routeProgram } = usePanelRouterContext();
 const { locale } = useBaseConfig();
 useEffect(() => {
  const reqID = axios.interceptors.request.use((config) => {
   if (activeOwner) {
    config.headers.set('ownerID', activeOwner.id);
   }
   if (routeDepartment) {
    config.headers.set('departmentID', routeDepartment.departmentID);
   }
   if (routeProgram) {
    config.headers.set('programID', routeProgram.id);
    config.headers.set('systemid', routeProgram.systemID);
    config.headers.set('accProgramID', routeProgram.accProgramID);
    config.headers.set('empProgramID', routeProgram.empProgramID);
    config.headers.set('whProgramID', routeProgram.whProgramID);
   }
   config.headers.set('dateTime', new Date().toISOString());
   return config;
  });
  return () => {
   axios.interceptors.request.eject(reqID);
  };
 }, [locale, activeOwner, routeDepartment, routeProgram]);
 return <></>;
}
