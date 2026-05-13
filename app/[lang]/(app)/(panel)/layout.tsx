import PanelInfoProvider from './services/panel-info/PanelInfoProvider';
import NavigationProvider from './services/navigation/NavigationProvider';
import ProfileProvider from './services/profile/ProfileProvider';
import SettingsProvider from './services/settings/SettingsProvider';
import AxiosCredentialsInterceptor from './services/axios-credentials-interceptor/AxiosCredentialsInterceptor';
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import MobileNav from './components/navigation/mobile/MobileNav';
import DesktopNav from './components/navigation/desktop/DesktopNav';
import Profile from './services/profile/components/Profile';
import MainWrapperSetupProvider from './services/main-wrapper/MainWrapperSetupProvider';

export default function PanelLayout({ children }: LayoutProps<'/[lang]'>) {
 return (
  <div className='h-dvh flex flex-col overflow-hidden'>
   <AxiosCredentialsInterceptor />
   <PanelInfoProvider>
    <NavigationProvider>
     <ProfileProvider>
      <SettingsProvider>
       <Header />
       <div className='grow flex overflow-hidden'>
        <DesktopNav />
        <MainWrapperSetupProvider>
         {children}
         <Profile />
         <MobileNav />
        </MainWrapperSetupProvider>
       </div>
       <Tabs />
      </SettingsProvider>
     </ProfileProvider>
    </NavigationProvider>
   </PanelInfoProvider>
  </div>
 );
}
