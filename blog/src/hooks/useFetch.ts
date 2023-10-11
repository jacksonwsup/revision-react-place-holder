import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {

    // definindo o Generics para receber um array de PostData
    // hook - useState
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    //Error....

    //hook - useEffect ( Para alteração pode existir um efeito colateral )
    useEffect(() => {

        setIsLoading(true);

        //event-loop ( pesquisar no JavaScript) 49:00

        setTimeout(() => {

        fetch(url)
        .then(res => {
            console.log(res);
            if (!res.ok) {
                if (res.status === 400) {
                    throw new Error("Aguarde, servidor em manutenção");
                } else if (res.status === 500) {
                    throw new Error("Servidor inacessível, Aguarde o retorno!");
                } else {
                    throw new Error("Erro ao buscar os posts.");
                }
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        });
        
        }, 2000);

    }, [url]);

    return {
        data,
        isLoading
    }

}