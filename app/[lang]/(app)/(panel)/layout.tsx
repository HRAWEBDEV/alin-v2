import PanelInfoProvider from "./services/panel-info/PanelInfoProvider";

export default function PanelLayout({ children }: LayoutProps<"/[lang]">) {
  return <PanelInfoProvider>{children}</PanelInfoProvider>;
}
