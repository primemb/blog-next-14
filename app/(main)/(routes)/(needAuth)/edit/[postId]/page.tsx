import { IPost } from "@/data/posts";
import { notFound } from "next/navigation";
import PostForm from "../../_components/post-form";

interface PostEditPageProps {
  params: {
    postId: string;
  };
}

const EditPage = async ({ params }: PostEditPageProps) => {
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
  return <PostForm post={post} editMode />;
};

export default EditPage;
