import React from 'react';
import { useSelector } from 'react-redux';
import Horse from '../Horse/Horse';

const HorsesRaceField = () => {
    
    const {horseWithDistance} = useSelector(state => state.horseSlice)

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