import React from 'react';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick = {() => props.changeScore(props.id,-1)}> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick = {() => props.changeScore(props.id,1)}> + </button>
    </div>
  )
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeScore: (index, delta) => dispatch(changeScore(index, delta))
  }
};

export default connect(null, mapDispatchToProps)(Counter);