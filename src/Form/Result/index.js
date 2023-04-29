import "./style.css";

const Result = ({ result }) => (
  <p className="result">
    Kwota po przeliczeniu:
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}
          {result.currency}
        </strong>
      </>
    )}
  </p>
);

export default Result;
