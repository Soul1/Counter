import React from 'react';
import '../scss/SetCounter.scss'

const SetCount = (props) => {
  const error = props.err ? 'error' : ''
  return (
    <div className='set__inner'>
      <div className='set__info'>
        <div>
          <div className='set__title'>Max</div>
          <div className='set__title'>Start</div>
        </div>
        <div className='set__inputs'>
          <div>
            <input className={error} onChange={props.getMaxCounter} value={props.maxCounter} type='number'/>
          </div>
          <div className='set__inputs--input'>
            <input className={error} onChange={props.getStartCounter} value={props.startCounter} type='number'/>
          </div>
        </div>
      </div>
      <div className='counter-btn set__down'>
        <button disabled={props.setDisable} onClick={props.setStartCounter}>SET</button>
      </div>
    </div>
  );
};

export default SetCount;