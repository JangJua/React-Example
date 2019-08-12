import React from "react";
import styles from '../pages/scoreboard/Scoreboard.module.css';
import CustomPlayer from './CustomPlayer'

class PlayerList extends  React.Component {

  getHighScore(){
    const highScore = this.props.players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
    return highScore > 0 ? highScore : null;
  }
  render(){
    let titleClass = '';
    if (this.props.playerState.indexOf('All') >= 0) {
      titleClass = styles.allTitle;
    } else if (this.props.playerState.indexOf('Good') >= 0) {
      titleClass = styles.goodTitle;
    } else if (this.props.playerState.indexOf('Bad') >= 0) {
      titleClass = styles.badTitle;
    }
    return(
      <>
        <p className={titleClass}>{this.props.playerState}</p>
        {/*Players List*/}
        {
          this.props.players.map((item) =>
            <CustomPlayer name={item.name}
                          score={item.score}
                          key={item.id.toString()}
                          isHighScore={item.score === this.getHighScore()}
                          id={item.id} />)
        }
      </>
    )
  }
}

export default PlayerList;