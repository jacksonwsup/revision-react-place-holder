import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { PostData } from "../interfaces/PostData";

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${id}`);
  };

  const { data: post, isLoading } = useFetch<PostData>(`http://localhost:8000/posts/${id}`);

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>Escrito por {post.author}</p>
          <div>{post.body}</div>
          <button onClick={handleEditClick}>Editar</button>
        </article>
      )}
    </div>
  );
}
