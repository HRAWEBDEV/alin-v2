"use client";
import { useEffect } from "react";
import { axios } from "../../../services/axios/axiosConfig";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import { getUserLoginToken } from "../../../auth/utils/signinTokenManger";

export default function AxiosCredentialsInterceptor() {
  const { locale } = useBaseConfig();
  useEffect(() => {
    const reqID = axios.interceptors.request.use((config) => {
      config.headers.set("Authorization", `Bearer ${getUserLoginToken()}`);
      return config;
    });
    return () => {
      axios.interceptors.request.eject(reqID);
    };
  }, [locale]);
  return <></>;
}
