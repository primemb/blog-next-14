import { posts } from "@/data/posts";
import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const { postId } = params;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
};
