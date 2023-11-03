import { getCookies } from "next-client-cookies/server";
import { redirect } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const cookies = getCookies();
  const token = cookies.get("token");

  if (token) {
    redirect("/");
  }

  return (
    <div className="w-full min-h-full dark:bg-[#1F1F1F] bg-gray-100">
      {children}
    </div>
  );
};

export default AuthLayout;
