import { OutOfContext } from "@/utils/OutOfContext";
import { createContext, use } from "react";

interface ProfileContext {
  show: boolean;
  toggle: (state?: boolean) => unknown;
}

const profileContext = createContext<ProfileContext | null>(null);

function useProfileContext() {
  const val = use(profileContext);
  if (!val) throw new OutOfContext("profile context");
  return val;
}

export type { ProfileContext };
export { profileContext, useProfileContext };
