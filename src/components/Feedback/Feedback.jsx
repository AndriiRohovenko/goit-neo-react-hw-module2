import './Feedback.module.css';

function Feedback({ goodF, neutralF, badF, totalData }) {
  console.log('hello from Feedback');
  return (
    <>
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
      {totalData > 0 && (
        <p>
          Total:
          <span>{totalData}</span>
        </p>
      )}
      {/* <p>
        Positive:
        <span>data</span>
      </p> */}
    </>
  );
}

export default Feedback;
