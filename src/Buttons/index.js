import React from 'react';
import "./style.css";

const Buttons = ({ resetContent }) => (

    <React.Fragment>
        <button className="form__button">Zamień</button>
        <button
            onClick={() => resetContent()}
            className="form__button">Reset</button>
        </React.Fragment >   
);

export default Buttons;