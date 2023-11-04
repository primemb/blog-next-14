"use server";
import { v4 as uuidv4 } from "uuid";
import { IPost, dataStore } from "@/data/posts";
import { IPostResponse } from "../_types/types";
import { getCookies } from "next-client-cookies/server";
import { revalidatePath, revalidateTag } from "next/cache";

export const createPostSubmit = async (
  prevState: IPostResponse,
  formData: FormData
): Promise<IPostResponse> => {
  const cookies = getCookies();

  const token = cookies.get("token");

  if (!token) {
    return {
      statusCode: 401,
      error: "Unauthorized",
    };
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const author = formData.get("author") as string;

  if (!title || !content || !author) {
    return {
      statusCode: 400,
      error: "Title, Content and Author are required",
    };
  }

  try {
    const post: IPost = {
      author,
      content,
      title,
      id: uuidv4(),
    };

    dataStore.addPost(post);

    revalidatePath("/");

    return { statusCode: 200, post };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, error: "Something went wrong" };
  }
};

export const updatePostSubmit = async (
  prevState: IPostResponse,
  formData: FormData
): Promise<IPostResponse> => {
  const cookies = getCookies();

  const token = cookies.get("token");

  if (!token) {
    return {
      statusCode: 401,
      error: "Unauthorized",
    };
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const author = formData.get("author") as string;
  const id = formData.get("id") as string;

  if (!title || !content || !author || !id) {
    return {
      statusCode: 400,
      error: "Title, Content, Author and ID are required",
    };
  }

  try {
    const post: IPost = {
      author,
      content,
      title,
      id,
    };

    dataStore.updatePost(post);

    revalidatePath("/");
    revalidateTag(`post:${post.id}`);

    return { statusCode: 200, post };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, error: "Something went wrong" };
  }
};
