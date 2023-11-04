"use client";

import { useCallback, useState } from "react";
import LoginForm from "./_components/login-form";
import RegisterForm from "./_components/register-form";

const AuthPage = () => {
  const [isLogin, setIslogin] = useState(true);

  const switchModeHandler = useCallback(() => {
    setIslogin((state) => !state);
  }, []);

  const content = isLogin ? (
    <LoginForm onChangeMode={switchModeHandler} />
  ) : (
    <RegisterForm onChangeMode={switchModeHandler} />
  );

  return (
    <div className="flex w-full h-screen items-center justify-center">
      {content}
    </div>
  );
};

export default AuthPage;
