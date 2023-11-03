import { dataStore } from "@/data/posts";
import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const { postId } = params;

  const post = dataStore.getPost(postId);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
};

export const DELETE = (
  request: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const { postId } = params;

  const post = dataStore.getPost(postId);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  dataStore.deletePost(postId);

  return NextResponse.json({ message: "Post deleted" });
};
