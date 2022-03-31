import "./style.css";
import currencies from "../currencies.js";
import { useState } from 'react';
import Render from "./Render";


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

    return (

        <form
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__fieldset">
                <h1 className="form__header">Przelicz waluty</h1>

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
                    <label>
                        Kwota po przeliczeniu:
                        <Render result={result} />
                    </label>
                </p>

                <button className="form__button">Zamień</button>

            </fieldset>
        </form>
    );
}

export default Form;