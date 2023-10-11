import { FormEvent, useState } from "react"


export function NewPost() {

    // controled  form
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    console.log(title,body,author);
    
    function handleCreateNewPost(event: FormEvent<HTMLFormElement>) {
        
        event.preventDefault();

        const NewPost = {
            title,
            body,
            author
        }

        fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(NewPost)
        })
        .then((res) => {
            if (res.ok) {
                console.log("Post criado com sucesso!");
            } else {
                alert("Erro ao criar o post!");
            }
        }).catch((err) => {
            console.error(err);
            alert("Erro ao criar o post!");
        });

    }
    
    return (
        <div className="create">
            <form onSubmit={ handleCreateNewPost}>
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
                <label htmlFor="author"></label>
                <select 
                name="author" 
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="João"> João</option>
                    <option value="Maria"> Maria</option>
                    <option value="Ana"> Ana</option>
                </select>
                <button>Criar Post</button>
            </form>
        </div>
    )
}
