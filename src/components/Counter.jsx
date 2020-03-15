import React from 'react';
import '../scss/Counter.scss'

const Counter = (props) => {
  const {count, incClick, resetClick, countMax, err} = props;
  const isMax = countMax === count ? "red" : '';
  const error = <div className={`counter-count red`}>{`incorrect value`}</div>
  let dispaly;
  if (count < -1 || props.incDisable && props.resetDisable) {
    dispaly = <div className={`counter-count`}>
      {`enter value and press "SET"`}
    </div>
  } else {
    dispaly = <div className={`counter-count counter-count--size ${isMax}`}>{count}</div>
  }
  return (
    <div className='counter__inner'>
      <div>
        {err ? error : dispaly}
      </div>

      <div className='counter-btn'>
        <button
          className={`counter-btn__inc`}
          disabled={props.incDisable}
          onClick={incClick}>
          INC
        </button>
        <button
          className={`counter-btn__reset`}
          disabled={props.resetDisable}
          onClick={resetClick}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;