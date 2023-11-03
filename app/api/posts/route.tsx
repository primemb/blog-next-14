import { dataStore } from "@/data/posts";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(dataStore.getPosts());
};
