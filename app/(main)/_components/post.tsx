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

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  return (
    <Card className="bg-white dark:bg-primary/5 text-black dark:text-white border-none p-4 mb-4">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>Author : {post.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <Button asChild>
          <Link href={`/${post.id}`}>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Post;
