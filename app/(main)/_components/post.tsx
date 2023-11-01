import { Post } from "@/data/posts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostProps {
  post: Post;
}

const Post = ({ post }: PostProps) => {
  return <div className="flex">Post</div>;
};

export default Post;
