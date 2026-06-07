import { HTMLAttributes, SVGProps } from 'react';
import { Programs } from '../(panel)/utils/programs';
import { SystemTypes } from '../(panel)/utils/systemTypes';
import AccountingIcon from '../components/icons/programs/AccountingIcon';
import BanquetIcon from '../components/icons/programs//BanquetIcon';
import BudgetIcon from '../components/icons/programs/BudgetIcon';
import CRMIcon from '../components/icons/programs/CRMIcon';
import CallCenterIcon from '../components/icons/programs/CallCenterIcon';
import CashFlowIcon from '../components/icons/programs/CashFlowIcon';
import ConfiguarationIcon from '../components/icons/programs/ConfiguarationIcon';
import CostControlIcon from '../components/icons/programs/CostControlIcon';
import CustomerServiceIcon from '../components/icons/programs/CustomerServiceIcon';
import ElectionIcon from '../components/icons/programs/ElectionIcon';
import EntertainmentIcon from '../components/icons/programs/EntertainmentIcon';
import FinancialAssetsIcon from '../components/icons/programs/FinancialAssetsIcon';
import FinancialAuditIcon from '../components/icons/programs/FinancialAuditIcon';
import HealthCenterIcon from '../components/icons/programs/HealthCenterIcon';
import HouseKeepingIcon from '../components/icons/programs/HouseKeepingIcon';
import KitchenIcon from '../components/icons/programs/KitchenIcon';
import LaundryIcon from '../components/icons/programs/LaundryIcon';
import MISIcon from '../components/icons/programs/MISIcon';
import MaintenanceIcon from '../components/icons/programs/MaintenanceIcon';
import PayRollIcon from '../components/icons/programs/PayRollIcon';
import PurchaseIcon from '../components/icons/programs/PurchaseIcon';
import QualityControlIcon from '../components/icons/programs/QualityControlIcon';
import RMSIcon from '../components/icons/programs/RMSIcon';
import ReceptionIcon from '../components/icons/programs/ReceptionIcon';
import RecruitmentIcon from '../components/icons/programs/RecruitmentIcon';
import ReservationIcon from '../components/icons/programs/ReservationIcon';
import RestaurantIcon from '../components/icons/programs/RestaurantIcon';
import MinibarIcon from '../components/icons/programs/MinibarIcon';
import CoffeShopIcon from '../components/icons/programs/CoffeShopIcon';
import RoomServiceIcon from '../components/icons/programs/RoomServiceIcon';
import BreakfastTimeIcon from '../components/icons/programs/BreakfastTimeIcon';
import RollCallIcon from '../components/icons/programs/RollCallIcon';
import StoreIcon from '../components/icons/programs/StoreIcon';
import ShopIcon from '../components/icons/programs/ShopIcon';
import TaxSystemIcon from '../components/icons/programs/TaxSystemIcon';
import WarehousingIcon from '../components/icons/programs/WarehousingIcon';
import EducationIcon from '../components/icons/programs/EducationIcon';
import { MdOutlineFindInPage } from 'react-icons/md';

const defaultStyles = {
 width: '2.5rem',
 height: '2.5rem',
};

const getProgramIcons = ({
 systemID,
 attrs,
 systemTypeID,
}: {
 systemID: number;
 systemTypeID: number | null;
 attrs: HTMLAttributes<HTMLOrSVGElement> & SVGProps<SVGSVGElement>;
}) => {
 const { style, ...other } = attrs;
 switch (systemID) {
  case Programs.managementInformation:
   return (
    <FinancialAssetsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.configManagement:
   return (
    <ConfiguarationIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.revenueManagement:
   return (
    <RMSIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.frontDesk:
   return (
    <ReceptionIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.reservation:
   return (
    <ReservationIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.housekeeping:
   return (
    <HouseKeepingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.callCenter:
   return (
    <CallCenterIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.restaurant:
   if (systemTypeID === SystemTypes.coffeShop) {
    return (
     <CoffeShopIcon
      {...defaultStyles}
      fill={attrs.style?.fill || ''}
      style={style}
      {...other}
     />
    );
   }
   if (systemTypeID === SystemTypes.minibar) {
    return (
     <MinibarIcon
      {...defaultStyles}
      fill={attrs.style?.fill || ''}
      style={style}
      {...other}
     />
    );
   }
   if (systemTypeID === SystemTypes.roomService) {
    return (
     <RoomServiceIcon
      {...defaultStyles}
      fill={attrs.style?.fill || ''}
      style={style}
      {...other}
     />
    );
   }
   if (systemTypeID === SystemTypes.breakfast) {
    return (
     <BreakfastTimeIcon
      {...defaultStyles}
      fill={attrs.style?.fill || ''}
      style={style}
      {...other}
     />
    );
   }
   if (systemTypeID === SystemTypes.shop) {
    return (
     <ShopIcon
      {...defaultStyles}
      fill={attrs.style?.fill || ''}
      style={style}
      {...other}
     />
    );
   }
   if (systemTypeID === SystemTypes.laundry) {
    return (
     <LaundryIcon
      {...defaultStyles}
      fill={attrs.style?.fill || ''}
      style={style}
      {...other}
     />
    );
   }
   return (
    <RestaurantIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.kitchen:
   return (
    <KitchenIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.banquet:
   return (
    <BanquetIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.healthCenter:
   return (
    <HealthCenterIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.cashFlow:
   return (
    <CashFlowIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.generalAccounting:
   return (
    <AccountingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.taxAffairsSystem:
   return (
    <TaxSystemIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.costControl:
   return (
    <CostControlIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.customerManagement:
   return (
    <CustomerServiceIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.inventory:
   return (
    <WarehousingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.purchase:
   return (
    <PurchaseIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.financialAudit:
   return (
    <FinancialAuditIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.store:
   return (
    <StoreIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Programs.education:
   return (
    <EducationIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  default:
   return (
    <MdOutlineFindInPage
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
 }
};

export { getProgramIcons };
