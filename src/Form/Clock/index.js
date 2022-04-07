import { useEffect, useState } from "react";
import { DateInfo } from "./styled";

export const Clock = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const localDate = dateTime.toLocaleDateString("pl", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <DateInfo>{`Dzisiaj jest ${localDate}, ${dateTime.toLocaleTimeString()}`}</DateInfo>
    );
};