export interface Post {
    id: number;
    title: string;
    body: string;
  }

export async function fetchPosts() {
    const response = await fetch('https://localhost:8080/article/list');
    const data:Post[] = await response.json();
    return data;
}
