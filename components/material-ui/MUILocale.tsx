"use client";
import { ReactNode } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { muiAdopter, dateFnsLocale } from "@/internalization/app/localization";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export default function MUILocale({ children }: { children: ReactNode }) {
  const { locale } = useBaseConfig();

  return (
    <LocalizationProvider
      adapterLocale={dateFnsLocale[locale]}
      dateAdapter={muiAdopter[locale]}
    >
      {children}
    </LocalizationProvider>
  );
}
