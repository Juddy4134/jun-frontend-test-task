import React from 'react';
import { useSelector } from 'react-redux';

const Pedestal = () => {
    const {horsesByPlace} = useSelector(state => state.horseSlice)
    const pedestalList = horsesByPlace.split(",").map((elem)=> <li>{elem}</li>)

    if(horsesByPlace !== ""){
        return (
            <div>
                <p>Places</p>
                <ol>
                    {pedestalList}
                </ol>
            </div>
        );
    }
        return(
            <div>
            <p>Places</p>
            <ol>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
        )
};

export default Pedestal;