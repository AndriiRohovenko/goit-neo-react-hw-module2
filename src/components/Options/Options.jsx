import styles from './Option.module.css';

function Options({ buttonHandler }) {
  console.log('hello from options');
  return (
    <>
      <div className={styles.OptionsWrapper}>
        <button onClick={() => buttonHandler('good')}>Good</button>
        <button onClick={() => buttonHandler('neutral')}>Neutral</button>
        <button onClick={() => buttonHandler('bad')}>Bad</button>
        <button onClick={() => buttonHandler('reset')}>Reset</button>
      </div>
    </>
  );
}

export default Options;
