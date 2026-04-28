"use client";
import { ReactNode } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

const cacheOptions = {
  rtl: {
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
    prepend: false,
  },
  ltr: {
    key: "mui",
    prepend: false,
  },
};

export default function MUICache({ children }: { children: ReactNode }) {
  const { localeInfo } = useBaseConfig();
  const muiCache = createCache(cacheOptions[localeInfo.contentDirection]);
  return <CacheProvider value={muiCache}>{children}</CacheProvider>;
}
