import React from 'react';
import { useState } from 'react';
import Result from "./Result";
import Buttons from "../Buttons";
import { Clock } from "./Clock";
import {
    Fieldset,
    Header,
    SubHeader,
    Label,
    Red,
    Title,
    Input,
    ButtonsContainer,
    ParagraphInfo,
    Loading,
    PopUpInfo,
    PopUpErrorInfo,
    StyledDate,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const {
        APIRates,
        APIDate,
        fetchState,
    } = useRatesData();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!amount) {
            return;
        }
        calculateResult(currency);
        setAmount("");
    };

    const [currency, setCurrency] = useState("USD");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const calculateResult = () => {
        const rate = APIRates[currency];
        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const resetContent = () => {
        setAmount("");
        setResult("");
        setCurrency("USD");
    };

    return (
        <>
            {fetchState.state === "loading" ?
                (
                    <Loading>
                        <Clock />
                        <Header>Przelicznik Walut</Header>
                        <PopUpInfo>
                            Sekundka... <br />
                            Ładuję kursy walut z Europejskiego Banku Centralnego...
                        </PopUpInfo>
                    </Loading>
                )
                : fetchState.state === "error" ?
                    (
                        <Loading>
                            <Clock />
                            <Header>Przelicznik Walut</Header>
                            <PopUpErrorInfo>
                                Hmmm... coś poszło nie tak. Sprawdź czy masz połączenie z internetem.
                                Jeśli masz internet to najprawdopodobniej to nasza wina. Spróbuj ponownie później...
                            </PopUpErrorInfo>
                        </Loading>
                    )
                    :
                    (
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
                                    Kursy walut pobierane są z Europejskiego Banku Centralnego. <br />
                                    Aktualne na dzień: <StyledDate>{APIDate}</StyledDate>
                                </ParagraphInfo>
                            </Fieldset>
                        </form>
                    )
            }

        </>
    );
}

export default Form;