import { getSigninDictionary } from "@/internalization/app/dictionaries/auth/sign-in/dictionary";
import { type Locale } from "@/internalization/app/localization";
import SigninWrapper from "./components/SigninWrapper";

export default async function SignInPage({
  params,
}: PageProps<"/[lang]/auth/sign-in">) {
  const { lang } = await params;
  const dic = await getSigninDictionary({
    locale: lang as Locale,
  });
  return (
    <div className="m-auto w-[min(100%,23rem)] p-4">
      <SigninWrapper dic={dic} />
    </div>
  );
}
