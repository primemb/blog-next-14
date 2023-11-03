"use client";

import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useAuth();

  useEffect(() => {
    if (isLogin) {
      redirect("/");
    }
  }, [isLogin]);

  return (
    <div className="w-full min-h-full dark:bg-[#1F1F1F] bg-gray-100">
      {children}
    </div>
  );
};

export default AuthLayout;
