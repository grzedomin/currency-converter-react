import React from 'react';
import currencies from "../currencies.js";
import { useState, useEffect } from 'react';
import Result from "./Result";
import Buttons from "../Buttons";
import { Clock } from "./Clock";
import { Fieldset, Header, SubHeader, Label, Red, Title, Input, ButtonsContainer, ParagraphInfo, WaitingPopUp, PopUpSubHeader, PopUpInfo } from "./styled";
import axios from 'axios';


const Form = () => {

    const [APIRates, setAPIRates] = useState([]);
    const [APIDate, setAPIDate] = useState("");
    const [showComponent, setShowComponent] = useState(false);
    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        setTimeout(() => {
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
            }
        })();
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency);
        setAmount("");
    };

    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const calculateResult = () => {
        const rate = APIRates[currency];
        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };

    const resetContent = () => {
        setAmount("");
        setResult("");
        setCurrency("");
    };

    return (
        <>
            {showInfo &&
                <WaitingPopUp>
                    <Clock />
                    <Header>Przelicznik Walut</Header>
                    <PopUpSubHeader>Sekundka...
                        <PopUpInfo>Ładuję kursy walut z Europejskiego Banku Centralnego...</PopUpInfo>
                    </PopUpSubHeader>
                </WaitingPopUp>}
            {showComponent &&
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
                                {Object.keys(APIRates).map(currency => (
                                    <option
                                        key={currency}
                                        value={currency}
                                    >
                                        {currency}
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

                        <ParagraphInfo>
                            Kursy walut pobierane są z Europejskiego Banku Centralnego.
                            Aktualne na dzień: {APIDate}
                        </ParagraphInfo>
                    </Fieldset>
                </form>
            }
        </>
    );
}

export default Form;