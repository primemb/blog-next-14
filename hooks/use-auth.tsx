import { useCookies } from "next-client-cookies";
import { useCallback, useEffect } from "react";
import { create } from "zustand";

export const useAuth = () => {
  const cookies = useCookies();
  const { isLogin, login, logout, token } = useAuthStore();

  useEffect(() => {
    const tokneCookie = cookies.get("token");
    if (tokneCookie) {
      login(tokneCookie);
    }
  }, [cookies, login]);

  const logoutHandler = useCallback(() => {
    cookies.remove("token");
    logout();
  }, [cookies, logout]);

  const loginHandler = useCallback(
    (token: string) => {
      cookies.set("token", token);
      login(token);
    },
    [cookies, login]
  );

  return {
    isLogin,
    token,
    login: loginHandler,
    logout: logoutHandler,
  };
};

type AuthStore = {
  isLogin: boolean;
  token: string | undefined;
  login: (token: string) => void;
  logout: () => void;
};
export const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  token: undefined,
  login: (token: string) => {
    set({ isLogin: true, token: token });
  },
  logout: () => {
    set({ isLogin: false, token: undefined });
  },
}));
