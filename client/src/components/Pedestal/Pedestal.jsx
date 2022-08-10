import React from 'react';


const Pedestal = ({horsesByPlace}) => {

    const pedestalList = horsesByPlace.split(",").map((elem)=> <li>{elem}</li>)
    
    if(pedestalList.length !== 0){
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