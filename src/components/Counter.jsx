import React from 'react';

const Counter = (props) => {
  const {count, incClick, resetClick} = props;
  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          disabled={props.incDisable}
          onClick={incClick}>
          INC
        </button>
        <button
          disabled={props.resetDisable}
          onClick={resetClick}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;