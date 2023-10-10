export function Home() {
    const title = "Bem-vindo!";

    function handleClick() {
        alert("você clicou no botão");
    }

    return (
        <div className="home">
            <h2 onClick={handleClick}>{ title }</h2>
        </div>
    );
}

