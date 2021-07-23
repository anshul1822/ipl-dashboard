import React from 'react'
import './Teamtile.css'
import {Link} from 'react-router-dom';

export const TeamTile = ({teamName}) => {
    return (
        <div className="team__tile">
            <h1>
                <Link to={`/teams/${teamName}`} style={{color:"white"}}> {teamName} </Link>
            </h1>
            
        </div>
    )
}

export default TeamTile
