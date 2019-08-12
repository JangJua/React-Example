import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import {connect} from "react-redux";
import {updateTitle} from '../redux/actions';
import styles from '../pages/scoreboard/Scoreboard.module.css';

const Header = ({players, title, changeTitle}) => {
  return (
    <header className={styles.header}>
      <Stats players={players} />
      <h1 className={styles.h1} onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  )
}

let mapStateToProps = (state) => {
  return {
    title: state.playerReducer.title
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTitle('dispatch test'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);