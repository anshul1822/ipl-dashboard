import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.css";

export const MatchDetailCard = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;
  return (

    <div className={isMatchWon ? 'match__detail__won__card' : 'match__detail__lost__card'}>

      <div className="latest__matches"> 
        <div className="line2" >
        <div className="noraml">Vs</div>
          <Link to={otherTeamRoute} className="link1"> {otherTeam} </Link>
        </div>
        <div className="match__date">{match.date}</div>
        <div className="match__venue">at {match.venue}</div>
        <div className="match__result">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </div>

      </div>
      <div className="add__detail">
        <div className="first">
          <div>First Innings :</div>
          <div className="value">{match.team1}</div>
        </div>
        <div className="second">
          <div>Second Innings :</div>
          <div className="value">{match.team2}</div>
        </div>
        <div className="mom">
          <div> Man of the Match :</div>
          <div className="value">{match.playerOfMatch}</div>
        </div>
        <div className="umpire">
          <div>Umpires :</div>
          <div className="value">
            {match.umpire1} , {match.umpire2}
          </div>
        </div>
      </div>
    </div>
  );
};
