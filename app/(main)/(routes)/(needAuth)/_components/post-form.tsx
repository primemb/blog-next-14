"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import * as z from "zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CreatePostButton from "./create-post-button";
import { IPost } from "@/data/posts";
import { createPostSubmit, updatePostSubmit } from "../_actions/actions";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  author: z.string().min(3, "Author must be at least 3 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
});

const initialState = {
  statusCode: undefined,
  error: undefined,
  post: undefined,
};

interface PostFormProps {
  post?: IPost;
  editMode?: boolean;
}

const PostForm = ({ editMode, post }: PostFormProps) => {
  const [state, formAction] = useFormState(
    editMode ? updatePostSubmit : createPostSubmit,
    initialState
  );

  useEffect(() => {
    if (state.post) {
      toast.success(
        editMode ? "Post updated successfully" : "Post created successfully"
      );
      redirect("/");
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state, editMode]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      author: post?.author || "",
      content: post?.content || "",
    },
  });

  const handleFormSubmit = async (data: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    return formAction(data);
  };

  return (
    <Card className="bg-white dark:bg-primary/5 mt-10">
      <CardHeader>
        <CardTitle>
          {editMode ? `Update ${post?.title}` : "Create a new post"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={handleFormSubmit} className="space-y-8">
            {editMode && (
              <input type="hidden" name="id" id="id" value={post?.id} />
            )}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-[#414141] text-black dark:text-white border dark:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full md:w-8/12"
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Author
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-[#414141] text-black dark:text-white border dark:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full md:w-8/12"
                      placeholder="Author"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Content
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="dark:bg-[#414141] text-black dark:text-white border dark:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full md:w-8/12"
                      placeholder="Author"
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <div className="w-full flex flex-col items-center justify-center">
              <CreatePostButton>
                {editMode ? "Update Post" : "Create Post"}
              </CreatePostButton>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
