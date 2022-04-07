import { useCurrentDate } from "./useCurrentDate";
import { DateInfo } from "./styled";

export const Clock = () => {

    const date = useCurrentDate();

    return (
        <DateInfo>{`Dzisiaj jest ${date.toLocaleDateString(undefined, {
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
            secod: "2-digit",
            day: "numeric",
            month: "long",
            year: "numeric"
        })}`}
        </DateInfo>
    );
};