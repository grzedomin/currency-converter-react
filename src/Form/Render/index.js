
const Render = ({ result }) => (
    !!result && (
        <span>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
            {" "}
            to&nbsp;
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </span>
    )
)


export default Render;