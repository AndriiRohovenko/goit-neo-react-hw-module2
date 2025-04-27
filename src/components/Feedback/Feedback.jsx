import './Feedback.module.css';

function Feedback({ goodF, neutralF, badF, totalData, positiveData }) {
  console.log('hello from Feedback');
  return (
    <>
      {totalData > 0 && (
        <div>
          <p>
            Good:
            <span>{goodF}</span>
          </p>
          <p>
            Neutral:
            <span>{neutralF}</span>
          </p>
          <p>
            Bad:
            <span>{badF}</span>
          </p>
          <p>
            Total:
            <span>{totalData}</span>
          </p>
          <p>
            Total:
            <span>{positiveData}</span>
          </p>
        </div>
      )}
    </>
  );
}

export default Feedback;
