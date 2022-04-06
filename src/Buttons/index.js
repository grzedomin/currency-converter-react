import React from 'react';
import { Button } from "./styled";

const Buttons = ({ resetContent }) => (
    <>
        <Button>Zamień</Button>
        <Button
            onClick={() => resetContent()}
        >
            Reset
        </Button>
    </>
);

export default Buttons;