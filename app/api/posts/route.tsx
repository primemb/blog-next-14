import { NextResponse } from "next/server";

import { posts } from "@/data/posts";

export const GET = () => {
  return NextResponse.json(posts);
};
