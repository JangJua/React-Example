import styles from './Scoreboard.module.css';
import React, {Component} from 'react';
import Header from "../../components/Header";
import SearchPlayer from "../../components/SearchPlayer";
import PlayerList from "../../components/PlayerList";
import AddPlayerForm from "../../components/AddPlayerForm";
import {connect} from "react-redux";

class Scoreboard extends Component {
  render() {
    const {players} = this.props;
    const goodPlayers = players.filter(item => item.score >= 0);
    const badPlayers = players.filter(item => item.score < 0);

    return (
      <div className={styles.scoreboard}>
        <Header players={players} />
        <SearchPlayer></SearchPlayer>
        {/*Players List*/}
        {
          this.props.isSorted ? [
            <PlayerList playerState='Good Players' players={goodPlayers} />,
            <PlayerList playerState='Bad Players' players={badPlayers} />
          ] : <PlayerList playerState='All Players' players={this.props.filteredPlayers}/>
        }
        <AddPlayerForm />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    players: state.playerReducer.players,
    filteredPlayers: state.playerReducer.filteredPlayers,
    isSorted: state.playerReducer.isSorted
  }
}

export default connect(mapStateToProps)(Scoreboard);

