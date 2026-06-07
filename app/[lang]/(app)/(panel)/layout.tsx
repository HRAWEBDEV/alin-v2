import PanelInfoProvider from './services/panel-info/PanelInfoProvider';
import NavigationProvider from './services/navigation/NavigationProvider';
import PanelRouterProvider from './services/panel-router/PanelRouterProvider';
import PanelPathInterceptor from './services/panel-router/PanelPathInterceptor';
import ProfileProvider from './services/profile/ProfileProvider';
import SettingsProvider from './services/settings/SettingsProvider';
import AxiosCredentialsInterceptor from './services/axios-credentials-interceptor/AxiosCredentialsInterceptor';
import AxiosPanelRoutesInterceptor from './services/axios-panel-routes-interceptor/AxiosPanelRoutesInterceptor';
import UserAccessProvider from './services/user-access/UserAccessProvider';
import QuickAccessProvider from './services/quick-access/QuickAccessProvider';
import BookmarkedProvider from './services/bookmarked/BookmarkedProvider';
import Bookmared from './services/bookmarked/components/Bookmared';
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import MobileNav from './components/navigation/mobile/MobileNav';
import DesktopNav from './components/navigation/desktop/DesktopNav';
import Profile from './services/profile/components/Profile';
import Settings from './services/settings/components/Settings';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import MainWrapperSetupProvider from './services/main-wrapper/MainWrapperSetupProvider';
import OwnerController from './services/panel-router/components/OwnerController';
import DepartmentController from './services/panel-router/components/DepartmentController';
import 'keen-slider/keen-slider.min.css';

export default function PanelLayout({ children }: LayoutProps<'/[lang]'>) {
 return (
  <div className='h-dvh flex flex-col overflow-hidden'>
   <AxiosCredentialsInterceptor />
   <PanelInfoProvider>
    <PanelRouterProvider>
     <NavigationProvider>
      <PanelPathInterceptor />
      <AxiosPanelRoutesInterceptor />
      <UserAccessProvider>
       <ProfileProvider>
        <SettingsProvider>
         <BookmarkedProvider>
          <QuickAccessProvider>
           <Header />
           <div className='grow flex overflow-hidden bg-neutral-200/60 dark:bg-neutral-800/60'>
            <DesktopNav />
            <div className='flex flex-col overflow-hidden grow'>
             <Breadcrumb />
             <MainWrapperSetupProvider>
              {children}
              <Profile />
              <Settings />
              <Bookmared />
              <OwnerController />
              <DepartmentController />
              <MobileNav />
             </MainWrapperSetupProvider>
            </div>
           </div>
           <Tabs />
          </QuickAccessProvider>
         </BookmarkedProvider>
        </SettingsProvider>
       </ProfileProvider>
      </UserAccessProvider>
     </NavigationProvider>
    </PanelRouterProvider>
   </PanelInfoProvider>
  </div>
 );
}
