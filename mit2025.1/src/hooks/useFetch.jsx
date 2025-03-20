import {useState, useEffect} from "react";

const useFetch = (url, options) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            if(!url) return;

            const controller = new AbortController();
            const { signal } = controller;

            const fetchData = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await fetch(url, {...options, signal});
                    if(!response.ok){
                        const errorData = await response.json();
                        throw new Error(errorData.error || `Erro: ${response.status}`);
                    }
                    const data = await response.json();
                    setData(data);
                } catch (err) {
                    if (err.name !== "AbortError"){
                        setError(err.message);
                    }
                } finally {
                    setLoading(false)
                }
            }
            fetchData();
            return () => controller.abort();
        },[url, options]
    );

    return [data, loading, error]

}

export default useFetch;