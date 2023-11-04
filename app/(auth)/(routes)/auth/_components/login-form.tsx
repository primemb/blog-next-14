"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSubmit } from "../_actions/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";
import { ILoginResponse } from "../_types/types";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

interface LoginFormProps {
  onChangeMode: () => void;
}

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  password: z.string().min(1, "Password is required"),
});

const initialState: ILoginResponse = {
  statusCode: undefined,
  error: undefined,
  token: undefined,
};

const LoginForm = ({ onChangeMode }: LoginFormProps) => {
  const { login } = useAuth();
  const [state, formAction] = useFormState(loginSubmit, initialState);

  useEffect(() => {
    if (state.token) {
      login(state.token);
      toast.success("Login success");
      redirect("/");
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state, login]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    return formAction(data);
  };

  return (
    <div className="flex flex-col mx-2 max-w-[700px] w-full border border-neutral-600 dark:border-neutral-300 rounded-md px-6 py-10 bg-white dark:bg-primary/5">
      <h2 className="text-2xl text-center w-full tracking-widest mb-5">
        Login
      </h2>
      <Form {...form}>
        <form action={handleFormSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-[#414141] text-black dark:text-white border dark:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full md:w-8/12"
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-[#414141] border dark:border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 w-full md:w-8/12"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col items-center justify-center">
            <SubmitButton />
            <Button
              type="button"
              onClick={onChangeMode}
              variant="link"
              className="text-black dark:text-white"
            >
              Don&apos;t have account ? Sign up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
