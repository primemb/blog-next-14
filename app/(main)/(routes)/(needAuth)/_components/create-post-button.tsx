"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

const CreatePostButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && (
        <Loader className="w-4 h-4 mr-2 animate-spin" strokeWidth={2} />
      )}
      {children}
    </Button>
  );
};

export default CreatePostButton;
