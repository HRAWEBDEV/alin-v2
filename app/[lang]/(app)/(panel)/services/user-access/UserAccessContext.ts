import { createContext, use } from 'react';
import { OutOfContext } from '@/utils/OutOfContext';
import {
 type UserActionAccess,
 type Access,
} from './services/userAccessApiActions';

interface UserAccessContext {
 routeAction: {
  data?: UserActionAccess;
  isSuccess: boolean;
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  getActionAccess: (routeMapID: number | string) => Access;
 };
 activeAction: {
  data?: UserActionAccess;
  isSuccess: boolean;
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  getActionAccess: (routeMapID: number | string) => Access;
 };
}

const userAccessContext = createContext<UserAccessContext | null>(null);

function useUserAccessContext() {
 const val = use(userAccessContext);
 if (!val) throw new OutOfContext('user access');
 return val;
}

export type { UserAccessContext };
export { userAccessContext, useUserAccessContext };
