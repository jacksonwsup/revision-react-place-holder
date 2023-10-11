import { useState } from "react"

export function EditPost() {

    // controled  form
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    console.log(title,body,author);

    function handleChangePost(event) {
        
        event?.preventDefault();

        const EditPost = {
            title,
            body,
            author
        }

        fetch("http://localhost:8000/post"),{
            method: "PATCH",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(EditPost)
        }

    }

    return (
        <div className="edit">
            <form onSubmit={  handleChangePost }>
                <label htmlFor="title"> Título: </label>
                <input 
                id="title" 
                required
                value={title}
                onChange={ (e) => setTitle(e.target.value) }
                />
                <label htmlFor="body">Conteúdo</label>
                <textarea 
                id="body" 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="author">Autor: </label>
                <select 
                name="author" 
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                </select>
            </form>
            <button>Editar Post</button>
        </div>
    )
}