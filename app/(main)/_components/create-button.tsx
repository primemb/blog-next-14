"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Plus } from "lucide-react";
import Link from "next/link";

const CreateButton = () => {
  const { isLogin } = useAuth();

  if (!isLogin) return null;

  return (
    <div className="fixed z-50 bottom-2 right-4 md:right-20 flex justify-center items-center">
      <Button className="mb-10 rounded-full w-14 h-14 shadow-lg" asChild>
        <Link href="/create">
          <Plus className="absolute w-6 h-6" scale={2} />
        </Link>
      </Button>
    </div>
  );
};

export default CreateButton;
