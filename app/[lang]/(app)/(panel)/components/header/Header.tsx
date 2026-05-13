import AlinCloudShapeIcon from "../../../components/icons/AlinCloudShapeIcon";

export default function Header() {
  return (
    <header className="h-(--panel-header-height) z-(--panel-header-zindex) border-b border-input shadow-lg">
      <div className="h-full flex items-center justify-between px-4">
        <div className="lg:hidden"></div>
        <div>
          <AlinCloudShapeIcon width="4rem" height="4rem" />
        </div>
        <div></div>
      </div>
    </header>
  );
}
