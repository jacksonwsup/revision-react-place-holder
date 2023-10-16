import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {

    setIsLoading(true);

    setTimeout(() => {

      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error("Error in data fetching...");
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

      }, 1);

  }, [url]);

  return {
    data,
    isLoading,
  }

}