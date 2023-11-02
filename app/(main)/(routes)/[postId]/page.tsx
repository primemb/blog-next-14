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

interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/posts/${params.postId}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const post: IPost = await res.json();

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
