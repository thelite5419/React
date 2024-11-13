import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currency) return;

        const fetchCurrencyInfo = async () => {
            const url = `https://exchangerate-api.p.rapidapi.com/rapid/latest/${currency}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': "5cb0d9e17cmsh4dea313c6f9d047p1c599fjsndf304ac8b8dd", 
                    'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                console.log(result.rates)
                setData(result.rates || {});
            } catch (error) {
                console.error("Fetch error:", error.message);
                setError(error.message);
            }
        };

        fetchCurrencyInfo();
    }, [currency]);

    return { data, error };
}

export default useCurrencyInfo; // Default export
