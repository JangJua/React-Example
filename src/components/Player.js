import React from "react";
import Counter from './Counter';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

class Player extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  }
  render() {
    console.log(this.props.name, ' rendered');
    const {id, name, score} = this.props;
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick = {() => this.props.removePlayer(id)}>x</button>
      {this.props.children}
      {name}
      </span>
        <Counter score={score} id={id}/>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removePlayer: (id) => dispatch(removePlayer(id))
  }
}

export default connect(null, mapDispatchToProps)(Player);