import { useEffect, useState } from "react";
import { Post } from "./Post";
import { PostData } from "../interfaces/PostData";


export function Blog() {
    
    // definindo o Generics para receber um array de PostData
    // hook - useState
    const [posts, setPosts] = useState<PostData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    //hook - useEffect ( Para alteração pode existir um efeito colateral )

    useEffect(() => {

        setIsLoading(true);

        //event-loop ( pesquisar no JavaScript) 49:00

        setTimeout(() => {

        fetch("http://localhost:8000/posts")
        .then(res => {
            console.log(res);
            if (!res.ok) {
                throw new Error("Posts not found...");
            }
            return res.json();
        })
        .then(data => {
            setPosts(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        });
        
        }, 2000);

    }, []);
    
    return (
        <>
        {isLoading && <p>Loading...</p>}
        {
            !isLoading && posts && posts.length > 0 && posts.map((post) => {
                return(
                    <Post key={ post.id }  title={ post.title } author={ post.author }
                    />
                )
            })
        }      
        </>
    );
    
}