import React from 'react'
import {Link} from 'react-router-dom'
import './MatchSmallCard.css';

export const MatchSmallCard = ({match , teamName}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;

    return (
        <div className={isMatchWon ? 'match__small__won__card' : 'match__small__lost__card'}>
        <div className="normal">vs</div>
        <div >
          <Link to={otherTeamRoute} className="link"> {otherTeam} </Link>
        </div> 
        <div className="match__result">
          {match.matchWinner} won by {match.resultMargin} {match.result}</div>   
        </div>
    )
}


export default MatchSmallCard;