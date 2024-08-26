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
    <body>
      {post ? (
        <>
        <header className="text-3xl px-10 py-6">
          <h1>{post.title}</h1>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </header>
        <main>
          <p>{post.content}</p>
          <p>{post.author}</p>
        </main>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </body>
  );
};

export default Post;
