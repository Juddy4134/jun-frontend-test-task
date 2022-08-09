import React from 'react';
import { useSelector } from 'react-redux';
import WebSocket from '../WebSocket/WebSocket';

const HorsesDistanceList = () => {
    
    const {horseWithDistance} = useSelector(state => state.horseSlice)
    const {horsesByPlace} = useSelector(state => state.horseSlice)
    const {allDoneFlag} = useSelector(state => state.horseSlice)

    let horsesList = []
    
    if(horseWithDistance.length !== 0){
        horsesList = horseWithDistance.map(horse => {
            return <li key={horse.name}>Лошадь {horse.name} прошла уже {horse.distance}</li>
        })
    }


    return (
        <div className="center">
            <WebSocket/>
            <ul>
                {horsesList}   
            </ul>
        </div>
    );
};

export default HorsesDistanceList;