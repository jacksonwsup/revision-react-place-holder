import { useState } from "react";
import { Blog } from "./Blog";

export function Home() {
  
  const [title, setTitle] = useState("Bem-vindo!");

  function handleClick() {
    setTitle("Tchau!");
  }

  return (
    <div className="home">
      <h2 onClick={ handleClick }>{ title }</h2>
      <Blog />
    </div>
  )

}