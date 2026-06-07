import { z } from "zod";
import { type SigninDictionary } from "@/internalization/app/dictionaries/auth/sign-in/dictionary";

const defaultValues: SigninWithPasswordSchema = {
  userName: "",
  password: "",
};

function createSigninWithPasswordSchema(dic: SigninDictionary) {
  return z.object({
    userName: z.string().min(1, dic.form.fillRequiredFields),
    password: z.string().min(1, dic.form.fillRequiredFields),
  });
}

type SigninWithPasswordSchema = z.infer<
  ReturnType<typeof createSigninWithPasswordSchema>
>;

export type { SigninWithPasswordSchema };
export { defaultValues, createSigninWithPasswordSchema };
