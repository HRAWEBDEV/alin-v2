"use client";
import { useShareDictionary } from "../../../services/share-dictionary/shareDictionaryContext";
import { Button } from "@/components/ui/button";
import { IoPersonCircle, IoApps } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import Link from "next/link";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export default function Tabs() {
  const { locale } = useBaseConfig();
  const {
    shareDictionary: { tabs: tabsDictionary },
  } = useShareDictionary();

  const tabClass = "h-auto flex-col p-1! grow sm:text-base gap-1 text-sm";
  const tabIconClass = "size-8 sm:size-9";
  return (
    <div className="h-(--panel-tabs-height) z-(--panel-tabs-zindex) fixed bottom-0 inset-x-0 border-t border-input shadow-[0_-10px_15px_-3px_rgb(0,0,0,0.1),0_-4px_6px_-4px_rgb(0,0,0,0.1)] lg:hidden shrink-0 flex items-center  transition-transform text-neutral-700 dark:text-neutral-300">
      <Button variant="ghost" className={tabClass} asChild>
        <Link href={`/${locale}`}>
          <FaHouse className={tabIconClass} />
          <p>{tabsDictionary.home}</p>
        </Link>
      </Button>
      <Button variant="ghost" className={tabClass} asChild>
        <Link href="#">
          <IoApps className={tabIconClass} />
          <p>{tabsDictionary.programs}</p>
        </Link>
      </Button>
      <Button variant="ghost" className={tabClass} asChild>
        <Link href="#">
          <IoPersonCircle className={tabIconClass} />
          <p>{tabsDictionary.profile}</p>
        </Link>
      </Button>
    </div>
  );
}
