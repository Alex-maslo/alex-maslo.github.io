import { useEffect, useState } from "react";
import { IPost } from "../models/IPostsBase.ts";
import { getData } from "../services/api.service.ts";
import Post from "../components/Post.tsx";

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    getData("/posts").then((data) => setPosts(data.posts));
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 p-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
