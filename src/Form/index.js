import "./style.css";

const Form = () => {
    return (

        <form className="form">
            <fieldset className="form__fieldset">
                <h1 className="form__header">Przelicz waluty</h1>

                <p>Pola oznaczone <span className="form__requiredInfo">*</span> są obowiązkowe</p>

                <label>
                    <span className="form__labelText">Podaj ilość PLN <span className="form__requiredInfo">*</span>:</span>
                    <input
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
                        <select className="form__currency form__input">
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </label>
                </p>

                <p>
                    <label>
                        Kwota po przeliczeniu: <span className="form__convertedMoney">N/A</span>
                    </label>
                </p>

                <button className="form__button">Zamień</button>

            </fieldset>
        </form>
    );
}

export default Form;