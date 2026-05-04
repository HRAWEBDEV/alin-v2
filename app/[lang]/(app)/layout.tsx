import { type Locale } from "@/internalization/app/localization";
import { getShareDictionary } from "@/internalization/app/dictionaries/share/dictionary";
import { getMetaDictionary } from "@/internalization/app/dictionaries/meta/dictionary";
import { getSigninDictionary } from "@/internalization/app/dictionaries/auth/sign-in/dictionary";
import ShareDictionaryProvider from "./services/share-dictionary/ShareDictionaryProvider";
import { Toaster } from "@/components/ui/sonner";
import { locales } from "@/internalization/app/localization";
import AxiosLoggerInterceptor from "./services/axios-logger/AxiosLoggerInterceptor";
import AxiosBaseInterceptor from "./services/axios-base-interceptor/AxiosBaseInterceptor";

export default async function AppLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const [shareDic, metaDic, signinDic] = await Promise.all([
    getShareDictionary({
      locale: lang as Locale,
    }),
    getMetaDictionary({
      locale: lang as Locale,
    }),
    getSigninDictionary({
      locale: lang as Locale,
    }),
  ]);
  const { contentDirection } = locales[lang as Locale];
  return (
    <ShareDictionaryProvider
      metaDictionary={metaDic}
      shareDictionary={shareDic}
      signinDictionary={signinDic}
    >
      <AxiosLoggerInterceptor />
      <AxiosBaseInterceptor />
      {children}
      <Toaster
        className="font-[inherit]!"
        position={contentDirection === "rtl" ? "top-right" : "top-left"}
        richColors
        closeButton
      />
    </ShareDictionaryProvider>
  );
}
