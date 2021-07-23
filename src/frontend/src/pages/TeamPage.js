import React from 'react'
import { MatchDetailCard } from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'
import { useEffect , useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import './Team.css';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {

    const [team , setTeam] = useState({matches:[]});
    const {teamName} = useParams();

    useEffect(() =>{
        const fetchmatches = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
        }

        fetchmatches();
    },[teamName]);

    if(!team || !team.teamName)
        return <h1>Loading...</h1>
    
    return (
        <div className="Team__Page">
            <div className="team__current">
                <div className="row1">
                    <h1 className="team__name">{team.teamName}</h1>
                    <div className="head">Latest Matches</div>
                </div>

                <div className="win__loss">
                   
                   <div>
                    <PieChart 
                        data={[
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a3455d' },
                        { title: 'Wins', value: team.totalWins, color: '#4da375' },
                        ]}
                    />
                    </div>
                    <div className="wins"> Wins/Losses</div>
                    </div>   
            </div>
            
            <div className="team__latest">
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
            </div>

            <div className="team__previous">
                {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} match={match} teamName={team.teamName}/>)}
                <Link className="more__link"  to={`/teams/${teamName}/matches/2020`}> More > </Link>
            </div>

            
        </div>
    )
}

