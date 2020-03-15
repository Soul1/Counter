import {connect} from 'react-redux'
import SetCount from "../components/SetCount";
import {maxCount, startCount, setDis, setActive, error} from '../redux/actions/setCounter'
import {inc, incDis, incActive, resetDis,} from '../redux/actions/counter'
import React, {Component} from 'react';

class SetCountContainer extends Component {

  constructor(props) {
    super(props);
    this.maxValue = 0;
    this.startValue = 0;
  }

  getStartCounter = async (startCount) => {
    this.startValue = Number(startCount.target.value);
    await this.props.startCount(this.startValue);
    this.isDis();
  };
  getMaxCounter = async (maxCount) => {
    this.maxValue = Number(maxCount.target.value);
    await this.props.maxCount(this.maxValue);
    this.isDis();
  };

  setStartCounter = () => {
    this.props.inc(this.startValue);
    this.props.setDis();
    this.isDis();
    this.props.incActive()
  };

  isDis =  () => {
    if (this.startValue >= this.maxValue || this.startValue < 0 || this.maxValue < 0) {
      this.props.error(true);
      this.props.setDis();
      this.props.incDis();
      return;
    }
    if (this.props.startCounter === this.startValue && this.props.maxCounter === this.maxValue) {
      this.props.error(false);
      this.props.setActive();
      this.props.incDis();
      this.props.resetDis();
    } else {
      this.props.setDis();
    }
  };

  render() {
    return <SetCount
      getStartCounter={this.getStartCounter}
      getMaxCounter={this.getMaxCounter}
      setStartCounter={this.setStartCounter}
      maxCounter={this.props.maxCounter}
      startCounter={this.props.startCounter}
      setDisable={this.props.setDisable}
      err={this.props.err}
    />
  }
}

const mapStateToProps = (state) => ({
  maxCounter: state.setCounter.maxCounter,
  startCounter: state.setCounter.startCounter,
  setDisable: state.setCounter.counterSetDisable,
  err: state.setCounter.error,
});

export default connect(
  mapStateToProps,
  {maxCount, startCount, setDis, setActive, inc, incDis, incActive, resetDis, error,})
(SetCountContainer)