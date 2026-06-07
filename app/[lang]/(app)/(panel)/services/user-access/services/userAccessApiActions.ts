import { axios } from '@/app/[lang]/(app)/services/axios/axiosConfig';

type ActionAccess = {
 routeMapID: number;
 appMenuID: number;
 systemID: number;
 read: boolean;
 new: boolean;
 edit: boolean;
 delete: boolean;
 childs: ActionAccess[];
};
type Access = Omit<ActionAccess, 'childs'>;
type UserActionAccess = Record<string, Access>;

const accessibilitiesApi = '/Public/UserRoleAccess/GetUIAccessData';

const defaultAccess: Access = {
 routeMapID: 0,
 appMenuID: 0,
 systemID: 0,
 read: false,
 new: false,
 edit: false,
 delete: false,
};

const getUserAccess = ({
 signal,
 systemID,
}: {
 signal: AbortSignal;
 systemID: number;
}) => {
 const urlParams = new URLSearchParams();
 urlParams.set('systemID', systemID.toString());
 return axios
  .get<ActionAccess[]>(`${accessibilitiesApi}?${urlParams.toString()}`, {
   signal,
  })
  .then(({ data }) => {
   const accessibilityItems: UserActionAccess = {};
   function extractAccessbilityChilds(accessiblities: ActionAccess[]) {
    accessiblities.forEach(({ childs, ...item }) => {
     accessibilityItems[item.routeMapID.toString()] = item;
     if (childs.length) {
      extractAccessbilityChilds(childs);
     }
    });
   }
   extractAccessbilityChilds(data);
   return accessibilityItems;
  });
};

export type { ActionAccess, UserActionAccess, Access };
export { defaultAccess, getUserAccess, accessibilitiesApi };
