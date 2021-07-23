import React from 'react'
import {Link} from 'react-router-dom';
const START_YEAR = 2008;
const END_YEAR = 2020;


export const YearSelector = ({teamName}) => {


    let years = [];
    for(let i = START_YEAR ; i<= END_YEAR ; i++){
        years.push(i);
    }


    return (
        <div>
            <ol style={{listStyleType:"none" , fontSize:"1.4rem"}}>
                {years.map(year => (
                <li key={year} >
                    <Link to={`/teams/${teamName}/matches/${year}`}> {year} </Link>
                </li>               
                ))}
            </ol>
        </div>
    )
}

export default YearSelector
