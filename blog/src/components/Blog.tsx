import { Post } from "./Post";

import { PostData } from "../interfaces/PostData";
import { useFetch } from "../hooks/useFetch";

export function Blog() {

  const { data: posts, isLoading } = useFetch<PostData[]>("http://localhost:8000/posts");

  return (
    <>
    { isLoading && <p>Loading...</p> }
    {
      !isLoading && posts && posts.length > 0 && posts.map((post) => {
        return (
          <Post key={ post.id } id={ post.id } title={ post.title } author={ post.author } />
        )
      })
    }
    </>
  );
}