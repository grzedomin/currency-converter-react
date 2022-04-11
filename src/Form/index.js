import React from 'react';
import currencies from "../currencies.js";
import { useState } from 'react';
import Result from "./Result";
import Buttons from "../Buttons";
import { Clock } from "./Clock";
import { Fieldset, Header, SubHeader, Label, Red, Title, Input, ButtonsContainer } from "./styled";


const Form = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency);
        setAmount("");
    };

    const [currency, setCurrency] = useState("USD");
    const [amount, setAmount] = useState("");
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
        setAmount("");
        setResult("");
        setCurrency("USD");
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <Fieldset>

                <Clock />
                <Header>Przelicznik walut</Header>

                <SubHeader>Pola oznaczone <Red>*</Red> są obowiązkowe</SubHeader>

                <Label>
                    <Title>Podaj ilość PLN <Red>*</Red>:</Title>
                    <Input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
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
                    <Result result={result} />
                </Label>


                <ButtonsContainer>
                    <Buttons resetContent={resetContent} />
                </ButtonsContainer>

            </Fieldset>
        </form>
    );
}

export default Form;