import React from 'react';
import './App.css';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import {connect} from "react-redux";
import SearchPlayer from './components/SearchPlayer';
import PlayerList from './components/PlayerList';
class App extends React.Component {

  render() {
    const {players} = this.props;
    const goodPlayers = players.filter(item => item.score >= 0);
    const badPlayers = players.filter(item => item.score < 0);

    return (
      <div className="scoreboard">
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

export default connect(mapStateToProps)(App);
