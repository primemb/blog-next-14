import { IPost } from "@/data/posts";

export interface ICreatePostResponse {
  statusCode?: number;
  error?: string | undefined;
  post?: IPost;
}
