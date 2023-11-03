import { cookies } from "next/headers";
import { useCallback, useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState<string | undefined>(undefined);

  const logout = useCallback(() => {
    cookies().delete("token");
    setToken(undefined);
  }, []);

  const login = useCallback(
    (token: string) => {
      cookies().set("token", token);
      setToken(token);
    },
    [setToken]
  );

  useEffect(() => {
    const token = cookies().get("token");

    if (token) {
      setToken(token.value);
    }
  }, []);

  return {
    token,
    login,
    logout,
  };
};

export default useAuth;
