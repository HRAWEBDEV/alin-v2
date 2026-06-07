import { HTMLAttributes, SVGProps } from 'react';
import { Menus } from './menus';
import UsersIcon from '../../components/icons/menus/UsersIcon';
import OrganizationlRoleIcon from '../../components/icons/menus/OrganizationlRoleIcon';
import BusinessesIcon from '../../components/icons/menus/BusinessesIcon';
import MarketsIcon from '../../components/icons/menus/MarketsIcon';
import CostCentersIcon from '../../components/icons/menus/CostCentersIcon';
import DiscountsIcon from '../../components/icons/menus/DiscountsIcon';
import BankAccountsIcon from '../../components/icons/menus/BankAccountsIcon';
import PcPosIcon from '../../components/icons/menus/PcPosIcon';
import PrintIcon from '../../components/icons/menus/PrintIcon';
import OrderReceiningCentersIcon from '../../components/icons/menus/OrderReceiningCentersIcon';
import SystemCommunicationIcon from '../../components/icons/menus/SystemCommunicationIcon';
import SettingIcon from '../../components/icons/menus/SettingIcon';
import WebkiosIcon from '../../components/icons/menus/WebkiosIcon';
import CurrenciesIcon from '../../components/icons/menus/CurrenciesIcon';
import OverviewIcon from '../../components/icons/menus/OverviewIcon';
import RevenueCustomerManagementIcon from '../../components/icons/menus/RevenueCustomerManagement';
import RevenueRoomsRackIcon from '../../components/icons/menus/RevenueRoomsRackIcon';
import RevenueEventsIcon from '../../components/icons/menus/RevenueEventsIcon';
import RevenueInventoryManagementIcon from '../../components/icons/menus/RevenueInventoryManagementIcon';
import RevenueReportsIcon from '../../components/icons/menus/RevenueReportsIcon';
import RevenueRateManagementIcon from '../../components/icons/menus/RevenueRateManagementIcon';
import RevenueSalesManagementIcon from '../../components/icons/menus/RevenueSalesManagementIcon';
import RegRoomsManagementIcon from '../../components/icons/menus/RegRoomManagement';
import RegGuestManagementIcon from '../../components/icons/menus/RegGuestManagementIcon';
import RegFrontCashIcon from '../../components/icons/menus/RegFrontCashIcon';
import RegReservationIcon from '../../components/icons/menus/RegReservationIcon';
import RegHousekeepingIcon from '../../components/icons/menus/RegHouseKeepingIcon';
import RegArchiveIcon from '../../components/icons/menus/RegArchiveIcon';
import RegSendInformationIcon from '../../components/icons/menus/RegSendInformationIcon';
import ResReservationListIcon from '../../components/icons/menus/ResReservationsIcon';
import ResReservationChartIcon from '../../components/icons/menus/ResReservationChartIcon';
import ResNewReservationIcon from '../../components/icons/menus/ResnewReservation';
import ResReservationWaitingListIcon from '../../components/icons/menus/ResReservationWaitingListIcon';
import HkWarehouseManagementIcon from '../../components/icons/menus/HkWarehouseManagementsIcon';
import HkExecutiveManagementIcon from '../../components/icons/menus/HkExecutiveManagementsIcon';
import CCCallPhoneIcon from '../../components/icons/menus/CCCallPhoneIcon';
import RestSaleIcon from '../../components/icons/menus/RestSaleIcon';
import RestOrdersIcon from '../../components/icons/menus/RestOrdersIcon';
import RestOnlineSaleIcon from '../../components/icons/menus/RestOnlineSaleIcon';
import RestDeliveryManagementIcon from '../../components/icons/menus/RestDeliveryManagementIcon';
import RestCostControlIcon from '../../components/icons/menus/RestCostControlIcon';
import KitOrdesrIcon from '../../components/icons/menus/KitOrdersIcon';
import BanContractsIcon from '../../components/icons/menus/BanContractsIcon';
import BanSalesManagementIcon from '../../components/icons/menus/BanSalesManagementIcon';
import HLMembersIcon from '../../components/icons/menus/HLMembersIcon';
import HLContractsIcon from '../../components/icons/menus/HLContactsIcon';
import CuPersonsIcon from '../../components/icons/menus/CuPersonsIcon';
import CuComapniesIcon from '../../components/icons/menus/CuCompaniesIcon';
import CuInvoiceIcon from '../../components/icons/menus/CuInvoiceIcon';
import FinSalesCenterControlIcon from '../../components/icons/menus/FinSalesCenterControlIcon';
import AccDocumentManagementIcon from '../../components/icons/menus/AccDocumentManagementIcon';
import AccAccountControlIcon from '../../components/icons/menus/AccAccountControlIcon';
import AccAccountingHeadingsIcon from '../../components/icons/menus/AccAccountingHeadingsIcon';
import AccOptionsIcon from '../../components/icons/menus/AccOptionsIcon';
import AccFinancialStatementsIcon from '../../components/icons/menus/AccFinancialStatementsIcon';
import CaReceivableDocsIcon from '../../components/icons/menus/CaReceivableDocsIcon';
import WaReceiptsIcon from '../../components/icons/menus/WaRecieptsIcon';
import WaRemittancesIcon from '../../components/icons/menus/WaRemittancesIcon';
import WaInventoryIcon from '../../components/icons/menus/WaInventoryIcon';
import WaInputOutputGoodsIcon from '../../components/icons/menus/WaInputOutputGoodsIcon';
import WaRequestGoodIcon from '../../components/icons/menus/WaRequestGoodIcon';
import WaHandlingIcon from '../../components/icons/menus/WaHandlingIcon';

