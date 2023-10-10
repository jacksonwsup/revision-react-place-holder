export function Home() {

    let title = 'Bem-vindo!';
    console.log(title)

    function handleClick() {
        title = "tchau!"
        alert(title);
    }

    return (
        <div className="home">
            <h2 onClick={handleClick}>{ title }</h2>
        </div>
    );
}

