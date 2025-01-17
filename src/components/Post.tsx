import { FC } from "react";
import { IPost } from "../models/IPostsBase.ts";

type PostProps = {
  post: IPost;
};

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="flex flex-col gap-4 border border-green-400 p-3">
      <h2 className="font-semibold text-white p-2 bg-blue-500">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
