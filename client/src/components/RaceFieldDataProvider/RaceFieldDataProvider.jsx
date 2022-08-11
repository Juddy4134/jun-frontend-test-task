import React from 'react';
import { useSelector } from 'react-redux';

import HorsesRaceField from '../HorsesRaceField/HorsesRaceField';

const RaceFieldDataProvider = () => {

    const {horseWithDistance} = useSelector(state => state.horseSlice)

    return (
        <HorsesRaceField horseWithDistance={horseWithDistance}/>
    );
};

export default RaceFieldDataProvider;