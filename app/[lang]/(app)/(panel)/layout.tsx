import PanelInfoProvider from "./services/panel-info/PanelInfoProvider";
import NavigationProvider from "./services/navigation/NavigationProvider";
import AxiosCredentialsInterceptor from "./services/axios-credentials-interceptor/AxiosCredentialsInterceptor";
import Header from "./components/header/Header";
import Tabs from "./components/tabs/Tabs";
import Nav from "./components/navigation/Nav";
import Main from "./components/main/Main";

export default function PanelLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <div className="h-dvh flex flex-col">
      <AxiosCredentialsInterceptor />
      <PanelInfoProvider>
        <NavigationProvider>
          <Header />
          <div className="grow flex">
            <Nav />
            <Main>{children}</Main>
          </div>
          <Tabs />
        </NavigationProvider>
      </PanelInfoProvider>
    </div>
  );
}
