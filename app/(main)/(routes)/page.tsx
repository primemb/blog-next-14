import { IPost } from "@/data/posts";
import Post from "../_components/post";

const HomePage = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/posts");
  const posts: IPost[] = await res.json();

  return (
    <div className="flex flex-col h-full py-10">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
