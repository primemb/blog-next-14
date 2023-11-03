import { DataStore } from "@/data/posts";
import { NextResponse } from "next/server";

export const GET = () => {
  const dataStore = new DataStore();
  return NextResponse.json(dataStore.getPosts());
};
