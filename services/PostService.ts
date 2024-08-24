export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export async function fetchPosts() {
  const response = await fetch("http://localhost:8080/post/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: Post[] = await response.json();
  return data;
}

export async function fetchPost(id: number) {
  const response = await fetch(`http://localhost:8080/post/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: Post = await response.json();
  return data;
}
