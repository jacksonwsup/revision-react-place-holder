import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const authorRef = useRef<HTMLSelectElement>(null);

  const navigate = useNavigate();
  const [postCreated, setPostCreated] = useState(false); // State para rastrear se o post foi criado

  async function handleCreateNewPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newPost = {
      title: titleRef.current?.value,
      body: bodyRef.current?.value,
      author: authorRef.current?.value,
    };

    try {
      const response = await fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar o post!");
      }

      const data = await response.json();

      setPostCreated(true); // Define o estado como true após a criação do post

      alert("Post Criado com Sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar o post!");
    }
  }

  return (
    <div className="create">
      {postCreated && <div>Post criado com sucesso!</div>}
      <form onSubmit={handleCreateNewPost}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Conteúdo:</label>
        <textarea
          id="body"
          ref={bodyRef}
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="author">Autor:</label>
        <select
          name="author"
          id="author"
          ref={authorRef}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="João">João</option>
          <option value="Maria">Maria</option>
        </select>
        <button>Criar post</button>
      </form>
    </div>
  );
}
