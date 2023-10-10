import { useState } from "react";
import { Blog } from "./Blog";

export function Home() {

    console.log("Home, Renderizou")
//  let title = 'Bem-vindo!';
    
//hook - use... useState | revisão do useState ( Pnia no Vue)
const [title, setTitle] = useState("Bem-Vindo!");

    function handleClick() {
    setTitle("Tchau!");    
        alert(title);
    }

    return (
        <div className="home">
            <h2 onClick={handleClick}>{ title }</h2>
            <Blog />
        </div>
    );
}

