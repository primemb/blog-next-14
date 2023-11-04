import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IPost } from "@/data/posts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

export async function generateMetadata(
  { params }: PostDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/posts/${params.postId}`,
    {
      next: { tags: [`post:${params.postId}`] },
    }
  );

  const post: IPost = await res.json();

  return {
    title: post.title,
  };
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/posts/${params.postId}`,
    {
      next: { tags: [`post:${params.postId}`] },
    }
  );

  const post: IPost = await res.json();

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    } else {
      throw new Error("Something went wrong");
    }
  }

  return (
    <Card className="bg-white mt-10 dark:bg-primary/5 text-black dark:text-white border-none p-4 mb-4">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>Author : {post.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
    </Card>
  );
};

export default PostDetailPage;
