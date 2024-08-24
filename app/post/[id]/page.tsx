"use client";
import { fetchPost, type Post } from "@/services/PostService";
import { useEffect, useState } from "react";
type Props = {
  params: {
    id: number;
  };
};

const Post = ({ params }: Props) => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    async function loadPosts() {
      const postsData = await fetchPost(params.id);
      setPost(postsData);
    }
    loadPosts();
  }, [params.id]);

  return (
    <div>
      {post ? (
        <div>
          <h1>Post:{post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.author}</p>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;
