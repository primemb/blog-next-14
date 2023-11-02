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
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
  onChangeMode: () => void;
}

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  password: z.string().min(1, "Password is required"),
});

const LoginForm = ({ onChangeMode }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {};

  return (
    <div className="flex flex-col mx-2 max-w-[700px] w-full border border-neutral-600 dark:border-neutral-300 rounded-md px-6 py-10 bg-white dark:bg-primary/5">
      <h2 className="text-2xl text-center w-full tracking-widest mb-5">
        Login
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    disabled={isLoading}
                    className="dark:bg-[#353D4B] border dark:border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 w-full md:w-8/12"
                    placeholder="Enter your email"
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
                    disabled={isLoading}
                    className="dark:bg-[#353D4B] border dark:border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 w-full md:w-8/12"
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
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
            <Button
              type="button"
              onClick={onChangeMode}
              variant="link"
              className="text-black dark:text-white"
            >
              Don't have account ? Sign up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
