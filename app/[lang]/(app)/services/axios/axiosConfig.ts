import axios, { CreateAxiosDefaults } from "axios";

const axiosDefaultConfig: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_ALIN_API_URI,
} as const;

const configuredAxios = axios.create(axiosDefaultConfig);

export { configuredAxios as axios, axiosDefaultConfig };
