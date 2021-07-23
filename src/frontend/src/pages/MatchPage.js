import React from 'react'
import {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import './MatchPage.css'
import {YearSelector} from '../components/YearSelector'

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect( () => {
        const fetchMatches = async() => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            console.log(data);
            setMatches(data);
        }

        fetchMatches();
    },[teamName,year]);

    return (
        <div className="match__page">

            <div className="year__selector">
                <h2>Select Year</h2>
                <YearSelector teamName={teamName}/>
            </div>

            <div>
                <h1>{teamName} matches in {year}</h1>
            {matches.map(match => <MatchDetailCard  key={match.id} match={match} teamName={teamName}/>)}
            </div>
        </div>
    )
}


