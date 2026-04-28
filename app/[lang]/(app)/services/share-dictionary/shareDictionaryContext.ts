import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type MetaDictionary } from "@/internalization/app/dictionaries/meta/dictionary";
import { type ShareDictionary } from "@/internalization/app/dictionaries/share/dictionary";
import { type SigninDictionary } from "@/internalization/app/dictionaries/auth/sign-in/dictionary";

interface Store {
  shareDictionary: ShareDictionary;
  metaDictionary: MetaDictionary;
  signinDictionary: SigninDictionary;
}

const shareDictionaryContext = createContext<Store | null>(null);

function useShareDictionary(): Store {
  const value = use(shareDictionaryContext);
  if (!value) throw new OutOfContext("shareDictionary");
  return value;
}

export type { Store };

export { shareDictionaryContext, useShareDictionary };
