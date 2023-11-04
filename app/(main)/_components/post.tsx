"use client";

import { IPost } from "@/data/posts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ClipboardEdit, MoreHorizontal, Trash } from "lucide-react";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import ConfirmModal from "@/components/modals/confirm-modal";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  const [loding, setLoding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const { isLogin } = useAuth();

  const deleteHandler = async () => {
    setLoding(true);
    try {
      const res = await fetch(`/api/posts/${post.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      setLoding(false);
      setShowModal(false);
      toast.success("Post deleted successfully!");
      router.refresh();
    } catch (error) {
      setLoding(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <ConfirmModal
        loading={loding}
        open={showModal}
        onConfirm={deleteHandler}
        onCancle={() => setShowModal(false)}
      />
      <Card className=" bg-white dark:bg-primary/5 text-black dark:text-white border-none p-4 mb-4">
        <CardHeader>
          {isLogin && (
            <div className="flex flex-row-reverse w-full">
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-none">
                  <div
                    role="button"
                    className="group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 focus-visible:outline-none"
                  >
                    <MoreHorizontal className="text-muted-foreground" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-60"
                  align="center"
                  side="left"
                  forceMount
                >
                  <DropdownMenuItem>
                    <Link
                      className="w-full flex items-center justify-start"
                      href={`/edit/${post.id}`}
                    >
                      <ClipboardEdit className="h-4 w-4 mr-2" />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setShowModal(true)}>
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          <CardTitle>{post.title}</CardTitle>
          <CardDescription>Author : {post.author}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2">{post.content}</p>
        </CardContent>
        <CardFooter className="flex flex-row-reverse">
          <Button asChild>
            <Link href={`/${post.id}`}>Read more</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Post;
