import React from 'react';
import { useSelector } from 'react-redux';

import HorsesRaceField from '../HorsesRaceField/HorsesRaceField';

const RaceFieldDataProvider = () => {

    const {horseWithDistance} = useSelector(state => state.horseSlice)

    return (
        <HorsesRaceField horsehorseWithDistancesList={horseWithDistance}/>
    );
};

export default RaceFieldDataProvider;