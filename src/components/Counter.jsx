import React from 'react';
import '../scss/Counter.scss'

const Counter = (props) => {
  const {count, incClick, resetClick} = props;
  const isIncDis = props.incDisable ? " counter-btn__dis" : "";
  const isResetDis = props.resetDisable ? " counter-btn__dis" : "";
  return (
    <div className='counter__inner'>
      <div className='counter-count'> {count}</div>
      <div className='counter-btn'>
        <button
          className={`counter-btn__inc ${isIncDis}`}
          disabled={props.incDisable}
          onClick={incClick}>
          INC
        </button>
        <button
          className={`counter-btn__reset ${isResetDis}`}
          disabled={props.resetDisable}
          onClick={resetClick}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;