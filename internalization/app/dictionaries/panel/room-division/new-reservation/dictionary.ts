'server-only';
import {
 getLocaleOrDefault,
 type Locale,
} from '@/internalization/app/localization';

type NewReservationDictionary = typeof import('./fa.json');

const dictionaries: Record<Locale, () => Promise<NewReservationDictionary>> = {
 fa: () => import('./fa.json').then((res) => res.default),
 en: () => import('./fa.json').then((res) => res.default),
};

function getNewReservationDictionary({ locale }: { locale: Locale }) {
 const activeLocale = getLocaleOrDefault(locale);
 return dictionaries[activeLocale]();
}

export type { NewReservationDictionary };
export { getNewReservationDictionary };
