import PanelInfoProvider from "./services/panel-info/PanelInfoProvider";
import AxiosCredentialsInterceptor from "./services/axios-credentials-interceptor/AxiosCredentialsInterceptor";

export default function PanelLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <>
      <AxiosCredentialsInterceptor />
      <PanelInfoProvider>{children}</PanelInfoProvider>
    </>
  );
}