const defaultStyles = {
 width: '1.2rem',
 height: '1.2rem',
};

const getMenusIcon = ({
 menuID,
 attrs,
}: {
 menuID: number;
 attrs: HTMLAttributes<HTMLOrSVGElement> & SVGProps<SVGSVGElement>;
}) => {
 const { style, ...other } = attrs;
 switch (menuID) {
  case Menus.users:
   return (
    <UsersIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.organizationRole:
   return (
    <OrganizationlRoleIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.business:
   return (
    <BusinessesIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.marketsDefinition:
   return (
    <MarketsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.costAndRevenueCenters:
   return (
    <CostCentersIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueEvents:
   return (
    <RevenueEventsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  case Menus.DiscountTypeDefinition:
   return (
    <DiscountsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.BackAccounts:
   return (
    <BankAccountsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.pcpos:
   return (
    <PcPosIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.printers:
   return (
    <PrintIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.currencies:
   return (
    <CurrenciesIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.orderReceivingCenters:
   return (
    <OrderReceiningCentersIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.interSystemConnection:
   return (
    <SystemCommunicationIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.webkiosks:
   return (
    <WebkiosIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.initialSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueOverview || Menus.regOverview:
   return (
    <OverviewIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueCustomerManagement:
   return (
    <RevenueCustomerManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regCustomersManagement:
   return (
    <RevenueCustomerManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueRoomsRack:
   return (
    <RevenueRoomsRackIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regRoomsRack:
   return (
    <RevenueRoomsRackIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueInventoryManagement:
   return (
    <RevenueInventoryManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueRoomRateManagement:
   return (
    <RevenueRateManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regAccManagements:
   return (
    <RevenueRateManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueSalesManagment:
   return (
    <RevenueSalesManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.revenueSettings:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.initialSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regRoomsManagement:
   return (
    <RegRoomsManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regGuestsManagement:
   return (
    <RegGuestManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regFrontCash:
   return (
    <RegFrontCashIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regReservation:
   return (
    <RegReservationIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regHouseKeeping:
   return (
    <RegHousekeepingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regArchive:
   return (
    <RegArchiveIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regSendInformation:
   return (
    <RegSendInformationIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.regSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resRoomsRack:
   return (
    <RevenueRoomsRackIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resNewReservation:
   return (
    <ResNewReservationIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resWaitingList:
   return (
    <ResReservationWaitingListIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  case Menus.resreservelist:
   return (
    <ResReservationListIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resRoomReserveChart:
   return (
    <ResReservationChartIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  case Menus.resReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resReservationCash:
   return (
    <RegFrontCashIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resSalesManagement:
   return (
    <RevenueSalesManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resInventoryManagement:
   return (
    <RevenueInventoryManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resRoomRateManagement:
   return (
    <RevenueRateManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  case Menus.resCustomersManagment:
   return (
    <RevenueCustomerManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resEvents:
   return (
    <RevenueEventsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.resSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hkRack:
   return (
    <RevenueRoomsRackIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hkExecutiveManagement:
   return (
    <HkExecutiveManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  case Menus.hkRoomsManagement:
   return (
    <RegRoomsManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hkGuestsManagement:
   return (
    <RegGuestManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hkAccManagement:
   return (
    <RevenueRateManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hkReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hkWarehouseManagement:
   return (
    <HkWarehouseManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  case Menus.hkPropertyManagement:
   return (
    <RevenueRateManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hkSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.ccPhoneCalls:
   return (
    <CCCallPhoneIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.ccReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.ccSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restRack:
   return (
    <RevenueRoomsRackIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restSales:
   return (
    <RestSaleIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.initialSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restOrders:
   return (
    <RestOrdersIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restCashBox:
   return (
    <RegFrontCashIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restOnlineSell:
   return (
    <RestOnlineSaleIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.initialSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restDeliveryManagement:
   return (
    <RestDeliveryManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restCustomers:
   return (
    <RegGuestManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restArchive:
   return (
    <RegArchiveIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restCostControl:
   return (
    <RestCostControlIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.restSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.initialSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.kitOrders:
   return (
    <KitOrdesrIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banContacts:
   return (
    <BanContractsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banSales:
   return (
    <RestSaleIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banCash:
   return (
    <RegFrontCashIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banSalesMenuManagement:
   return (
    <BanSalesManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banInventoryManagement:
   return (
    <RevenueInventoryManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banCustomers:
   return (
    <RegGuestManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.banSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlSales:
   return (
    <RestSaleIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlCash:
   return (
    <RegFrontCashIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlMembers:
   return (
    <HLMembersIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlContracts:
   return (
    <HLContractsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlCustomers:
   return (
    <RegGuestManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlPriceInventory:
   return (
    <RevenueInventoryManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.hlSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.stSales:
   return (
    <RestSaleIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.stCash:
   return (
    <RegFrontCashIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.stPriceInventory:
   return (
    <RevenueInventoryManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.stCustomers:
   return (
    <RegGuestManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.stReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.stSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.cuPersons:
   return (
    <CuPersonsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.cuCompanies:
   return (
    <CuComapniesIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.cuCustomers:
   return (
    <RegGuestManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.cuContracts:
   return (
    <BanContractsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.cuInvoices:
   return (
    <CuInvoiceIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.finSalesCenterControl:
   return (
    <FinSalesCenterControlIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accDocumentManagement:
   return (
    <AccDocumentManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accAccountControl:
   return (
    <AccAccountControlIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accFloatAccounts:
   return (
    <CurrenciesIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accAccountingHeadings:
   return (
    <AccAccountingHeadingsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accFinancialBooks:
   return (
    <RevenueRateManagementIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accFinancialReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accFinancialStatements:
   return (
    <AccFinancialStatementsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.accOptions:
   return (
    <AccOptionsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.caBankAccounts:
   return (
    <BankAccountsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.caCashBoxes:
   return (
    <RegFrontCashIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.caReceivableDocs:
   return (
    <CaReceivableDocsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.caInvoices:
   return (
    <CuInvoiceIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.caReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.caSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.waReceipts:
   return (
    <WaReceiptsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.waRemmitance:
   return (
    <WaRemittancesIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.waInventory:
   return (
    <WaInventoryIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.waInputAndOutput:
   return (
    <WaInputOutputGoodsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.waRequestGoods:
   return (
    <WaRequestGoodIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.wahandling:
   return (
    <WaHandlingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  case Menus.waOptions:
   return (
    <AccOptionsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.waReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.waSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.finSalesCenterControl:
   return (
    <FinSalesCenterControlIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.finSalesCenterControl:
   return (
    <FinSalesCenterControlIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.puReports:
   return (
    <RevenueReportsIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
  case Menus.puSetting:
   return (
    <SettingIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );

  default:
   return (
    <OverviewIcon
     {...defaultStyles}
     fill={attrs.style?.fill || ''}
     style={style}
     {...other}
    />
   );
 }
};

export { getMenusIcon };
