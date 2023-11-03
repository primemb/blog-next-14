import { useCookies } from "next-client-cookies";
import { useCallback, useEffect, useState } from "react";

const useAuth = () => {
  const cookies = useCookies();
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const logout = useCallback(() => {
    cookies.remove("token");
    setIsLogin(false);
    setToken(undefined);
  }, [cookies]);

  const login = useCallback(
    (tokenValue: string) => {
      // TODO: next-client-cookies need to add httpOnly option
      cookies.set("token", tokenValue, {
        path: "/",
      });
      setIsLogin(true);
      setToken(tokenValue);
    },
    [cookies]
  );

  useEffect(() => {
    const tokenCookie = cookies.get("token");
    if (tokenCookie) {
      setToken(tokenCookie);
      setIsLogin(true);
    }
  }, [cookies]);

  return {
    token,
    isLogin,
    login,
    logout,
  };
};

export default useAuth;
