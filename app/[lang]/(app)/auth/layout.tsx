import AuthAside from "./components/AuthAside";
import Copyright from "./components/CopyRight";
import { getAuthDictionary } from "@/internalization/app/dictionaries/auth/dictionary";
import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const authDic = await getAuthDictionary({
    locale: lang as Locale,
  });
  return {
    title: authDic.title,
  };
}

export default async function AuthLayout({
  children,
  params,
}: LayoutProps<"/[lang]/auth">) {
  const { lang } = await params;
  const authDic = await getAuthDictionary({
    locale: lang as Locale,
  });

  return (
    <div className="h-dvh main-bg flex">
      <div className="flex flex-col basis-[55%]">
        <header></header>
        <main className="grow">{children}</main>
        <footer className="flex justify-between gap-4 items-center p-2">
          <div></div>
          <div>
            <Copyright />
          </div>
          <div></div>
        </footer>
      </div>
      <aside className="basis-[45%] flex flex-col">
        <AuthAside />
      </aside>
    </div>
  );
}
