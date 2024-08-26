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
          <div className="px-5">
            <header className="py-24 border-b-[1px]">
              <h1 className="text-5xl font-bold">{post.title}</h1>
              <aside className="pt-3">{new Date(post.date).toLocaleDateString()}</aside>
            </header>
          </div>
          <article className="mt-10">
            <p>{post.content}</p>
          </article>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </body>
  );
};

export default Post;
