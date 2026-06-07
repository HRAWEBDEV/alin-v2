import { type SigninDictionary } from "@/internalization/app/dictionaries/auth/sign-in/dictionary";
import SigninWithPassword from "./SigninWithPassword";
import SigninBanner from "./SigninBanner";

export default function SigninWrapper({ dic }: { dic: SigninDictionary }) {
  return (
    <div>
      <SigninBanner />
      <SigninWithPassword dic={dic} />
    </div>
  );
}
