import React from 'react';

const Buttons = ({ resetContent }) => (

    <React.Fragment>
        <button className="form__button">Zamień</button>
        <button
            onClick={() => resetContent()}
            className="form__button">Reset</button>
        </React.Fragment >   
);

export default Buttons;