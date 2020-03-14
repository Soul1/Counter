import {connect} from 'react-redux'
import SetCount from "../components/SetCount";
import {maxCount, startCount, setDis, setActive} from '../redux/actions/setCounter'
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
    this.isDis();
    this.props.inc(this.startValue);
    this.props.incActive()
  };

  isDis = () => {
    if (this.props.startCounter === this.startValue || this.props.maxCounter === this.maxValue) {
      this.props.setActive();
      this.props.incDis();
      this.props.resetDis();
    } else {
      this.props.setDis();
      this.props.incDis();
      this.props.resetDis();
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
    />
  }
}

const mapStateToProps = (state) => ({
  maxCounter: state.setCounter.maxCounter,
  startCounter: state.setCounter.startCounter,
  setDisable: state.setCounter.counterSetDisable,
});

export default connect(
  mapStateToProps,
  {maxCount, startCount, setDis, setActive, inc, incDis, incActive, resetDis,})
(SetCountContainer)