import React from 'react';
import Horse from '../Horse/Horse';

const HorsesRaceField = ({horseWithDistance}) => {

    let horsesList = []
    
    if(horseWithDistance.length !== 0){
        horsesList = horseWithDistance.map(horse => {
            return <Horse key={horse.name} name={horse.name} distance={horse.distance}/>
        })
    }
 
    return (
        <div className="center">
            {horsesList}   
        </div>
    );
};

export default HorsesRaceField;