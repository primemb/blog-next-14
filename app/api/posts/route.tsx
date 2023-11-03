export const revalidate = 0;

import { dataStore } from "@/data/posts";
import { NextResponse } from "next/server";

export const GET = () => {
  const posts = dataStore.getPosts();

  return NextResponse.json(posts);
};
