"use client";

import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const NeedAuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      redirect("/auth");
    }
  }, [isLogin]);

  return <>{children}</>;
};

export default NeedAuthLayout;
