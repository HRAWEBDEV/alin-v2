import { axios } from '@/app/[lang]/(app)/services/axios/axiosConfig';
import { type Combo } from '@/app/[lang]/(app)/utils/apiTypes';

interface InitialData {
 arzes: Combo;
 inventoryTypes: Combo;
 nationalities: Combo;
 settleTypes: Combo;
 bookingTypes: Combo;
 guestGroups: Combo;
 vipGuestTypes: Combo;
 complimentaryTypes: Combo;
 reserveTypes: Combo;
 discountTypes: Combo;
 userPersonID: number | null;
 userPersonName: string | null;
 reserveNo: number | null;
 waitNo: number | null;
 defaultRoomRateType: number;
 roomRateTypeState: number;
 defaultBoardID?: number;
 defaultBoardRateTypeName?: string;
 defaultCustomerID?: number;
 defaultCustomerName?: string;
 defaultBookingTypeID?: number;
 defaultInventoryTypeID?: number;
 defaultSettelTypeID?: number;
 autoAllocate: boolean;
 defaultRateType: number;
}

const getNewReserveInitDataApi = '/Reservation/Reserve/GetInitData';

function getNewReserveInitData({ signal }: { signal: AbortSignal }) {
 return axios.get(getNewReserveInitDataApi, { signal });
}

export type { InitialData };
export { getNewReserveInitDataApi, getNewReserveInitData };
