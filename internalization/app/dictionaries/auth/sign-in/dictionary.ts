"server-only";
import {
  type Locale,
  getLocaleOrDefault,
} from "@/internalization/app/localization";

type SigninDictionary = typeof import("./fa.json");

const dictionaries: Record<Locale, () => Promise<SigninDictionary>> = {
  fa: () => import("./fa.json").then((res) => res.default),
  en: () => import("./fa.json").then((res) => res.default),
};

function getSigninDictionary({ locale }: { locale: Locale }) {
  const activeLocale = getLocaleOrDefault(locale);
  return dictionaries[activeLocale]();
}

export type { SigninDictionary };
export { getSigninDictionary };
