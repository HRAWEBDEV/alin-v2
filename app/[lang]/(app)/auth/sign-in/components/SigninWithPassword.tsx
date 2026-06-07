"use client";
import { useState } from "react";
import { type SigninDictionary } from "@/internalization/app/dictionaries/auth/sign-in/dictionary";
import {
  Field,
  FieldGroup,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { FaEyeSlash, FaEye, FaUser, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type SigninWithPasswordSchema,
  defaultValues,
  createSigninWithPasswordSchema,
} from "../schemas/signinWithPasswordSchema";
import {
  type WithPasswordCredentials,
  signInWithPassword,
} from "../../services/authApiActions";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { setUserLoginToken } from "../../utils/signinTokenManger";
import { useGoHome } from "../../../hooks/useGoHome";

export default function SigninWithPassword({ dic }: { dic: SigninDictionary }) {
  const goHome = useGoHome();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninWithPasswordSchema>({
    defaultValues,
    resolver: zodResolver(createSigninWithPasswordSchema(dic)),
  });

  const { mutate: confirmSignin, isPending: confirmSigninIsPending } =
    useMutation({
      mutationFn(credentials: WithPasswordCredentials) {
        return signInWithPassword(credentials);
      },
      onSuccess(res) {
        setUserLoginToken(res.data.item1);
        goHome();
      },
    });

  return (
    <form>
      <FieldGroup className="gap-5">
        <Field data-invalid={!!errors.userName} className="gap-2">
          <FieldLabel htmlFor="userName" className="text-base">
            {dic.form.userName} *
          </FieldLabel>
          <InputGroup data-invalid={!!errors.userName} className="h-11">
            <InputGroupInput id="userName" {...register("userName")} />
            <InputGroupAddon align="inline-start">
              <FaUser className="size-4" />
            </InputGroupAddon>
          </InputGroup>
          <FieldContent>
            {!!errors.userName && (
              <FieldError>{errors.userName.message}</FieldError>
            )}
          </FieldContent>
        </Field>
        <Field data-invalid={!!errors.password} className="gap-2">
          <FieldLabel htmlFor="userName" className="text-base">
            {dic.form.password} *
          </FieldLabel>
          <InputGroup data-invalid={!!errors.password} className="h-11">
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              id="userName"
              {...register("password")}
            />
            <InputGroupAddon align="inline-start">
              <FaLock className="size-4" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end" className="-me-2">
              {showPassword ? (
                <Button
                  variant="ghost"
                  size="icon-lg"
                  type="button"
                  onClick={() => setShowPassword(false)}
                >
                  <FaEye className="size-6 text-destructive" />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon-lg"
                  type="button"
                  onClick={() => setShowPassword(true)}
                >
                  <FaEyeSlash className="size-6 text-secondary" />
                </Button>
              )}
            </InputGroupAddon>
          </InputGroup>
          <FieldContent>
            {!!errors.password && (
              <FieldError>{errors.password.message}</FieldError>
            )}
          </FieldContent>
        </Field>
        <Button
          type="submit"
          disabled={confirmSigninIsPending}
          className="w-full h-11 mt-4"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit((data) => {
              confirmSignin(data);
            })();
          }}
        >
          {confirmSigninIsPending && <Spinner />}
          {dic.form.confirm}
        </Button>
      </FieldGroup>
    </form>
  );
}
