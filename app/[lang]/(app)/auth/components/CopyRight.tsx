"use client";
import { useShareDictionary } from "../../services/share-dictionary/shareDictionaryContext";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export default function Copyright() {
  const { locale } = useBaseConfig();
  const {
    metaDictionary: { Copyright, owner },
  } = useShareDictionary();
  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      <span>&copy; </span>
      <span>{new Date().toLocaleString(locale, { year: "numeric" })} </span>
      <span>{owner} </span>-<span> {Copyright}</span>
    </p>
  );
}
