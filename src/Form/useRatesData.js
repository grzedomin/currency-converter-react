import { useState, useEffect } from "react";
import axios from 'axios';

export const useRatesData = () => {

    const [APIRates, setAPIRates] = useState([]);
    const [APIDate, setAPIDate] = useState("");
    const [showComponent, setShowComponent] = useState(false);
    const [showInfo, setShowInfo] = useState(true);
    const [showErrorComponent, setShowErrorComponent] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowInfo(false)
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
                setShowErrorComponent(true);
                setShowInfo(false);
                clearTimeout(timeoutId);
            }
        })();
    }, []);

    return {
        APIRates,
        APIDate,
        showComponent,
        showInfo,
        showErrorComponent
    };
};