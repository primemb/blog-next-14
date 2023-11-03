"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const { isLogin, logout } = useAuth();
  const pathName = usePathname();

  return (
    <div className="flex md:mt-10 md:px-2 xl:px-60 items-center">
      <nav className="flex items-center justify-between p-4 w-full bg-white dark:bg-primary/5 rounded-md">
        <ul className="flex flex-1 gap-10 text-black dark:text-white  ">
          {links.map(({ href, label }) => (
            <li
              key={label}
              className={cn(
                "text-black dark:text-white",
                pathName === href && "font-bold"
              )}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          {!isLogin && (
            <Button size="sm" variant="link" asChild>
              <Link href="/auth">
                <User className="w-4 h-4 mr-2" />
                Login / Signup
              </Link>
            </Button>
          )}
          {isLogin && (
            <Button size="sm" variant="link" onClick={logout}>
              Logout
            </Button>
          )}
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
