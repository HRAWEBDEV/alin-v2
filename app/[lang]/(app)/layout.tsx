import { type Locale } from "@/internalization/app/localization";
import { getShareDictionary } from "@/internalization/app/dictionaries/share/dictionary";
import { getMetaDictionary } from "@/internalization/app/dictionaries/meta/dictionary";
import { getSigninDictionary } from "@/internalization/app/dictionaries/auth/sign-in/dictionary";
import ShareDictionaryProvider from "./services/share-dictionary/ShareDictionaryProvider";

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
  return (
    <ShareDictionaryProvider
      metaDictionary={metaDic}
      shareDictionary={shareDic}
      signinDictionary={signinDic}
    >
      {children}
    </ShareDictionaryProvider>
  );
}
