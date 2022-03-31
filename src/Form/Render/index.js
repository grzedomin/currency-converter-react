const Render = ({ result }) => (
    !!result && (
        <span className="form__result">
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
            {" "}
            = &nbsp;
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </span>
    )
)


export default Render;