import { getNewReservationDictionary } from '@/internalization/app/dictionaries/panel/room-division/new-reservation/dictionary';
import { type Locale } from '@/internalization/app/localization';
import { Metadata } from 'next';
import NewReservationProvider from './services/NewReservationProvider';
import NewReservationWrapper from './components/NewReservationWrapper';

export async function generateMetadata({
 params,
}: {
 params: { lang: string };
}): Promise<Metadata> {
 const { lang } = params;
 const dictionary = await getNewReservationDictionary({
  locale: lang as Locale,
 });

 return {
  title: dictionary.title,
 };
}

export default async function NewReservationPage({
 params,
}: PageProps<'/[lang]/room-division/[programID]/reservation/new-reservation'>) {
 const { lang } = await params;
 const dictionary = await getNewReservationDictionary({
  locale: lang as Locale,
 });

 return (
  <div className='mx-auto w-[min(100%,90rem)] p-4'>
   <NewReservationProvider>
    <NewReservationWrapper dic={dictionary} />
   </NewReservationProvider>
  </div>
 );
}
