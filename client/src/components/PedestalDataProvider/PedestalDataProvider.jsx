import React from 'react';
import { useSelector } from 'react-redux';
import Pedestal from '../Pedestal/Pedestal';

const PedestalDataProvider = () => {
    
    const {horsesByPlace} = useSelector(state => state.horseSlice)
    
    return (<Pedestal horsesByPlace={horsesByPlace}/> );
            
};

export default PedestalDataProvider;