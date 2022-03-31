import './App.css';

function App() {
  return (
    <div class="body">

    <form class="form js-form">
        <fieldset class="form__fieldset">
            <h1 class="form__header">Przelicz waluty</h1>

            <p>Pola oznaczone <span class="form__requiredInfo">*</span> są obowiązkowe</p>

            <label>
                <span class="form__labelText">Podaj ilość PLN <span class="form__requiredInfo">*</span>:</span> <input type="number" name="form__amount"
                    class="js-amount form__input" min="1" required />
            </label>

            <p>
                <label>
                    <span class="form__labelText">Wybierz walutę:</span>
                    <select class="form__currency js-currency form__input">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </label>
            </p>

            <p>
                <label>
                    Kwota po przeliczeniu: <span class="form__convertedMoney js-result">N/A</span>
                </label>
            </p>

            <button class="form__button">Zamień</button>

        </fieldset>
    </form>
</div>
  );
}

export default App;
