import "./style.css";
import currencies from "../currencies.js";
import { useEffect, useState } from 'react';
import Render from "./Render";
import Buttons from "../Buttons";

const Form = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency);
        setAmount("");
    };

    const [currency, setCurrency] = useState("USD");
    const [amount, setAmount] = useState();
    const [result, setResult] = useState("");

    const calculateResult = () => {
        const rate = currencies.find(({ short }) => short === currency).rate;
        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };

    const resetContent = () => {
        setAmount();
        setResult("");
        setCurrency("USD");
    };

    const [dateTime, setDateTime] = useState(new Date());
    const localDate = dateTime.toLocaleDateString("pl", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date())
        }, 1000);
        clearInterval(intervalId);

    }, []);


    return (
        <form
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__fieldset">
                <span className="form__dataContent">{`Dzisiaj jest ${localDate}, ${dateTime.toLocaleTimeString()}`}</span>
                <h1 className="form__header">Przelicznik walut</h1>

                <p>Pola oznaczone <span className="form__requiredInfo">*</span> są obowiązkowe</p>

                <label>
                    <span className="form__labelText">Podaj ilość PLN <span className="form__requiredInfo">*</span>:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        name="form__amount"
                        className="form__input"
                        min="1"
                        step="0.1"
                        required
                    />
                </label>

                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            className="form__currency form__input"
                        >
                            {currencies.map(currency => (
                                <option
                                    key={currency.id}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>

                <p>
                    <label className="form__label">
                        <Render result={result} />
                    </label>
                </p>

                <div className="buttons">
                    <Buttons resetContent={resetContent} />
                </div>

            </fieldset>
        </form>
    );
}

export default Form;