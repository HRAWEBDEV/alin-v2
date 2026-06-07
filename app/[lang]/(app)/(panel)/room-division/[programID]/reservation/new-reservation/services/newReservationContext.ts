import { OutOfContext } from '@/utils/OutOfContext';
import { use, createContext } from 'react';
import { type InitialData } from './newReservationApiActions';

interface NewReservationContext {
 title: 'new reservation';
 initialData: {
  data?: InitialData;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isFetching: boolean;
 };
}

const newReservationContext = createContext<NewReservationContext | null>(null);

function useNewReservationContext() {
 const val = use(newReservationContext);
 if (!val) throw new OutOfContext('new reservation context');
 return val;
}

export type { NewReservationContext };
export { newReservationContext, useNewReservationContext };
