import { useState, useEffect } from "react";
import axios from 'axios';

export const useRatesData = () => {
    const [fetchState, setFetchState] = useState({
        state: "loading",
    });

    const [APIRates, setAPIRates] = useState([]);
    const [APIDate, setAPIDate] = useState("");

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios("https://api.exchangerate.host/latest?base=PLN")
                setAPIRates(response.data.rates);
                setAPIDate(response.data.date);
                setFetchState({
                    state: "success",
                });
            }
            catch (error) {
                setFetchState({
                    state: "error",
                });
            };
        };
        setTimeout(fetchRates, 2000);
    }, []);

    return {
        fetchState,
        APIRates,
        APIDate,
    };
};