import React from "react";
import { Post } from "@/services/PostService";
import Link from "next/link";

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (!Array.isArray(posts)) {
    return <p>No posts available</p>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
