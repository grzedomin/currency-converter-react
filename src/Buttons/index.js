import React from 'react';
import "./style.css";

const Buttons = ({ resetContent }) => (
    <>
        <button className="form__button">Zamień</button>
        <button
            onClick={() => resetContent()}
            className="form__button"
        >
            Reset
        </button>
    </>
);

export default Buttons;