import React from 'react'
import { useEffect , useState } from 'react';
import './HomePage.css';
import {TeamTile} from "../components/TeamTile";
export const HomePage = () => {

    const [teams , setTeams] = useState([]);

    useEffect(() =>{
        const fetchAllTeams = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data = await response.json();
                setTeams(data);
        }
        fetchAllTeams();
    },[]);

    if(!teams)
        return <h1>Loading...</h1>


    if(teams)
    return (
        <div className="home__page">
            <div className="header__section">
                <h1 style={{ fontSize: "3rem", display: "flex", justifyContent:"center"}}>IPL DashBoard</h1>
            </div>

            <div className="team__grid">
                {teams.map((team,i) => <TeamTile teamName={team.teamName}/>)}
            </div>
            
        </div>
    )
}

export default HomePage
