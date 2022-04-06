import React from 'react';
import currencies from "../currencies.js";
import { useEffect, useState } from 'react';
import Render from "./Render";
import Buttons from "../Buttons";
import { Fieldset, Header, SubHeader, Label, Red, Title, Input, DateInfo, ButtonsContainer } from "./styled";

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
        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <Fieldset>

                    <DateInfo>{`Dzisiaj jest ${localDate}, ${dateTime.toLocaleTimeString()}`}</DateInfo>
                    <Header>Przelicznik walut</Header>

                    <SubHeader>Pola oznaczone <Red>*</Red> są obowiązkowe</SubHeader>

                    <Label>
                        <Title>Podaj ilość PLN <Red>*</Red>:</Title>
                        <Input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            name="form__amount"
                            className="form__input"
                            min="1"
                            step="0.1"
                            required
                        />
                    </Label>

                    <Label>
                        <Title>Wybierz walutę:</Title>
                        <Input
                            as="select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map(currency => (
                                <option
                                    key={currency.id}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))}
                        </Input>
                    </Label>

                    <Label>
                        <Render result={result} />
                    </Label>


                    <ButtonsContainer>
                        <Buttons resetContent={resetContent} />
                    </ButtonsContainer>
                
            </Fieldset>
        </form>
    );
}

export default Form;