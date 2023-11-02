"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex md:mt-10 md:px-10 xl:px-60 items-center">
      <nav className="flex items-center justify-between p-4 w-full bg-white dark:bg-primary/5 rounded-md">
        <ul className="flex flex-1 gap-10 text-black dark:text-white  ">
          {links.map(({ href, label }) => (
            <li
              className={cn(
                "text-black dark:text-white",
                pathName === href && "font-bold"
              )}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
