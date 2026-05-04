import { axios } from "@/app/[lang]/(app)/services/axios/axiosConfig";
import { Programs } from "../../../utils/programs";
import { Menus } from "../../../utils/menus";
import { SystemTypes } from "../../../utils/systemTypes";

const getOwnerInfoApi = "/Public/UI/GetDatas";

type Owner = {
  id: number;
  name: string;
};

type Department = {
  active: boolean;
  ownerID: number;
  departmentID: number;
  departmentName: string;
  departmentRouteMap: string;
};

type Program = {
  id: number;
  name: string;
  ownerID: number;
  systemID: number;
  departmentID: number;
  systemName: string;
  systemRouteMap: string;
  systemTypeID: null | number;
  defaultPage: string | null;
  accProgramID: number | null;
  empProgramID: number | null;
  whProgramID: number | null;
};

type Menu = {
  id: number;
  systemID: number;
  name: string;
  routeMap: string;
  routeMapID: number;
  visible: boolean;
  action: boolean;
  childs: Menu[];
};

type OwnerInfo = {
  value: {
    owners: Owner[];
    departments: Department[];
    programs: Program[];
    menus: Menu[];
    systems: {
      id: number;
      defaultPage: string | null;
    }[];
  };
};

type StoreOwnerInfo = {
  owners: Record<
    string,
    Owner & {
      departments: Record<
        string,
        Department & {
          programs: Record<
            string,
            Program & {
              menus: Menu[];
            }
          >;
        }
      >;
    }
  >;
};

function getStoreOwnerInfo(ownerInfo: OwnerInfo["value"]) {
  const storeOwnerInfo: StoreOwnerInfo = {
    owners: {},
  };
  ownerInfo.owners.forEach((owner) => {
    storeOwnerInfo.owners[owner.id.toString()] = {
      ...owner,
      departments: {},
    };
  });
  ownerInfo.departments.forEach((dep) => {
    if (dep.ownerID.toString() in storeOwnerInfo.owners) {
      storeOwnerInfo.owners[dep.ownerID.toString()].departments[
        dep.departmentID.toString()
      ] = {
        ...dep,
        programs: {},
      };
    }
  });
  ownerInfo.programs.forEach((program) => {
    if (!(program.ownerID.toString() in storeOwnerInfo.owners)) return;
    if (
      !(
        program.departmentID.toString() in
        storeOwnerInfo.owners[program.ownerID.toString()].departments
      )
    )
      return;
    storeOwnerInfo.owners[program.ownerID.toString()].departments[
      program.departmentID.toString()
    ].programs[`${program.id}_${program.systemID}`] = {
      ...program,
      menus: ownerInfo.menus.filter((menu) => {
        if (menu.systemID !== program.systemID) return false;
        if (
          program.systemID === Programs.restaurant &&
          menu.id === Menus.restRack
        ) {
          return (
            !program.systemTypeID ||
            program.systemTypeID === SystemTypes.coffeShop ||
            program.systemTypeID === SystemTypes.breakfast
          );
        }
        return true;
      }),
    };
  });
  return storeOwnerInfo;
}

function getOwnerInfo({ signal }: { signal: AbortSignal }) {
  return axios.get<OwnerInfo>(getOwnerInfoApi, {
    signal,
  });
}

export type { OwnerInfo, Owner, Program, Department, Menu, StoreOwnerInfo };
export { getOwnerInfoApi, getOwnerInfo, getStoreOwnerInfo };
