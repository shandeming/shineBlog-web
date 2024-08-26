'use client'
import PostList from "@/components/PostList";
import { fetchPosts, Post } from "@/services/PostService";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const postsData = await fetchPosts();
      setPosts(postsData);
    }
    loadPosts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <section>
        <PostList posts={posts} />
      </section>
    </div>
  );
}