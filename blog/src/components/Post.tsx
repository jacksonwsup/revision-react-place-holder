interface PostProps {
    title: string;
    author: string;
}


export function Post({ title, author}: PostProps){
    return (
        <>
        <div className="blog-preview">
            <h2> { title } </h2>
            <p> Escrito por { author } </p>
        </div>
        </>
    )
}