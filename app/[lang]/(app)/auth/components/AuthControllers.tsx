import { ModeControllerButton } from "../../components/ModeController";
export default function AuthControllers() {
  return (
    <div className="flex gap-4 justify-between h-full items-center p-3 px-6">
      <div className="flex gap-4">
        <ModeControllerButton />
      </div>
    </div>
  );
}
