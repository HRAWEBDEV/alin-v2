import { HTMLAttributes, SVGProps } from 'react';
import { type StoreDepartment } from '../(panel)/services/panel-info/services/panelInfoApiActions';
import { Departments } from '../(panel)/utils/departments';
import ManagementIcon from '../components/icons/departments/ManagementIcon';
import SalesAndMarketingIcon from '../components/icons/departments/SalesAndMarketingIcon';
import RoomDivisionIcon from '../components/icons/departments/RoomDivisionIcon';
import FoodAndBeverageIcon from '../components/icons/departments/FoodAndBeverageIcon';
import SportAndEntertainmentIcon from '../components/icons/departments/SportAndEntertainmentIcon';
import OtherRevenueCentersIcon from '../components/icons/departments/OtherRevenueCentersIcon';
import AccountingAndFinanceIcon from '../components/icons/departments/AccountingAndFinanceIcon';
import HumanResourcesIcon from '../components/icons/departments/HumanResourcesIcon';
import LogesticsIcon from '../components/icons/departments/LogesticsIcon';
import ProtectAndMaintenanceIcon from '../components/icons/departments/ProtectAndMaintenanceIcon';
import ComputerReportIcon from '@/app/[lang]/(app)/components/icons/ComputerReportIcon';

const defaultStyles = {
 width: '2.5rem',
 height: '2.5rem',
};

const getDepartmentIcon = ({
 systemID,
 attrs,
}: {
 systemID: StoreDepartment['departmentID'];
 attrs: HTMLAttributes<HTMLOrSVGElement> & SVGProps<SVGSVGElement>;
}) => {
 const { style, ...other } = attrs;
 switch (systemID) {
  case Departments.managment:
   return (
    <ManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.salesAndMarketing:
   return (
    <SalesAndMarketingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.roomDivision:
   return (
    <RoomDivisionIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.foodAndBeverage:
   return (
    <FoodAndBeverageIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.sportsAndEntertainment:
   return (
    <SportAndEntertainmentIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.otherRevenueCenters:
   return (
    <OtherRevenueCentersIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.accountsAndFinance:
   return (
    <AccountingAndFinanceIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.humanResources:
   return (
    <HumanResourcesIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.logistics:
   return (
    <LogesticsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Departments.protectionAndSecurity:
   return (
    <ProtectAndMaintenanceIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  default:
   return (
    <ComputerReportIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
 }
};

export { getDepartmentIcon };
