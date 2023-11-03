import { DataStore } from "@/data/posts";
import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const { postId } = params;

  const dataStore = new DataStore();
  const post = dataStore.getPost(postId);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
};
