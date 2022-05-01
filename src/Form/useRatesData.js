import { useState, useEffect } from "react";
import axios from 'axios';

export const useRatesData = () => {

    const [APIRates, setAPIRates] = useState([]);
    const [APIDate, setAPIDate] = useState("");
    const [showComponent, setShowComponent] = useState(false);
    const [onLoadInfo, setOnLoadInfo] = useState(true);
    const [onLoadErrorInfo, setOnLoadErrorInfo] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOnLoadInfo(false)
            setShowComponent(true);
        }, 2000);

        (async () => {
            try {
                const response = await axios("https://api.exchangerate.host/latest?base=PLN")
                setAPIRates(response.data.rates);
                setAPIDate(response.data.date);
            }
            catch (error) {
                console.error("Something bad happened", error);
                setOnLoadErrorInfo(true);
                setOnLoadInfo(false);
                clearTimeout(timeoutId);
            }
        })();
    }, []);

    return {
        APIRates,
        APIDate,
        showComponent,
        onLoadInfo,
        onLoadErrorInfo
    };
};