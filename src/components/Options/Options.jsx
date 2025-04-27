import styles from './Option.module.css';

function Options({ buttonHandler, totalData }) {
  console.log('hello from options');
  return (
    <>
      <div className={styles.OptionsWrapper}>
        <button onClick={() => buttonHandler('good')}>Good</button>
        <button onClick={() => buttonHandler('neutral')}>Neutral</button>
        <button onClick={() => buttonHandler('bad')}>Bad</button>
        {totalData > 0 && (
          <button onClick={() => buttonHandler('reset')}>Reset</button>
        )}
      </div>
    </>
  );
}

export default Options;
