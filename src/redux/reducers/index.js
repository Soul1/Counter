import {combineReducers} from 'redux'
import counter from "./counter";
import setCounter from "./setCounter";

export default combineReducers({
  counter,
  setCounter
})