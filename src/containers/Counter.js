import React from 'react';
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {incDis, incActive, resetDis, resetActive, inc, reset} from '../redux/actions/counter'

class CounterContainer extends React.Component {

  incClick = async () => {
    if (this.props.count < this.props.countMax) {
      await this.props.inc(this.props.count + 1)
    }
    this.isDis();
  };

  resetClick = async () => {
    await this.props.reset(this.props.countStart);
    this.isDis();
  };

  isDis = () => {
    if (this.props.count > this.props.countMax - 1) {
      this.props.incDis()
    }
    if (this.props.count < this.props.countMax) {
      this.props.incActive()
    }
    if (this.props.count > this.props.countStart) {
      this.props.resetActive()
    }
    if (this.props.count < this.props.countStart + 1) {
      this.props.resetDis()
    }
  };

  render() {
    return <Counter
      incClick={this.incClick}
      resetClick={this.resetClick}
      count={this.props.count}
      countMax={this.props.countMax}
      incDisable={this.props.incDisable}
      resetDisable={this.props.resetDisable}
      err={this.props.err}
    />
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  countMax: state.setCounter.maxCounter,
  countStart: state.setCounter.startCounter,
  err: state.setCounter.error,
  incDisable: state.counter.counterIncDisable,
  resetDisable: state.counter.counterResetDisable
});

export default connect(
  mapStateToProps,
  {incDis, incActive, resetDis, resetActive, inc, reset})
(CounterContainer)