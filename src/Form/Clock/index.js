import { useCurrentDate } from "./useCurrentDate";
import { DateInfo } from "./styled";

export const Clock = () => {
    
    const date = useCurrentDate();

    const formatDate = () => date.toLocaleDateString("pl", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <DateInfo>
            Dzisiaj jest {""} {formatDate(date)}
        </DateInfo>
    );
};