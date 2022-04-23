import React from 'react';
import currencies from "../currencies.js";
import { useState, useEffect } from 'react';
import Result from "./Result";
import Buttons from "../Buttons";
import { Clock } from "./Clock";
import { Fieldset, Header, SubHeader, Label, Red, Title, Input, ButtonsContainer } from "./styled";
import axios from 'axios';


const Form = () => {
    const [APIRates, setAPIRates] = useState([]);
    
    useEffect(() => {
       axios.get("https://api.exchangerate.host/latest")
       .then(response => {
           setAPIRates(response.data.rates);
           console.log(response.data)
       })
       .catch(error => console.log(error));
}, []);



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
                    {Object.keys(APIRates).map(rate => (
                        <option
                            key={rate}
                            value={rate}
                        >
                            {rate}
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