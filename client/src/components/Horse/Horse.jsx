import React from 'react';
import horsegif from './horsegif.gif'
import './style.css'

const Horse = (props) => {
    const horsePosition = {
        paddingLeft: `${props.distance / 10}%`,
        paddingRight: `${100 - (props.distance/10)}%`
    }

    return (
        <div className='horse-container'>
            <p className='horse-name'>{props.name}</p>
            <div className='runway'>
                <img src={horsegif} style={horsePosition} className="running-horse" alt="Random horse gif" />
            </div>
            <p className='finish'>Finish</p>
        </div>
    );
};

export default Horse;