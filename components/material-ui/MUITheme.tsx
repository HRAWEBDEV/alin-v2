"use client";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import { LocaleInfo } from "@/internalization/app/localization";
import { breakpoints } from "./breakpoints";
import * as matLocales from "@mui/material/locale";
import * as matDataGridLocales from "@mui/x-data-grid/locales";
import * as matDatePickersLocales from "@mui/x-date-pickers/locales";

export default function MUITheme({ children }: { children: ReactNode }) {
  const { locale, localeInfo } = useBaseConfig();
  const localeWithExtension: `${LocaleInfo["locale"]}${LocaleInfo["extension"]}` = `${locale}${localeInfo.extension}`;

  const muiTheme = createTheme(
    {
      spacing: (factor: number) => `${0.25 * factor}rem`,
      cssVariables: true,
      breakpoints,
      palette: {
        primary: {
          main: "var(--primary)",
          light: "var(--primary)",
          dark: "var(--primary)",
          contrastText: "var(--primary-foreground)",
        },
        secondary: {
          main: "var(--secondary)",
          light: "var(--secondary)",
          dark: "var(--secondary)",
          contrastText: "var(--secondary-foreground)",
        },
        success: {
          main: "var(--secondary)",
          light: "var(--secondary)",
          dark: "var(--secondary)",
          contrastText: "var(--secondary-foreground)",
        },
        text: {
          primary: "var(--foreground)",
          secondary: "var(--foreground)",
        },
      },
      typography: {
        fontFamily:
          locale === "fa"
            ? `"faSans", "Helvetica", "Arial", sans-serif`
            : `"enRoboto", "Helvetica", "Arial", sans-serif`,
      },
      direction: localeInfo.contentDirection,
    },
    matDataGridLocales[localeWithExtension as "faIR"],
    matDatePickersLocales[
      localeWithExtension as keyof typeof matDatePickersLocales
    ],
    matLocales[localeWithExtension as "faIR"],
  );
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
