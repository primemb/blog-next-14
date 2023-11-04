import { IPost } from "@/data/posts";

export interface IPostResponse {
  statusCode?: number;
  error?: string | undefined;
  post?: IPost;
}
