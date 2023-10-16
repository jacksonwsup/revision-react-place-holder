import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { PostData } from "../interfaces/PostData";

export function EditPost() {
  const { id } = useParams();
  const navigation = useNavigate();

  const { data: post, isLoading } =
    useFetch<PostData>(`http://localhost:8000/posts/${id}`);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setAuthor(post.author);
    }
  }, [post]);

  const titleInput = useRef<HTMLInputElement>(null);
  const bodyTextArea = useRef<HTMLTextAreaElement>(null);
  const authorSelect = useRef<HTMLSelectElement>(null);

  const handleEditPost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedPostData = {
      title: titleInput.current?.value,
      body: bodyTextArea.current?.value,
      author: authorSelect.current?.value,
    };

    fetch(`http://localhost:8000/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPostData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro, tente novamente!");
        }
        return response.json();
      })
      .then(() => {
        navigation("/"); 
      })
      .catch((error) => {
        console.error(error);
        alert("Erro, tente novamente!");
      });
  };

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {post && (
        <div className="create">
          <form onSubmit={handleEditPost}>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              ref={titleInput}
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="body">Conteúdo:</label>
            <textarea
              id="body"
              ref={bodyTextArea}
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label htmlFor="author">Autor:</label>
            <select
              name="author"
              id="author"
              ref={authorSelect}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="João">João</option>
              <option value="Maria">Maria</option>
            </select>
            <button>Salvar</button>
          </form>
        </div>
      )}
    </div>
  );
}
