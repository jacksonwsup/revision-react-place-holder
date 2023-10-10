import { useState } from "react";
import { Post } from "./Post";


export function Blog() {

    const [posts, setPosts] = useState();

    return (
        <>
        {
            posts.map((post) => {
                return(
                    <Post title={ post.title } 
                    author={ post.author }
                    />
                )
            })
        };
        </>
    );
    
}