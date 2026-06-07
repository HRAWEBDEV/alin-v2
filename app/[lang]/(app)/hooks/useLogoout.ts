import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import { useQueryClient } from "@tanstack/react-query";
import { clearUserLoginToken } from "../auth/utils/signinTokenManger";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { locale } = useBaseConfig();

  const logout = useCallback(() => {
    router.push(`/${locale}/auth/sign-in`);
    clearUserLoginToken();
    queryClient.clear();
  }, [locale, router, queryClient]);

  return logout;
}
