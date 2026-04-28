"use client";
import { useTheme } from "next-themes";

export default function SigninBanner() {
  const { theme = "light" } = useTheme();
  return (
    <div>
      {theme === "light" ? (
        <img
          src="/images/logo/alincloud-light.png"
          className="w-full object-contain object-center"
          draggable={false}
        />
      ) : (
        <img
          src="/images/logo/alincloud-dark.png"
          className="w-full object-contain object-center"
          draggable={false}
        />
      )}
    </div>
  );
}
