import { Result } from "./styled";

const Render = ({ result }) => (
    !!result && (
        <Result>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
            {" "}
            = &nbsp;
            <strong>{result.targetAmount.toFixed(2)}&nbsp;{result.currency}</strong>
        </Result>
    )
);

export default Render;