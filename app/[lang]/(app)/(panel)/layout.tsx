import PanelInfoProvider from "./services/panel-info/PanelInfoProvider";
import NavigationProvider from "./services/navigation/NavigationProvider";
import ProfileProvider from "./services/profile/ProfileProvider";
import AxiosCredentialsInterceptor from "./services/axios-credentials-interceptor/AxiosCredentialsInterceptor";
import Header from "./components/header/Header";
import Tabs from "./components/tabs/Tabs";
import Nav from "./components/navigation/Nav";
import MainWrapperSetupProvider from "./services/main-wrapper/MainWrapperSetupProvider";

export default function PanelLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      <AxiosCredentialsInterceptor />
      <PanelInfoProvider>
        <NavigationProvider>
          <ProfileProvider>
            <Header />
            <div className="grow flex overflow-hidden">
              <Nav />
              <MainWrapperSetupProvider>{children}</MainWrapperSetupProvider>
            </div>
            <Tabs />
          </ProfileProvider>
        </NavigationProvider>
      </PanelInfoProvider>
    </div>
  );
}
